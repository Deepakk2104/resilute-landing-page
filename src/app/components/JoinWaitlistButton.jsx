import { ArrowRight } from "lucide-react";

export default function JoinWaitlistButton({ className = "", size = "lg" }) {
  const iconSize = size === "lg" ? 26 : 22;
  const iconPad = size === "lg" ? "p-3" : "p-2.5";
  const textClass = size === "lg" ? "text-xl md:text-2xl" : "text-base md:text-lg";

  return (
    <button type="button" className={`btn-waitlist ${textClass} ${className}`}>
      Join Waitlist
      <span className={`flex rounded-full bg-white text-[#3F73D8] ${iconPad}`}>
        <ArrowRight size={iconSize} strokeWidth={2.5} />
      </span>
    </button>
  );
}
