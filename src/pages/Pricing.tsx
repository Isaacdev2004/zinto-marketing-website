import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ArrowRight, Users, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { SubscriptionStatus } from "@/components/subscription/SubscriptionStatus";
import zintoSymbol from "@/assets/zinto-symbol.png";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const { toast } = useToast();
  const { user, session } = useAuth();

  const handleCheckout = async (planName: string) => {
    setIsLoading(planName);
    
    try {
      // Map display names to internal plan names
      const planMap: { [key: string]: string } = {
        "Zinto Básico": "basic",
        "Zinto Pro": "pro", 
        "Zinto Premium": "enterprise"
      };

      const billingCycle = isYearly ? "yearly" : "monthly";
      const planKey = planMap[planName];

      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          plan: planKey,
          billing: billingCycle,
        },
        headers: session?.access_token ? {
          Authorization: `Bearer ${session.access_token}`,
        } : {},
      });

      if (error) {
        console.error('Checkout error:', error);
        throw error;
      }

      if (data?.url) {
        window.open(data.url, '_blank');
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error: any) {
      console.error('Failed to start checkout:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to start checkout process. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(null);
    }
  };

  const plans = [
    {
      name: "Zinto Básico",
      description: "Perfecto para empezar",
      monthlyPrice: 28,
      yearlyPrice: 290,
      features: [
        "3 usuarios incluidos",
        "1 número de WhatsApp (QR)",
        "Chats ilimitados",
        "Soporte por correo electrónico",
        "Integraciones básicas",
        "Panel de control estándar",
        "Plantillas rápidas",
        "Etiquetas básicas"
      ],
      popular: false
    },
    {
      name: "Zinto Pro",
      description: "Para equipos en crecimiento",
      monthlyPrice: 45,
      yearlyPrice: 450,
      features: [
        "4 usuarios incluidos",
        "1 número de WhatsApp",
        "Chats ilimitados", 
        "Soporte prioritario",
        "Panel de control avanzado",
        "Asignación automática",
        "Campañas masivas",
        "Métricas básicas",
        "Chat interno del equipo"
      ],
      popular: true
    },
    {
      name: "Zinto Premium",
      description: "Para empresas establecidas",
      monthlyPrice: 89,
      yearlyPrice: 890,
      features: [
        "6 usuarios incluidos",
        "2 números de WhatsApp",
        "Chats ilimitados",
        "Reportes avanzados",
        "Auditoría completa",
        "Integración ChatGPT",
        "SLA personalizados",
        "Roles y permisos avanzados",
        "API completa",
        "Soporte telefónico"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={zintoSymbol} alt="Zinto" className="h-16 md:h-20 w-auto drop-shadow" />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Inicio</Link>
            <Link to="/casos-uso" className="text-sm font-medium hover:text-primary transition-colors">Casos de Uso</Link>
            <Link to="/integraciones" className="text-sm font-medium hover:text-primary transition-colors">Integraciones</Link>
            <Link to="/pricing" className="text-sm font-medium text-primary">Precios</Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contacto</Link>
            <Link to="/login" className="text-sm font-medium hover:text-primary transition-colors">Iniciar sesión</Link>
            <Button className="btn-gradient">
              Prueba Gratis
            </Button>
          </nav>
        </div>
      </header>

      {/* Subscription Status for logged in users */}
      {user && (
        <div className="container mx-auto px-4 py-8">
          <SubscriptionStatus />
        </div>
      )}

      {/* Hero Section */}
      <section className="hero-gradient py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-3 py-1 mb-6">
            Precios transparentes sin sorpresas
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Planes que se adaptan a tu{" "}
            <span className="text-primary">equipo multiagente</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Solo pagas por usuarios activos. Sin costos por mensaje ni comisiones ocultas. Puedes crecer tu cuenta añadiendo usuarios y números de WhatsApp cuando lo necesites.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm ${!isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Mensual
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isYearly ? 'bg-primary' : 'bg-muted'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Anual
              <Badge variant="secondary" className="ml-2">Ahorra 20%</Badge>
            </span>
          </div>
          
          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span>Sin costos por lead</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span>Todos los precios en USD</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name} 
                className={`card-hover relative ${
                  plan.popular ? 'border-primary shadow-xl scale-105' : 'border-border'
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground">
                      {isYearly ? '/year' : '/month'}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'btn-gradient' : ''}`}
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                    onClick={() => handleCheckout(plan.name)}
                    disabled={isLoading === plan.name}
                  >
                    {isLoading === plan.name ? 'Loading...' : 'Get Started'} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Extras Section */}
      <section className="py-16 px-4 bg-muted/10">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Extras (para cualquier plan)
            </h2>
            <p className="text-lg text-muted-foreground">
              Escala tu operación según tus necesidades
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Usuario adicional</h3>
                <div className="text-4xl font-bold text-primary mb-4">
                  12€<span className="text-lg text-muted-foreground">/mes</span>
                </div>
                <p className="text-muted-foreground mb-6">
                  Añade más miembros a tu equipo cuando sea necesario. Sin límites en el crecimiento.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Conexión adicional de WhatsApp</h3>
                <div className="text-4xl font-bold text-secondary mb-4">
                  15€<span className="text-lg text-muted-foreground">/mes</span>
                </div>
                <p className="text-muted-foreground mb-6">
                  Conecta números adicionales de WhatsApp para gestionar múltiples líneas de negocio.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  ¿Necesitas más de 10 usuarios o funciones específicas? Contáctanos para un plan a medida con precios especiales.
                </p>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="hover:bg-primary/5">
                    Contactar ventas
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Can I change plans later?</h3>
              <p className="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time from your account settings.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Is there a free trial?</h3>
              <p className="text-muted-foreground">Yes, all plans come with a 14-day free trial. No credit card required.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">We accept all major credit cards and PayPal for your convenience.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Do you offer refunds?</h3>
              <p className="text-muted-foreground">Yes, we offer a 30-day money-back guarantee if you're not satisfied.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src={zintoSymbol} alt="Zinto" className="h-8 w-auto" />
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering real estate professionals to grow together.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Producto</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/casos-uso" className="text-muted-foreground hover:text-foreground">Casos de Uso</Link></li>
                <li><Link to="/integraciones" className="text-muted-foreground hover:text-foreground">Integraciones</Link></li>
                <li><Link to="/pricing" className="text-muted-foreground hover:text-foreground">Precios</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-muted-foreground hover:text-foreground">Nosotros</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground">Privacidad</Link></li>
                <li><Link to="/terms" className="text-muted-foreground hover:text-foreground">Términos</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 mt-8 text-center text-sm text-muted-foreground">
            © 2024 Zinto. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;