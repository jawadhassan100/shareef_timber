import { motion } from "framer-motion";
import { PageShell, PageHero } from "@/components/PageShell";
import villa from "@/assets/project-villa.jpg";
import commercial from "@/assets/project-commercial.jpg";
import yard from "@/assets/project-yard.jpg";
import furniture from "@/assets/project-furniture.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const items = [
  { img: villa, title: "Luxury Villa, DHA Lahore", tag: "Residential", text: "Exposed mahogany beams and red oak flooring across 8,000 sq ft." },
  { img: commercial, title: "Corporate Tower Lobby", tag: "Commercial", text: "Sapelle veneer panel walls — 4-storey atrium installation." },
  { img: yard, title: "Bulk Construction Supply", tag: "Industrial", text: "SPF & yellow pine framing for high-rise residential complex." },
  { img: furniture, title: "Bespoke Furniture Studio", tag: "Furniture", text: "Continuous monthly mahogany & beech supply to flagship maker." },
];

export default function Projects() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Project Showcase"
        title={<>Wood that shaped <span className="gold-text">landmark builds</span>.</>}
        subtitle="From luxury villas to commercial towers, our timber powers Lahore's most ambitious projects."
      />
      
      <section className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          {items.map((p, i) => (
            <motion.div 
              key={p.title} 
              initial={{ opacity: 0, y: 24 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.08 }} 
              className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-gold/40 transition-colors"
            >
              <div className="overflow-hidden">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  loading="lazy" 
                  width={1280} 
                  height={896} 
                  className="w-full h-[240px] sm:h-[280px] md:h-[320px] object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="text-[8px] sm:text-[10px] uppercase tracking-widest text-gold mb-1">{p.tag}</div>
                <h3 className="text-base sm:text-lg md:text-xl font-display font-semibold leading-tight">{p.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}