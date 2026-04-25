"use client";

import { useEffect, useRef, useState } from "react";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

export default function HowItWorks() {
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
    <section id="how-it-works" className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It <span className="text-brand-600">Works</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A simple three-step process to get your organization started with world-class training.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200" />

          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <div
              key={step.step}
              className={`relative text-center ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Step circle */}
              <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-full bg-brand-600 flex items-center justify-center shadow-lg shadow-brand-200">
                <span className="text-2xl font-bold text-white">{step.step}</span>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg hover:shadow-brand-50 transition-all duration-400">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
