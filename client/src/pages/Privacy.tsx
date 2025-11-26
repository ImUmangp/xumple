export default function Privacy() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 data-testid="text-privacy-title" className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-invert max-w-none">
            <p data-testid="text-privacy-intro" className="text-muted-foreground leading-relaxed mb-6">
              At BrandOps, we take your privacy seriously. This policy outlines how we collect, use, and protect your information.
            </p>
            
            <h2 data-testid="heading-collection" className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
            <p data-testid="text-collection" className="text-muted-foreground leading-relaxed mb-6">
              We collect information you provide directly through our contact forms, including your name, email address, phone number, business name, and project details.
            </p>
            
            <h2 data-testid="heading-usage" className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
            <p data-testid="text-usage" className="text-muted-foreground leading-relaxed mb-6">
              We use your information to respond to inquiries, provide services, send project updates, and improve our offerings. We do not sell or share your information with third parties for marketing purposes.
            </p>
            
            <h2 data-testid="heading-security" className="text-2xl font-semibold mt-8 mb-4">3. Data Security</h2>
            <p data-testid="text-security" className="text-muted-foreground leading-relaxed mb-6">
              We implement industry-standard security measures to protect your information from unauthorized access, disclosure, or misuse.
            </p>
            
            <h2 data-testid="heading-cookies" className="text-2xl font-semibold mt-8 mb-4">4. Cookies</h2>
            <p data-testid="text-cookies" className="text-muted-foreground leading-relaxed mb-6">
              Our website may use cookies to enhance user experience. You can control cookie preferences through your browser settings.
            </p>
            
            <h2 data-testid="heading-rights" className="text-2xl font-semibold mt-8 mb-4">5. Your Rights</h2>
            <p data-testid="text-rights" className="text-muted-foreground leading-relaxed mb-6">
              You have the right to access, correct, or delete your personal information. Contact us at hello@brandops.com to exercise these rights.
            </p>
            
            <h2 data-testid="heading-updates" className="text-2xl font-semibold mt-8 mb-4">6. Updates to This Policy</h2>
            <p data-testid="text-updates" className="text-muted-foreground leading-relaxed">
              We may update this policy periodically. The latest version will always be available on our website.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
