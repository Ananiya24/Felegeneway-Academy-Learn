import { Link } from "wouter";
import { BrandLockup } from "./BrandLockup";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "School Programs", href: "/programs" },
  { label: "Gallery", href: "/gallery" },
  { label: "News & Events", href: "/news" },
  { label: "Contact Us", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-primary pb-8 pt-16 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="mb-6 inline-flex">
              <BrandLockup inverseLogo />
            </Link>
            <p className="text-sm font-light leading-relaxed text-white/60">
              Learn To Live. We help children become kind, capable people through good lessons and strong values in the heart of Ethiopia.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-serif font-bold">Explore</h4>
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/60 transition-colors hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} Felegeneway Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}