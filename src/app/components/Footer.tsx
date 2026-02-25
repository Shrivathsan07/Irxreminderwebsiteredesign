import { Link } from "react-router";
import { Phone, Mail, Linkedin, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#152c6e] text-white">
      {/* Pre-footer CTA */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3
                className="text-2xl md:text-3xl font-bold tracking-tight mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Ready to improve medication adherence?
              </h3>
              <p className="text-blue-200 text-lg">
                See how iRxReminder delivers measurable outcomes for your
                organization.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/schedule-pilot"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0891b2] hover:bg-[#0e7490] text-white font-medium rounded-lg shadow-[0_1px_3px_rgba(8,145,178,0.3),0_4px_12px_rgba(8,145,178,0.15)] hover:shadow-[0_1px_3px_rgba(8,145,178,0.4),0_6px_16px_rgba(8,145,178,0.2)] transition-[background-color,box-shadow]"
              >
                Schedule a Pilot
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/roi-calculator"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-medium rounded-lg border border-white/60 hover:border-white/80 transition-colors"
              >
                Calculate Your ROI
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div>
            <span
              className="text-2xl font-extrabold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              iRx<span className="text-[#0891b2]">Reminder</span>
            </span>
            <p className="text-sm text-blue-200 mt-3 mb-4 leading-relaxed">
              Safe. Connected. Reimbursable.
            </p>
            <address className="text-sm text-blue-300 not-italic leading-relaxed">
              1768 E 25th St #308
              <br />
              Cleveland, OH 44114
            </address>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              className="font-semibold text-sm tracking-widest uppercase text-blue-300 mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/platform", label: "Platform" },
                { to: "/solutions", label: "Solutions" },
                { to: "/evidence", label: "Evidence" },
                { to: "/about", label: "About Us" },
                { to: "/news", label: "News" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Tools */}
          <div>
            <h4
              className="font-semibold text-sm tracking-widest uppercase text-blue-300 mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Tools & Resources
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/roi-calculator"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  ROI Calculator
                </Link>
              </li>
              <li>
                <Link
                  to="/schedule-pilot"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Schedule a Pilot
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h4
              className="font-semibold text-sm tracking-widest uppercase text-blue-300 mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Connect
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:3308068675"
                  className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>330.806.8675</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@irxreminder.com"
                  className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>info@irxreminder.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/irxreminder-llc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        {/* Compliance */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-blue-300">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <p>&copy; {new Date().getFullYear()} iRxReminder LLC. All rights reserved.</p>
              <span className="hidden sm:inline text-blue-400/40">|</span>
              <span className="text-blue-300/80 text-xs">HIPAA Compliant &middot; SOC 2 Type II</span>
            </div>
            <div className="flex gap-6">
              <Link to="/contact" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
