import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Contact() {
  const [sent, setSent] = useState(false);
  
  return (
    <PageShell>
      <PageHero
        eyebrow="Get In Touch"
        title={<>Let's discuss <span className="gold-text">your timber needs</span>.</>}
        subtitle="Visit our yards or request a custom invoice on official Sharif Timber stationery — typically within 2 hours."
      />

      <section className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            className="p-5 sm:p-8 md:p-10 rounded-2xl border border-border bg-card"
          >
            <h2 className="text-xl sm:text-2xl font-display font-semibold mb-5 sm:mb-6">Request a Quote</h2>
            {sent ? (
              <div className="p-4 sm:p-6 rounded-xl border border-gold/40 bg-gold/10 text-center">
                <p className="text-gold font-semibold text-sm sm:text-base">Thanks — we'll get back to you within 2 hours.</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2">For urgent orders, WhatsApp us directly.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-3 sm:space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                  <input 
                    required 
                    placeholder="Your Name" 
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-background border border-border focus:border-gold outline-none transition-colors" 
                  />
                  <input 
                    required 
                    placeholder="Phone / WhatsApp" 
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-background border border-border focus:border-gold outline-none transition-colors" 
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email (optional)" 
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-background border border-border focus:border-gold outline-none transition-colors" 
                />
                <select className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-background border border-border focus:border-gold outline-none transition-colors">
                  <option>Wood Type — Select</option>
                  <option>Mahogany</option>
                  <option>Red Oak</option>
                  <option>White Ash</option>
                  <option>Sapelle</option>
                  <option>Maple / Beech</option>
                  <option>SPF / Pine</option>
                  <option>Mixed / Other</option>
                </select>
                <textarea 
                  required 
                  rows={5} 
                  placeholder="Tell us dimensions, quantity, project details..." 
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-background border border-border focus:border-gold outline-none transition-colors resize-none" 
                />
                <button type="submit" className="btn-gold w-full justify-center text-sm sm:text-base">Send Inquiry</button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            className="space-y-5 sm:space-y-6"
          >
            <div className="p-5 sm:p-7 rounded-2xl border border-border bg-card">
              <h3 className="text-lg sm:text-xl font-display font-semibold mb-3 sm:mb-4">Direct Contact</h3>
              <ul className="space-y-3 sm:space-y-4 text-sm">
                <li className="flex gap-3">
                  <span className="size-8 sm:size-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                    <Phone className="size-3.5 sm:size-4" />
                  </span>
                  <span>
                    <div className="text-muted-foreground text-[10px] sm:text-xs">Phone / WhatsApp</div>
                    <a href="tel:+923045473653" className="text-sm sm:text-base hover:text-gold">+92 304-5473653</a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="size-8 sm:size-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                    <Mail className="size-3.5 sm:size-4" />
                  </span>
                  <span>
                    <div className="text-muted-foreground text-[10px] sm:text-xs">Email</div>
                    <a href="mailto:shariftimber11@gmail.com" className="text-sm sm:text-base hover:text-gold">shariftimber11@gmail.com</a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="size-8 sm:size-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                    <Clock className="size-3.5 sm:size-4" />
                  </span>
                  <span>
                    <div className="text-muted-foreground text-[10px] sm:text-xs">Hours</div>
                    <div className="text-sm sm:text-base">9 AM – 8 PM, 7 Days a Week</div>
                  </span>
                </li>
              </ul>
              <div className="mt-5 sm:mt-6 flex gap-3">
                <a href="https://wa.me/923045473653" target="_blank" rel="noopener noreferrer" className="btn-gold flex-1 justify-center text-sm sm:text-base">
                  <MessageCircle className="size-3.5 sm:size-4" /> WhatsApp
                </a>
                <a href="tel:+923045473653" className="btn-outline-gold flex-1 justify-center text-sm sm:text-base">
                  <Phone className="size-3.5 sm:size-4" /> Call
                </a>
              </div>
            </div>

            {[
              { title: "Yard 1 — Cantt Lahore", addr: "A Sector, Baidian Road, Jamu Stop, Near Total Petrol Pump, Cantonment Lahore" },
              { title: "Yard 2 — Ring Road", addr: "Nawaz Sharif Interchange, Jammu Stop Bedian Road, Opp. Toll Booth, Ring Road, Lahore" },
            ].map((y) => (
              <div key={y.title} className="p-4 sm:p-6 rounded-2xl border border-border bg-card flex gap-3 sm:gap-4">
                <span className="size-8 sm:size-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                  <MapPin className="size-3.5 sm:size-4" />
                </span>
                <div>
                  <h4 className="text-sm sm:text-base font-semibold">{y.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">{y.addr}</p>
                  <a 
                    href={`https://www.google.com/maps/search/${encodeURIComponent(y.addr)}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs sm:text-sm text-gold hover:underline mt-2 inline-block"
                  >
                    Get directions →
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 sm:px-6 pb-12 md:pb-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.h2 
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold text-center mb-8 sm:mb-10 leading-tight"
          >
            Frequently Asked <span className="gold-text">Questions</span>
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-2.5 sm:space-y-3">
            {[
              ["Do you deliver outside Lahore?", "Yes — we deliver across Punjab on order basis. Full truckload and partial dispatch both available."],
              ["Can I visit your timber yard before buying?", "Absolutely. Both yards are open 9 AM to 8 PM, 7 days a week. We recommend calling before visiting."],
              ["Do you provide custom cutting sizes?", "Yes, we offer cutting and sizing services as per your project specifications."],
              ["Do you make doors or provide carpentry?", "No. We supply raw timber/wood only. We do not manufacture doors or provide carpentry services."],
              ["How quickly can I get a quote?", "Typically within 2 hours of inquiry — on official Sharif Timber invoice stationery."],
            ].map(([q, a], i) => (
              <motion.details 
                key={q} 
                variants={fadeUp}
                className="group p-4 sm:p-5 rounded-xl border border-border bg-card open:border-gold/40 transition-colors"
              >
                <summary className="cursor-pointer flex items-center justify-between font-medium list-none">
                  <span className="text-sm sm:text-base pr-2">{q}</span>
                  <span className="text-gold text-lg sm:text-xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">{a}</p>
              </motion.details>
            ))}
          </div>
        </motion.div>
      </section>
    </PageShell>
  );
}