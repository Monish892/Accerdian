"use client";

import Image from "next/image";

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-black leading-[1.15] mb-6 tracking-tight">
              Next-Gen <span className="text-[#1a73e8]">Expertise</span><br />
              For Your <span className="text-[#1a73e8]">Enterprise</span>
            </h1>

            <p className="text-lg text-gray-800 leading-relaxed mb-8">
              Cultivate high-performance teams through expert learning.
            </p>

            <ul className="space-y-4 mb-10">
              {["Tailored Solutions", "Industry Insights", "Expert Guidance"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-800 font-medium">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleScroll("#enquiry")}
              className="px-8 py-3.5 text-base font-semibold text-white rounded-lg bg-[#1a73e8] hover:bg-[#1557b0] shadow-md hover:shadow-lg transition-all duration-300"
            >
              Enquire Now
            </button>
          </div>

          {/* Right - Exact Image from Reference */}
          <div className="animate-slide-in-right relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[550px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://enterprise.accredian.com/assets/HeroSection-Cq_N6M94.webp"
                alt="Accredian Enterprise Learning Professionals"
                fill
                className="object-cover"
                unoptimized
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
