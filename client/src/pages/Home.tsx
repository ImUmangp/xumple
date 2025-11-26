import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Code2,
  TrendingUp,
  Settings,
  Check,
  Target,
  Zap,
  Users,
  BarChart3,
  Shield,
  Handshake,
  ChevronRight,
  Quote,
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: Code2,
      title: "Technology Services",
      description:
        "Full-stack development, mobile apps, automation tools, and digital infrastructure to power your brand.",
    },
    {
      icon: TrendingUp,
      title: "Marketing & Growth",
      description:
        "Performance marketing, influencer collaborations, brand strategy, and data-driven campaigns that convert.",
    },
    {
      icon: Settings,
      title: "Operations & Business Services",
      description:
        "Business consulting, CRM setup, customer operations, and end-to-end project management for seamless execution.",
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: "End-to-end Ecosystem",
      description: "Everything you need under one roof—no need for multiple agencies.",
    },
    {
      icon: Zap,
      title: "Fast Execution",
      description: "Agile workflows and rapid deployment to get you to market faster.",
    },
    {
      icon: BarChart3,
      title: "Data-driven Growth",
      description: "Every decision backed by analytics and measurable outcomes.",
    },
    {
      icon: Shield,
      title: "ROI-focused Approach",
      description: "We optimize for results that matter to your bottom line.",
    },
    {
      icon: Users,
      title: "Tech + Marketing + Automation",
      description: "Unique hybrid model that combines all growth functions seamlessly.",
    },
    {
      icon: Handshake,
      title: "Long-term Partnership",
      description: "We grow with you, adapting strategies as your business evolves.",
    },
  ];

  const workflow = [
    { step: 1, title: "Discovery Call", description: "Understand your goals and challenges" },
    { step: 2, title: "Requirement Mapping", description: "Define scope and deliverables" },
    { step: 3, title: "Proposal & Pricing", description: "Transparent, customized quotes" },
    { step: 4, title: "Onboarding", description: "Seamless handoff and kickoff" },
    { step: 5, title: "Build Phase", description: "Execution with regular updates" },
    { step: 6, title: "Testing & Go-live", description: "Quality assurance and launch" },
    { step: 7, title: "Growth & Optimization", description: "Continuous improvement cycles" },
    { step: 8, title: "Long-term Partnership", description: "Ongoing support and scaling" },
  ];

  const testimonials = [
    {
      quote: "BrandOps transformed our digital presence completely. Their hybrid approach saved us months of coordination with multiple vendors.",
      author: "Sarah Chen",
      role: "CEO, TechFlow",
    },
    {
      quote: "The automation workflows alone have saved us 20+ hours per week. Plus, their marketing campaigns are driving real ROI.",
      author: "Michael Torres",
      role: "Founder, GrowthLabs",
    },
    {
      quote: "Finally, a partner that understands both technology and marketing. The results speak for themselves—3x conversion in 6 months.",
      author: "Priya Sharma",
      role: "CMO, NexGen Solutions",
    },
  ];

  const faqs = [
    {
      question: "What services does BrandOps provide?",
      answer:
        "We offer a complete growth stack: Technology Services (websites, apps, automation), Marketing & Growth (performance ads, influencer collaborations, brand strategy), and Operations & Business Services (consulting, CRM setup, project management). Think of us as your hybrid partner combining a tech studio, marketing agency, and automation hub.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Timelines vary based on scope. A landing page can be ready in 1-2 weeks, while a full e-commerce platform with marketing campaigns might take 6-8 weeks. We provide detailed timelines during the proposal phase and keep you updated throughout.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "We offer flexible pricing: project-based for one-time builds, retainer-based for ongoing marketing and operations, and custom enterprise packages. Check our Pricing page for tier details, or book a call for a personalized quote.",
    },
    {
      question: "What does the onboarding process look like?",
      answer:
        "After you book a discovery call, we map requirements, provide a detailed proposal, and once approved, onboard you with a dedicated project manager. You'll get regular updates, access to our project dashboard, and clear communication channels throughout.",
    },
    {
      question: "What technology stack do you use?",
      answer:
        "We're platform-agnostic and choose the best tools for your needs: React/Next.js for web, React Native for mobile, Node.js/Python for backend, cloud hosting (AWS/Azure), and integrate with platforms like Shopify, Razorpay, Meta Ads, Google Ads, and WhatsApp Business API.",
    },
    {
      question: "Do you work with influencers and creators?",
      answer:
        "Yes! We have a dedicated creator collaboration service that includes matchmaking, campaign management, escrow-based execution, ROI tracking, and ASCI-compliant workflows. We handle everything from outreach to payment to performance reporting.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.15),transparent_50%)]" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="space-y-3 mb-12">
            <p
              data-testid="text-hero-line-1"
              className="text-lg sm:text-xl text-muted-foreground animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]"
            >
              You're not a typical agency.
            </p>
            <p
              data-testid="text-hero-line-2"
              className="text-lg sm:text-xl text-muted-foreground animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]"
            >
              Not just a dev shop.
            </p>
            <p
              data-testid="text-hero-line-3"
              className="text-lg sm:text-xl text-muted-foreground animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]"
            >
              Not just marketing.
            </p>
            <p
              data-testid="text-hero-line-4"
              className="text-lg sm:text-xl text-muted-foreground animate-fade-in opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]"
            >
              Not just automation.
            </p>
          </div>

          <h1
            data-testid="text-hero-title"
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in opacity-0 [animation-delay:1000ms] [animation-fill-mode:forwards]"
          >
            We are a{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Brand Growth Partner
            </span>
          </h1>

          <p
            data-testid="text-hero-subtitle"
            className="text-xl sm:text-2xl text-muted-foreground mb-4 animate-fade-in opacity-0 [animation-delay:1200ms] [animation-fill-mode:forwards]"
          >
            A hybrid between Tech Studio + Marketing Partner + Automation Hub.
          </p>

          <p
            data-testid="text-hero-tagline"
            className="text-2xl sm:text-3xl font-semibold mb-12 animate-fade-in opacity-0 [animation-delay:1400ms] [animation-fill-mode:forwards]"
          >
            A Complete Growth Stack for Modern Brands.
          </p>

          <p
            data-testid="text-hero-description"
            className="text-lg text-muted-foreground mb-8 animate-fade-in opacity-0 [animation-delay:1600ms] [animation-fill-mode:forwards]"
          >
            Tech + Marketing + Automation + Strategy — all in one place.
          </p>

          <Button
            asChild
            data-testid="button-hero-cta"
            size="lg"
            className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 animate-fade-in opacity-0 [animation-delay:1800ms] [animation-fill-mode:forwards]"
          >
            <Link href="/contact">
              Book Free Strategy Call
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 data-testid="text-what-we-do-title" className="text-3xl sm:text-4xl font-bold text-center mb-16">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                data-testid={`card-service-${index}`}
                className="p-8 hover-elevate transition-all duration-300 hover:-translate-y-1"
              >
                <service.icon className="h-12 w-12 text-primary mb-6" />
                <h3 data-testid={`heading-service-${index}`} className="text-xl font-semibold mb-4">{service.title}</h3>
                <p data-testid={`text-service-description-${index}`} className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 data-testid="text-why-choose-us-title" className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                data-testid={`card-benefit-${index}`}
                className="p-6 hover-elevate transition-all duration-300"
              >
                <benefit.icon className="h-8 w-8 text-primary mb-4" />
                <h3 data-testid={`heading-benefit-${index}`} className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p data-testid={`text-benefit-description-${index}`} className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 data-testid="text-workflow-title" className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Our Workflow
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflow.map((item, index) => (
              <Card
                key={index}
                data-testid={`card-workflow-${index}`}
                className="p-6 relative"
              >
                <div className="absolute -top-4 left-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  {item.step}
                </div>
                <div className="mt-8">
                  <h3 data-testid={`heading-workflow-${index}`} className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p data-testid={`text-workflow-description-${index}`} className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 data-testid="text-testimonials-title" className="text-3xl sm:text-4xl font-bold text-center mb-16">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                data-testid={`card-testimonial-${index}`}
                className="p-8 hover-elevate transition-all duration-300"
              >
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p data-testid={`text-testimonial-quote-${index}`} className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p data-testid={`text-testimonial-author-${index}`} className="font-semibold">{testimonial.author}</p>
                    <p data-testid={`text-testimonial-role-${index}`} className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-card/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 data-testid="text-faq-title" className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                data-testid={`accordion-faq-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span data-testid={`text-faq-question-${index}`} className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent data-testid={`text-faq-answer-${index}`} className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-background" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 data-testid="text-cta-title" className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Grow Your Brand?
          </h2>
          <p data-testid="text-cta-description" className="text-lg text-muted-foreground mb-8">
            Book a free strategy call and let's discuss how we can accelerate your growth.
          </p>
          <Button
            asChild
            data-testid="button-cta-book-call"
            size="lg"
            className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
          >
            <Link href="/contact">
              Book Your Free Strategy Call
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
