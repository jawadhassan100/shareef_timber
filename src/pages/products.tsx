
import { motion } from "framer-motion";
import { PageShell, PageHero } from "@/components/PageShell";
import { products } from "@/data/products";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";



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
      ].map((group) => (
        <section key={group.heading} className="container mx-auto px-6 py-14">
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-8">
            <span className="gold-text">{group.heading}</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {group.list.map((p) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -6 }} className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-gold/40 transition-colors">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={p.image} alt={p.name} loading="lazy" width={1024} height={1024} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-background/85 backdrop-blur text-[10px] uppercase tracking-widest text-gold border border-gold/30">In Stock</div>
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-xl font-display font-semibold">{p.name}</h3>
                    <span className="text-sm text-muted-foreground" dir="rtl">{p.urdu}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                  <ul className="mt-4 space-y-1.5">
                    {p.uses.map((u) => (
                      <li key={u} className="flex items-center gap-2 text-xs text-foreground/80">
                        <CheckCircle2 className="size-3.5 text-gold" /> {u}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      ))}
      <section className="container mx-auto px-6 py-16 text-center">
        <Link to="/contact" className="btn-gold">Request a Custom Quote <ArrowRight className="size-4" /></Link>
      </section>
    </PageShell>
  );
}
