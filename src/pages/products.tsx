import { motion } from "framer-motion";
import { PageShell, PageHero } from "@/components/PageShell";
import { products } from "@/data/products";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Products() {
  const hard = products.filter((p) => p.category === "imported");
  const soft = products.filter((p) => p.category === "local");
  
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Catalog"
        title={<>Premium Timber <span className="gold-text">Collection</span>.</>}
        subtitle="Complete range of hardwoods & softwoods under one roof. All stock available for immediate dispatch."
      />
      
      {[
        { heading: "Imported Woods", list: hard },
        { heading: "Local Woods", list: soft },
      ].map((group, groupIndex) => (
        <section key={group.heading} className="container mx-auto px-4 sm:px-6 py-10 md:py-14">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: groupIndex * 0.1 }}
            className="text-xl sm:text-2xl md:text-3xl font-display font-semibold mb-6 sm:mb-8"
          >
            <span className="gold-text">{group.heading}</span>
          </motion.h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {group.list.map((p, index) => (
              <motion.div 
                key={p.name} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -6 }} 
                className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-gold/40 transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={p.image} 
                    alt={p.name} 
                    loading="lazy" 
                    width={1024} 
                    height={1024} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-background/85 backdrop-blur text-[8px] sm:text-[10px] uppercase tracking-widest text-gold border border-gold/30">
                    In Stock
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <div className="flex items-baseline justify-between mb-2 flex-wrap gap-2">
                    <h3 className="text-base sm:text-lg md:text-xl font-display font-semibold">{p.name}</h3>
                    <span className="text-xs sm:text-sm text-muted-foreground" dir="rtl">{p.urdu}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  
                  <ul className="mt-3 sm:mt-4 space-y-1 sm:space-y-1.5">
                    {p.uses.map((u) => (
                      <li key={u} className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-foreground/80">
                        <CheckCircle2 className="size-3 sm:size-3.5 text-gold flex-shrink-0" /> 
                        <span>{u}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      ))}
      
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 sm:px-6 py-12 md:py-16 text-center"
      >
        <Link to="/contact" className="btn-gold text-sm sm:text-base">
          Request a Custom Quote <ArrowRight className="size-3 sm:size-4" />
        </Link>
      </motion.section>
    </PageShell>
  );
}