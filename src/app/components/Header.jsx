"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Why", href: "/why-it-exists" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "For Merchants", href: "/for-merchants" },
  { label: "About", href: "/about-us" }, // change to /about if that's your route
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#f0f0f0] bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/80">
      <div className="section-container flex h-[88px] items-center justify-between px-6 md:px-10">
        
        {/* LOGO */}
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/images/logo-icon.png"
            alt="Resilute"
            width={180}
            height={44}
            className="h-11 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden items-center gap-8 text-[15px] font-medium lg:gap-10 xl:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative py-3 transition-colors duration-300 ${
                  isActive
                    ? "text-[#3F73D8]"
                    : "text-[#1f2937] hover:text-[#3F73D8]"
                }`}
              >
                {link.label}

                {/* ACTIVE BAR */}
                <span
                  className={`absolute -bottom-[2px] left-0 h-[2px] rounded-full bg-[#3F73D8] transition-all duration-300 ${
                    isActive
                      ? "w-full opacity-100"
                      : "w-0 opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* SOCIAL ICONS */}
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