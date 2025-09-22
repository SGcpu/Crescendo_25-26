import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { insertContactSchema } from '@shared/schema';

const extendedContactSchema = insertContactSchema.extend({
  phone: z.string().optional(),
});

type ContactFormData = z.infer<typeof extendedContactSchema>;

export default function Contact() {
  const [activeTab, setActiveTab] = useState('general');
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(extendedContactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      type: 'general',
      message: '',
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
        className: "bg-accent text-accent-foreground",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const contactTypes = [
    {
      id: 'general',
      title: 'General Inquiry',
      description: 'Questions about the festival, events, or general information',
      icon: 'fas fa-info-circle',
      color: 'primary'
    },
    {
      id: 'volunteer',
      title: 'Volunteer',
      description: 'Join our team and help make Crescendo Festival amazing',
      icon: 'fas fa-hands-helping',
      color: 'accent'
    },
    {
      id: 'press',
      title: 'Press & Media',
      description: 'Media inquiries, interviews, and press kit requests',
      icon: 'fas fa-newspaper',
      color: 'secondary'
    },
    {
      id: 'partnership',
      title: 'Partnerships',
      description: 'Sponsorship opportunities and strategic partnerships',
      icon: 'fas fa-handshake',
      color: 'primary'
    }
  ];

  const contactInfo = [
    {
      title: 'Festival Headquarters',
      details: ['Innovation District, Mumbai', 'Maharashtra, India - 400001'],
      icon: 'fas fa-map-marker-alt'
    },
    {
      title: 'General Information',
      details: ['+91 98765 43210', 'info@crescendofestival.com'],
      icon: 'fas fa-phone'
    },
    {
      title: 'Media Relations',
      details: ['press@crescendofestival.com', 'Download Press Kit'],
      icon: 'fas fa-newspaper'
    },
    {
      title: 'Partnerships',
      details: ['partnerships@crescendofestival.com', 'Sponsorship Opportunities'],
      icon: 'fas fa-briefcase'
    }
  ];

  const faqs = [
    {
      question: 'How do I register for events?',
      answer: 'You can register for individual events through our Events page. Each event has its own registration form and requirements. Early bird discounts are available until December 15, 2025.'
    },
    {
      question: 'What is included in the registration fee?',
      answer: 'Registration includes access to all workshops, networking sessions, meals during the festival, official merchandise, and participation certificates. Competition-specific prizes are additional.'
    },
    {
      question: 'Are there accommodation arrangements?',
      answer: 'We have partnerships with local hotels offering discounted rates for participants. A list of recommended accommodations is available in our brochure and will be sent upon registration.'
    },
    {
      question: 'Can I participate remotely?',
      answer: 'While Crescendo Festival is primarily an in-person experience, select workshops and keynote sessions will be live-streamed. However, competitions and hands-on activities require physical presence.'
    },
    {
      question: 'What should I bring to the festival?',
      answer: 'Bring your laptop, chargers, any specific hardware for competitions, government-issued ID for verification, and comfortable clothing. Detailed packing lists are provided for specific events.'
    },
    {
      question: 'How can I become a volunteer?',
      answer: 'We welcome volunteers! Fill out the volunteer application form above or email volunteer@crescendofestival.com. Volunteers receive festival access, meals, exclusive volunteer merchandise, and networking opportunities.'
    },
    {
      question: 'What are the judging criteria for competitions?',
      answer: 'Competitions are judged on innovation, technical execution, presentation quality, and real-world impact. Detailed rubrics are provided for each competition during the briefing sessions.'
    },
    {
      question: 'Is there a code of conduct?',
      answer: 'Yes, all participants must adhere to our Code of Conduct, which promotes inclusive, respectful, and professional behavior. The full document is available on our website and in the brochure.'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to be part of something extraordinary? We're here to answer your questions 
            and help you join the Crescendo Festival community.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Contact Form */}
          <div className="lg:col-span-2">
            {/* Contact Type Selection */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {contactTypes.map((type) => (
                <Card
                  key={type.id}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeTab === type.id 
                      ? 'border-accent bg-accent/5' 
                      : 'border-border hover:border-accent/50'
                  }`}
                  onClick={() => {
                    setActiveTab(type.id);
                    form.setValue('type', type.id);
                  }}
                  data-testid={`contact-type-${type.id}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-${type.color === 'accent' ? 'accent' : 'primary'}/20 rounded-full flex items-center justify-center flex-shrink-0`}>
                        <i className={`${type.icon} text-${type.color === 'accent' ? 'accent' : 'primary'}`} />
                      </div>
                      <div>
                        <h3 className="font-cinzel font-bold text-card-foreground mb-2">
                          {type.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {type.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <Card className="bg-card border border-border">
              <CardHeader>
                <CardTitle className="font-cinzel text-2xl">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your full name"
                                className="bg-background border-border"
                                data-testid="input-name"
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
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="your@email.com"
                                className="bg-background border-border"
                                data-testid="input-email"
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
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+91 98765 43210"
                              className="bg-background border-border"
                              data-testid="input-phone"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Inquiry Type *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value} disabled>
                            <FormControl>
                              <SelectTrigger className="bg-background border-border" data-testid="select-type">
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {contactTypes.map((type) => (
                                <SelectItem key={type.id} value={type.id}>
                                  {type.title}
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
                              placeholder="Tell us how we can help you..."
                              className="bg-background border-border min-h-[120px]"
                              data-testid="textarea-message"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold py-3"
                      disabled={contactMutation.isPending}
                      data-testid="button-send-message"
                    >
                      {contactMutation.isPending ? (
                        <>
                          <i className="fas fa-spinner animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="bg-card border border-border">
              <CardHeader>
                <CardTitle className="font-cinzel text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className={`${info.icon} text-primary`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-card border border-border">
              <CardHeader>
                <CardTitle className="font-cinzel text-xl">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  data-testid="button-download-media-kit"
                >
                  <i className="fas fa-download mr-2" />
                  Download Media Kit
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  data-testid="button-sponsorship-package"
                >
                  <i className="fas fa-file-pdf mr-2" />
                  Sponsorship Package
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  data-testid="button-volunteer-guide"
                >
                  <i className="fas fa-hands-helping mr-2" />
                  Volunteer Guide
                </Button>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-card border border-border">
              <CardHeader>
                <CardTitle className="font-cinzel text-xl">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Stay updated with the latest news and announcements
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="#"
                    className="flex items-center justify-center space-x-2 p-3 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors"
                    data-testid="social-twitter"
                  >
                    <i className="fab fa-twitter" />
                    <span className="text-sm">Twitter</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center space-x-2 p-3 bg-pink-500/20 text-pink-400 rounded-lg hover:bg-pink-500/30 transition-colors"
                    data-testid="social-instagram"
                  >
                    <i className="fab fa-instagram" />
                    <span className="text-sm">Instagram</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center space-x-2 p-3 bg-blue-600/20 text-blue-500 rounded-lg hover:bg-blue-600/30 transition-colors"
                    data-testid="social-linkedin"
                  >
                    <i className="fab fa-linkedin" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center space-x-2 p-3 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors"
                    data-testid="social-discord"
                  >
                    <i className="fab fa-discord" />
                    <span className="text-sm">Discord</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <Card className="bg-card border border-border">
            <CardHeader>
              <CardTitle className="font-cinzel text-2xl text-center">
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="border border-border rounded-lg px-6"
                    data-testid={`faq-item-${index}`}
                  >
                    <AccordionTrigger className="font-semibold text-left hover:text-accent">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="bg-card border border-border overflow-hidden">
            <CardHeader>
              <CardTitle className="font-cinzel text-2xl text-center">
                Find Us
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-map-marker-alt text-accent text-2xl" />
                  </div>
                  <h3 className="font-cinzel text-xl font-bold mb-2 text-foreground">
                    Innovation District, Mumbai
                  </h3>
                  <p className="text-muted-foreground">
                    Interactive map coming soon
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
