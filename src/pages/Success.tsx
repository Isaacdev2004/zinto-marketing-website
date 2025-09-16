import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import zintoSymbol from "@/assets/zinto-symbol.png";

const Success = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={zintoSymbol} alt="Zinto" className="h-10 w-auto" />
          </Link>
        </div>
      </header>

      {/* Success Content */}
      <section className="hero-gradient py-20 px-4">
        <div className="container max-w-2xl mx-auto text-center">
          <Card className="border-none shadow-xl bg-card/95 backdrop-blur">
            <CardHeader className="pb-8">
              <div className="mx-auto mb-6 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-3xl mb-4">Payment Successful!</CardTitle>
              <p className="text-lg text-muted-foreground">
                Thank you for subscribing to Zinto. Your subscription is now active.
              </p>
              {sessionId && (
                <p className="text-sm text-muted-foreground mt-2">
                  Session ID: {sessionId}
                </p>
              )}
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted/50 rounded-lg p-6 text-left">
                <h3 className="font-semibold mb-3">What's Next?</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    You'll receive a confirmation email shortly
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    Create your account to access the CRM platform
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    Start managing your leads and growing your business
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="flex-1 btn-gradient">
                  <Link to="/login">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild className="flex-1">
                  <Link to="/">
                    Back to Home
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Success;