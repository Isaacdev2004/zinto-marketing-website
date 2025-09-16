import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { AuthForm } from "@/components/auth/AuthForm";
import zintoSymbol from "@/assets/zinto-symbol.png";

const Login = () => {
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !loading) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>Cargando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={zintoSymbol} alt="Zinto" className="h-14 md:h-16 w-auto drop-shadow" />
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="flex justify-center">
          <AuthForm 
            mode={authMode} 
            onToggleMode={() => setAuthMode(authMode === 'signin' ? 'signup' : 'signin')} 
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src={zintoSymbol} alt="Zinto" className="h-14 md:h-16 w-auto mb-4 drop-shadow" />
              <p className="text-gray-400">
                Plataforma multiagente para gestionar WhatsApp de forma profesional
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Producto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/features" className="hover:text-white transition-colors">Funciones</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Precios</Link></li>
                <li><Link to="/integraciones" className="hover:text-white transition-colors">Integraciones</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">Acerca de</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/terms" className="hover:text-white transition-colors">Términos</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacidad</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Zinto. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;