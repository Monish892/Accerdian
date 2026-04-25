"use client";

import { CLIENT_LOGOS } from "@/lib/constants";

export default function Clients() {
  const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section id="clients" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest">
          Trusted by Leading Enterprises
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />
        <div className="flex animate-marquee">
          {logos.map((company, index) => (
            <div key={`${company.name}-${index}`} className="flex-shrink-0 mx-10">
              <div className="w-36 h-14 rounded-xl bg-white border border-gray-200 flex items-center justify-center gap-2 hover:shadow-md hover:border-brand-200 transition-all duration-300">
                <div
                  className="w-7 h-7 rounded-md flex items-center justify-center text-white text-[10px] font-bold"
                  style={{ backgroundColor: company.color }}
                >
                  {company.name.charAt(0)}
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  {company.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
