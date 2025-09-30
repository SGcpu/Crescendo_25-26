import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Events from "@/pages/Events";
import EventDetail from "@/pages/EventDetail";
import Sponsors from "@/pages/Sponsors";
import Brochure from "@/pages/Brochure";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import CardNav from "@/components/CardNav";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

function Router() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <CardNav isScrolled={isScrolled} />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/events/:slug" component={EventDetail} />
        <Route path="/sponsors" component={Sponsors} />
        <Route path="/brochure" component={Brochure} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
