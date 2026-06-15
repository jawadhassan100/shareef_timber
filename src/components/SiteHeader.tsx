
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/projects", label: "Projects" },
  { to: "/testimonials", label: "Testimonials" },
  // { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Top contact bar */}
      {/* <div className="hidden md:block border-b border-border/40 bg-background/80 backdrop-blur text-xs">
        <div className="container mx-auto px-6 py-2 flex justify-between text-muted-foreground">
          <span>Imported &amp; Local Timber Suppliers · Cantonment Lahore</span>
          <div className="flex gap-5">
            <a href="tel:+923045473653" className="hover:text-gold transition-colors">📱 +92 304-5473653</a>
            <a href="mailto:shariftimber11@gmail.com" className="hover:text-gold transition-colors">✉ shariftimber11@gmail.com</a>
            <span>⏰ Open 9 AM – 8 PM</span>
          </div>
        </div>
      </div> */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/85 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Sharif Timber" width={44} height={44} className="rounded-md" />
            <div className="leading-tight">
              <div className="font-display text-xl gold-text font-semibold">Sharif Timber</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Premium Wood Suppliers</div>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-7 text-sm">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-foreground/80 hover:text-gold transition-colors relative"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <a href="tel:+923045473653" className="hidden md:inline-flex btn-gold text-sm">
            <Phone className="size-4" /> Call Now
          </a>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border/40 bg-background">
            <div className="flex flex-col p-4 gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 rounded-md hover:bg-secondary text-sm"
                >
                  {n.label}
                </Link>
              ))}
              <a href="tel:+923045473653" className="btn-gold mt-3 justify-center"><Phone className="size-4" /> Call Now</a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
