
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";



const items = [
  { name: "Contractor — DHA Project", role: "Construction Contractor", quote: "Sharif Timber ne hamara 6-marla project 24 hours me complete karwaya. Wood quality top class thi. Highly recommended." },
  { name: "Furniture Maker — Gulberg", role: "Custom Furniture Studio", quote: "Mahogany & Red Oak ka stock hamesha fresh milta hai. CEO Arslan Ali khud deal karte hain — koi middleman nahi." },
  { name: "Architect — Cantt Lahore", role: "Practicing Architect", quote: "Imported Sapelle unse behtar koi nahi deta. Grain pattern perfect. Every single delivery on time." },
  { name: "Builder — Ring Road Site", role: "Builder", quote: "SPF aur Yellow Pine ka pricing competitive hai aur quality consistent. Bulk orders for our framing requirements — never an issue." },
  { name: "Interior Designer — Bahria", role: "Interior Designer", quote: "Eastern White Pine paneling ke liye Sharif Timber se behtar source nahi. Cutting precision excellent." },
  { name: "Carpentry Workshop", role: "Joinery Workshop Owner", quote: "Beech aur Maple ka quality hamesha furniture-grade hota hai. Trust based supplier — strong relationship years se." },
];

export default function Testimonials() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Testimonials"
        title={<>What our <span className="gold-text">clients</span> say.</>}
        subtitle="The trust of architects, contractors and craftsmen drives everything we do."
      />
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-8 rounded-2xl border border-border bg-card">
            <div className="flex gap-1 mb-4 text-gold">
              {[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-gold" />)}
            </div>
            <p className="text-foreground/90 leading-relaxed">"{t.quote}"</p>
            <div className="mt-5 pt-5 border-t border-border">
              <div className="font-semibold">{t.name}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
            </div>
          </motion.div>
        ))}
      </section>
    </PageShell>
  );
}
