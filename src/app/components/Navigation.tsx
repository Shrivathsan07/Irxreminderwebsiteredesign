import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { to: "/platform", label: "Platform" },
  { to: "/solutions", label: "Solutions" },
  { to: "/evidence", label: "Evidence" },
  { to: "/about", label: "About" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`sticky top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(30,58,138,0.06),0_4px_12px_rgba(30,58,138,0.08)]"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <span
              className="text-2xl font-extrabold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="text-[#1e3a8a]">iRx</span>
              <span className="text-[#0891b2]">Reminder</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  isActive(link.to)
                    ? "text-[#0891b2]"
                    : "text-gray-600 hover:text-[#1e3a8a] hover:bg-gray-50"
                }`}
              >
                {link.label}
                {isActive(link.to) && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#0891b2] rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Phone & CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:3308068675"
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#1e3a8a] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="font-medium">330.806.8675</span>
            </a>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-[#1e3a8a]/20 text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white hover:border-[#1e3a8a] transition-colors"
            >
              <Link to="/roi-calculator">ROI Calculator</Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-[#0891b2] hover:bg-[#0e7490] text-white shadow-[0_1px_3px_rgba(8,145,178,0.3),0_4px_12px_rgba(8,145,178,0.15)] hover:shadow-[0_1px_3px_rgba(8,145,178,0.4),0_6px_16px_rgba(8,145,178,0.2)] transition-[background-color,box-shadow]"
            >
              <Link to="/schedule-pilot">Schedule a Pilot</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-[#1e3a8a] rounded-lg hover:bg-gray-50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-gray-100">
            <div className="pt-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive(link.to)
                      ? "text-[#0891b2] bg-cyan-50"
                      : "text-gray-700 hover:text-[#1e3a8a] hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 space-y-3 px-4">
              <a
                href="tel:3308068675"
                className="flex items-center gap-2 text-gray-600 text-sm"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">330.806.8675</span>
              </a>
              <Button
                asChild
                variant="outline"
                className="w-full border-[#1e3a8a]/20 text-[#1e3a8a]"
              >
                <Link to="/roi-calculator">ROI Calculator</Link>
              </Button>
              <Button
                asChild
                className="w-full bg-[#0891b2] hover:bg-[#0e7490]"
              >
                <Link to="/schedule-pilot">Schedule a Pilot</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
