import { Card } from "@/components/ui/card";
import {
  Code2,
  Smartphone,
  Workflow,
  Cloud,
  Users,
  TrendingUp,
  Palette,
  Briefcase,
  UserCheck,
  ClipboardList,
} from "lucide-react";

export default function Services() {
  const techServices = [
    {
      icon: Code2,
      title: "Website & App Development",
      items: [
        "Business websites",
        "E-commerce websites",
        "Portfolio/creator websites",
        "Landing pages",
        "Mobile apps (Android/iOS)",
        "Custom dashboards for brand operations",
      ],
    },
    {
      icon: Workflow,
      title: "Automation & Workflow Tools",
      items: [
        "Policy-based automations (CRM triggers, email sequences)",
        "Internal workflow automation",
        "Integrations with Shopify, Razorpay, Meta, Google Ads, WhatsApp API",
        "Business intelligence dashboards",
        "AI-based tools (chatbots, assistants, content generators)",
      ],
    },
    {
      icon: Cloud,
      title: "Digital Infrastructure Setup",
      items: [
        "Cloud hosting (Azure/AWS)",
        "Database & backend",
        "CRM implementation",
        "IAM & access management",
        "Data tracking/analytics setup",
      ],
    },
  ];

  const marketingServices = [
    {
      icon: Users,
      title: "Influencer & Creator Collaborations",
      items: [
        "Creator-brand matchmaking",
        "Campaign management",
        "Escrow-based execution",
        "ROI tracking",
        "ASCI-compliant workflows",
      ],
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing",
      items: [
        "Instagram Ads",
        "Facebook Ads",
        "Google Search & Display",
        "LinkedIn B2B ads",
        "Conversion-optimized landing pages",
        "Tracking & analytics (UTM, pixel, events)",
      ],
    },
    {
      icon: Palette,
      title: "Brand Strategy & Content",
      items: [
        "Brand identity creation",
        "Creative direction",
        "Social media strategy",
        "Content calendars",
        "Ad creatives & copy",
      ],
    },
  ];

  const operationsServices = [
    {
      icon: Briefcase,
      title: "Business Consulting",
      items: [
        "Go-to-market strategy",
        "Competitor analysis",
        "Pricing strategy",
        "Product-market fit consulting",
        "Launch planning",
      ],
    },
    {
      icon: UserCheck,
      title: "Customer Operations Setup",
      items: [
        "CRM setup",
        "Feedback systems",
        "Ticketing systems",
        "Automation for customer retention",
        "Loyalty programs",
      ],
    },
    {
      icon: ClipboardList,
      title: "Campaign & Project Management",
      items: [
        "End-to-end project handling",
        "Reporting dashboards",
        "Weekly/Monthly reviews",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            data-testid="text-services-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Our Services
          </h1>
          <p
            data-testid="text-services-subtitle"
            className="text-xl text-muted-foreground"
          >
            Comprehensive solutions across technology, marketing, and operations
          </p>
        </div>
      </section>

      <section id="tech" className="py-20 lg:py-32 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <h2 data-testid="text-tech-services-title" className="text-3xl sm:text-4xl font-bold">
                Technology Services
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              BrandTech Development Suite — Everything a modern business needs to run digitally.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {techServices.map((service, index) => (
              <Card
                key={index}
                data-testid={`card-tech-service-${index}`}
                className="p-8 hover-elevate transition-all duration-300"
              >
                <service.icon className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <ul className="space-y-2.5">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="text-primary mt-1 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="marketing" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h2 data-testid="text-marketing-services-title" className="text-3xl sm:text-4xl font-bold">
                Marketing & Growth Services
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Brand Promotion Suite — Drive awareness, engagement, and conversions.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {marketingServices.map((service, index) => (
              <Card
                key={index}
                data-testid={`card-marketing-service-${index}`}
                className="p-8 hover-elevate transition-all duration-300"
              >
                <service.icon className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <ul className="space-y-2.5">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="text-primary mt-1 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="operations" className="py-20 lg:py-32 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h2 data-testid="text-operations-services-title" className="text-3xl sm:text-4xl font-bold">
                Operations & Business Services
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              BrandOps Suite — Strategy, operations, and management for seamless execution.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {operationsServices.map((service, index) => (
              <Card
                key={index}
                data-testid={`card-operations-service-${index}`}
                className="p-8 hover-elevate transition-all duration-300"
              >
                <service.icon className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <ul className="space-y-2.5">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="text-primary mt-1 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
