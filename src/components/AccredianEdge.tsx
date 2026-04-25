"use client";

import { useEffect, useRef, useState } from "react";
import { ACCREDIAN_EDGE } from "@/lib/constants";

export default function AccredianEdge() {
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
    <section id="edge" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            The Accredian <span className="text-brand-600">Edge</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            What sets us apart as the preferred enterprise learning partner for India&apos;s leading organizations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACCREDIAN_EDGE.map((item, index) => (
            <div
              key={item.title}
              className={`group p-7 rounded-2xl bg-white border border-gray-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100/30 transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-brand-50 group-hover:bg-brand-100 flex items-center justify-center text-2xl mb-5 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
