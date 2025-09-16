import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Check, Settings } from "lucide-react";

export function SubscriptionStatus() {
  const { subscription, session, checkSubscription } = useAuth();
  const { toast } = useToast();

  const handleManageSubscription = async () => {
    if (!session?.access_token) {
      toast({
        title: "Error",
        description: "Debes iniciar sesión para gestionar tu suscripción",
        variant: "destructive",
      });
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke('customer-portal', {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (error) throw error;

      if (data?.url) {
        window.open(data.url, '_blank');
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "No se pudo abrir el portal de gestión",
        variant: "destructive",
      });
    }
  };

  const handleRefreshStatus = async () => {
    await checkSubscription();
    toast({
      title: "Estado actualizado",
      description: "Se ha verificado tu estado de suscripción",
    });
  };

  if (!subscription.subscribed) {
    return (
      <Card className="border-orange-200 bg-orange-50">
        <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>Estado de Suscripción</span>
          <Badge variant="outline" className="bg-orange-100 text-orange-800">
            Sin Suscripción
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">
          No tienes una suscripción activa. Elige un plan para acceder a todas las funcionalidades de Zinto.
        </p>
        <div className="flex gap-2">
          <Button onClick={handleRefreshStatus} variant="outline" size="sm">
            Verificar Estado
          </Button>
        </div>
      </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-green-200 bg-green-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Check className="h-5 w-5 text-green-600" />
          <span>Suscripción Activa</span>
          <Badge className="bg-green-100 text-green-800">
            {subscription.plan_name || 'Plan Activo'}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {subscription.subscription_end && (
            <p className="text-sm text-gray-600">
              <span className="font-medium">Próxima renovación:</span>{' '}
              {new Date(subscription.subscription_end).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          )}
          
          <div className="flex gap-2">
            <Button 
              onClick={handleManageSubscription}
              size="sm"
              className="btn-gradient"
            >
              <Settings className="h-4 w-4 mr-2" />
              Gestionar Suscripción
            </Button>
            <Button 
              onClick={handleRefreshStatus} 
              variant="outline" 
              size="sm"
            >
              Verificar Estado
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}