import { motion, useInView } from "framer-motion";
import { ArrowRight, Phone, FileText, ShieldCheck, Truck, Globe, UserCheck, ClipboardList, Search, Star, ChevronRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { products } from "@/data/products";
import hero from "@/assets/hero-timber.jpg";
import samples from "@/assets/wood-samples.jpg";
import villa from "@/assets/project-villa.jpg";
import commercial from "@/assets/project-commercial.jpg";
import yard from "@/assets/project-yard.jpg";
import furniture from "@/assets/project-furniture.jpg";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

// Counter component
const CountUp = ({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const currentCount = Math.floor(progress * end);
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };
    
    animationFrame = requestAnimationFrame(updateCount);
    
    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isInView, end, duration]);
  
  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ show: { transition: { staggerChildren: 0.08 } } }}
      className={`container mx-auto px-4 sm:px-6 py-12 md:py-20 lg:py-28 ${className}`}
    >
      {children}
    </motion.section>
  );
}

export default function Home() {
  const benefits = [
    { icon: Globe, title: "Global + Local Sourcing", text: "Direct import from USA, Africa + premium local timber. One roof, endless options." },
    { icon: Truck, title: "Yard-to-Site Delivery", text: "Full truckload or partial dispatch across Lahore & Punjab. Timely delivery guaranteed." },
    { icon: UserCheck, title: "CEO Direct Accountability", text: "Arslan Ali personally oversees quality control & every customer order. No middlemen." },
    { icon: ShieldCheck, title: "Quality Inspection", text: "Every batch tested for moisture, strength & grain pattern before delivery." },
    { icon: FileText, title: "Transparent Pricing", text: "Custom invoices on official Sharif Timber stationery. No hidden charges, ever." },
    { icon: ClipboardList, title: "Day Shift Service", text: "Open 9 AM to 8 PM for easy site visits, sample reviews & same-day pickup." },
  ];
  const steps = [
    { n: "01", title: "Inquiry", text: "Call or WhatsApp your requirement with dimensions." },
    { n: "02", title: "Quotation", text: "Custom pricing invoice delivered within 2 hours." },
    { n: "03", title: "Inspection", text: "Visit our yard or get video verification of stock." },
    { n: "04", title: "Delivery", text: "Dispatch to site with full quality guarantee." },
  ];
  const testimonials = [
    { name: "Contractor — DHA Project", quote: "Sharif Timber ne hamara 6-marla project 24 hours me complete karwaya. Wood quality top class thi.", role: "Construction Contractor" },
    { name: "Furniture Maker — Gulberg", quote: "Mahogany & Red Oak ka stock hamesha fresh milta hai. CEO Arslan Ali khud deal karte hain.", role: "Custom Furniture Studio" },
    { name: "Architect — Cantt Lahore", quote: "Imported Sapelle unse behtar koi nahi deta. Grain pattern perfect. Highly recommended.", role: "Practicing Architect" },
  ];
  const projects = [
    { img: villa, title: "Luxury Villa Interior", tag: "Residential" },
    { img: commercial, title: "Commercial Lobby Paneling", tag: "Commercial" },
    { img: yard, title: "Bulk Industrial Supply", tag: "Industrial" },
    { img: furniture, title: "Bespoke Cabinetry", tag: "Furniture" },
  ];
  

  return (
    <PageShell>
      {/* HERO */}
      <section className="relative min-h-[85vh] md:min-h-[92vh] flex items-center overflow-hidden">
        {/* Image - lowest layer */}
        <div className="absolute inset-0">
          <img 
            src={hero} 
            alt="Premium stacked timber" 
            className="w-full h-full object-cover" 
            width={1920} 
            height={1280} 
          />
        </div>
        
        {/* Gradients - overlay on top of image */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        
        {/* Content - highest layer */}
        <div className="container mx-auto px-4 sm:px-6 py-16 md:py-24 relative z-10">
          <motion.div 
            initial="hidden" 
            animate="show" 
            variants={{ show: { transition: { staggerChildren: 0.12 } } }} 
            className="max-w-3xl"
          >
            <motion.div 
              variants={fadeUp} 
              className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-gold/40 bg-gold/5 text-gold text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-5 sm:mb-7"
            >
              <Star className="size-2 sm:size-3 fill-gold" /> 
              Trusted Since Years · Lahore
            </motion.div>
            
            <motion.h1 
              variants={fadeUp} 
              className="text-3xl sm:text-5xl md:text-6xl lg:text-[5rem] font-display font-semibold leading-[1.1] sm:leading-[1.02]"
            >
              Premium Wood for every <span className="gold-text italic">Architectural</span> Masterpiece.
            </motion.h1>
            
            <motion.p 
              variants={fadeUp} 
              className="mt-4 sm:mt-7 text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              At Sharif Timber, we supply premium-grade timber tailored to your exact specifications — from luxury villas to high-rise commercial towers. Strength, precision &amp; durability, delivered to your site.
            </motion.p>
            
            <motion.div 
              variants={fadeUp} 
              className="mt-6 sm:mt-10 flex flex-wrap gap-3 sm:gap-4"
            >
              <Link to="/products" className="btn-gold text-sm sm:text-base">
                Explore Full Catalog <ArrowRight className="size-3 sm:size-4" />
              </Link>
              <Link to="/contact" className="btn-outline-gold text-sm sm:text-base">
                <FileText className="size-3 sm:size-4" /> Get Instant Quote
              </Link>
              <a href="tel:+923045473653" className="btn-outline-gold text-sm sm:text-base">
                <Phone className="size-3 sm:size-4" /> Call Now
              </a>
            </motion.div>
            
            <motion.div 
              variants={fadeUp} 
              className="mt-8 sm:mt-12 flex flex-wrap gap-4 sm:gap-8 text-xs sm:text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-gold text-sm sm:text-base">✓</span> 
                Led by CEO Arslan Ali
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-gold text-sm sm:text-base">✓</span> 
                100% Quality Checked
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-gold text-sm sm:text-base">✓</span> 
                On-Time Delivery
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Important Note Box */}
        <div className="absolute bottom-4 right-4 sm:bottom-10 sm:right-10 hidden lg:block max-w-xs p-4 sm:p-5 rounded-2xl border border-gold/30 bg-card/80 backdrop-blur-xl text-xs text-muted-foreground z-10">
          <p className="font-semibold text-gold mb-1.5 text-sm">Important Note</p>
          We supply premium timber/wood only. We do <span className="text-foreground font-medium">not</span> provide carpentry or door manufacturing services.
        </div>
      </section>

      {/* STATS STRIP with counting up */}
      <section className="border-y border-border/40 bg-card/40">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {[
            { end: 2, label: "Operational Yards", suffix: "" },
            { end: 9, label: "Premium Wood Species", suffix: "+" },
            { end: 500, label: "Projects Delivered", suffix: "+" },
            { end: 100, label: "Quality Guarantee", suffix: "%" },
          ].map((item) => (
            <motion.div 
              key={item.label} 
              initial={{ opacity: 0, y: 16 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-semibold gold-text">
                <CountUp end={item.end} suffix={item.suffix} duration={2} />
              </div>
              <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div variants={fadeUp} className="relative">
            <img src={samples} alt="Wood samples" width={1600} height={1000} loading="lazy" className="rounded-2xl border border-border" />
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 hidden md:block bg-card border border-gold/40 rounded-2xl p-4 sm:p-6 max-w-[200px] sm:max-w-[220px] shadow-2xl">
              <div className="text-2xl sm:text-3xl font-display gold-text font-semibold">2 Yards</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground mt-1">Strategically located in Cantonment Lahore</div>
            </div>
          </motion.div>
          <motion.div variants={fadeUp}>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold mb-3">About Sharif Timber</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-semibold leading-tight">
              Your trusted <span className="gold-text">timber partner</span> in Cantonment Lahore.
            </h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Sharif Timber is a trusted name in Pakistan's wood supply industry, strategically located in Cantonment Lahore with 2 operational timber yards. For years, we've been the backbone behind Lahore's finest furniture makers, contractors &amp; architects.
            </p>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              We specialize in sourcing, importing &amp; distributing a diverse portfolio of domestic and high-end imported hardwoods + softwoods. Every log is inspected for moisture content, grain pattern &amp; structural integrity before dispatch.
            </p>
            <div className="mt-5 sm:mt-7 p-3 sm:p-4 rounded-xl border border-gold/30 bg-gold/5 text-xs sm:text-sm">
              <span className="text-gold font-semibold">Note:</span> <span className="text-muted-foreground">We are timber suppliers only. We do not manufacture doors or provide carpentry services.</span>
            </div>
            <Link to="/about" className="btn-outline-gold mt-6 sm:mt-8 text-sm sm:text-base">Learn More <ArrowRight className="size-3 sm:size-4" /></Link>
          </motion.div>
        </div>
      </Section>

      {/* PRODUCTS */}
      <Section className="!pt-6 sm:!pt-10">
        <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold mb-3">Our Collection</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-semibold leading-tight">
            Premium Hardwoods &amp; <span className="gold-text">Construction</span> Softwoods
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground">Complete range under one roof. All stock available for immediate dispatch.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.slice(0, 6).map((p) => (
            <motion.div key={p.name} variants={fadeUp} whileHover={{ y: -6 }} className="group relative rounded-2xl overflow-hidden border border-border bg-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} loading="lazy" width={1024} height={1024} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-background/85 backdrop-blur text-[8px] sm:text-[10px] uppercase tracking-widest text-gold border border-gold/30">
                {p.category}
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-baseline justify-between flex-wrap gap-2">
                  <h3 className="text-base sm:text-lg md:text-xl font-display font-semibold">{p.name}</h3>
                  <span className="text-xs sm:text-sm text-muted-foreground" dir="rtl">{p.urdu}</span>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground line-clamp-2">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div variants={fadeUp} className="text-center mt-8 sm:mt-12">
          <Link to="/products" className="btn-gold text-sm sm:text-base">View All Timber <ChevronRight className="size-3 sm:size-4" /></Link>
        </motion.div>
      </Section>

      {/* WHY US */}
      <Section className="!pt-6 sm:!pt-10">
        <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold mb-3">Why Choose Us</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-semibold leading-tight">
            Why builders &amp; contractors <span className="gold-text">choose Sharif Timber</span>.
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {benefits.map((b) => (
            <motion.div key={b.title} variants={fadeUp} className="p-5 sm:p-7 rounded-2xl border border-border bg-card hover:border-gold/40 transition-colors group">
              <div className="size-10 sm:size-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mb-4 sm:mb-5 group-hover:scale-110 transition-transform">
                <b.icon className="size-5 sm:size-6" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section className="!pt-6 sm:!pt-10">
        <motion.div variants={fadeUp} className="flex flex-wrap items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold mb-3">Project Showcase</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-semibold leading-tight">
              Wood that shaped <span className="gold-text">landmark builds</span>.
            </h2>
          </div>
          <Link to="/projects" className="btn-outline-gold text-sm sm:text-base">All Projects <ArrowRight className="size-3 sm:size-4" /></Link>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.title} variants={fadeUp} className={`group relative rounded-2xl overflow-hidden border border-border ${i === 0 || i === 3 ? "md:row-span-1" : ""}`}>
              <img src={p.img} alt={p.title} loading="lazy" width={1280} height={896} className="w-full h-[280px] sm:h-[320px] md:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <div className="text-[8px] sm:text-[10px] uppercase tracking-widest text-gold mb-1">{p.tag}</div>
                <div className="text-base sm:text-lg md:text-xl font-display font-semibold">{p.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section className="!pt-6 sm:!pt-10">
        <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold mb-3">How We Work</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-semibold leading-tight">
            Our 4-step <span className="gold-text">supply process</span>.
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative">
          {steps.map((s, i) => (
            <motion.div key={s.n} variants={fadeUp} className="relative p-5 sm:p-7 rounded-2xl border border-border bg-card">
              <div className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold gold-text opacity-80">{s.n}</div>
              <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground">{s.text}</p>
              {i < steps.length - 1 && (
                <ChevronRight className="hidden lg:block size-5 sm:size-6 text-gold/50 absolute top-1/2 -right-3 sm:-right-4 -translate-y-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section className="!pt-6 sm:!pt-10">
        <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold mb-3">Testimonials</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-semibold leading-tight">
            What our <span className="gold-text">clients</span> say.
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={fadeUp} className="p-5 sm:p-8 rounded-2xl border border-border bg-card relative">
              <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4 text-gold">
                {[...Array(5)].map((_, i) => <Star key={i} className="size-3 sm:size-4 fill-gold" />)}
              </div>
              <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">"{t.quote}"</p>
              <div className="mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-border">
                <div className="font-semibold text-sm sm:text-base">{t.name}</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-20">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-gold/30 p-6 sm:p-10 md:p-16 text-center">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gold/20 via-accent/10 to-transparent" />
          <Search className="size-8 sm:size-10 md:size-12 mx-auto text-gold mb-4 sm:mb-6" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-semibold">
            Need a custom quote for <span className="gold-text">your project</span>?
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Share your specs — we'll send a transparent invoice on official Sharif Timber stationery within 2 hours.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
            <a href="https://wa.me/923045473653" target="_blank" rel="noopener noreferrer" className="btn-gold text-sm sm:text-base"> WhatsApp Us Now</a>
            <Link to="/contact" className="btn-outline-gold text-sm sm:text-base">Get Directions <ArrowRight className="size-3 sm:size-4" /></Link>
          </div>
        </motion.div>
      </section>
    </PageShell>
  );
}