import {
  FaLocationDot,
  FaShieldHalved,
  FaBluetoothB,
} from "react-icons/fa6";
import { MdGpsFixed } from "react-icons/md";

export default function VerificationSection() {
  const features = [
    {
      icon: "/images/location.png",
      title: "Location verification",
      desc: "Confirms presence using precise location signals within a defined area.",
    },
    {
      icon: "/images/device.png",
      title: "Device proximity",
      desc: "Uses short-range signals to verify the user is physically near the location.",
    },
    {
      icon: "/images/trans.png",
      title: "Transaction confirmation",
      desc: "Validates real activity through confirmed actions like purchases or check-ins.",
    },
  ];

  return (
    <section className="px-4 py-10">
      
      <div className="mx-auto grid max-w-[1500px] items-start gap-16 rounded-[40px] bg-[#f7f8fb] px-8 py-16 lg:grid-cols-2 lg:px-14">
        
        {/* LEFT SIDE */}
        <div>
          
          {/* LABEL */}
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4D73E6]">
            Layer 01 Verification
          </p>

          {/* TITLE */}
          <h2 className="mt-6 max-w-[620px] text-[52px] font-medium leading-[0.95] tracking-[-0.05em] text-black md:text-[54px]">
            How we know you&apos;re really there
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-8 max-w-[700px] text-[24px] leading-relaxed text-[#666]">
            When a user interacts at a Resilute location,
            multiple independent signals are verified together
            to confirm real-world presence.
          </p>

          {/* FEATURES */}
          <div className="mt-14 space-y-10">
            
            {features.map((item, index) => (
              <div
                key={index}
                className="group flex gap-6"
              >
                {/* ICON */}
               <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#eef2ff] transition-all duration-300 group-hover:scale-110">
  <img
    src={item.icon}
    alt={item.title}
    className="h-15 w-15 object-contain"
  />
</div>

                {/* TEXT */}
                <div>
                  <h3 className="text-[22px] font-semibold text-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-[560px] text-[18px] leading-relaxed text-[#666]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        {/* RIGHT SIDE */}
<div className="relative flex justify-center lg:justify-end lg:pt-2 mt-6">
  <div
    className="
      relative
      flex
      w-full
      max-w-[600px]
      flex-col
      items-center
      rounded-[40px]
      bg-white
      p-12
      shadow-[0_30px_80px_rgba(0,0,0,0.08)]

      lg:-translate-y-10
    "
  >
    
    {/* TOP CARD */}
    <div className="flex w-full max-w-[480px] items-center justify-between rounded-[24px] bg-white mt-18 px-6 py-6 shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1">
      
      <div className="flex items-center gap-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#eefbf0] text-[#6ddc7d]">
          <img
  src="/images/tick.png"
  alt="Verified"
  className="h-15 w-15 object-contain"
/>
        </div>

        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#777]">
            Final Validation
          </p>

          <h4 className="mt-1 text-[14px] font-semibold text-black">
            Verified Action
          </h4>
        </div>
      </div>

      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#6ddc7d]">
        100% Secure
      </p>
    </div>

    {/* CENTER CARD */}
    <div className="mt-12 flex w-full max-w-[480px] items-center justify-between rounded-[24px] bg-white mt-16 px-6 py-6 shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1">
      
      <div className="flex items-center gap-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#eef8ff] text-[#4D73E6]">
          <img
  src="/images/bluetooth.png"
  alt="Bluetooth"
  className="h-15 w-15 object-contain"
/>
        </div>

        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#777]">
            Hardware Handshake
          </p>

          <h4 className="mt-1 text-[14px] font-semibold text-black">
            Bluetooth / NaC
          </h4>
        </div>
      </div>

      <div className="h-2 w-24 rounded-full bg-[#ececec]">
        <div className="h-full w-[75%] rounded-full bg-cyan-400" />
      </div>
    </div>

    {/* BOTTOM CARD */}
    <div className="mt-12 flex w-full max-w-[480px] items-center justify-between rounded-[24px] bg-white mt-18 mb-18 px-6 py-6 shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1">
      
      <div className="flex items-center gap-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#eef2ff] text-[#4D73E6]">
          <img
  src="/images/gps.png"
  alt="GPS"
  className="h-15 w-15 object-contain"
/>
        </div>

        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#777]">
            Global Positioning
          </p>

          <h4 className="mt-1 text-[14px] font-semibold text-black">
            GPS Signal
          </h4>
        </div>
      </div>

      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#777]">
        Syncing...
      </p>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}