"use client";

import { useEffect, useRef, useState } from "react";
import { DOMAIN_EXPERTISE } from "@/lib/constants";

export default function DomainExpertise() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Domain <span className="text-brand-600">Expertise</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Comprehensive training across key business and technology domains, designed to meet every organizational need.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {DOMAIN_EXPERTISE.map((domain, index) => (
            <div
              key={domain.title}
              className={`group p-6 rounded-2xl bg-white border border-gray-100 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-50 transition-all duration-400 hover:-translate-y-0.5 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="w-11 h-11 rounded-lg bg-brand-50 group-hover:bg-brand-100 flex items-center justify-center text-xl mb-4 transition-colors">
                {domain.icon}
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1.5 group-hover:text-brand-600 transition-colors">
                {domain.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {domain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
