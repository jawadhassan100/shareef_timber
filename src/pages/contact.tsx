
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { useState } from "react";



export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <PageHero
        eyebrow="Get In Touch"
        title={<>Let's discuss <span className="gold-text">your timber needs</span>.</>}
        subtitle="Visit our yards or request a custom invoice on official Sharif Timber stationery — typically within 2 hours."
      />

      <section className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 md:p-10 rounded-2xl border border-border bg-card">
            <h2 className="text-2xl font-display font-semibold mb-6">Request a Quote</h2>
            {sent ? (
              <div className="p-6 rounded-xl border border-gold/40 bg-gold/10 text-center">
                <p className="text-gold font-semibold">Thanks — we'll get back to you within 2 hours.</p>
                <p className="text-sm text-muted-foreground mt-2">For urgent orders, WhatsApp us directly.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-4"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <input required placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-gold outline-none transition-colors" />
                  <input required placeholder="Phone / WhatsApp" className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-gold outline-none transition-colors" />
                </div>
                <input type="email" placeholder="Email (optional)" className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-gold outline-none transition-colors" />
                <select className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-gold outline-none transition-colors">
                  <option>Wood Type — Select</option>
                  <option>Mahogany</option>
                  <option>Red Oak</option>
                  <option>White Ash</option>
                  <option>Sapelle</option>
                  <option>Maple / Beech</option>
                  <option>SPF / Pine</option>
                  <option>Mixed / Other</option>
                </select>
                <textarea required rows={5} placeholder="Tell us dimensions, quantity, project details..." className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-gold outline-none transition-colors resize-none" />
                <button type="submit" className="btn-gold w-full justify-center">Send Inquiry</button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <div className="p-7 rounded-2xl border border-border bg-card">
              <h3 className="text-xl font-display font-semibold mb-4">Direct Contact</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3"><span className="size-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0"><Phone className="size-4" /></span><span><div className="text-muted-foreground text-xs">Phone / WhatsApp</div><a href="tel:+923045473653" className="text-base hover:text-gold">+92 304-5473653</a></span></li>
                <li className="flex gap-3"><span className="size-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0"><Mail className="size-4" /></span><span><div className="text-muted-foreground text-xs">Email</div><a href="mailto:shariftimber11@gmail.com" className="text-base hover:text-gold">shariftimber11@gmail.com</a></span></li>
                <li className="flex gap-3"><span className="size-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0"><Clock className="size-4" /></span><span><div className="text-muted-foreground text-xs">Hours</div><div className="text-base">9 AM – 8 PM, 7 Days a Week</div></span></li>
              </ul>
              <div className="mt-6 flex gap-3">
                <a href="https://wa.me/923045473653" target="_blank" rel="noopener noreferrer" className="btn-gold flex-1 justify-center"><MessageCircle className="size-4" /> WhatsApp</a>
                <a href="tel:+923045473653" className="btn-outline-gold flex-1 justify-center"><Phone className="size-4" /> Call</a>
              </div>
            </div>

            {[
              { title: "Yard 1 — Cantt Lahore", addr: "A Sector, Baidian Road, Jamu Stop, Near Total Petrol Pump, Cantonment Lahore" },
              { title: "Yard 2 — Ring Road", addr: "Nawaz Sharif Interchange, Jammu Stop Bedian Road, Opp. Toll Booth, Ring Road, Lahore" },
            ].map((y) => (
              <div key={y.title} className="p-6 rounded-2xl border border-border bg-card flex gap-4">
                <span className="size-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0"><MapPin className="size-4" /></span>
                <div>
                  <h4 className="font-semibold">{y.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{y.addr}</p>
                  <a href={`https://www.google.com/maps/search/${encodeURIComponent(y.addr)}`} target="_blank" rel="noopener noreferrer" className="text-sm text-gold hover:underline mt-2 inline-block">Get directions →</a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-6 pb-20">
        <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-10">Frequently Asked <span className="gold-text">Questions</span></h2>
        <div className="max-w-3xl mx-auto space-y-3">
          {[
            ["Do you deliver outside Lahore?", "Yes — we deliver across Punjab on order basis. Full truckload and partial dispatch both available."],
            ["Can I visit your timber yard before buying?", "Absolutely. Both yards are open 9 AM to 8 PM, 7 days a week. We recommend calling before visiting."],
            ["Do you provide custom cutting sizes?", "Yes, we offer cutting and sizing services as per your project specifications."],
            ["Do you make doors or provide carpentry?", "No. We supply raw timber/wood only. We do not manufacture doors or provide carpentry services."],
            ["How quickly can I get a quote?", "Typically within 2 hours of inquiry — on official Sharif Timber invoice stationery."],
          ].map(([q, a], i) => (
            <motion.details key={q} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group p-5 rounded-xl border border-border bg-card open:border-gold/40 transition-colors">
              <summary className="cursor-pointer flex items-center justify-between font-medium list-none">
                <span>{q}</span>
                <span className="text-gold text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a}</p>
            </motion.details>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
