"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function FreeMonthSection() {
  return (
    <section className="relative overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f2f57] via-[#153B6D] to-[#1E3A8A]" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,white,transparent_40%)]" />

      <div className="relative w-full p-5 lg:p-0">
        <div className="grid lg:grid-cols-12 items-stretch gap-0">
          {/* ✅ LEFT BG IMAGE */}
          <div className="lg:col-span-4 relative min-h-[260px] sm:min-h-[320px] lg:min-h-[520px] order-1">
            {/* bg image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/Specialized-Solutions.jpg')" }}
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-[#153B6D]/70" />

            {/* testimonial */}
            <div className="relative h-full flex items-end p-4 sm:p-6">
              <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 text-white">
                <p className="text-xs sm:text-sm leading-relaxed">
                  MTS LLC handles our entire revenue cycle. We get paid faster
                  and focus more on patient care.
                </p>

                <div className="mt-3">
                  <h4 className="font-semibold text-sm sm:text-base">
                    Midtown Cardiology Group
                  </h4>
                  <p className="text-[10px] sm:text-xs text-blue-200">
                    New York, NY
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ RIGHT CONTENT */}
          <div className="lg:col-span-8 text-white py-10 sm:py-16 lg:px-12 order-2">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
              Experience MTS LLC First-Hand!
            </h2>

            <p className="mt-4 sm:mt-5 text-blue-200 max-w-xl text-sm sm:text-base">
              We're extremely confident in improving your practice’s revenue
              stream. That's why we're offering you services like:
            </p>

            {/* FEATURES */}
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              <FeatureCard
                title="Practice Assessment"
                desc="We uncover hidden revenue leaks and fix them permanently."
              />
              <FeatureCard
                title="Setup Installation"
                desc="System integration with your existing workflow."
              />
              <FeatureCard
                title="First Month Billing"
                desc="Complete billing service for your first month."
              />
            </div>

            {/* CTA */}
            <div className="mt-10 sm:mt-12">
              <Link href="/contact" className="w-full sm:w-auto inline-flex justify-center bg-white text-[#153B6D] px-6 sm:px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition cursor-pointer">
                Activate Now!
              </Link>

              <p className="text-[10px] sm:text-xs text-blue-200 mt-3">
                *No credit card required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Feature Card ---------- */

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 hover:bg-white/15 transition cursor-pointer">
      <CheckCircle className="text-green-400 mb-2 sm:mb-3" size={20} />
      <h4 className="font-semibold text-sm sm:text-base">{title}</h4>
      <p className="text-[11px] sm:text-xs text-blue-200 mt-2 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
