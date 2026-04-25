"use client";

import { useEffect, useRef, useState } from "react";
import { COURSE_SEGMENTS } from "@/lib/constants";

export default function CourseSegments() {
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
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Course <span className="text-brand-600">Segments</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Flexible course offerings categorized by program type, industry, topic, and experience level.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSE_SEGMENTS.map((segment, index) => (
            <div
              key={segment.title}
              className={`group p-6 rounded-2xl bg-white border border-gray-100 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-50 transition-all duration-400 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">
                {segment.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                {segment.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {segment.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-brand-50 text-brand-600 border border-brand-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
