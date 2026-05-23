import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import CredentialingSection from "@/app/Components/CredentialingSection";
import FreeMonthSection from "@/app/Components/FreeMonthSection";
import NewsSection from "@/app/Components/NewsSection";
import BillingSection from "./Components/BillingSection";

export const metadata: Metadata = {
  title: "MTS LLC | Medical Billing, Coding & Credentialing Solutions",
  description: "Expert revenue cycle management services for healthcare practices. Medical billing, coding, credentialing, denial management, and AR follow-up.",
  openGraph: {
    title: "MTS LLC | Medical Billing & RCM Solutions",
    description: "Complete revenue cycle management for healthcare practices nationwide.",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MTS LLC" }],
  },
};

import {
  Stethoscope,
  Bone,
  HeartPulse,
  Baby,
  Brain,
  ScanFace,
  ChevronDown,
  HeartHandshake,
  Users,
  PersonStanding,
  Activity,
  Home as HomeIcon,
  Accessibility, 
  PackagePlus,
  Sparkles,
  Syringe
} from "lucide-react";

// ================== CATEGORIZED SPECIALTIES DATA ==================
const categorizedSpecialties = [
  {
    category: "Medical Health",
    description: "Comprehensive billing and RCM for core medical practices.",
    items: [
      { name: "Internal Medicine", icon: Stethoscope },
      { name: "Orthopedic Surgery", icon: Bone },
      { name: "Cardiology", icon: HeartPulse },
      { name: "Pediatrics", icon: Baby },
      { name: "Plastic Surgery", icon: Sparkles },
      { name: "Neurology", icon: Brain },
      { name: "Anesthesiology", icon: Syringe },
      { name: "Dermatology", icon: ScanFace },
    ],
  },
  {
    category: "Behavioral Health",
    description: "Specialized solutions for mental health professionals.",
    items: [
      { name: "Psychiatric", icon: Brain },
      { name: "Mental Health Counselors", icon: HeartHandshake },
      { name: "Social Workers", icon: Users },
    ],
  },
  {
    category: "PT, OT, and Home Health Agencies",
    description: "Streamlined coding for therapy and home care services.",
    items: [
      { name: "Physical Therapy (PT)", icon: PersonStanding },
      { name: "Occupational Therapy (OT)", icon: Activity },
      { name: "Home Health Agencies", icon: HomeIcon },
    ],
  },
 {
    category: "DME",
    description: "Billing solutions for Durable Medical Equipment providers.",
    items: [
      { name: "DME Providers", icon: Accessibility }, 
      { name: "Medical Supplies", icon: PackagePlus },
    ],
  },
];

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-[#f8fafc] to-[#eef2f7] text-slate-800">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/5 via-[#22c55e]/5 to-[#facc15]/5"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <span className="bg-[#99C050]/10 text-[#93B45B] px-4 py-1 rounded-full text-sm font-medium" data-aos="zoom-in" data-aos-delay="200">
              10 yrs + experience in web
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mt-6 leading-tight text-[#1E3A8A]" data-aos="fade-up" data-aos-delay="400">
              Maximize Your Patient Care
              <br />
              While We Handle the Rest
            </h1>

            <p className="mt-6 text-slate-600 text-lg" data-aos="fade-up" data-aos-delay="600">
              Professional medical billing, credentialing, and growth solutions
              designed to increase revenue and simplify operations.
            </p>

            <div className="mt-8 flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="800">
              <button className="bg-[#1E3A8A] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#172554] transition">
                Book a Demo
              </button>

              <button className="border border-[#99C050] text-[#93B45B] px-6 py-3 rounded-lg hover:bg-[#99C050] hover:text-white transition">
                Practice Audit
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden" data-aos="fade-left">
            <div className="relative w-full h-[200px] md:h-[350px]">
              <Image
                src="/hero.jpeg"
                alt="MTS Logo"
                fill
                className="object-cover"
                priority
                unoptimized
              />
              {/* Floating Doctor Icon */}
              <div className="absolute top-4 right-4 bg-[#99C050] p-3 rounded-full shadow-lg animate-bounce" data-aos="zoom-in" data-aos-delay="1000">
                <PersonStanding className="w-8 h-8 text-white" />
              </div>
              {/* Floating Nurse Icon */}
              <div className="absolute bottom-4 left-4 bg-[#1E3A8A] p-3 rounded-full shadow-lg animate-pulse" data-aos="zoom-in" data-aos-delay="1200">
                <Accessibility className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1E3A8A]" data-aos="fade-down">
            Complete Practice Management Solutions
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="cursor-pointer hover:-translate-y-2 hover:shadow-lg transition-all duration-300 rounded-2xl" data-aos="fade-up" data-aos-delay="200">
              <FeatureCard title="Medical Billing" color="text-[#1E3A8A]" />
            </div>

            <div className="cursor-pointer hover:-translate-y-2 hover:shadow-lg transition-all duration-300 rounded-2xl" data-aos="fade-up" data-aos-delay="400">
              <FeatureCard title="AI Powered Automation" color="text-[#99C050]" />
            </div>

            <div className="cursor-pointer hover:-translate-y-2 hover:shadow-lg transition-all duration-300 rounded-2xl" data-aos="fade-up" data-aos-delay="600">
              <FeatureCard title="Advanced Analytics" color="text-[#ca8a04]" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= HEALTHCARE SOLUTIONS SECTION ================= */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0F2F57] via-[#1E3A8A] to-[#153B6D] text-white py-24 px-6 md:px-16" data-aos="fade-up">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#22c55e]/15 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#3b82f6]/15 rounded-full blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2"></div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20 items-center z-10">
          
          {/* Left Orbit Circles */}
          <div className="flex justify-center items-center w-full min-h-[400px] sm:min-h-[500px]" data-aos="zoom-in" data-aos-delay="200">
            <div className="relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px]">
              <div className="absolute inset-4 sm:inset-6 rounded-full border border-dashed border-white/20 animate-[spin_40s_linear_infinite] pointer-events-none"></div>
              <div className="absolute inset-[20%] rounded-full border border-white/5 pointer-events-none shadow-[inset_0_0_50px_rgba(255,255,255,0.05)]"></div>

              <div className="absolute inset-0 m-auto w-40 h-40 sm:w-52 sm:h-52 bg-white rounded-full flex flex-col items-center justify-center text-[#1E3A8A] shadow-[0_0_50px_rgba(153,192,80,0.3)] z-20 border-[6px] border-[#99C050]/20 backdrop-blur-sm transition-transform duration-500 hover:scale-105 cursor-pointer">
                <div className="absolute inset-0 rounded-full border border-[#99C050] animate-ping opacity-20"></div>
                <span className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  MTS LLC
                </span>
              </div>

              <div className="absolute top-0 left-0 sm:top-2 sm:left-2 w-24 h-24 sm:w-28 sm:h-28 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:bg-white/20 hover:border-[#99C050] hover:scale-110 hover:shadow-[0_0_30px_rgba(153,192,80,0.4)] transition-all duration-300 z-30 cursor-pointer group">
                <span className="text-base sm:text-lg font-bold text-white group-hover:text-[#99C050] transition-colors">PHR</span>
              </div>

              <div className="absolute top-0 right-0 sm:top-2 sm:right-2 w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-[#99C050] to-[#22c55e] border border-white/20 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(34,197,94,0.3)] hover:scale-110 hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] transition-all duration-300 z-30 cursor-pointer">
                <span className="text-base sm:text-lg font-bold text-[#0F2F57]">Billing</span>
              </div>

              <div className="absolute bottom-0 left-0 sm:bottom-2 sm:left-2 w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] border border-white/20 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(59,130,246,0.3)] hover:scale-110 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300 z-30 cursor-pointer">
                <span className="text-base sm:text-lg font-bold text-white">Coding</span>
              </div>

              <div className="absolute bottom-0 right-0 sm:bottom-2 sm:right-2 w-24 h-24 sm:w-28 sm:h-28 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:bg-white/20 hover:border-[#99C050] hover:scale-110 hover:shadow-[0_0_30px_rgba(153,192,80,0.4)] transition-all duration-300 z-30 cursor-pointer group">
                <span className="text-base sm:text-lg font-bold text-white group-hover:text-[#99C050] transition-colors">EHR</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="text-center lg:text-left" data-aos="fade-left">
            <div className="inline-block bg-[#99C050]/10 border border-[#99C050]/30 backdrop-blur-sm rounded-full px-5 py-2 mb-6">
              <p className="uppercase tracking-widest text-xs sm:text-sm font-semibold text-[#99C050]">
                How MTS LLC Can Help You?
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-[1.15] mb-8">
              Experience{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#99C050] to-[#22c55e] italic pr-2">
                Next-Gen
              </span>
              <br /> 360° Healthcare
            </h2>

            <div className="space-y-5 text-left max-w-xl mx-auto lg:mx-0">
              {[
                { title: "Practice Management", desc: "Smooth automation to handle appointments & records." },
                { title: "Patient Experience", desc: "Personalized care workflows for better engagement." },
                { title: "Billing & Payments", desc: "Simplified billing for maximum financial stability." },
                { title: "Reporting & Analytics", desc: "Data-driven insights for smart, quick decisions." },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors duration-300 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#99C050] to-[#22c55e] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <span className="text-[#0F2F57] text-sm font-bold">✔</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">{item.title}</h4>
                    <p className="text-blue-200/80 text-sm mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center lg:items-start gap-3">
              <Link href="/contact" className="bg-gradient-to-r from-[#99C050] to-[#22c55e] text-[#0F2F57] px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center">
                Start Trial
              </Link>
              <p className="text-sm text-blue-200/70 font-medium ml-1">
                *No credit card required
              </p>
            </div>
          </div>
        </div>
      </section>

      <CredentialingSection />

    {/* ================= SPECIALTIES SECTION (Refined & Elegant) ================= */}
      <section className="py-24 bg-white relative" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Main Title */}
          <div className="text-center mb-16" data-aos="fade-down">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A]">
              Specialties We Serve
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              MTS LLC offers healthcare solutions tailored for your specialty —
              helping both the clinical and financial sides of your practice.
            </p>
          </div>

         {/* Categories Mapping */}
          <div className="space-y-14">
            {categorizedSpecialties.map((group, groupIndex) => (
              <div key={group.category}>
                
                {/* 3xl Green Category Heading */}
                <div className="mb-8 border-b border-slate-100 pb-3" data-aos="fade-right" data-aos-delay={groupIndex * 200}>
                  <h3 className="text-3xl font-bold text-[#1E3A8A] flex items-center gap-3 tracking-tight">
                    {/* Chota sa Blue dot contrast ke liye */}
                    {/* <span className="w-3 h-3 rounded-full bg-[#1E3A8A] inline-block"></span> */}
                    {group.category}
                  </h3>
                </div>

                {/* Cards Grid - Original Blue Icon Style */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {group.items.map((item, itemIndex) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.name}
                        className="group bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer text-center"
                        data-aos="zoom-in"
                        data-aos-delay={(groupIndex * 200) + (itemIndex * 100)}
                      >
                        {/* Original Blue Circle */}
                        <div className="w-14 h-14 mx-auto rounded-full bg-[#1E3A8A]/10 flex items-center justify-center group-hover:bg-[#1E3A8A] transition-colors duration-300">
                          <Icon className="w-7 h-7 text-[#1E3A8A] group-hover:text-white transition-colors duration-300" />
                        </div>

                        <p className="mt-5 font-semibold text-slate-700 group-hover:text-[#1E3A8A] transition-colors duration-300">
                          {item.name}
                        </p>
                      </div>
                    );
                  })}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      <FreeMonthSection />
      <NewsSection />
      <BillingSection />
    </main>
  );
}

function FeatureCard({ title, color }: { title: string; color: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition">
      <h3 className={`text-xl font-semibold ${color}`}>{title}</h3>
      <p className="mt-4 text-slate-600">
        Professional solutions tailored to optimize performance and revenue.
      </p>
    </div>
  );
}