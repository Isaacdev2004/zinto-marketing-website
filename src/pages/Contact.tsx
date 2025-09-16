import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, MessageSquare, MessageCircle, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import zintoLogo from "@/assets/new-logo.jpeg";

const Contact = () => {
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
            <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-colors">Precios</Link>
            <Link to="/contact" className="text-sm font-medium text-primary">Contacto</Link>
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
            ¿Tienes más preguntas? Estamos aquí para ayudarte
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nuestro equipo está{" "}
            <span className="text-primary">aquí para ayudarte</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Contáctanos por el canal que prefieras. Respondemos rápido y en español.
          </p>
          
          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Button variant="outline" size="lg" className="p-6 h-auto justify-start" asChild>
              <a href="mailto:hola@zinto.app" className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <div className="text-left">
                  <div className="font-semibold">Email</div>
                  <div className="text-sm text-muted-foreground">hola@zinto.app</div>
                </div>
              </a>
            </Button>
            
            <Button variant="outline" size="lg" className="p-6 h-auto justify-start" asChild>
              <a href="https://wa.me/34644320243" className="flex items-center gap-4">
                <MessageCircle className="h-6 w-6 text-accent" />
                <div className="text-left">
                  <div className="font-semibold">WhatsApp</div>
                  <div className="text-sm text-muted-foreground">+34 644 32 02 43</div>
                </div>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="shadow-xl border-0">
              <CardHeader className="pb-8">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  Escríbenos un mensaje
                </CardTitle>
                <p className="text-muted-foreground">
                  Cuéntanos sobre tu negocio inmobiliario y cómo podemos ayudarte.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre *</Label>
                    <Input id="nombre" placeholder="Tu nombre" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="apellido">Apellido *</Label>
                    <Input id="apellido" placeholder="Tu apellido" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="tu.email@ejemplo.com" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input id="telefono" placeholder="+34 600 123 456" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="empresa">Empresa / Inmobiliaria</Label>
                  <Input id="empresa" placeholder="Nombre de tu empresa (opcional)" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="equipo">Tamaño del equipo</Label>
                  <select id="equipo" className="w-full px-3 py-2 border border-input bg-background rounded-md">
                    <option>Solo yo</option>
                    <option>2-5 agentes</option>
                    <option>6-15 agentes</option>
                    <option>16-50 agentes</option>
                    <option>Más de 50 agentes</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="consulta">¿En qué podemos ayudarte?</Label>
                  <Textarea 
                    id="consulta" 
                    placeholder="Cuéntanos sobre tu negocio y qué buscas..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="btn-gradient w-full" size="lg">
                  Enviar consulta
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Responderemos en menos de 24 horas
                </p>
              </CardContent>
            </Card>

            {/* Contact Information & Support */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Soporte especializado</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Nuestro equipo entiende el sector inmobiliario y está listo para ayudarte a implementar Zinto en tu negocio.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="card-hover border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Email directo</h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          Para consultas detalladas e información técnica
                        </p>
                        <a href="mailto:hola@zinto.app" className="text-primary hover:underline font-medium">
                          hola@zinto.app
                        </a>
                        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>Respuesta en menos de 4 horas</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">WhatsApp Business</h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          Chat directo con nuestro equipo de soporte
                        </p>
                        <a href="https://wa.me/34644320243" className="text-primary hover:underline font-medium">
                          +34 644 32 02 43
                        </a>
                        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>Lunes a Viernes 9:00 - 18:00</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Llamada programada</h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          Agenda una llamada para resolver dudas específicas
                        </p>
                        <Button variant="outline" size="sm">
                          Programar llamada
                        </Button>
                        <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>Disponible en horario comercial</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Support Promise */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 text-primary">Nuestra promesa de soporte</h3>
                  <ul className="space-y-3">
                    {[
                      "Respuesta en menos de 24 horas",
                      "Soporte en español por expertos",
                      "Implementación guiada paso a paso",
                      "Sin costos adicionales por soporte"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Preguntas{" "}
              <span className="text-primary">frecuentes</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Resolvemos las dudas más comunes sobre Zinto y el sector inmobiliario.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold mb-3 text-lg">¿Cuál es la diferencia entre los planes?</h3>
                <p className="text-muted-foreground leading-relaxed">Los planes se diferencian principalmente por el número de agentes incluidos y las funciones avanzadas. Todos incluyen gestión de leads básica.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-lg">¿Cómo funciona la prueba gratuita?</h3>
                <p className="text-muted-foreground leading-relaxed">14 días completamente gratis con acceso a todas las funciones. No se requiere tarjeta de crédito y puedes cancelar en cualquier momento.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-lg">¿Es seguro conectar mi CRM actual?</h3>
                <p className="text-muted-foreground leading-relaxed">Sí, utilizamos conexiones encriptadas y cumplimos con GDPR. Tus datos permanecen siempre bajo tu control.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold mb-3 text-lg">¿Necesito conocimientos técnicos?</h3>
                <p className="text-muted-foreground leading-relaxed">No, Zinto está diseñado para ser intuitivo. Incluimos onboarding personalizado y soporte durante la implementación.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-lg">¿Cómo migro mis leads existentes?</h3>
                <p className="text-muted-foreground leading-relaxed">Te ayudamos a importar todos tus contactos desde Excel, Google Sheets o tu CRM actual. El proceso es automático y seguro.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-lg">¿Qué tipo de soporte ofrecen?</h3>
                <p className="text-muted-foreground leading-relaxed">Soporte en español por email, WhatsApp y llamadas programadas. Incluido en todos los planes sin costo adicional.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">¿No encuentras la respuesta que buscas?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:hola@zinto.app">Escribir a hola@zinto.app</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://wa.me/34644320243">WhatsApp: +34 644 32 02 43</a>
              </Button>
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

export default Contact;