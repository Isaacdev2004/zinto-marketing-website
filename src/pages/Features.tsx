import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Calendar, 
  BarChart3, 
  MessageSquare, 
  FileText, 
  Shield, 
  Smartphone, 
  Zap,
  Globe,
  Mail,
  Phone,
  Search
} from "lucide-react";

const Features = () => {
  const featureCategories = [
    {
      title: "Lead Management",
      description: "Capture, nurture, and convert leads with intelligent automation",
      features: [
        {
          icon: <Users className="w-6 h-6" />,
          title: "Smart Lead Capture",
          description: "Automatically capture leads from your website, social media, and referrals"
        },
        {
          icon: <Search className="w-6 h-6" />,
          title: "Lead Scoring",
          description: "AI-powered lead scoring to prioritize your hottest prospects"
        },
        {
          icon: <MessageSquare className="w-6 h-6" />,
          title: "Automated Follow-ups",
          description: "Never miss a follow-up with intelligent drip campaigns"
        }
      ]
    },
    {
      title: "Communication Hub",
      description: "All your client communications in one centralized platform",
      features: [
        {
          icon: <Mail className="w-6 h-6" />,
          title: "Email Integration",
          description: "Sync with Gmail, Outlook, and other email providers"
        },
        {
          icon: <Phone className="w-6 h-6" />,
          title: "Call Management",
          description: "Built-in VoIP calling with automatic call logging"
        },
        {
          icon: <MessageSquare className="w-6 h-6" />,
          title: "SMS Campaigns",
          description: "Send targeted SMS messages and track responses"
        }
      ]
    },
    {
      title: "Analytics & Reporting",
      description: "Make data-driven decisions with powerful insights",
      features: [
        {
          icon: <BarChart3 className="w-6 h-6" />,
          title: "Sales Pipeline",
          description: "Visual pipeline management with drag-and-drop functionality"
        },
        {
          icon: <FileText className="w-6 h-6" />,
          title: "Custom Reports",
          description: "Generate custom reports for any metric that matters to your business"
        },
        {
          icon: <Zap className="w-6 h-6" />,
          title: "Performance Tracking",
          description: "Track agent performance and identify improvement opportunities"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/src/assets/zinto-logo.png" alt="Zinto" className="h-8 w-auto" />
            <span className="text-xl font-bold text-primary">Zinto</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="/features" className="text-primary font-medium">Features</a>
            <a href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
            <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            <a href="/login" className="text-muted-foreground hover:text-primary transition-colors">Login</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <Badge className="mb-4">All Features Included</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Everything You Need to Succeed
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover all the powerful features that make Zinto the most comprehensive real estate CRM platform available.
          </p>
        </section>

        {/* Feature Categories */}
        <div className="space-y-20">
          {featureCategories.map((category, categoryIndex) => (
            <section key={categoryIndex}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {category.features.map((feature, featureIndex) => (
                  <Card key={featureIndex} className="text-center hover:shadow-elegant transition-all duration-300">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Additional Features Grid */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">More Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Additional tools and integrations to supercharge your real estate business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <Calendar className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold mb-2">Calendar Sync</h3>
              <p className="text-sm text-muted-foreground">Sync with Google Calendar, Outlook, and Apple Calendar</p>
            </Card>
            
            <Card className="p-6">
              <Smartphone className="w-8 h-8 text-accent mb-3" />
              <h3 className="font-bold mb-2">Mobile App</h3>
              <p className="text-sm text-muted-foreground">Native iOS and Android apps for on-the-go productivity</p>
            </Card>
            
            <Card className="p-6">
              <Globe className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold mb-2">Website Integration</h3>
              <p className="text-sm text-muted-foreground">Embed lead capture forms directly on your website</p>
            </Card>
            
            <Card className="p-6">
              <Shield className="w-8 h-8 text-accent mb-3" />
              <h3 className="font-bold mb-2">Enterprise Security</h3>
              <p className="text-sm text-muted-foreground">Bank-level security with 256-bit SSL encryption</p>
            </Card>
          </div>
        </section>

        {/* Integration Section */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8">Seamless Integrations</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Connect Zinto with your favorite tools and platforms for a unified workflow.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 border rounded-lg bg-muted/50">
              <div className="text-lg font-semibold">Zillow</div>
            </div>
            <div className="p-6 border rounded-lg bg-muted/50">
              <div className="text-lg font-semibold">MLS</div>
            </div>
            <div className="p-6 border rounded-lg bg-muted/50">
              <div className="text-lg font-semibold">DocuSign</div>
            </div>
            <div className="p-6 border rounded-lg bg-muted/50">
              <div className="text-lg font-semibold">Mailchimp</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20">
          <Card className="bg-gradient-primary text-white text-center">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Experience All These Features?</h2>
              <p className="text-xl mb-8 opacity-90">
                Start your free trial today and see why thousands of agents choose Zinto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <a href="/pricing">Start Free Trial</a>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
                  <a href="/contact">Schedule Demo</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50 mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/src/assets/zinto-logo.png" alt="Zinto" className="h-6 w-auto" />
                <span className="font-bold">Zinto</span>
              </div>
              <p className="text-sm text-muted-foreground">Modern CRM for real estate professionals.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-sm">
                <a href="/features" className="block text-muted-foreground hover:text-primary">Features</a>
                <a href="/pricing" className="block text-muted-foreground hover:text-primary">Pricing</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-sm">
                <a href="/about" className="block text-muted-foreground hover:text-primary">About</a>
                <a href="/contact" className="block text-muted-foreground hover:text-primary">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2 text-sm">
                <a href="/privacy" className="block text-muted-foreground hover:text-primary">Privacy Policy</a>
                <a href="/terms" className="block text-muted-foreground hover:text-primary">Terms of Service</a>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Zinto. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Features;