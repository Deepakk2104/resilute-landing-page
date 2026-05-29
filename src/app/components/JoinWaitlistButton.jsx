import { ArrowRight } from "lucide-react";

export default function JoinWaitlistButton({
  text = "Join Waitlist",
  className = "",
}) {
  return (
    <button
      type="button"
      className={`
        inline-flex
        h-[50px]
        min-w-[200px]
        items-center
        justify-between
        rounded-full
        bg-[linear-gradient(257.39deg,#2350AD_16.92%,#7DA7CE_183.18%)]
        pl-7
        pr-[5px]
        text-white
        shadow-[0_8px_24px_rgba(35,80,173,0.18)]
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:shadow-[0_12px_32px_rgba(35,80,173,0.25)]
        ${className}
      `}
    >
      <span className="whitespace-nowrap text-[20px] font-medium leading-none">
        {text}
      </span>

      <span className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-white">
        <ArrowRight
          size={20}
          strokeWidth={2.5}
          className="text-[#2350AD]"
        />
      </span>
    </button>
  );
}