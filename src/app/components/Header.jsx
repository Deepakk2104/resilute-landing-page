import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "#hero", active: true },
  { label: "Why", href: "/why-it-exists" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Merchants", href: "#audience" },
  { label: "About", href: "#testimonials" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-transparent bg-white/90 backdrop-blur-md transition-shadow duration-300 hover:border-[#f0f0f0] supports-[backdrop-filter]:bg-white/80">
      <div className="section-container flex h-[88px] items-center justify-between px-6 md:px-10">
        <Link href="#hero" className="group flex items-center gap-3">
          <Image
            src="/images/logo-icon.png"
            alt=""
            width={44}
            height={44}
            className="h-11 w-50 shrink-0 transition-transform duration-300 group-hover:scale-105"
            priority
          />
          
        </Link>

        <nav className="hidden items-center gap-8 text-[15px] font-medium lg:gap-10 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`nav-link ${
                link.active ? "nav-link-active" : "nav-link-inactive"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5 text-[20px] text-[#2D4A8A] md:gap-6">
          {[
            { Icon: FaTelegramPlane, label: "Telegram" },
            { Icon: FaTwitter, label: "Twitter" },
            { Icon: FaDiscord, label: "Discord" },
          ].map(({ Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="rounded-full p-1 transition-all duration-300 hover:scale-110 hover:text-[#3F73D8]"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
