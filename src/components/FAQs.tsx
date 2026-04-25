"use client";

import { useState } from "react";
import { FAQS } from "@/lib/constants";

export default function FAQs() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-brand-600">Questions</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Find answers to common questions about our enterprise training programs.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {FAQS.map((cat, index) => (
            <button
              key={cat.category}
              onClick={() => { setActiveCategory(index); setOpenQuestion(null); }}
              className={`px-5 py-2.5 text-sm font-medium rounded-full border transition-all duration-300 ${
                activeCategory === index
                  ? "bg-brand-600 text-white border-brand-600 shadow-md shadow-brand-200"
                  : "bg-white text-gray-500 border-gray-200 hover:border-brand-300 hover:text-brand-600"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Questions */}
        <div className="space-y-3">
          {FAQS[activeCategory].questions.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-100 bg-white overflow-hidden hover:border-brand-200 transition-colors duration-300"
            >
              <button
                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-sm font-medium text-gray-800 pr-4">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    openQuestion === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openQuestion === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
