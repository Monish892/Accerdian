"use client";

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative pt-20 lg:pt-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-blue-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold mb-6 uppercase tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
              Enterprise Learning Platform
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-gray-900 leading-[1.15] mb-6">
              Empowering Corporates,{" "}
              <span className="text-brand-600">Accelerating Careers</span>
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">
              Future-proof your workforce with industry-aligned upskilling programs.
              Accredian partners with leading enterprises to build high-impact, scalable training solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleScroll("#enquiry")}
                className="group px-7 py-3.5 text-sm font-semibold text-white rounded-xl bg-brand-600 hover:bg-brand-700 shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                Talk to Us
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </button>
              <button
                onClick={() => handleScroll("#edge")}
                className="px-7 py-3.5 text-sm font-semibold text-brand-600 rounded-xl border-2 border-brand-200 hover:border-brand-300 hover:bg-brand-50 transition-all duration-300"
              >
                Explore Programs
              </button>
            </div>
          </div>

          {/* Right - Illustration */}
          <div className="animate-slide-in-right hidden lg:flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Main visual card */}
              <div className="rounded-3xl bg-white shadow-2xl shadow-brand-200/50 p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Enterprise Training</p>
                    <p className="text-xs text-gray-400">Powered by Accredian</p>
                  </div>
                </div>

                {/* Mini stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { v: "10K+", l: "Trained" },
                    { v: "200+", l: "Sessions" },
                    { v: "95%", l: "Satisfaction" },
                  ].map((s) => (
                    <div key={s.l} className="text-center p-3 rounded-xl bg-brand-50">
                      <p className="text-lg font-bold text-brand-600">{s.v}</p>
                      <p className="text-xs text-gray-500">{s.l}</p>
                    </div>
                  ))}
                </div>

                {/* Progress bars */}
                <div className="space-y-4">
                  {[
                    { label: "Data Science", pct: 92 },
                    { label: "Product Management", pct: 87 },
                    { label: "AI & Machine Learning", pct: 78 },
                  ].map((p) => (
                    <div key={p.label}>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs font-medium text-gray-600">{p.label}</span>
                        <span className="text-xs font-semibold text-brand-600">{p.pct}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-600 transition-all duration-1000"
                          style={{ width: `${p.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg shadow-gray-200/60 px-4 py-3 border border-gray-100 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">Certified</p>
                    <p className="text-[10px] text-gray-400">Industry Recognized</p>
                  </div>
                </div>
              </div>

              {/* Bottom floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg shadow-gray-200/60 px-4 py-3 border border-gray-100 animate-fade-in" style={{ animationDelay: "0.8s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-100 flex items-center justify-center text-brand-600 text-sm font-bold">🏢</div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">500+ Enterprises</p>
                    <p className="text-[10px] text-gray-400">Trust Accredian</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
