import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Customer Visits",
    desc: "Customers walk into your location and interact naturally with your business.",
  },
  {
    number: "02",
    title: "Activity Verified",
    desc: "Resilute confirms visits using secure multi-layer signals like location and proximity.",
  },
  {
    number: "03",
    title: "Insights Generated",
    desc: "Get accurate data on footfall, engagement, and real business performance.",
  },
];

export default function BusinessWorkflowSection() {
  return (
    <section className="px-4 py-10">
      
      <div className="relative overflow-hidden rounded-[42px] bg-[#f7f8fb] px-8 py-14 md:px-14">
        
        {/* GRID BACKGROUND */}
        <div className="absolute inset-0 opacity-[0.35]">
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

        {/* CONTENT */}
        <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2">
          
          {/* LEFT SIDE */}
          <div className="max-w-[650px]">
            
            {/* HEADING */}
            <h2 className="text-[42px] font-medium leading-[1] tracking-[-0.05em] text-black md:text-[64px]">
              How Resilute works for your business
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-8 max-w-[620px] text-[18px] leading-relaxed text-[#666]">
              From real-world visits to actionable insights powered by secure verification.
            </p>

            {/* STEPS */}
            <div className="mt-14 space-y-12">
              
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-6"
                >
                  
                  {/* NUMBER */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#eef1f7] text-[24px] font-semibold text-black">
                    {step.number}
                  </div>

                  {/* TEXT */}
                  <div>
                    
                    <h3 className="text-[28px] font-semibold leading-[1.1] text-black">
                      {step.title}
                    </h3>

                    <p className="mt-4 max-w-[500px] text-[17px] leading-relaxed text-[#666]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center">
            
            {/* IMAGE CONTAINER */}
            <div className="relative w-full max-w-[760px]">
              
              {/* SOFT GLOW */}
              <div className="absolute inset-0 rounded-[40px] bg-cyan-200/20 blur-[80px]" />

              {/* IMAGE */}
              <Image
                src="/images/business-workflow.png"
                alt="Business Workflow"
                width={900}
                height={700}
                priority
                className="relative z-10 w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}