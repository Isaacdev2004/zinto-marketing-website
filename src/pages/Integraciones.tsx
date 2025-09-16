import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Database, MessageCircle, Mail, Zap, Code, Grid3X3 } from "lucide-react";
import { Link } from "react-router-dom";
import zintoSymbol from "@/assets/zinto-symbol.png";

const Integraciones = () => {
  const integrations = [
    {
      name: "Google Sheets",
      description: "Sincronización automática de contactos y reportes",
      icon: Grid3X3,
      color: "accent",
      features: [
        "Exportación automática de leads",
        "Sincronización bidireccional",
        "Reportes en tiempo real",
        "Configuración sin código"
      ]
    },
    {
      name: "Airtable",
      description: "Base de datos de clientes actualizada en tiempo real",
      icon: Database,
      color: "primary",
      features: [
        "Gestión avanzada de datos",
        "Campos personalizados",
        "Automatizaciones nativas",
        "Colaboración en equipo"
      ]
    },
    {
      name: "Mailchimp",
      description: "Segmentación y campañas de email marketing",
      icon: Mail,
      color: "secondary",
      features: [
        "Segmentación automática",
        "Campañas personalizadas",
        "Métricas unificadas",
        "Follow-up inteligente"
      ]
    },
    {
      name: "CRM API",
      description: "Funciones avanzadas para sistemas CRM",
      icon: MessageCircle,
      color: "accent",
      features: [
        "Integración nativa",
        "Webhooks en tiempo real",
        "API REST completa",
        "Escalabilidad empresarial"
      ]
    },
    {
      name: "Webhooks",
      description: "Integración personalizada con cualquier sistema",
      icon: Code,
      color: "primary",
      features: [
        "Eventos personalizados",
        "Payload flexible",
        "Reintentos automáticos",
        "Monitoreo incluido"
      ]
    },
    {
      name: "Zapier",
      description: "Conecta con más de 5,000 aplicaciones",
      icon: Zap,
      color: "secondary",
      features: [
        "Miles de integraciones",
        "Flujos automatizados",
        "Sin código requerido",
        "Activación instantánea"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={zintoSymbol} alt="Zinto" className="h-12 md:h-14 w-auto drop-shadow" />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Inicio</Link>
            <Link to="/casos-uso" className="text-sm font-medium hover:text-primary transition-colors">Casos de Uso</Link>
            <Link to="/integraciones" className="text-sm font-medium text-primary">Integraciones</Link>
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
        <div className="container max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-3 py-1 mb-6">
            Integraciones
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Se conecta con{" "}
            <span className="text-primary">tus herramientas favoritas</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Mantén tu flujo de trabajo existente. Zinto se integra perfectamente con las plataformas que ya usas para potenciar tu negocio inmobiliario.
          </p>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-20 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => {
              const IconComponent = integration.icon;
              return (
                <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="text-center space-y-6">
                      <div className={`w-20 h-20 rounded-3xl bg-${integration.color}/10 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`h-10 w-10 text-${integration.color}`} />
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-bold mb-3">{integration.name}</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {integration.description}
                        </p>
                      </div>
                      
                      <ul className="space-y-3 text-left">
                        {integration.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <div className={`w-2 h-2 rounded-full bg-${integration.color} mt-2 flex-shrink-0`}></div>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Integration Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              ¿No ves tu herramienta?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Podemos crear integraciones personalizadas para tu negocio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">API REST disponible para desarrolladores</h3>
              <ul className="space-y-4">
                {[
                  "Documentación completa",
                  "SDKs en múltiples lenguajes",
                  "Webhooks en tiempo real",
                  "Rate limiting generoso",
                  "Soporte técnico especializado"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-card rounded-2xl p-8 shadow-xl">
              <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
                <div className="text-primary">// Ejemplo de integración</div>
                <div className="mt-2">
                  <span className="text-secondary">POST</span> /api/leads
                </div>
                <div className="mt-1 text-muted-foreground">
                  {"{"}<br/>
                  &nbsp;&nbsp;"name": "Juan Pérez",<br/>
                  &nbsp;&nbsp;"email": "juan@email.com",<br/>
                  &nbsp;&nbsp;"phone": "+34 600 123 456",<br/>
                  &nbsp;&nbsp;"source": "website"<br/>
                  {"}"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ventajas de las{" "}
              <span className="text-primary">integraciones nativas</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Configuración rápida</h3>
              <p className="text-muted-foreground">
                Conecta tus herramientas en menos de 5 minutos sin conocimientos técnicos.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto">
                <Database className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold">Sincronización en tiempo real</h3>
              <p className="text-muted-foreground">
                Todos tus datos se mantienen actualizados automáticamente entre plataformas.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto">
                <Grid3X3 className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Flujo unificado</h3>
              <p className="text-muted-foreground">
                Gestiona todo desde una sola plataforma sin cambiar entre aplicaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Conecta tu ecosistema hoy mismo
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12">
            Prueba todas las integraciones gratis durante 14 días.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-gradient text-lg px-8 py-6" asChild>
              <Link to="/pricing">
                Empezar prueba gratuita <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <Link to="/contact">
                Consultar integración personalizada
              </Link>
            </Button>
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

export default Integraciones;