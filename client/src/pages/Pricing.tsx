import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ChevronRight } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter Plan",
      description: "Perfect for small businesses getting started",
      features: [
        "Basic website/landing page",
        "Essential automations",
        "Basic ads setup",
        "Email support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Growth Plan",
      description: "Ideal for growing brands ready to scale",
      features: [
        "Full website + automation",
        "Creator collaborations",
        "Performance ads",
        "Analytics dashboard",
        "WhatsApp automation",
        "Priority support",
      ],
      cta: "Most Popular",
      popular: true,
    },
    {
      name: "Pro / Enterprise",
      description: "Complete solution for established brands",
      features: [
        "Fully customized solutions",
        "End-to-end BrandOps suite",
        "Dedicated manager",
        "Monthly strategy sessions",
        "AI & automation workflows",
        "Managed campaigns",
        "Custom dashboards",
      ],
      cta: "Contact Us",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            data-testid="text-pricing-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Flexible Plans for Every Brand
          </h1>
          <p
            data-testid="text-pricing-subtitle"
            className="text-xl text-muted-foreground"
          >
            Choose the plan that fits your needs. Scale as you grow.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                data-testid={`card-pricing-${index}`}
                className={`p-8 flex flex-col relative hover-elevate transition-all duration-300 ${
                  plan.popular
                    ? "border-2 border-primary shadow-lg lg:-translate-y-4"
                    : "hover:-translate-y-1"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      data-testid={`feature-${plan.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${featureIndex}`}
                      className="flex items-start gap-3"
                    >
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  data-testid={`button-pricing-${index}`}
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90"
                      : "bg-secondary hover:bg-secondary/90"
                  }`}
                >
                  <Link href="/contact">
                    {plan.cta}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 data-testid="text-custom-pricing-title" className="text-3xl sm:text-4xl font-bold mb-6">
            Need a Custom Solution?
          </h2>
          <p data-testid="text-custom-pricing-description" className="text-lg text-muted-foreground mb-8">
            Every business is unique. Let's discuss your specific needs and create a tailored plan that works for you.
          </p>
          <Button
            asChild
            data-testid="button-book-consultation"
            size="lg"
            className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
          >
            <Link href="/contact">
              Book a Consultation
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
