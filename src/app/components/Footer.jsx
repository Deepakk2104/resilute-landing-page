import Link from "next/link";
import { FaDiscord, FaEnvelope, FaTwitter } from "react-icons/fa";

const productLinks = [
  { label: "Features", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "For Merchants", href: "/for-merchants" },
  { label: "Roadmap", href: "/about" },
];

const developerLinks = [
  { label: "Documentation", href: "#" },
  { label: "API Reference", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Community", href: "#" },
];

const companyLinks = [
  { label: "About", href: "/about-us" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

function FooterLogo() {
  return (
    <div className="group flex items-center gap-3">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-white transition-transform duration-300 group-hover:scale-105">
        <div className="absolute top-[7px] h-2 w-2 rounded-full bg-white" />
        <div className="absolute bottom-[7px] flex gap-[3px]">
          <div className="h-3 w-[5px] rounded-full bg-white" />
          <div className="h-4 w-[5px] rounded-full bg-white" />
          <div className="h-3 w-[5px] rounded-full bg-white" />
        </div>
      </div>

      <span className="text-[28px] font-semibold tracking-wide text-white md:text-[30px]">
        Resilute
      </span>
    </div>
  );
}

function LinkColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-[15px] font-bold text-white">
        {title}
      </h3>

      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[14px] text-[#9ca3af] transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-black px-6 py-14 md:px-10 md:py-16">
      <div className="section-container">
        
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          
          {/* LOGO COLUMN */}
          <div className="lg:col-span-1">
            
            <Link href="/">
              <FooterLogo />
            </Link>

            <p className="mt-5 max-w-[280px] text-[14px] leading-relaxed text-[#9ca3af]">
              Transforming real-world activity into portable on-chain reputation.
            </p>

            <div className="mt-6 flex gap-3">
              {[
                { Icon: FaTwitter, label: "Twitter" },
                { Icon: FaDiscord, label: "Discord" },
                { Icon: FaEnvelope, label: "Email" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1a1a1a] text-[#3B82F6] transition-all duration-300 hover:scale-110 hover:bg-[#262626] hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <LinkColumn title="Product" links={productLinks} />
          <LinkColumn title="Developers" links={developerLinks} />
          <LinkColumn title="Company" links={companyLinks} />
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-14 border-t border-[#262626] pt-8 md:mt-16">
          
          <div className="flex flex-col gap-4 text-[13px] text-[#9ca3af] md:flex-row md:items-center md:justify-between">
            
            <p>© 2026 Resilute. All rights reserved.</p>

            <div className="flex flex-wrap gap-6 md:gap-8">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}