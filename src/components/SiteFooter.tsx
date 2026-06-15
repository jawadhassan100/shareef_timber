
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/50 bg-background/60">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="font-display text-2xl gold-text font-semibold">Sharif Timber</div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Lahore's #1 supplier of imported &amp; local premium timber. Quality wood for every architectural masterpiece.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold tracking-wider uppercase text-gold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["/about", "About Us"],
              ["/products", "Products"],
              ["/projects", "Projects"],
              ["/testimonials", "Testimonials"],
              // ["/blog", "Blog"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-muted-foreground hover:text-gold transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold tracking-wider uppercase text-gold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><Phone className="size-4 text-gold shrink-0 mt-0.5" /> +92 304-5473653</li>
            <li className="flex gap-2"><Mail className="size-4 text-gold shrink-0 mt-0.5" /> shariftimber11@gmail.com</li>
            <li className="flex gap-2"><Clock className="size-4 text-gold shrink-0 mt-0.5" /> 9 AM – 8 PM, 7 Days</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold tracking-wider uppercase text-gold mb-4">Yards</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="size-4 text-gold shrink-0 mt-0.5" /> A Sector, Baidian Road, Jamu Stop, Cantt Lahore</li>
            <li className="flex gap-2"><MapPin className="size-4 text-gold shrink-0 mt-0.5" /> Nawaz Sharif Interchange, Ring Road, Lahore</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40">
        <div className="container mx-auto px-6 py-5 text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-2">
          <span>© 2026 Sharif Timber. All Rights Reserved.</span>
          <span>CEO: Arslan Ali · Crafted with precision.</span>
        </div>
      </div>
    </footer>
  );
}
