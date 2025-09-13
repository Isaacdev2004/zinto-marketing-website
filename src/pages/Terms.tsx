const Terms = () => {
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
            <a href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
            <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            <a href="/login" className="text-muted-foreground hover:text-primary transition-colors">Login</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
          <p className="text-muted-foreground text-center mb-12">Last updated: December 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing or using Zinto's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
            <p className="text-muted-foreground mb-4">
              Zinto provides a cloud-based Customer Relationship Management (CRM) platform specifically designed for real estate professionals. Our service includes lead management, contact organization, communication tools, and analytics features.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
            <p className="text-muted-foreground mb-4">
              To access certain features of our service, you must create an account. You are responsible for:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
              <li>Providing accurate and complete information during registration</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Acceptable Use</h2>
            <p className="text-muted-foreground mb-4">
              You agree not to use our service to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Transmit spam, unsolicited communications, or malicious content</li>
              <li>Interfere with or disrupt our service or servers</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use our service for any illegal or unauthorized purpose</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Subscription and Payment</h2>
            <p className="text-muted-foreground mb-4">
              Our service is offered on a subscription basis. By subscribing, you agree to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Pay all applicable fees for your chosen subscription plan</li>
              <li>Automatic renewal unless cancelled before the renewal date</li>
              <li>Our right to change pricing with 30 days notice</li>
              <li>No refunds for partial months of service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Data and Privacy</h2>
            <p className="text-muted-foreground mb-4">
              You retain ownership of all data you submit to our service. We will protect your data according to our Privacy Policy. You grant us the right to use your data to provide and improve our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Intellectual Property</h2>
            <p className="text-muted-foreground mb-4">
              The Zinto service, including its software, design, text, graphics, and other content, is owned by Zinto and protected by copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Service Availability</h2>
            <p className="text-muted-foreground mb-4">
              While we strive to maintain high service availability, we do not guarantee uninterrupted access to our service. We may perform maintenance, updates, or experience outages that temporarily affect service availability.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4">
              To the maximum extent permitted by law, Zinto shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Termination</h2>
            <p className="text-muted-foreground mb-4">
              Either party may terminate this agreement at any time. Upon termination, your access to the service will cease, and we may delete your data after a reasonable notice period.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">11. Changes to Terms</h2>
            <p className="text-muted-foreground mb-4">
              We reserve the right to modify these terms at any time. We will notify users of significant changes via email or through our service. Continued use of our service after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-muted-foreground">
                Email: legal@zinto.com<br />
                Address: 123 Business Street, Suite 100, City, State 12345
              </p>
            </div>
          </section>
        </div>
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
                <a href="/terms" className="block text-primary">Terms of Service</a>
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

export default Terms;