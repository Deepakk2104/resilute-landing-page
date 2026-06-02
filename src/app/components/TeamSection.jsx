import Image from "next/image";

const team = [
  {
    image: "/images/team-1.png",
    name: "Alex Thorne",
    role: "Founder & CEO",
    desc: "Formerly lead infrastructure at Nexus Global. 12+ years in distributed systems.",
  },
  {
    image: "/images/team-2.png",
    name: "Elena Vance",
    role: "Chief Technology Officer",
    desc: "Cryptographic protocol expert with a focus on zero-knowledge physical proofs.",
  },
  {
    image: "/images/team-3.png",
    name: "Marcus Chen",
    role: "Head of Operations",
    desc: "Ex-Logistics Director. Expert in supply chain transparency and hardware oracles.",
  },
];

export default function TeamSection() {
  return (
    <section className="px-4 py-10">
      
      <div className="relative overflow-hidden rounded-[42px] bg-[#f7f8fb] px-8 py-16 md:px-14">
        
        {/* GRID BACKGROUND */}
        <div className="absolute inset-0 opacity-[1.5]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(90,124,235,0.08) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(90,124,235,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />
        </div>
        {/* TOP LEFT */}
<div
  className="absolute left-[-180px] top-[-60px]"
  style={{
    width: "530px",
    height: "179px",
    background: "#A39CEC",
    filter: "blur(240px)",
    opacity: 0.5,
  }}
/>

{/* TOP RIGHT */}
<div
  className="absolute right-[-180px] top-[-60px]"
  style={{
    width: "530px",
    height: "179px",
    background: "#A39CEC",
    filter: "blur(240px)",
    opacity: 0.5,
  }}
/>

{/* BOTTOM LEFT */}
<div
  className="absolute left-[-180px] bottom-[-60px]"
  style={{
    width: "530px",
    height: "179px",
    background: "#A39CEC",
    filter: "blur(240px)",
    opacity: 0.5,
  }}
/>

{/* BOTTOM RIGHT */}
<div
  className="absolute right-[-180px] bottom-[-60px]"
  style={{
    width: "530px",
    height: "179px",
    background: "#A39CEC",
    filter: "blur(240px)",
    opacity: 0.5,
  }}
/>

        {/* CONTENT */}
        <div className="relative z-10">
          
          {/* TOP */}
          <div className="text-center">
            
            <p className="text-[14px] font-semibold uppercase tracking-[0.22em] text-[#4D73E6]">
              TEAM
            </p>

            <h2 className="mt-6 text-[46px] font-medium leading-[1] tracking-[-0.05em] text-black md:text-[50px]">
              Meet the Architects
            </h2>
          </div>

          {/* TEAM CARDS */}
          <div className="mx-auto mt-20 grid max-w-[1500px] gap-8 lg:grid-cols-3">
            
            {team.map((member, index) => (
              <div
                key={index}
                className="rounded-[30px] bg-white px-8 py-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(77,115,230,0.08)]"
              >
                
                {/* IMAGE */}
                <div className="mx-auto flex h-[110px] w-[110px] items-center justify-center rounded-full border-2 border-[#9eb5ff] p-1">
                  
                  <div className="overflow-hidden rounded-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={100}
                      height={100}
                      className="h-[100px] w-[100px] object-cover"
                    />
                  </div>
                </div>

                {/* NAME */}
                <h3 className="mt-8 text-[30px] font-semibold leading-[1] text-black">
                  {member.name}
                </h3>

                {/* ROLE */}
                <p className="mt-3 text-[15px] font-medium text-[#4D73E6]">
                  {member.role}
                </p>

                {/* DESCRIPTION */}
                <p className="mx-auto mt-8 max-w-[320px] text-[17px] leading-relaxed text-[#666]">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}