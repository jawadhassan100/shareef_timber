import { motion } from "framer-motion";
import { PageShell, PageHero } from "@/components/PageShell";
import { ShieldCheck, Truck, UserCheck, Award, ArrowRight } from "lucide-react";
import yard from "@/assets/project-yard.jpg";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function About() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Us"
        title={<>Your trusted <span className="gold-text">timber partner</span> in Lahore.</>}
        subtitle="Strategically located in Cantonment Lahore with 2 operational yards — the backbone behind Lahore's finest furniture makers, contractors and architects."
      />
      
      <section className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.img 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            src={yard} 
            alt="Sharif Timber yard" 
            loading="lazy" 
            width={1280} 
            height={896} 
            className="rounded-2xl border border-border w-full" 
          />
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold leading-tight">
              From the yard to your site — <span className="gold-text">without compromise.</span>
            </h2>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Sharif Timber is a trusted name in Pakistan's wood supply industry. For years we've sourced, imported and distributed premium hardwoods and softwoods to architects, builders and bespoke furniture studios.
            </p>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Every log is inspected for moisture content, grain pattern and structural integrity before dispatch. Whether you're crafting bespoke furniture, managing high-volume construction, or designing intricate interior paneling — our inventory satisfies every specification with competitive pricing &amp; guaranteed performance.
            </p>
            <div className="mt-5 sm:mt-6 p-3 sm:p-4 rounded-xl border border-gold/30 bg-gold/5 text-xs sm:text-sm">
              <span className="text-gold font-semibold">Important:</span> <span className="text-muted-foreground">We supply raw timber only. We do not manufacture doors or provide carpentry services.</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 pb-12 md:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
          {[
            { icon: Award, title: "CEO Led", text: "Arslan Ali personally manages quality." },
            { icon: ShieldCheck, title: "Quality First", text: "Moisture & grain tested every batch." },
            { icon: Truck, title: "Punjab-wide Delivery", text: "Yard-to-site, on time, every time." },
            { icon: UserCheck, title: "No Middlemen", text: "Direct sourcing, transparent pricing." },
          ].map((b, index) => (
            <motion.div 
              key={b.title} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-4 sm:p-6 rounded-2xl border border-border bg-card hover:border-gold/40 transition-colors group"
            >
              <b.icon className="size-5 sm:size-7 text-gold mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-sm sm:text-base font-semibold">{b.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">{b.text}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10 md:mt-14"
        >
          <Link to="/contact" className="btn-gold text-sm sm:text-base">
            Visit Our Yards <ArrowRight className="size-3 sm:size-4" />
          </Link>
        </motion.div>
      </section>
    </PageShell>
  );
}