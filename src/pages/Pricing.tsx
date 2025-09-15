import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import zintoLogo from "@/assets/zinto-logo.png";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const { toast } = useToast();

  const handleCheckout = async (planName: string) => {
    setLoadingPlan(planName);
    
    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          plan: planName.toLowerCase(),
          billing: isYearly ? 'yearly' : 'monthly'
        }
      });

      if (error) throw error;

      if (data?.url) {
        window.open(data.url, '_blank');
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast({
        title: "Checkout Error",
        description: "Failed to start checkout process. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoadingPlan(null);
    }
  };

  const plans = [
    {
      name: "Basic",
      description: "Perfect for getting started",
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        "Up to 100 leads",
        "Basic CRM features",
        "Email support",
        "Mobile app access",
        "Lead capture forms"
      ],
      popular: false
    },
    {
      name: "Pro",
      description: "Most popular for growing teams",
      monthlyPrice: 79,
      yearlyPrice: 790,
      features: [
        "Unlimited leads",
        "Advanced automation",
        "Analytics & reporting",
        "Priority support",
        "Custom integrations",
        "Team collaboration",
        "Advanced lead scoring"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: [
        "Everything in Pro",
        "White-label solution",
        "Custom development",
        "Dedicated account manager",
        "Advanced security",
        "SLA guarantee",
        "Custom training"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={zintoLogo} alt="Zinto" className="h-8 w-auto" />
            <span className="text-xl font-bold">Zinto</span>
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

      {/* Hero Section */}
      <section className="hero-gradient py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-3 py-1 mb-6">
            Precios transparentes sin sorpresas
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Planes que se adaptan a tu{" "}
            <span className="text-primary">negocio inmobiliario</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Solo pagas por usuarios activos. Sin costos por lead ni comisiones ocultas.
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
                    disabled={loadingPlan === plan.name}
                  >
                    {loadingPlan === plan.name ? 'Loading...' : 'Get Started'} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
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
              <div className="flex items-center gap-2 mb-4">
                <img src={zintoLogo} alt="Zinto" className="h-6 w-auto" />
                <span className="font-bold">Zinto</span>
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