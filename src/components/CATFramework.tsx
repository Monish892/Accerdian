"use client";

import { useEffect, useRef, useState } from "react";
import { CAT_FRAMEWORK } from "@/lib/constants";

export default function CATFramework() {
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

  const colors = [
    { bg: "bg-blue-600", light: "bg-blue-50", text: "text-blue-600" },
    { bg: "bg-emerald-600", light: "bg-emerald-50", text: "text-emerald-600" },
    { bg: "bg-violet-600", light: "bg-violet-50", text: "text-violet-600" },
  ];

  return (
    <section id="cat" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            The <span className="text-brand-600">C.A.T</span> Framework
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Our proprietary learning methodology that ensures every professional not just learns, but applies and excels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {CAT_FRAMEWORK.map((item, index) => (
            <div
              key={item.letter}
              className={`group relative p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-xl hover:shadow-gray-100/60 transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Large letter */}
              <div className={`w-16 h-16 rounded-2xl ${colors[index].bg} flex items-center justify-center mb-6 shadow-lg`}>
                <span className="text-3xl font-extrabold text-white">{item.letter}</span>
              </div>

              <h3 className={`text-xl font-bold text-gray-900 mb-3`}>
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.description}
              </p>

              {/* Connector arrow (visible on desktop between cards) */}
              {index < 2 && (
                <div className="hidden md:flex absolute top-1/2 -right-5 -translate-y-1/2 z-10">
                  <div className={`w-10 h-10 rounded-full ${colors[index].light} flex items-center justify-center`}>
                    <svg className={`w-4 h-4 ${colors[index].text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
