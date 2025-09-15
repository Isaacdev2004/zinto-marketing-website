import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, BarChart3, Shield, Zap, Play, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import zintoLogo from "@/assets/zinto-logo.png";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={zintoLogo} alt="Zinto" className="h-8 w-auto" />
            <span className="text-xl font-bold">Zinto</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/features" className="text-sm font-medium hover:text-primary transition-colors">Funcionalidades</Link>
            <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-colors">Precios</Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contacto</Link>
            <Link to="/login" className="text-sm font-medium hover:text-primary transition-colors">Iniciar sesión</Link>
            <Button className="btn-gradient">
              Prueba Gratis
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Badge */}
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-3 py-1">
                Real Estate Partners • API Oficial
              </Badge>
              
              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                🚀 Plataforma de{" "}
                <span className="text-primary">centralización</span>{" "}
                de CRM inmobiliario ⚡
              </h1>
              
              {/* Subtitle */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Automatiza seguimientos, asigna leads y gestiona miles de propiedades desde 1 solo lugar con tu equipo de agentes.
              </p>
              
              {/* Feature Badges */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Multi-agente real</span>
                </div>
                <div className="flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2">
                  <Zap className="h-4 w-4 text-secondary" />
                  <span className="text-sm font-medium">Setup 30s</span>
                </div>
                <div className="flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium">$0 por lead</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-gradient text-lg px-8 py-6">
                  Probar gratis 14 días
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  <Play className="mr-2 h-5 w-5" />
                  Ver demo en vivo
                </Button>
              </div>
              
              {/* Trust Signals */}
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>Sin tarjeta de crédito</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>Cancela cuando quieras</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>Soporte en español</span>
                </div>
              </div>
            </div>
            
            {/* Right Column - Dashboard Mockup */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Status Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-accent text-accent-foreground shadow-lg">
                    Zinto Dashboard
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 shadow-lg">
                    Online
                  </Badge>
                </div>
                
                {/* Dashboard Image */}
                <img 
                  src={dashboardMockup} 
                  alt="Dashboard de Zinto - Gestión centralizada de CRM inmobiliario" 
                  className="w-full h-auto"
                />
                
                {/* Floating Notifications */}
                <div className="absolute bottom-6 left-6">
                  <div className="bg-primary text-primary-foreground rounded-lg px-3 py-2 shadow-lg text-sm font-medium">
                    +5 nuevos leads
                  </div>
                </div>
                <div className="absolute bottom-6 right-6">
                  <div className="bg-accent text-accent-foreground rounded-lg px-3 py-2 shadow-lg text-sm font-medium">
                    3 agentes activos
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Tu equipo y tus leads,{" "}
              <span className="text-primary">finalmente conectados</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              ¿Muchos canales y poco control? Centraliza tus conversaciones inmobiliarias y permite que tus agentes trabajen en simultáneo, con flujos claros, asignaciones automáticas y con total visibilidad.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Multi-agente real con roles y permisos</h3>
              <p className="text-muted-foreground">
                Asigna leads automáticamente. Define roles de supervisor, agente y administrador con permisos granulares.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold">Setup rápido, sin API obligatoria</h3>
              <p className="text-muted-foreground">
                Conecta tu CRM existente en minutos. No necesitas desarrolladores para empezar.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto">
                <BarChart3 className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Integraciones con CRM y webhooks</h3>
              <p className="text-muted-foreground">
                Sincroniza automáticamente con Google Sheets, Airtable, Salesforce y sistemas personalizados vía webhooks.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Analytics avanzados opcionales</h3>
              <p className="text-muted-foreground">
                Escala con reportes avanzados cuando necesites más insights o funciones profesionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-3 py-1 mb-6">
              Cómo funciona
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              De 0 a operativo en{" "}
              <span className="text-primary">menos de 5 minutos</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Sin instalaciones complejas, sin desarrolladores. Solo conecta, invita y empieza.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto border-4 border-primary/20">
                <span className="text-3xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-2xl font-semibold">Conecta tu CRM</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Integra tu CRM existente o importa tus leads. Conexión instantánea sin configuración técnica compleja.
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto border-4 border-secondary/20">
                <span className="text-3xl font-bold text-secondary">2</span>
              </div>
              <h3 className="text-2xl font-semibold">Crea equipos y usuarios</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Invita a tu equipo, define roles y permisos. Configura reglas de asignación automática y horarios de atención.
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto border-4 border-accent/20">
                <span className="text-3xl font-bold text-accent">3</span>
              </div>
              <h3 className="text-2xl font-semibold">Gestiona en simultáneo</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Tu equipo gestiona todos los leads desde una bandeja unificada. Métricas y reportes en tiempo real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-lg text-muted-foreground">
              Join the growing community of successful real estate professionals
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">$2.5M+</div>
              <div className="text-muted-foreground">Deals Closed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            What Our Users Say
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg mb-4 italic">
                  "Zinto has transformed how we manage our leads. Our conversion rate increased by 40% in just three months."
                </p>
                <div className="font-semibold">Sarah Johnson</div>
                <div className="text-sm text-muted-foreground">Real Estate Broker</div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg mb-4 italic">
                  "The automation features save me hours every week. I can focus on what matters most - closing deals."
                </p>
                <div className="font-semibold">Michael Chen</div>
                <div className="text-sm text-muted-foreground">Property Agent</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Listo para hacer crecer tu{" "}
            <span className="text-primary">negocio inmobiliario</span>?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Únete a miles de profesionales inmobiliarios que confían en Zinto para gestionar sus leads y cerrar más ventas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-gradient text-lg px-8 py-6" asChild>
              <Link to="/pricing">
                Empezar prueba gratuita <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              <Play className="mr-2 h-5 w-5" />
              Agendar demo
            </Button>
          </div>
          
          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-8 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>14 días gratis</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>Sin configuración técnica</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>Soporte especializado</span>
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
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/pricing" className="text-muted-foreground hover:text-foreground">Pricing</Link></li>
                <li><Link to="/features" className="text-muted-foreground hover:text-foreground">Features</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 mt-8 text-center text-sm text-muted-foreground">
            © 2024 Zinto. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;