import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "#hero", active: true },
  { label: "Why", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Merchants", href: "#audience" },
  { label: "About", href: "#testimonials" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#ececec] bg-white/70 backdrop-blur-xl">
      
      <div className="mx-auto flex h-[88px] max-w-[1440px] items-center justify-between px-6 md:px-10">
        
        {/* LOGO */}
        <Link
          href="#hero"
          className="group flex items-center gap-3"
        >
          <Image
            src="/images/logo-icon.png"
            alt="Resilute Logo"
            width={170}
            height={44}
            className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            priority
          />
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden items-center gap-9 text-[15px] font-medium xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`relative transition-all duration-300 ${
                link.active
                  ? "text-black"
                  : "text-[#666] hover:text-black"
              }`}
            >
              {link.label}

              {link.active && (
                <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-[#3F73D8]" />
              )}
            </Link>
          ))}
        </nav>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-5 text-[18px] text-[#2D4A8A] md:gap-6">
          {[
            { Icon: FaTelegramPlane, label: "Telegram" },
            { Icon: FaTwitter, label: "Twitter" },
            { Icon: FaDiscord, label: "Discord" },
          ].map(({ Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="transition-all duration-300 hover:scale-110 hover:text-[#3F73D8]"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}