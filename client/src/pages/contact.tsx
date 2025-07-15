import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      service: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: () => {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Contact Section */}
      <section className="pt-32 pb-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Ready to transform your business? Contact us today to discuss how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Office Location</h4>
                    <p className="text-slate-300">
                      123 Business Center Drive<br />
                      Suite 500<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Phone</h4>
                    <p className="text-slate-300">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email</h4>
                    <p className="text-slate-300">contact@sigma7group.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Business Hours</h4>
                    <p className="text-slate-300">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-white">Send Us a Message</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">First Name</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                                placeholder="Enter your first name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Last Name</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                                placeholder="Enter your last name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Email Address</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                              placeholder="Enter your email address"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Company</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                              placeholder="Enter your company name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Service Interest</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                                <SelectValue placeholder="Select a service..." />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="technology">Technology Solutions</SelectItem>
                              <SelectItem value="consulting">Business Consulting</SelectItem>
                              <SelectItem value="security">Cybersecurity</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
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
                          <FormLabel className="text-white">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              rows={4}
                              className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 resize-none"
                              placeholder="Tell us about your project or how we can help..."
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      disabled={contactMutation.isPending}
                      className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary"
                    >
                      {contactMutation.isPending ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
