
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import oak from "@/assets/wood-oak.jpg";
import mahogany from "@/assets/wood-mahogany.jpg";
import samples from "@/assets/wood-samples.jpg";
import { Link } from "react-router-dom";


const posts = [
  { img: mahogany, date: "Mar 2026", title: "Choosing Mahogany vs Sapelle for luxury joinery", excerpt: "Two premium reddish-brown hardwoods — which one fits your project's grain, budget and stability requirements?" },
  { img: oak, date: "Feb 2026", title: "A buyer's guide to Red Oak for flooring & cabinetry", excerpt: "Why Red Oak remains the gold standard for durable, character-rich interior wood." },
  { img: samples, date: "Jan 2026", title: "Hardwood vs Softwood: when to use what", excerpt: "Demystifying construction-grade pine versus furniture-grade hardwoods, with real project examples." },
];

export default function Blog() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Blog & Guides"
        title={<>Timber <span className="gold-text">insights</span>, straight from the yard.</>}
        subtitle="Practical knowledge for builders, architects and furniture makers — from species selection to delivery logistics."
      />
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
        {posts.map((p, i) => (
          <motion.article key={p.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-gold/40 transition-colors">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={p.img} alt={p.title} loading="lazy" width={1024} height={1024} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-gold mb-2">
                <Calendar className="size-3.5" /> {p.date}
              </div>
              <h3 className="text-xl font-display font-semibold leading-tight">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              <Link to="/contact" className="mt-4 inline-flex items-center gap-1 text-sm text-gold hover:gap-2 transition-all">
                Read insight <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </motion.article>
        ))}
      </section>
    </PageShell>
  );
}
