import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BotIcon, Headphones, MessageSquare, VideoIcon } from "lucide-react";
import Header from "./ui/Header";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const LandingPage = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="flex flex-col min-h-screen bg-dark text-primary font-inter">
      {/* Multi-layer Background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Base gradient background */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(1200px 600px at 75% 20%, rgba(154,171,169,0.06), transparent 20%),
              linear-gradient(180deg, #0C0C0C, #050505)
            `
          }}
        />
        
        {/* Animated glow particles */}
        <div className="absolute top-[10%] right-[15%] w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[30%] left-[10%] w-[300px] h-[300px] rounded-full bg-accent-2/8 blur-[80px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-noise"></div>
      </div>

      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="flex-1 flex flex-col relative min-h-screen items-center justify-center text-center py-24 px-6 z-10">
        <motion.div 
          style={{ opacity, y: parallaxY }} 
          className="max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            {/* Floating accent badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass-border backdrop-blur-sm"
              style={{
                background: 'var(--glass)',
                border: '1px solid var(--glass-border)'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
              <span className="text-sm font-iin tracking-wide text-secondary">AI-Powered Meeting Intelligence</span>
            </motion.div>

            {/* Hero headline */}
            <h1 className="hero-title mb-8 leading-tight">
              Let AI Take Notes While You
              <br />
              <span className="text-accent-gradient">Lead the Conversation</span>
            </h1>
            
            {/* Hero description */}
            <p className="hero-description mb-12 max-w-3xl mx-auto leading-relaxed">
              autoMeet sends your smart assistant to every virtual meeting — it listens, records, 
              transcribes, and summarizes, so you can stay focused and present in every conversation.
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/signup">
                <Button className="btn-primary group">
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
              <Link to="#features">
                <Button className="btn-ghost group">
                  <span className="flex items-center">
                    Explore Features
                    <div className="ml-2 w-4 h-4 rounded-full border border-current opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  </span>
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <motion.div 
              className="flex justify-center items-center gap-8 mt-16 text-xs text-muted opacity-60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="uppercase tracking-wide">Enterprise Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-2"></div>
                <span className="uppercase tracking-wide">GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="uppercase tracking-wide">99.9% Uptime</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative overflow-hidden z-10">
        <div className="container mx-auto px-6">
          {/* Section header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass-border backdrop-blur-sm">
              <span className="text-xs font-medium tracking-wide text-muted uppercase">Features</span>
            </div>
            <h2 className="section-title mb-6">
              Unlock Smart Collaboration
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
              Transform how your team captures, processes, and acts on meeting insights with AI-powered automation.
            </p>
          </motion.div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuresData.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="feature-icon-container mb-8">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl group-hover:bg-accent/30 transition-colors duration-300"></div>
                </div>
                
                <h3 className="card-title mb-4">{feature.title}</h3>
                <p className="text-secondary leading-relaxed">{feature.description}</p>
                
                {/* Subtle hover indicator */}
                <div className="mt-6 flex items-center text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-glass-border py-16 px-6 relative z-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            {/* Brand section */}
            <div className="max-w-sm">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center mr-3">
                  <BotIcon className="h-4 w-4 text-accent" />
                </div>
                <span className="font-bold text-xl">autoMeet</span>
              </div>
              <p className="text-secondary leading-relaxed mb-6">
                Your AI-powered meeting buddy that captures, transcribes, and delivers powerful summaries 
                while you stay in the moment.
              </p>
              <div className="flex gap-4">
                {/* Social links placeholder */}
                <div className="w-8 h-8 rounded-full bg-glass border border-glass-border flex items-center justify-center hover:bg-glass-strong transition-colors cursor-pointer">
                  <div className="w-3 h-3 rounded-full bg-muted"></div>
                </div>
                <div className="w-8 h-8 rounded-full bg-glass border border-glass-border flex items-center justify-center hover:bg-glass-strong transition-colors cursor-pointer">
                  <div className="w-3 h-3 rounded-full bg-muted"></div>
                </div>
                <div className="w-8 h-8 rounded-full bg-glass border border-glass-border flex items-center justify-center hover:bg-glass-strong transition-colors cursor-pointer">
                  <div className="w-3 h-3 rounded-full bg-muted"></div>
                </div>
              </div>
            </div>

            {/* Links sections */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm">
              {footerData.map((section, index) => (
                <div key={index}>
                  <h3 className="font-semibold mb-6 text-primary uppercase tracking-wide text-xs">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <a 
                          href="#" 
                          className="text-secondary hover:text-accent transition-colors duration-200 hover:translate-x-1 inline-block transform"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-glass-border mt-12 pt-8">
            <p className="text-center text-muted text-sm">
              © 2025 autoMeet — Your smart meeting sidekick.
            </p>
          </div>
        </div>
      </footer>

      {/* Custom styles */}
      <style jsk global>{`
        :root {
          --bg: #0C0C0C;
          --bg-contrast: #0A0A0A;
          --surface: rgba(255,255,255,0.03);
          --surface-strong: rgba(255,255,255,0.06);
          --text-primary: rgba(236,238,238,0.95);
          --text-secondary: rgba(236,238,238,0.6);
          --accent: #9AABA9;
          --accent-2: #B2C7B9;
          --muted: #555E5D;
          --glass: rgba(255,255,255,0.04);
          --glass-border: rgba(255,255,255,0.06);
          --glass-strong: rgba(255,255,255,0.08);
          --focus: rgba(154,171,169,0.24);
          --radius-lg: 20px;
          --fw-regular: 400;
          --fw-medium: 500;
          --fw-semibold: 600;
          --fw-bold: 700;
        }

        * {
          font-family: "Inter", "Satoshi", "SF Pro Display", system-ui, -apple-system, sans-serif;
        }

        .bg-dark { background: var(--bg); }
        .text-primary { color: var(--text-primary); }
        .text-secondary { color: var(--text-secondary); }
        .text-muted { color: var(--muted); }

        .hero-title {
          font-size: clamp(2.5rem, 8vw, 5.5rem);
          font-weight: var(--fw-bold);
          line-height: 1.06;
          letter-spacing: -0.02em;
          color: var(--text-primary);
        }

        .text-accent-gradient {
          background: linear-gradient(135deg, var(--accent), var(--accent-2));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.25rem;
          font-weight: var(--fw-regular);
          color: var(--text-secondary);
          letter-spacing: 0.01em;
        }

        .section-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: var(--fw-bold);
          line-height: 1.1;
          color: var(--text-primary);
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: var(--fw-semibold);
          color: var(--text-primary);
        }

        .btn-primary {
          background: #fff;
          color: var(--bg);
          padding: 16px 32px;
          border-radius: 999px;
          font-weight: var(--fw-semibold);
          font-size: 1rem;
          box-shadow: 0 8px 24px rgba(12,12,12,0.6), inset 0 1px 0 rgba(255,255,255,0.1);
          border: none;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(12,12,12,0.8), inset 0 1px 0 rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.95);
        }

        .btn-ghost {
          background: var(--glass);
          border: 1px solid var(--glass-border);
          color: var(--text-primary);
          padding: 15px 30px;
          border-radius: 999px;
          font-weight: var(--fw-medium);
          font-size: 1rem;
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
        }

        .btn-ghost:hover {
          background: var(--glass-strong);
          border-color: rgba(255,255,255,0.1);
          transform: translateY(-2px);
        }

        .feature-card {
          background: var(--glass);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-lg);
          backdrop-filter: blur(12px) saturate(120%);
          box-shadow: 0 16px 40px rgba(2,2,2,0.6);
          padding: 32px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--glass-border), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .feature-card:hover::before {
          opacity: 1;
        }

        .feature-card:hover {
          border-color: rgba(255,255,255,0.1);
          box-shadow: 0 24px 60px rgba(2,2,2,0.8);
        }

        .feature-icon-container {
          position: relative;
          width: 80px;
          height: 80px;
          margin: 0 auto;
        }

        .feature-icon {
          position: relative;
          z-index: 10;
          width: 80px;
          height: 80px;
          rounded: 50%;
          background: var(--surface-strong);
          border: 1px solid var(--glass-border);
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(8px);
          border-radius: 50%;
        }

        .glass-border {
          background: var(--glass);
          border: 1px solid var(--glass-border);
        }

        .font-inter {
          font-family: "Inter", "Satoshi", "SF Pro Display", system-ui, sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-description {
            font-size: 1.1rem;
          }
          .feature-card {
            padding: 24px;
          }
        }
      `}</style>
    </div>
  );
};

const featuresData = [
  {
    icon: <VideoIcon className="h-8 w-8 text-accent" />,
    title: "Smart Attendance",
    description: "Send autoMeet into any video call — it joins like a real attendee and records everything, reliably."
  },
  {
    icon: <Headphones className="h-8 w-8 text-accent" />,
    title: "Live Transcripts",
    description: "Get accurate, speaker-labeled transcripts you can search, share, and refer back to anytime."
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-accent" />,
    title: "Actionable Summaries",
    description: "Instantly receive meeting recaps with decisions, action items, and insights — no more manual notes."
  }
];

const footerData = [
  { title: "Product", links: ["Features", "Integrations", "API", "Pricing"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
  { title: "Legal", links: ["Privacy", "Terms", "Security", "GDPR"] }
];

export default LandingPage;