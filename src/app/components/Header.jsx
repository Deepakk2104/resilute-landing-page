"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FaDiscord,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import {
  FaBars,
  FaXmark,
} from "react-icons/fa6";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Why", href: "/why-it-exists" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "For Merchants", href: "/for-merchants" },
  { label: "About", href: "/about-us" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#f0f0f0] bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/80">
      <div className="section-container flex h-[88px] items-center justify-between px-4 md:px-8 lg:px-10">

        {/* LOGO */}
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/images/logo-icon.png"
            alt="Resilute"
            width={180}
            height={44}
            className="h-9 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105 md:h-11"
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 text-[15px] font-medium xl:flex">
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

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* DESKTOP SOCIALS */}
          <div className="hidden items-center gap-5 text-[20px] text-[#2D4A8A] md:flex">
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

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#EAEAEA] xl:hidden"
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <FaXmark className="text-xl text-[#1f2937]" />
            ) : (
              <FaBars className="text-lg text-[#1f2937]" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden border-t border-[#f0f0f0] bg-white transition-all duration-300 xl:hidden ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4">

          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`py-4 text-[16px] font-medium transition-colors ${
                  isActive
                    ? "text-[#3F73D8]"
                    : "text-[#1f2937]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="mt-4 flex items-center gap-5 border-t border-[#f0f0f0] pt-5 text-[22px] text-[#2D4A8A]">
            <FaTelegramPlane />
            <FaTwitter />
            <FaDiscord />
          </div>
        </div>
      </div>
    </header>
  );
}