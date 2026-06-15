
import { motion } from "framer-motion";
import { PageShell, PageHero } from "@/components/PageShell";
import { ShieldCheck, Truck, UserCheck, Award, ArrowRight } from "lucide-react";
import yard from "@/assets/project-yard.jpg";
import { Link } from "react-router-dom";



export default function About() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Us"
        title={<>Your trusted <span className="gold-text">timber partner</span> in Lahore.</>}
        subtitle="Strategically located in Cantonment Lahore with 2 operational yards — the backbone behind Lahore's finest furniture makers, contractors and architects."
      />
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.img initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} src={yard} alt="Sharif Timber yard" loading="lazy" width={1280} height={896} className="rounded-2xl border border-border" />
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-display font-semibold">From the yard to your site — without compromise.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Sharif Timber is a trusted name in Pakistan's wood supply industry. For years we've sourced, imported and distributed premium hardwoods and softwoods to architects, builders and bespoke furniture studios.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every log is inspected for moisture content, grain pattern and structural integrity before dispatch. Whether you're crafting bespoke furniture, managing high-volume construction, or designing intricate interior paneling — our inventory satisfies every specification with competitive pricing &amp; guaranteed performance.
            </p>
            <div className="mt-6 p-4 rounded-xl border border-gold/30 bg-gold/5 text-sm">
              <span className="text-gold font-semibold">Important:</span> <span className="text-muted-foreground">We supply raw timber only. We do not manufacture doors or provide carpentry services.</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-4 gap-5">
          {[
            { icon: Award, title: "CEO Led", text: "Arslan Ali personally manages quality." },
            { icon: ShieldCheck, title: "Quality First", text: "Moisture & grain tested every batch." },
            { icon: Truck, title: "Punjab-wide Delivery", text: "Yard-to-site, on time, every time." },
            { icon: UserCheck, title: "No Middlemen", text: "Direct sourcing, transparent pricing." },
          ].map((b) => (
            <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl border border-border bg-card">
              <b.icon className="size-7 text-gold mb-3" />
              <h3 className="font-semibold">{b.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{b.text}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-14">
          <Link to="/contact" className="btn-gold">Visit Our Yards <ArrowRight className="size-4" /></Link>
        </div>
      </section>
    </PageShell>
  );
}
