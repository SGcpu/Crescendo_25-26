import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import DotGrid from "@/components/DotGrid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema } from "@shared/schema";

const extendedContactSchema = insertContactSchema.extend({
  phone: z.string().optional(),
  type: z.string().optional(),
});

type ContactFormData = z.infer<typeof extendedContactSchema>;

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(extendedContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      type: "general",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
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
        description:
          error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };


  const contactInfo = [
    {
      title: "General Secretary - Yashdeep Kulkarni",
      details: ["+91 93223 11666"],
      icon: "fab fa-whatsapp",
      whatsapp: "https://wa.me/919322311666",
    },
    {
      title: "Technical Secretary - Jack Sequeira",
      details: ["+91 91379 67300"],
      icon: "fab fa-whatsapp",
      whatsapp: "https://wa.me/919137967300",
    },
    {
      title: "PR Head - Branch Mathew",
      details: ["+91 99209 10592"],
      icon: "fab fa-whatsapp",
      whatsapp: "https://wa.me/919920910592",
    },
  ];

  const faqs = [
    {
      question: "How do I register for events?",
      answer:
        "You can register using the official Google Forms linked in each event section of the Crescendo brochure or on the website. Each event has its own unique registration link.",
    },
    {
      question: "What is included in the registration fee?",
      answer:
        "The fee covers participation in your selected event(s), access to festival venues, and eligibility for certificates and prizes. Some events may be free to enter.",
    },
    {
      question: "Are there accommodation arrangements?",
      answer:
        "Participants from outside Mumbai can contact the organizing team for assistance with nearby accommodation suggestions, though complete accommodation would not be provided by us.",
    },
    {
      question: "What should I bring to the festival?",
      answer:
        "Carry your college ID card, registration confirmation, and essential materials (like laptops, chargers, or robotics kits) depending on the event you've registered for.",
    },
    {
      question: "Can I participate remotely?",
      answer:
        "No, for all events being present physically in the college during final offline rounds on event days is required.",
    },
    {
      question: "What are the judging criteria for competitions?",
      answer:
        "Judging is based on innovation, technical execution, feasibility, presentation, and adherence to event-specific rules. Refer to the points table for better details of some events. Also judge's decision remains final for scoring points.",
    },
    {
      question: "Is there a code of conduct?",
      answer:
        "All participants must maintain professionalism, punctuality, and respect towards peers and organizers. Misconduct, littering, or property damage will lead to disqualification.",
    },
    {
      question: "How can I become a volunteer?",
      answer:
        "Students of FR.CRCE can apply through the Student Council or event organizing committees prior to the fest. Watch for official announcements and forms.",
    },
    {
      question: "Are team events allowed?",
      answer:
        "Yes. Most competitions are team-based, with team sizes varying from 2 to 4 participants. Refer to each event's rulebook for specifics.",
    },
    {
      question: "What are the flagship events of Crescendo 2025?",
      answer:
        "The three flagship competitions are: Hardware & Simulation Hackathon (Synergy), Intercollegiate Robo Fight (RoboRift 2.0), and CRCE Esports (BGMI and Valorant).",
    },
    {
      question: "How will winners be announced?",
      answer:
        "Results will be declared after event evaluations are completed and verified by the judging panel and Crescendo managing committee.",
    },
    {
      question: "Whom do I contact for queries?",
      answer:
        "For any doubts or assistance, reach out to the Student Council: Jack Sequeira (Technical Secretary): +91 91379 67300, Branch Mathew (PR Head): +91 99209 10592, Yashdeep Kulkarni (General Secretary): +91 93223 11666.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 relative">
      {/* Dot Grid Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <DotGrid
          dotSize={6}
          gap={25}
          baseColor="rgba(82, 39, 255, 0.15)"
          activeColor="rgba(82, 39, 255, 0.6)"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to be part of something extraordinary? We're here to answer
            your questions and help you join the Crescendo Community.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Contact Form */}
          <div className="lg:col-span-2">
            {/* Team Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Yashdeep Kulkarni Card */}
              <div className="group relative overflow-hidden rounded-3xl border-2 border-[var(--noir-gold)]/30 hover:border-red-500 transition-all duration-700 hover:scale-110 hover:rotate-3 hover:shadow-[0_0_60px_rgba(239,68,68,0.6)] cursor-pointer h-80">
                {/* Background Image - Always Visible */}
                <div className="absolute inset-0">
                  <img
                    src="/images/team/yashdeep_11zon.webp"
                    alt="Yashdeep Kulkarni"
                    className="w-full h-full object-cover"
                  />
                  {/* Very subtle overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  {/* Name and Title - Positioned lower to avoid blocking face */}
                  <div className="transform group-hover:translate-y-0 transition-all duration-700 mt-16">
                    <h3 className="font-cinzel text-2xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors duration-500 drop-shadow-lg">
                      Yashdeep Kulkarni
                    </h3>
                    <p className="text-lg text-white/90 mb-6 group-hover:text-white transition-colors duration-500 font-semibold drop-shadow-md">
                      General Secretary
                    </p>
                  </div>

                  {/* Social Links - Appear on hover */}
                  <div className="flex justify-center space-x-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                    <a
                      href="https://www.linkedin.com/in/yashdeep-kulkarni-33476a216"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-500 hover:text-white transition-all duration-500 hover:scale-125 hover:rotate-12"
                    >
                      <i className="fab fa-linkedin text-lg"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/yashdeepkulkarni_10/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-500 hover:text-white transition-all duration-500 hover:scale-125 hover:-rotate-12"
                    >
                      <i className="fab fa-instagram text-lg"></i>
                    </a>
                    <a
                      href="https://github.com/ValourWarrior"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-500 hover:text-white transition-all duration-500 hover:scale-125 hover:rotate-12"
                    >
                      <i className="fab fa-github text-lg"></i>
                    </a>
                  </div>
                </div>

              </div>

              {/* Jack Sequeira Card */}
              <div className="group relative overflow-hidden rounded-3xl border-2 border-[var(--noir-gold)]/30 hover:border-red-500 transition-all duration-700 hover:scale-110 hover:-rotate-3 hover:shadow-[0_0_60px_rgba(239,68,68,0.6)] cursor-pointer h-80">
                {/* Background Image - Always Visible */}
                <div className="absolute inset-0">
                  <img
                    src="/images/team/jack_11zon.webp"
                    alt="Jack Sequeira"
                    className="w-full h-full object-cover"
                  />
                  {/* Very subtle overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  {/* Name and Title - Positioned lower to avoid blocking face */}
                  <div className="transform group-hover:translate-y-0 transition-all duration-700 mt-16">
                    <h3 className="font-cinzel text-2xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors duration-500 drop-shadow-lg">
                      Jack Sequeira
                    </h3>
                    <p className="text-lg text-white/90 mb-6 group-hover:text-white transition-colors duration-500 font-semibold drop-shadow-md">
                      Technical Secretary
                    </p>
                  </div>

                  {/* Social Links - Appear on hover */}
                  <div className="flex justify-center space-x-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                    <a
                      href="https://www.linkedin.com/in/gabbar-v7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-500 hover:text-white transition-all duration-500 hover:scale-125 hover:rotate-12"
                    >
                      <i className="fab fa-linkedin text-lg"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/gabbar_v7/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-500 hover:text-white transition-all duration-500 hover:scale-125 hover:-rotate-12"
                    >
                      <i className="fab fa-instagram text-lg"></i>
                    </a>
                    <a
                      href="https://github.com/Gabbar-v7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-500 hover:text-white transition-all duration-500 hover:scale-125 hover:rotate-12"
                    >
                      <i className="fab fa-github text-lg"></i>
                    </a>
                  </div>
                </div>

              </div>

              {/* Branch Mathew Card */}
              <div className="group relative overflow-hidden rounded-3xl border-2 border-[var(--noir-gold)]/30 hover:border-red-500 transition-all duration-700 hover:scale-110 hover:rotate-2 hover:shadow-[0_0_60px_rgba(239,68,68,0.6)] cursor-pointer h-80">
                {/* Background Image - Always Visible */}
                <div className="absolute inset-0">
                  <img
                    src="/images/team/branch_11zon.webp"
                    alt="Branch Mathew"
                    className="w-full h-full object-cover"
                  />
                  {/* Very subtle overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  {/* Name and Title - Positioned lower to avoid blocking face */}
                  <div className="transform group-hover:translate-y-0 transition-all duration-700 mt-16">
                    <h3 className="font-cinzel text-2xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors duration-500 drop-shadow-lg">
                      Branch Mathew
                    </h3>
                    <p className="text-lg text-white/90 mb-6 group-hover:text-white transition-colors duration-500 font-semibold drop-shadow-md">
                      PR Head
                    </p>
                  </div>

                  {/* Social Links - Appear on hover */}
                  <div className="flex justify-center space-x-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                    <a
                      href="https://www.linkedin.com/in/branchmathew/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-500 hover:text-white transition-all duration-500 hover:scale-125 hover:rotate-12"
                    >
                      <i className="fab fa-linkedin text-lg"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/mathewbranch16/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-500 hover:text-white transition-all duration-500 hover:scale-125 hover:-rotate-12"
                    >
                      <i className="fab fa-instagram text-lg"></i>
                    </a>
                    <a
                      href="https://github.com/mathewbranch16"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-500 hover:text-white transition-all duration-500 hover:scale-125 hover:rotate-12"
                    >
                      <i className="fab fa-github text-lg"></i>
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-card/80 backdrop-blur-sm border border-border shadow-lg hover:border-red-500 transition-all duration-300 cursor-pointer">
              <CardHeader>
                <CardTitle className="font-cinzel text-2xl">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
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
                                className="bg-background border-border hover:border-red-500 transition-all duration-300"
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
                                className="bg-background border-border hover:border-red-500 transition-all duration-300"
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
                              className="bg-background border-border hover:border-red-500 transition-all duration-300"
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
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us how we can help you..."
                              className="bg-background border-border min-h-[120px] hover:border-red-500 transition-all duration-300"
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
            <Card className="bg-card/80 backdrop-blur-sm border border-border shadow-lg hover:border-red-500 transition-all duration-300 cursor-pointer">
              <CardHeader>
                <CardTitle className="font-cinzel text-xl">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className={`${info.icon} text-primary`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      {info.details.map((detail, i) => (
                        <div key={i}>
                          {info.whatsapp ? (
                            <a
                              href={info.whatsapp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground text-sm hover:text-green-500 transition-colors duration-300 flex items-center space-x-2"
                            >
                              <i className="fab fa-whatsapp text-green-500"></i>
                              <span>{detail}</span>
                            </a>
                          ) : (
                            <p className="text-muted-foreground text-sm">
                              {detail}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>


            {/* Social Media */}
            <Card className="bg-card/80 backdrop-blur-sm border border-border shadow-lg hover:border-red-500 transition-all duration-300 cursor-pointer">
              <CardHeader>
                <CardTitle className="font-cinzel text-xl">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Stay updated with the latest news and announcements
                </p>
                <div className="grid grid-cols-1 gap-3">
                  <a
                    href="https://www.instagram.com/frcrce_official?igsh=cDZrNjVxMDJocDdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 p-3 bg-pink-500/20 text-pink-400 rounded-lg hover:bg-pink-500/30 hover:border-red-500 border border-transparent transition-all duration-300"
                    data-testid="social-instagram"
                  >
                    <i className="fab fa-instagram" />
                    <span className="text-sm">Instagram</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/students-council-crce-b9a005316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 p-3 bg-blue-600/20 text-blue-500 rounded-lg hover:bg-blue-600/30 hover:border-red-500 border border-transparent transition-all duration-300"
                    data-testid="social-linkedin"
                  >
                    <i className="fab fa-linkedin" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a
                    href="https://youtube.com/@studentscouncilcrce?si=yrUHbKgLMQN4MMi0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 p-3 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 hover:border-red-500 border border-transparent transition-all duration-300"
                    data-testid="social-youtube"
                  >
                    <i className="fab fa-youtube" />
                    <span className="text-sm">YouTube</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <Card className="bg-card/80 backdrop-blur-sm border border-border shadow-lg hover:border-red-500 transition-all duration-300 cursor-pointer">
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
                    className="border border-border rounded-lg px-6 hover:border-red-500 transition-all duration-300 cursor-pointer"
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
          <Card className="bg-card/80 backdrop-blur-sm border border-border overflow-hidden shadow-lg hover:border-red-500 transition-all duration-300 cursor-pointer">
            <CardHeader>
              <CardTitle className="font-cinzel text-2xl text-center">
                Find Us
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.44101371307!2d72.81779557588335!3d19.044338052964406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9410830616d%3A0x111b63353dbbce01!2sFr.%20Conceicao%20Rodrigues%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1759664442408!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
