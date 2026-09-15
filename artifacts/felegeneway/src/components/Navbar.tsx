import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { BrandLockup } from "./BrandLockup";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Gallery", href: "/gallery" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";
  const headerSolid = isScrolled || mobileMenuOpen || !isHome;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        headerSolid ? "bg-white/95 py-3 shadow-sm backdrop-blur-md" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-12">
        <Link href="/" className="z-50 flex items-center gap-3">
          <BrandLockup darkText={headerSolid} />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${
                headerSolid ? "text-foreground" : "text-white/90"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className={`z-50 md:hidden ${headerSolid ? "text-primary" : "text-white"}`}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute left-0 top-0 z-40 flex h-screen w-full flex-col items-center justify-center gap-8 bg-white"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif text-primary transition-colors hover:text-accent"
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}