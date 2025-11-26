export default function Terms() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 data-testid="text-terms-title" className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">
            Terms & Conditions
          </h1>
          <div className="prose prose-invert max-w-none">
            <p data-testid="text-terms-intro" className="text-muted-foreground leading-relaxed mb-6">
              Welcome to BrandOps. By accessing and using our services, you agree to comply with and be bound by the following terms and conditions.
            </p>
            
            <h2 data-testid="heading-services" className="text-2xl font-semibold mt-8 mb-4">1. Services</h2>
            <p data-testid="text-services" className="text-muted-foreground leading-relaxed mb-6">
              BrandOps provides technology development, marketing, and business operations services. The specific scope of services will be defined in individual project agreements.
            </p>
            
            <h2 data-testid="heading-payment" className="text-2xl font-semibold mt-8 mb-4">2. Payment Terms</h2>
            <p data-testid="text-payment" className="text-muted-foreground leading-relaxed mb-6">
              Payment terms will be outlined in project proposals. Generally, we require upfront deposits for new projects and milestone-based payments for ongoing work.
            </p>
            
            <h2 data-testid="heading-ip" className="text-2xl font-semibold mt-8 mb-4">3. Intellectual Property</h2>
            <p data-testid="text-ip" className="text-muted-foreground leading-relaxed mb-6">
              Upon full payment, clients receive ownership of deliverables created specifically for their project. BrandOps retains ownership of reusable frameworks and tools.
            </p>
            
            <h2 data-testid="heading-confidentiality" className="text-2xl font-semibold mt-8 mb-4">4. Confidentiality</h2>
            <p data-testid="text-confidentiality" className="text-muted-foreground leading-relaxed mb-6">
              We maintain strict confidentiality of all client information and project details unless otherwise agreed upon.
            </p>
            
            <h2 data-testid="heading-contact" className="text-2xl font-semibold mt-8 mb-4">5. Contact</h2>
            <p data-testid="text-contact" className="text-muted-foreground leading-relaxed">
              For questions about these terms, please contact us at hello@brandops.com.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
