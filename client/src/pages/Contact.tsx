import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, Linkedin, Twitter, Instagram, Facebook, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  
  const form = useForm({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      businessName: "",
      serviceInterest: "",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setSubmitted(true);
      form.reset();
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: InsertContactSubmission) => {
    submitMutation.mutate(data);
  };

  const serviceOptions = [
    "Technology Services",
    "Marketing & Growth",
    "Operations & Business",
    "Full BrandOps Suite",
    "Not Sure - Need Consultation",
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            data-testid="text-contact-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Let's Start Growing Together
          </h1>
          <p
            data-testid="text-contact-subtitle"
            className="text-xl text-muted-foreground"
          >
            Book a free strategy call and discover how BrandOps can accelerate your growth
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
                    <p className="text-muted-foreground mb-6">
                      Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                    <Button
                      data-testid="button-submit-another"
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                    >
                      Submit Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name *</FormLabel>
                            <FormControl>
                              <Input
                                data-testid="input-name"
                                placeholder="Your full name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input
                                data-testid="input-email"
                                type="email"
                                placeholder="your@email.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input
                                data-testid="input-phone"
                                type="tel"
                                placeholder="+1 (234) 567-890"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="businessName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Business Name</FormLabel>
                            <FormControl>
                              <Input
                                data-testid="input-business-name"
                                placeholder="Your company name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="serviceInterest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Interest</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger data-testid="select-service-interest">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {serviceOptions.map((service) => (
                                <SelectItem
                                  key={service}
                                  value={service}
                                  data-testid={`select-option-${service.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                >
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea
                              data-testid="textarea-message"
                              placeholder="Tell us about your project or goals..."
                              className="min-h-[150px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                        <Button
                          data-testid="button-submit-contact"
                          type="submit"
                          size="lg"
                          className="w-full bg-primary hover:bg-primary/90"
                          disabled={submitMutation.isPending}
                        >
                          {submitMutation.isPending ? "Sending..." : "Book a Strategy Call"}
                        </Button>
                      </form>
                    </Form>
                  </>
                )}
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:hello@brandops.com"
                    data-testid="link-contact-email"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Email</p>
                      <p className="text-sm">hello@brandops.com</p>
                    </div>
                  </a>
                  <a
                    href="tel:+1234567890"
                    data-testid="link-contact-phone"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Phone</p>
                      <p className="text-sm">+1 (234) 567-890</p>
                    </div>
                  </a>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Linkedin, label: "LinkedIn", href: "#" },
                    { icon: Twitter, label: "Twitter", href: "#" },
                    { icon: Instagram, label: "Instagram", href: "#" },
                    { icon: Facebook, label: "Facebook", href: "#" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      data-testid={`link-contact-social-${social.label.toLowerCase()}`}
                      className="flex items-center gap-2 p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors"
                    >
                      <social.icon className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
