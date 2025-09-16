import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, BarChart3, Shield, Zap, Play, CheckCircle, MessageSquare, Tag, Send, Bot, Clock, UserCheck, FileText, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import zintoLogo from "@/assets/new-logo.jpeg";
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
            <Link to="/casos-uso" className="text-sm font-medium hover:text-primary transition-colors">Use Cases</Link>
            <Link to="/integraciones" className="text-sm font-medium hover:text-primary transition-colors">Integrations</Link>  
            <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
            <Link to="/login" className="text-sm font-medium hover:text-primary transition-colors">Sign In</Link>
            <Button className="btn-gradient">
              Free Trial
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Badge */}
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-3 py-1 animate-pulse">
                WhatsApp Multi-Agent • Real Estate CRM
              </Badge>
              
              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-primary">Control your real estate business</span> and team from a single WhatsApp
              </h1>
              
              {/* Subtitle */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Zinto is the multi-agent platform that helps real estate professionals centralize conversations, organize teams, and serve clients more effectively.
              </p>
              
              {/* Extra text */}
              <p className="text-base text-muted-foreground max-w-2xl">
                Automate frequent responses, assign conversations, and manage thousands of messages from one place with your multi-agent team.
              </p>
              
              {/* Feature Badges */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-green-500/10 rounded-full px-4 py-2 border border-green-500/20">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Real multi-agent</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-500/10 rounded-full px-4 py-2 border border-blue-500/20">
                  <Zap className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">QR setup in 30 seconds</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-500/10 rounded-full px-4 py-2 border border-purple-500/20">
                  <CheckCircle className="h-4 w-4 text-purple-500" />
                  <span className="text-sm font-medium">€0 per message</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-gradient text-lg px-8 py-6 transform hover:scale-105 transition-all duration-200">
                  Start 7-day free trial
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover:bg-primary/5 transform hover:scale-105 transition-all duration-200">
                  <Play className="mr-2 h-5 w-5" />
                  Request demo
                </Button>
              </div>
              
              {/* Trust Signals */}
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>Support in English & Spanish</span>
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
                  alt="Zinto Dashboard - Centralized real estate CRM management" 
                  className="w-full h-auto"
                />
                
                {/* Floating Notifications */}
                <div className="absolute bottom-6 left-6">
                  <div className="bg-primary text-primary-foreground rounded-lg px-3 py-2 shadow-lg text-sm font-medium">
                    +5 new leads
                  </div>
                </div>
                <div className="absolute bottom-6 right-6">
                  <div className="bg-accent text-accent-foreground rounded-lg px-3 py-2 shadow-lg text-sm font-medium">
                    3 active agents
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
              Main features{" "}
              <span className="text-primary">for your real estate team</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to manage WhatsApp professionally for real estate. Centralize conversations, automate responses, and coordinate your team from one platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/15 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Unified inbox</h3>
              <p className="text-muted-foreground">
                All conversations in one place. Manage multiple WhatsApp numbers from a centralized interface.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-2xl bg-gradient-to-br from-secondary/5 to-secondary/10 hover:from-secondary/10 hover:to-secondary/15 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold">Real multi-agent</h3>
              <p className="text-muted-foreground">
                Multiple users managing the same number simultaneously. Real-time collaborative work.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-2xl bg-gradient-to-br from-accent/5 to-accent/10 hover:from-accent/10 hover:to-accent/15 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto">
                <UserCheck className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Automatic assignment</h3>
              <p className="text-muted-foreground">
                Distribute chats based on rules and availability. Optimize your team's workload.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-2xl bg-gradient-to-br from-purple-500/5 to-purple-500/10 hover:from-purple-500/10 hover:to-purple-500/15 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mx-auto">
                <Tag className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold">Tags and categories</h3>
              <p className="text-muted-foreground">
                Organize and filter conversations by status or type. Keep everything perfectly classified.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-2xl bg-gradient-to-br from-green-500/5 to-green-500/10 hover:from-green-500/10 hover:to-green-500/15 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto">
                <FileText className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold">Property catalog</h3>
              <p className="text-muted-foreground">
                Showcase your listings directly from WhatsApp. Facilitate sales with integrated catalogs.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-2xl bg-gradient-to-br from-blue-500/5 to-blue-500/10 hover:from-blue-500/10 hover:to-blue-500/15 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto">
                <Send className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold">Mass campaigns</h3>
              <p className="text-muted-foreground">
                Targeted messages to clients. Reach your audience in a personalized and effective way.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-2xl bg-gradient-to-br from-orange-500/5 to-orange-500/10 hover:from-orange-500/10 hover:to-orange-500/15 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold">Quick templates</h3>
              <p className="text-muted-foreground">
                Predefined responses to save time. Maintain consistency in your communication.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-2xl bg-gradient-to-br from-pink-500/5 to-pink-500/10 hover:from-pink-500/10 hover:to-pink-500/15 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center mx-auto">
                <Bot className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold">ChatGPT integration</h3>
              <p className="text-muted-foreground">
                Smart multilingual responses. AI that understands and responds like your team.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-indigo-500/10 hover:from-indigo-500/10 hover:to-indigo-500/15 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center mx-auto">
                <BarChart3 className="h-8 w-8 text-indigo-500" />
              </div>
              <h3 className="text-xl font-semibold">Real-time metrics</h3>
              <p className="text-muted-foreground">
                Team KPI dashboard. Monitor performance and optimize results instantly.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-2xl bg-gradient-to-br from-teal-500/5 to-teal-500/10 hover:from-teal-500/10 hover:to-teal-500/15 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-teal-500/10 flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold">SLA and reports</h3>
              <p className="text-muted-foreground">
                Control response times. Maintain quality standards and generate detailed reports.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-2xl bg-gradient-to-br from-red-500/5 to-red-500/10 hover:from-red-500/10 hover:to-red-500/15 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold">Permissions and roles</h3>
              <p className="text-muted-foreground">
                Define what each user can do. Granular control of access and functionalities.
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-2xl bg-gradient-to-br from-yellow-500/5 to-yellow-500/10 hover:from-yellow-500/10 hover:to-yellow-500/15 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 flex items-center justify-center mx-auto">
                <MessageCircle className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold">Internal chat</h3>
              <p className="text-muted-foreground">
                Communication between team members without leaving Zinto. Perfect real-time coordination.
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
              How it works
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              From 0 to operational in{" "}
              <span className="text-primary">less than 5 minutes</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              No complex installations, no developers needed. Just connect, invite, and start.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto border-4 border-primary/20">
                <span className="text-3xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-2xl font-semibold">Connect your CRM</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Integrate your existing CRM or import your leads. Instant connection without complex technical setup.
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto border-4 border-secondary/20">
                <span className="text-3xl font-bold text-secondary">2</span>
              </div>
              <h3 className="text-2xl font-semibold">Create teams and users</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Invite your team, define roles and permissions. Set up automatic assignment rules and office hours.
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto border-4 border-accent/20">
                <span className="text-3xl font-bold text-accent">3</span>
              </div>
              <h3 className="text-2xl font-semibold">Manage simultaneously</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Your team manages all leads from a unified inbox. Real-time metrics and reports.
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

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Simple pricing{" "}
              <span className="text-primary">for every team</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the plan that fits your real estate business. Start free and scale as you grow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <Card className="relative border-2">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Zinto Basic</h3>
                <div className="text-4xl font-bold text-primary mb-4">€28<span className="text-lg text-muted-foreground">/month</span></div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>3 users included</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>1 WhatsApp number (QR)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Unlimited chats</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Email support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Basic integrations</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Start free trial</Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="relative border-2 border-primary shadow-2xl scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground px-4 py-1">Most Popular</Badge>
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Zinto Pro</h3>
                <div className="text-4xl font-bold text-primary mb-4">€49<span className="text-lg text-muted-foreground">/month</span></div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>4 users included</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>1 WhatsApp number</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Unlimited chats</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Advanced dashboard</span>
                  </li>
                </ul>
                <Button className="w-full btn-gradient">Start free trial</Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="relative border-2">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Zinto Premium</h3>
                <div className="text-4xl font-bold text-primary mb-4">€89<span className="text-lg text-muted-foreground">/month</span></div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>6 users included</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>2 WhatsApp numbers</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Unlimited chats</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Advanced reports</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>Complete audit</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Start free trial</Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Add-ons (for any plan):</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <span>Additional user: €12/month</span>
              <span>Additional WhatsApp connection: €15/month</span>
            </div>
            <p className="text-muted-foreground mt-4 text-sm">
              Scale your account by adding users and WhatsApp numbers as needed.
            </p>
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
            Ready to grow your{" "}
            <span className="text-primary">real estate business</span>?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Join thousands of real estate professionals who trust Zinto to manage their leads and close more sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-gradient text-lg px-8 py-6" asChild>
              <Link to="/pricing">
                Start free trial <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              <Play className="mr-2 h-5 w-5" />
              Schedule demo
            </Button>
          </div>
          
          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-8 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>7 days free</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>No technical setup</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>Specialized support</span>
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

export default Index;