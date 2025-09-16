import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import zintoLogo from "@/assets/zinto-logo.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to external CRM login
    window.location.href = "https://crm.zinto.com/login";
  };

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
            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contacto</Link>
            <Link to="/login" className="text-sm font-medium text-primary">Iniciar sesión</Link>
            <Link to="/pricing">
              <Button size="sm" className="btn-gradient ml-4">
                Prueba Gratis
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Login Section */}
      <div className="hero-gradient min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md shadow-xl border-0">
          <CardHeader className="text-center pb-8">
            <div className="flex justify-center mb-4">
              <img src={zintoLogo} alt="Zinto" className="h-12 w-auto" />
            </div>
            <CardTitle className="text-2xl mb-2">Bienvenido de vuelta</CardTitle>
            <p className="text-muted-foreground">Inicia sesión para acceder a tu CRM Zinto</p>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="tu.email@ejemplo.com"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <div className="relative">
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"}
                    placeholder="Ingresa tu contraseña"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-muted-foreground">Recordarme</span>
                </label>
                <a href="#" className="text-primary hover:underline">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              
              <Button type="submit" className="btn-gradient w-full" size="lg">
                Iniciar Sesión
              </Button>
            </form>
            
            <div className="mt-6">
              <Separator className="my-4" />
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  ¿No tienes una cuenta?
                </p>
                <Link to="/pricing">
                  <Button variant="outline" className="w-full">
                    Comenzar Prueba Gratuita
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Features Banner */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Por qué los profesionales inmobiliarios eligen Zinto
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-semibold mb-2">Configuración Fácil</h3>
              <p className="text-sm text-muted-foreground">
                Comienza en minutos con nuestra interfaz intuitiva
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="font-semibold mb-2">Aumenta las Ventas</h3>
              <p className="text-sm text-muted-foreground">
                Rastrea y convierte más leads con automatización inteligente
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-semibold mb-2">Mejores Relaciones</h3>
              <p className="text-sm text-muted-foreground">
                Construye conexiones más sólidas con clientes y prospectos
              </p>
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
                Empoderando a los profesionales inmobiliarios para crecer juntos.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Producto</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/pricing" className="text-muted-foreground hover:text-foreground">Precios</Link></li>
                <li><Link to="/casos-uso" className="text-muted-foreground hover:text-foreground">Casos de Uso</Link></li>
                <li><Link to="/integraciones" className="text-muted-foreground hover:text-foreground">Integraciones</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-muted-foreground hover:text-foreground">Acerca de</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground">Política de Privacidad</Link></li>
                <li><Link to="/terms" className="text-muted-foreground hover:text-foreground">Términos de Servicio</Link></li>
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

export default Login;