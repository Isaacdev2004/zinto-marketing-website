import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";

const About = () => {
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
            <a href="/about" className="text-primary font-medium">About</a>
            <a href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
            <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            <a href="/login" className="text-muted-foreground hover:text-primary transition-colors">Login</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            About Zinto
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're revolutionizing real estate CRM with intelligent automation, seamless integrations, and powerful analytics to help agents and brokers close more deals.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower real estate professionals with cutting-edge technology that simplifies complex workflows, enhances client relationships, and drives sustainable business growth.
              </p>
            </CardContent>
          </Card>

          <Card className="border-accent/20 bg-gradient-to-br from-accent/5 to-primary/5">
            <CardContent className="p-8">
              <Award className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To become the world's most trusted real estate CRM platform, enabling millions of agents to build thriving businesses through intelligent automation and data-driven insights.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Customer First</h3>
              <p className="text-muted-foreground">Every decision we make puts our customers' success at the forefront.</p>
            </div>
            <div className="text-center">
              <Target className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-muted-foreground">We continuously push boundaries to deliver cutting-edge solutions.</p>
            </div>
            <div className="text-center">
              <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-muted-foreground">We build trust through transparency, reliability, and ethical practices.</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Our diverse team of experts brings together decades of experience in real estate, technology, and customer success.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold mb-2">Sarah Johnson</h3>
                <p className="text-sm text-muted-foreground mb-2">CEO & Founder</p>
                <p className="text-sm">Former real estate agent with 15+ years of industry experience.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-accent/10 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold mb-2">Michael Chen</h3>
                <p className="text-sm text-muted-foreground mb-2">CTO</p>
                <p className="text-sm">Former Silicon Valley engineer specializing in CRM systems.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold mb-2">Emily Rodriguez</h3>
                <p className="text-sm text-muted-foreground mb-2">Head of Product</p>
                <p className="text-sm">Product strategist with expertise in user experience design.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="bg-gradient-primary text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Real Estate Business?</h2>
              <p className="text-xl mb-8 opacity-90">Join thousands of agents who trust Zinto to grow their business.</p>
              <Button variant="secondary" size="lg" asChild>
                <a href="/pricing">Get Started Today</a>
              </Button>
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

export default About;