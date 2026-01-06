import { Card } from "@/components/ui/card";
import { Lightbulb, Eye, Heart, TrendingUp, Shield, Users } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We stay ahead of the curve, leveraging cutting-edge technology and creative strategies.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description:
        "Clear communication, honest pricing, and open collaboration at every step.",
    },
    {
      icon: Heart,
      title: "Customer Obsession",
      description:
        "Your success is our success. We're invested in your long-term growth.",
    },
    {
      icon: TrendingUp,
      title: "Data-driven Strategies",
      description:
        "Every decision is backed by analytics, A/B testing, and measurable outcomes.",
    },
    {
      icon: Shield,
      title: "Automation-first Mindset",
      description:
        "We build systems that scale, reducing manual work and maximizing efficiency.",
    },
    {
      icon: Users,
      title: "Long-term Partnerships",
      description:
        "We're not just a vendor—we're your growth partner, evolving with your needs.",
    },
  ];

  const team = [
    {
      name: "Alex Rivera",
      role: "Founder / CEO",
      initial: "AR",
    },
    {
      name: "Jordan Lee",
      role: "Tech Lead",
      initial: "JL",
    },
    {
      name: "Sam Chen",
      role: "Marketing Lead",
      initial: "SC",
    },
    {
      name: "Morgan Taylor",
      role: "Automation Architect",
      initial: "MT",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            data-testid="text-about-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8"
          >
            Our Vision
          </h1>
          <p
            data-testid="text-vision-statement"
            className="text-xl sm:text-2xl text-muted-foreground leading-relaxed"
          >
            To combine technology, promotion, automation, and brand strategy
            under one unified ecosystem, making growth simple, measurable, and
            affordable for every business.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                data-testid="text-who-we-are-title"
                className="text-3xl sm:text-4xl font-bold mb-6"
              >
                Who We Are
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p data-testid="text-who-we-are-intro">
                  Xumple is more than an agency—we're a{" "}
                  <span className="text-foreground font-semibold">
                    Brand Growth Partner
                  </span>{" "}
                  that combines the best of three worlds:
                </p>
                <ul className="space-y-3 ml-6">
                  <li
                    data-testid="item-who-we-are-0"
                    className="flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong className="text-foreground">Tech Studio:</strong>{" "}
                      Building websites, apps, and automation tools that power
                      modern businesses
                    </span>
                  </li>
                  <li
                    data-testid="item-who-we-are-1"
                    className="flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong className="text-foreground">
                        Marketing Partner:
                      </strong>{" "}
                      Driving growth through performance ads, influencer
                      collaborations, and data-driven campaigns
                    </span>
                  </li>
                  <li
                    data-testid="item-who-we-are-2"
                    className="flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">•</span>
                    <span>
                      <strong className="text-foreground">
                        Automation Hub:
                      </strong>{" "}
                      Streamlining operations with CRM systems, workflow
                      automation, and business intelligence
                    </span>
                  </li>
                </ul>
                <p data-testid="text-who-we-are-closing">
                  We're an outcome-focused team obsessed with helping brands
                  grow faster, smarter, and more efficiently. Instead of
                  juggling multiple vendors, you get one partner who understands
                  the full picture.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 p-12 flex items-center justify-center">
                <div className="text-center">
                  <div
                    data-testid="text-ecosystem-degree"
                    className="text-6xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4"
                  >
                    360°
                  </div>
                  <p
                    data-testid="text-ecosystem-title"
                    className="text-xl font-semibold"
                  >
                    Growth Ecosystem
                  </p>
                  <p
                    data-testid="text-ecosystem-subtitle"
                    className="text-muted-foreground mt-2"
                  >
                    Tech + Marketing + Automation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-testid="text-values-title"
            className="text-3xl sm:text-4xl font-bold text-center mb-16"
          >
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                data-testid={`card-value-${index}`}
                className="p-8 hover-elevate transition-all duration-300 hover:-translate-y-1"
              >
                <value.icon className="h-12 w-12 text-primary mb-6" />
                <h3
                  data-testid={`heading-value-${index}`}
                  className="text-xl font-semibold mb-3"
                >
                  {value.title}
                </h3>
                <p
                  data-testid={`text-value-description-${index}`}
                  className="text-muted-foreground leading-relaxed"
                >
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-20 lg:py-32 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            data-testid="text-team-title"
            className="text-3xl sm:text-4xl font-bold text-center mb-16"
          >
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                data-testid={`card-team-${index}`}
                className="p-6 text-center hover-elevate transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-4">
                  {member.initial}
                </div>
                <h3
                  data-testid={`text-team-name-${index}`}
                  className="text-lg font-semibold mb-1"
                >
                  {member.name}
                </h3>
                <p
                  data-testid={`text-team-role-${index}`}
                  className="text-sm text-muted-foreground"
                >
                  {member.role}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>*/}
    </div>
  );
}
