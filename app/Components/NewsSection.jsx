"use client";

import { ArrowRight } from "lucide-react";

export default function NewsSection() {
  const news = [
    {
      date: "February 19, 2025",
      title:
        "Annual CPT Updates 2026: What Billing Teams Need to Review, Update, and Optimize Now",
    },
    {
      date: "February 17, 2025",
      title:
        "How Under-Coding Hurts Revenue More Than Over-Coding",
    },
    {
      date: "February 15, 2025",
      title:
        "Coding for New Providers: Common Errors During the First 90 Days",
    },
    {
      date: "February 11, 2025",
      title:
        "Modifier Misuse: How Incorrect Modifiers Trigger Denials and Delays",
    },
  ];

  return (
    <section className="relative py-14 sm:py-16 lg:py-20 bg-[#f5f7fb] w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="mb-10 lg:mb-14">
          <p className="text-xs sm:text-sm text-blue-600 font-semibold tracking-wider uppercase">
            News
          </p>

          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            What’s new at MTS LLC?
          </h2>
        </div>

        {/* NEWS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {news.map((item, i) => (
            <article
              key={i}
              className="group bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-5 sm:p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer"
            >
              <p className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wide">
                {item.date.toUpperCase()}
              </p>

              <h3 className="mt-3 text-sm sm:text-base font-semibold text-gray-900 leading-snug group-hover:text-blue-700 transition">
                {item.title}
              </h3>

              <div className="mt-4 flex items-center text-blue-600 text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition">
                Read more
                <ArrowRight size={16} className="ml-1" />
              </div>
            </article>
          ))}
        </div>

        {/* BUTTON */}
        <div className="mt-10 sm:mt-12 text-center">
          <button className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white px-7 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition cursor-pointer">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
