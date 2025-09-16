import { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface SubscriptionStatus {
  subscribed: boolean;
  product_id?: string;
  plan_name?: string;
  subscription_end?: string;
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  subscription: SubscriptionStatus;
  loading: boolean;
  signOut: () => Promise<void>;
  checkSubscription: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [subscription, setSubscription] = useState<SubscriptionStatus>({ subscribed: false });
  const [loading, setLoading] = useState(true);

  const checkSubscription = async () => {
    if (!session?.access_token) {
      setSubscription({ subscribed: false });
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke('check-subscription', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) {
        console.error('Error checking subscription:', error);
        setSubscription({ subscribed: false });
      } else {
        setSubscription(data);
      }
    } catch (error) {
      console.error('Error checking subscription:', error);
      setSubscription({ subscribed: false });
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      setSession(null);
      setSubscription({ subscribed: false });
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      const { data: { session: initialSession } } = await supabase.auth.getSession();
      setSession(initialSession);
      setUser(initialSession?.user ?? null);
      setLoading(false);
      
      if (initialSession) {
        await checkSubscription();
      }
    };

    getInitialSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);

      if (event === 'SIGNED_IN' && session) {
        await checkSubscription();
      } else if (event === 'SIGNED_OUT') {
        setSubscription({ subscribed: false });
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // Auto-refresh subscription status every minute when user is logged in
  useEffect(() => {
    if (!session) return;

    const interval = setInterval(checkSubscription, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [session]);

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        session, 
        subscription, 
        loading, 
        signOut, 
        checkSubscription 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}