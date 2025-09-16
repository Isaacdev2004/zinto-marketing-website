import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Building, ShoppingCart, Heart, GraduationCap, MapPin, Calendar, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import zintoSymbol from "@/assets/zinto-symbol.png";

const CasosUso = () => {
  const useCases = [
    {
      title: "Inmobiliarias",
      description: "Gestiona consultas de propiedades, agenda visitas y mantén el seguimiento de leads. Asigna automáticamente según zona geográfica.",
      icon: Building,
      color: "primary",
      features: [
        "Asignación por zona",
        "Agenda integrada", 
        "Seguimiento de leads",
        "Templates de respuesta"
      ]
    },
    {
      title: "Soporte E-commerce",
      description: "Atiende consultas de productos, gestiona reclamos y coordina entregas. Integración directa con tu sistema de pedidos.",
      icon: ShoppingCart,
      color: "secondary",
      features: [
        "Estados de pedido",
        "Gestión de reclamos",
        "Soporte post-venta",
        "Métricas de satisfacción"
      ]
    },
    {
      title: "Centros Médicos",
      description: "Programa citas, envía recordatorios y gestiona consultas médicas. Cumple con protocolos de privacidad.",
      icon: Heart,
      color: "accent",
      features: [
        "Agenda médica",
        "Recordatorios automáticos",
        "Historial de pacientes",
        "Privacidad HIPAA"
      ]
    },
    {
      title: "Educación",
      description: "Comunicación con padres, envío de tareas y coordinación académica. Canales organizados por grado o materia.",
      icon: GraduationCap,
      color: "primary",
      features: [
        "Grupos por curso",
        "Envío de tareas",
        "Comunicación padres",
        "Calendario académico"
      ]
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
            <Link to="/casos-uso" className="text-sm font-medium text-primary">Casos de Uso</Link>
            <Link to="/integraciones" className="text-sm font-medium hover:text-primary transition-colors">Integraciones</Link>
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
            Casos de uso comprobados
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Desde pequeños negocios hasta{" "}
            <span className="text-primary">grandes organizaciones</span>{" "}
            confían en Zinto
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Descubre cómo diferentes industrias utilizan Zinto para transformar su gestión de leads y mejorar la atención al cliente.
          </p>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-20 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.icon;
              return (
                <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 rounded-2xl bg-${useCase.color}/10 flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className={`h-8 w-8 text-${useCase.color}`} />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {useCase.description}
                        </p>
                        
                        <ul className="space-y-3">
                          {useCase.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full bg-${useCase.color}`}></div>
                              <span className="font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Herramientas profesionales{" "}
              <span className="text-primary">para equipos exigentes</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Todo lo que necesitas para brindar un servicio excepcional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Bandeja unificada", desc: "Todos los leads en un solo lugar" },
              { icon: MapPin, title: "Asignación automática", desc: "Distribuye leads según reglas y disponibilidad" },
              { icon: Calendar, title: "Etiquetas y categorías", desc: "Organiza y filtra leads por tipo o estado" },
              { icon: TrendingUp, title: "Campañas masivas", desc: "Envía mensajes segmentados respetando políticas" },
              { icon: Users, title: "Plantillas rápidas", desc: "Respuestas predefinidas para agilizar la atención" },
              { icon: TrendingUp, title: "Métricas en tiempo real", desc: "Dashboard con KPIs de rendimiento del equipo" }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Tu industria no está listada?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12">
            Zinto se adapta a cualquier negocio que necesite gestionar leads de manera profesional.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-gradient text-lg px-8 py-6" asChild>
              <Link to="/pricing">
                Empezar prueba gratuita <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <Link to="/contact">
                Consultar mi caso
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

export default CasosUso;