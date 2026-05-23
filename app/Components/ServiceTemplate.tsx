"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

// --- TYPES ---
export interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
  highlight?: boolean;
}

export interface SolutionCard {
  image?: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
  gradient?: string;
}

export interface BenefitCardProps {
  icon?: React.ReactNode;
  text: string;
}

export interface SubSpecialtyItem {
  icon: React.ReactNode;
  label: string;
  image?: string;
}

export interface ServiceTemplateProps {
  heroHeaderSmall: string;
  heroTitle: string;
  heroDescription: string;
  heroStats: StatItem[];
  servicesHeaderSmall: string;
  servicesTitle: string;
  servicesParagraphs: string[];
  servicesMainImage: string;
  solutionsHeaderSmall: string;
  solutionsTitle: string;
  solutionsCards: SolutionCard[];
  hipaaBannerText: string;
  fieldsHeaderSmall: string;
  fieldsTitle: string;
  fieldsDescription: string;
  fieldsDoctorImage: string;
  fieldsSubSpecialties: SubSpecialtyItem[];
  partnerHeaderSmall: string;
  partnerTitle: string;
  partnerParagraphs: string[];
  partnerMainImage: string;
  partnerLogosImage: string;
}

// Brand colors
// #213D64 — Navy (primary dark)
// #97BC50 — Green (accent)
// #E0C193 — Gold (highlight)

// --- HELPER ---
const BenefitCard: React.FC<BenefitCardProps> = ({ icon, text }) => (
  <div
    className="p-10 rounded-xl shadow-lg flex flex-col items-center justify-center text-center min-h-[350px]"
    style={{ background: "#213D64" }}
  >
    {icon && (
      <div
        className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 shadow-inner mb-8"
        style={{ borderColor: "#97BC50" }}
      >
        {icon}
      </div>
    )}
    <p className="text-white text-lg font-medium leading-relaxed">{text}</p>
  </div>
);

// --- MAIN COMPONENT ---
const ServiceTemplate: React.FC<ServiceTemplateProps> = ({
  heroHeaderSmall,
  heroTitle,
  heroDescription,
  heroStats,
  servicesHeaderSmall,
  servicesTitle,
  servicesParagraphs,
  servicesMainImage,
  solutionsHeaderSmall,
  solutionsTitle,
  solutionsCards,
  hipaaBannerText,
  fieldsHeaderSmall,
  fieldsTitle,
  fieldsDescription,
  fieldsDoctorImage,
  fieldsSubSpecialties,
  partnerHeaderSmall,
  partnerTitle,
  partnerParagraphs,
  partnerMainImage,
  partnerLogosImage,
}) => {
  const heroFormRef = useRef<HTMLElement>(null);

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    website: "",
    service_type: "",
    specialty: "",
    healthcare_type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState(
    fieldsSubSpecialties[0]?.image || fieldsDoctorImage,
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const templateParams = {
        form_origin: "Hero Form — Request Information",
        fullName: formData.fullName, // ✅
        email: formData.email, // ✅
        phone: formData.phone,
        website: formData.website || "Not provided",
        service_type: formData.service_type || "Not specified",
        specialty: formData.specialty || "Not specified",
        healthcare_type: formData.healthcare_type || "Not specified",
        message: formData.message || "No additional message",
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(templateParams),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error || "Failed to send email");
      }

      setSubmitMessage(
        "Thank you! Your message has been sent successfully. We'll get back to you soon.",
      );
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        website: "",
        service_type: "",
        specialty: "",
        healthcare_type: "",
        message: "",
      });
    } catch (error) {
      console.error("Email send error:", error);
      setSubmitMessage(
        "Something went wrong. Please try again or contact us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Shared dropdown options
  const serviceOptions = [
    "Medical Billing",
    "Credentialing & Enrollment",
    "Medical Coding Services",
    "Quality Payment Program",
    "Front Office Management",
    "Professional Staffing Solutions",
    "Collection Services",
    "Practice Assessment and Consulting Services",
    "TMS and Spravato Credentialing Services",
    "Patient Billing Services",
    "A/R Follow Up Services",
    "Claim Submission Process",
    "Denial Management Services",
    "Out of Network Billing Services",
    "Revenue Cycle Management",
    "Medical Billing Consulting Services",
    "Dental Credentialing Services",
    "Primary Care Billing Services",
    "Prior Authorization Services",
    "Workers' Compensation Billing",
    "Telehealth Billing Services",
    "Nurse Practitioners Services",
    "Behavioral Health Credentialing",
    "Locum Tenens Credentialing",
    "Rural & FQHC Providers",
    "DME & Ancillary Providers",
    "Hospital Credentialing",
    "Other",
  ];

  const specialtyOptions = [
    "Allergy & Immunology",
    "Ambulatory Surgery",
    "Anesthesia",
    "Audiology",
    "Cardiology",
    "Cardiovascular",
    "Chiropractic",
    "Dental",
    "Dermatology",
    "Endocrinology",
    "Family Practice",
    "Gastroenterology",
    "General Surgery",
    "Geriatrics",
    "Hematology",
    "Hepatology",
    "Infectious Disease",
    "Internal Medicine",
    "Medical Clinics",
    "Mental Health",
    "Neonatology",
    "Nephrology",
    "Neurology",
    "Neurosurgery",
    "Nursing Home",
    "OB GYN",
    "Oncology",
    "Ophthalmology",
    "Orthopedic",
    "Physical Therapy",
    "Pain Management",
    "Pathology",
    "Pediatric",
    "Podiatry",
    "Pulmonology",
    "Radiology",
    "Rehab",
    "Rheumatology",
    "Urgent Care",
    "Urology",
    "Wound Care",
    "Other",
  ];

  const healthcareOptions = [
    "Solo Practice",
    "Private Practice",
    "Group Practices",
    "Health Maintenance Organization(HMOs)",
    "Hospital",
    "Intermediate Care Facility",
    "Accountable care organization",
    "Nursing Practice",
    "Ambulatory Surgical Center",
    "Home Health Agency",
    "Hospice Care",
    "Diagnostic & Imaging Center",
    "Assisted Living Facility",
    "Other",
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900 overflow-x-hidden">
      {/* ── SECTION 1: HERO ── */}
      <section
        ref={heroFormRef}
        className="relative text-white min-h-[calc(100vh-80px)] flex items-center overflow-hidden"
        style={{
          background: "#213D64",
          borderBottom: "1px solid rgba(151,188,80,0.2)",
        }}
      >
        {/* Subtle background orbs */}
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-20"
          style={{ background: "#97BC50" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none opacity-15"
          style={{ background: "#E0C193" }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(224,193,147,1) 1px, transparent 1px), linear-gradient(90deg, rgba(224,193,147,1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-screen-2xl mx-auto w-full px-6 md:px-12 lg:px-20 py-4 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left Side */}
          <div className="lg:w-1/2 flex flex-col gap-3 md:gap-4">
            <nav
              className="text-[10px] md:text-xs uppercase font-semibold tracking-[0.2em]"
              style={{ color: "#97BC50" }}
            >
              {heroHeaderSmall}
            </nav>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white">
              {heroTitle}
            </h1>
            <p
              className="text-sm md:text-base max-w-lg leading-relaxed"
              style={{ color: "rgba(224,193,147,0.85)" }}
            >
              {heroDescription}
            </p>

            <div className="grid grid-cols-2 gap-x-4 gap-y-6 mt-2 max-w-md">
              {heroStats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className="flex-shrink-0 w-8 h-8"
                    style={{ color: stat.highlight ? "#E0C193" : "#97BC50" }}
                  >
                    {stat.icon}
                  </div>
                  <div>
                    <span
                      className="text-2xl md:text-3xl font-extrabold block leading-none"
                      style={{ color: stat.highlight ? "#E0C193" : "#97BC50" }}
                    >
                      {stat.value}
                    </span>
                    <p className="text-[9px] md:text-[10px] mt-0.5 uppercase font-medium tracking-tight text-white/70">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              <button className="border border-white/40 hover:border-[#97BC50] hover:text-[#97BC50] text-white px-5 py-2 rounded-lg text-xs font-bold transition-all shadow-md">
                Get an Audit →
              </button>
              <button className="border border-white/40 hover:border-[#E0C193] hover:text-[#E0C193] text-white px-5 py-2 rounded-lg text-xs font-bold transition-all shadow-md">
                Contact Us →
              </button>
            </div>
          </div>

          {/* Right Side — Hero Form */}
          <div
            className="lg:w-[40%] w-full bg-white text-slate-800 p-6 md:p-8 rounded-2xl shadow-2xl"
            style={{ border: "1px solid rgba(151,188,80,0.2)" }}
          >
            <div className="mb-5">
              <h3
                className="text-sm font-black uppercase tracking-widest"
                style={{ color: "#213D64" }}
              >
                Request Information
              </h3>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-slate-50 border border-slate-100 p-3 rounded-xl w-full outline-none text-[11px] font-bold transition-all"
                  style={
                    {
                      "--tw-ring-color": "rgba(151,188,80,0.3)",
                    } as React.CSSProperties
                  }
                  onFocus={(e) => {
                    e.target.style.borderColor = "#97BC50";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "";
                  }}
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-slate-50 border border-slate-100 p-3 rounded-xl w-full outline-none text-[11px] font-bold transition-all"
                  onFocus={(e) => {
                    e.target.style.borderColor = "#97BC50";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "";
                  }}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-slate-50 border border-slate-100 p-3 rounded-xl w-full outline-none text-[11px] font-bold transition-all"
                  onFocus={(e) => {
                    e.target.style.borderColor = "#97BC50";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "";
                  }}
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
                <input
                  type="url"
                  placeholder="Website (Optional)"
                  className="bg-slate-50 border border-slate-100 p-3 rounded-xl w-full outline-none text-[11px] font-bold transition-all"
                  onFocus={(e) => {
                    e.target.style.borderColor = "#97BC50";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "";
                  }}
                  value={formData.website}
                  onChange={(e) =>
                    setFormData({ ...formData, website: e.target.value })
                  }
                />
              </div>

              <textarea
                placeholder="Tell us about your needs"
                className="bg-slate-50 border border-slate-100 p-3 rounded-xl w-full outline-none text-[11px] font-bold transition-all h-20 resize-none"
                onFocus={(e) => {
                  e.target.style.borderColor = "#97BC50";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "";
                }}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />

              {/* Dropdowns */}
              <div className="space-y-3 pt-1" ref={dropdownRef}>
                {/* SERVICE TYPE */}
                <div className="relative">
                  <div
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === "service" ? null : "service",
                      )
                    }
                    className="w-full flex justify-between items-center bg-white border-2 p-3.5 pl-5 rounded-2xl cursor-pointer transition-all duration-300"
                    style={{
                      borderColor:
                        activeDropdown === "service" ? "#97BC50" : "#f1f5f9",
                    }}
                  >
                    <span
                      className="text-[11px] font-bold"
                      style={{
                        color: formData.service_type ? "#213D64" : "#94a3b8",
                      }}
                    >
                      {formData.service_type || "Select Service Type"}
                    </span>
                    <ChevronDown
                      className="w-4 h-4 transition-transform duration-300"
                      style={{
                        color: "#97BC50",
                        transform:
                          activeDropdown === "service"
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                      }}
                    />
                  </div>
                  {activeDropdown === "service" && (
                    <div className="absolute top-[110%] left-0 w-full bg-white border border-slate-100 rounded-2xl shadow-2xl z-[999] overflow-hidden">
                      <div className="max-h-[200px] overflow-y-auto py-2">
                        {serviceOptions.map((opt) => (
                          <div
                            key={opt}
                            onClick={() => {
                              setFormData({ ...formData, service_type: opt });
                              setActiveDropdown(null);
                            }}
                            className="px-5 py-2.5 text-[11px] font-bold text-slate-600 hover:bg-slate-50 cursor-pointer transition-colors"
                            onMouseEnter={(e) => {
                              (e.target as HTMLDivElement).style.color =
                                "#97BC50";
                            }}
                            onMouseLeave={(e) => {
                              (e.target as HTMLDivElement).style.color = "";
                            }}
                          >
                            {opt}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* SPECIALTY */}
                <div className="relative">
                  <div
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === "specialty" ? null : "specialty",
                      )
                    }
                    className="w-full flex justify-between items-center bg-white border-2 p-3.5 pl-5 rounded-2xl cursor-pointer transition-all duration-300"
                    style={{
                      borderColor:
                        activeDropdown === "specialty" ? "#97BC50" : "#f1f5f9",
                    }}
                  >
                    <span
                      className="text-[11px] font-bold"
                      style={{
                        color: formData.specialty ? "#213D64" : "#94a3b8",
                      }}
                    >
                      {formData.specialty || "Select Specialty"}
                    </span>
                    <ChevronDown
                      className="w-4 h-4 transition-transform duration-300"
                      style={{
                        color: "#97BC50",
                        transform:
                          activeDropdown === "specialty"
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                      }}
                    />
                  </div>
                  {activeDropdown === "specialty" && (
                    <div className="absolute top-[110%] left-0 w-full bg-white border border-slate-100 rounded-2xl shadow-2xl z-[999] overflow-hidden">
                      <div className="max-h-[200px] overflow-y-auto py-2">
                        {specialtyOptions.map((opt) => (
                          <div
                            key={opt}
                            onClick={() => {
                              setFormData({ ...formData, specialty: opt });
                              setActiveDropdown(null);
                            }}
                            className="px-5 py-2.5 text-[11px] font-bold text-slate-600 hover:bg-slate-50 cursor-pointer transition-colors"
                            onMouseEnter={(e) => {
                              (e.target as HTMLDivElement).style.color =
                                "#97BC50";
                            }}
                            onMouseLeave={(e) => {
                              (e.target as HTMLDivElement).style.color = "";
                            }}
                          >
                            {opt}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* HEALTHCARE TYPE */}
                <div className="relative">
                  <div
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === "healthcare" ? null : "healthcare",
                      )
                    }
                    className="w-full flex justify-between items-center bg-white border-2 p-3.5 pl-5 rounded-2xl cursor-pointer transition-all duration-300"
                    style={{
                      borderColor:
                        activeDropdown === "healthcare" ? "#97BC50" : "#f1f5f9",
                    }}
                  >
                    <span
                      className="text-[11px] font-bold"
                      style={{
                        color: formData.healthcare_type ? "#213D64" : "#94a3b8",
                      }}
                    >
                      {formData.healthcare_type || "Healthcare Type"}
                    </span>
                    <ChevronDown
                      className="w-4 h-4 transition-transform duration-300"
                      style={{
                        color: "#97BC50",
                        transform:
                          activeDropdown === "healthcare"
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                      }}
                    />
                  </div>
                  {activeDropdown === "healthcare" && (
                    <div className="absolute top-[110%] left-0 w-full bg-white border border-slate-100 rounded-2xl shadow-2xl z-[999] overflow-hidden">
                      <div className="max-h-[200px] overflow-y-auto py-2">
                        {healthcareOptions.map((opt) => (
                          <div
                            key={opt}
                            onClick={() => {
                              setFormData({
                                ...formData,
                                healthcare_type: opt,
                              });
                              setActiveDropdown(null);
                            }}
                            className="px-5 py-2.5 text-[11px] font-bold text-slate-600 hover:bg-slate-50 cursor-pointer transition-colors"
                            onMouseEnter={(e) => {
                              (e.target as HTMLDivElement).style.color =
                                "#97BC50";
                            }}
                            onMouseLeave={(e) => {
                              (e.target as HTMLDivElement).style.color = "";
                            }}
                          >
                            {opt}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {submitMessage && (
                <div
                  className={`p-3 rounded-lg text-sm ${submitMessage.includes("Thank you") ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}
                >
                  {submitMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-white p-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-xl mt-4 transform hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60"
                style={{ background: isSubmitting ? "#94a3b8" : "#213D64" }}
                onMouseEnter={(e) => {
                  if (!isSubmitting)
                    (e.target as HTMLButtonElement).style.background =
                      "#97BC50";
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting)
                    (e.target as HTMLButtonElement).style.background =
                      "#213D64";
                }}
              >
                {isSubmitting ? "Sending..." : "Get Started Now"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: SERVICES ── */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32 border-b border-slate-50">
        {/* Soft gold glow top-right */}
        <div
          className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none"
          style={{ background: "#E0C193" }}
        />

        <div className="container mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center justify-center">
            <div className="order-2 lg:order-1 flex flex-col items-start">
              <span
                className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase rounded-full border"
                style={{
                  color: "#97BC50",
                  background: "rgba(151,188,80,0.08)",
                  borderColor: "rgba(151,188,80,0.25)",
                }}
              >
                {servicesHeaderSmall}
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold leading-[1.1] mb-2"
                style={{ color: "#213D64" }}
              >
                {servicesTitle}
              </h2>
              <div className="flex flex-col space-y-2 max-w-2xl">
                {servicesParagraphs?.map((p, idx) => (
                  <p
                    key={idx}
                    className="text-[17px] md:text-[18px] leading-[1.75] font-normal"
                    style={{ color: "#334155" }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
            <div className="relative order-1 lg:order-2 group px-4">
              <div
                className="relative z-10 w-full aspect-[4/4] overflow-hidden rounded-[40px] shadow-2xl bg-slate-100"
                style={{ border: "4px solid white" }}
              >
                <Image
                  src={servicesMainImage}
                  alt="Medical Services"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(33,61,100,0.2), transparent)",
                  }}
                />
              </div>
              <div
                className="absolute -top-8 -right-8 w-32 h-32 -z-10"
                style={{
                  background: "radial-gradient(#e2e8f0 2px, transparent 2px)",
                  backgroundSize: "16px 16px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: SOLUTIONS ── */}
      <section className="relative py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
        {/* Section background */}
        <div className="absolute inset-0 -z-20 w-full h-full">
          <Image
            src="/Streamlined-Billing.png"
            alt="Background"
            fill
            className="object-cover object-center w-full h-full"
            quality={60}
            unoptimized
          />
        </div>
        <div className="absolute inset-0 -z-10 w-full h-full bg-black/60 backdrop-blur-lg" />

        <div className="max-w-screen-xl mx-auto text-center mb-12 relative z-10">
          <nav
            className="text-sm uppercase font-bold mb-4 tracking-widest"
            style={{ color: "#97BC50" }}
          >
            {solutionsHeaderSmall}
          </nav>
          <h2
            className="text-4xl font-bold max-w-4xl mx-auto"
            style={{ color: "#E0C193" }}
          >
            {solutionsTitle}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-screen-2xl mx-auto relative z-10">
          {solutionsCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <div
                className="relative rounded-2xl overflow-hidden group transition-all duration-500 h-full flex flex-col items-center justify-center p-8 gap-6 min-h-[300px]"
                style={{
                  border: "1px solid rgba(224,193,147,0.2)",
                  boxShadow: "0 4px 24px rgba(33,61,100,0.3)",
                }}
              >
                {/* Base navy */}
                <div
                  className="absolute inset-0 -z-10"
                  style={{ background: "#213D64" }}
                />

                {/* Top-left gold orb */}
                <div
                  className="absolute -top-16 -left-16 w-52 h-52 rounded-full blur-3xl -z-10 transition-all duration-700 group-hover:scale-125"
                  style={{ background: "rgba(224,193,147,0.18)" }}
                />

                {/* Bottom-right green orb */}
                <div
                  className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full blur-3xl -z-10 transition-all duration-700 group-hover:scale-125"
                  style={{ background: "rgba(151,188,80,0.15)" }}
                />

                {/* Center glow on hover */}
                <div
                  className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(224,193,147,0.08) 0%, transparent 70%)",
                  }}
                />

                {/* Subtle grid */}
                <div
                  className="absolute inset-0 -z-10 opacity-[0.045] group-hover:opacity-[0.08] transition-opacity duration-500"
                  style={{
                    backgroundImage: `linear-gradient(rgba(224,193,147,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(224,193,147,0.9) 1px, transparent 1px)`,
                    backgroundSize: "36px 36px",
                  }}
                />

                {/* Diagonal shimmer */}
                <div
                  className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background:
                      "linear-gradient(135deg, transparent 30%, rgba(224,193,147,0.06) 50%, transparent 70%)",
                  }}
                />

                {/* Corner accents */}
                <div className="absolute top-0 right-0 z-10 pointer-events-none">
                  <div className="absolute top-0 right-0 w-[2px] h-10 bg-gradient-to-b from-[#E0C193] to-transparent" />
                  <div className="absolute top-0 right-0 w-10 h-[2px] bg-gradient-to-l from-[#E0C193] to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 z-10 pointer-events-none">
                  <div className="absolute bottom-0 left-0 w-[2px] h-10 bg-gradient-to-t from-[#97BC50] to-transparent" />
                  <div className="absolute bottom-0 left-0 w-10 h-[2px] bg-gradient-to-r from-[#97BC50] to-transparent" />
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10"
                >
                  {/* Pulse ring — green */}
                  <div className="absolute inset-0 rounded-full border border-[#97BC50]/0 group-hover:border-[#97BC50]/50 group-hover:scale-125 transition-all duration-500" />
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center border transition-all duration-300"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(224,193,147,0.18) 0%, rgba(33,61,100,0.4) 100%)",
                      backdropFilter: "blur(8px)",
                      borderColor: "rgba(151,188,80,0.35)",
                    }}
                  >
                    {card.icon ? (
                      <div className="text-white text-5xl">{card.icon}</div>
                    ) : card.image ? (
                      <div className="relative w-16 h-16 rounded-full overflow-hidden">
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : null}
                  </div>
                </motion.div>

                {/* Text */}
                <div className="relative z-10 text-center">
                  <h3
                    className="text-xl font-bold mb-3 transition-colors duration-300"
                    style={{ color: "#E0C193" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm group-hover:text-white/90 transition-all duration-300">
                    {card.description}
                  </p>
                </div>

                {/* Bottom gradient bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-500"
                  style={{
                    background:
                      "linear-gradient(90deg, #213D64, #97BC50, #E0C193)",
                    opacity: 0.4,
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{
                    background:
                      "linear-gradient(90deg, #213D64, #97BC50, #E0C193)",
                    boxShadow: "0 0 12px rgba(151,188,80,0.6)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SECTION 4: HIPAA BANNER ── */}
      <section
        className="py-10 px-6 text-center text-white"
        style={{ background: "#213D64" }}
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
          <h2 className="text-4xl md:text-4xl leading-tight">
            {hipaaBannerText}
          </h2>
          <button
            className="border-2 px-5 py-2 rounded-full transition cursor-pointer font-bold text-sm"
            style={{ borderColor: "#97BC50", color: "#97BC50" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "#97BC50";
              (e.currentTarget as HTMLButtonElement).style.color = "#213D64";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "transparent";
              (e.currentTarget as HTMLButtonElement).style.color = "#97BC50";
            }}
          >
            Contact Us →
          </button>
        </div>
      </section>

      {/* ── SECTION 5: DIVERSE FIELDS ── */}
      <section className="min-h-[70vh] flex items-center justify-center py-10 bg-white">
        <div className="w-[90%] md:w-[75%] lg:w-[80%] mx-auto">
          <div className="text-center mb-8">
            <nav
              className="text-sm uppercase font-bold mb-4 tracking-widest"
              style={{ color: "#97BC50" }}
            >
              {fieldsHeaderSmall}
            </nav>
            <h2 className="text-4xl font-semibold" style={{ color: "#213D64" }}>
              {fieldsTitle}
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed">
              {fieldsDescription}
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className="relative aspect-[3/4] md:aspect-[4/4] rounded-3xl overflow-hidden shadow-2xl group bg-slate-100"
              style={{ border: "2px solid rgba(151,188,80,0.15)" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImage}
                  initial={{ opacity: 0, x: 20, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20, scale: 1.05 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={activeImage}
                    alt="Expert"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(33,61,100,0.4), transparent)",
                    }}
                  />
                </motion.div>
              </AnimatePresence>
              <div
                className="absolute bottom-6 left-6 backdrop-blur-md px-4 py-2 rounded-full shadow-lg transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  border: "1px solid rgba(151,188,80,0.3)",
                }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-tighter"
                  style={{ color: "#213D64" }}
                >
                  Verified Specialist
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {fieldsSubSpecialties.map((item, index) => {
                const isActive = activeImage === item.image;
                return (
                  <motion.div
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    key={index}
                    onClick={() =>
                      setActiveImage(item.image || fieldsDoctorImage)
                    }
                    className="flex items-center gap-5 p-5 rounded-2xl transition-all duration-300 cursor-pointer border-2"
                    style={{
                      background: isActive ? "white" : "transparent",
                      borderColor: isActive ? "#97BC50" : "transparent",
                      boxShadow: isActive
                        ? "0 10px 30px rgba(151,188,80,0.2)"
                        : "none",
                      transform: isActive ? "scale(1.05)" : "scale(1)",
                      opacity: isActive ? 1 : 0.65,
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive)
                        (e.currentTarget as HTMLDivElement).style.opacity = "1";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive)
                        (e.currentTarget as HTMLDivElement).style.opacity =
                          "0.65";
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center border-4 transition-all duration-500 text-white"
                      style={{
                        background: isActive ? "#97BC50" : "#213D64",
                        borderColor: isActive ? "#213D64" : "#97BC50",
                      }}
                    >
                      {item.icon}
                    </div>
                    <p
                      className="font-bold text-lg"
                      style={{ color: isActive ? "#213D64" : "#64748b" }}
                    >
                      {item.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: PARTNERSHIP ── */}
      <section className="relative overflow-hidden bg-white py-10 lg:py-32 border-b border-slate-50">
        <div
          className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-15 pointer-events-none"
          style={{ background: "#97BC50" }}
        />
        <div className="container mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 flex flex-col items-start">
              <span
                className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase rounded-full border"
                style={{
                  color: "#97BC50",
                  background: "rgba(151,188,80,0.08)",
                  borderColor: "rgba(151,188,80,0.25)",
                }}
              >
                {partnerHeaderSmall}
              </span>
              <h2
                className="text-3xl md:text-4xl font-extrabold leading-[1.1] mb-8"
                style={{ color: "#213D64" }}
              >
                {partnerTitle}
              </h2>
              <div className="space-y-2">
                {partnerParagraphs?.map((p, idx) => (
                  <p
                    key={idx}
                    className={`text-lg leading-relaxed transition-all duration-300 ${
                      p.includes("Reach out to us today")
                        ? "font-bold border-l-4 pl-6 py-2 rounded-r-xl bg-slate-50/50"
                        : "font-normal text-slate-600"
                    }`}
                    style={
                      p.includes("Reach out to us today")
                        ? { color: "#213D64", borderColor: "#97BC50" }
                        : {}
                    }
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
            <div className="relative order-1 lg:order-2 group px-4">
              <div
                className="relative z-10 w-full aspect-[4/4] overflow-hidden rounded-[40px] shadow-2xl bg-slate-100"
                style={{ border: "4px solid white" }}
              >
                <Image
                  src={partnerMainImage}
                  alt="Partnership"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(33,61,100,0.2), transparent)",
                  }}
                />
              </div>
              <div
                className="absolute -top-8 -right-8 w-32 h-32 -z-10"
                style={{
                  background: "radial-gradient(#e2e8f0 2px, transparent 2px)",
                  backgroundSize: "16px 16px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA BANNER ── */}
      <section
        className="py-20 px-6 text-center text-white"
        style={{ background: "#213D64" }}
      >
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "#97BC50" }}
          >
            Ready to Get Started?
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-white">
            Let Us Handle Your Billing.
            <br />
            <span style={{ color: "#E0C193" }}>You Focus on Patient Care.</span>
          </h2>
          <p
            className="text-sm max-w-xl"
            style={{ color: "rgba(224,193,147,0.7)" }}
          >
            Fill out our quick form above and our team will reach out within 24
            hours with a tailored solution for your practice.
          </p>
          <button
            onClick={() =>
              heroFormRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-2 font-black text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all shadow-xl hover:-translate-y-1 transform"
            style={{ background: "#97BC50", color: "#213D64" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "#E0C193";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "#97BC50";
            }}
          >
            Request Information ↑
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServiceTemplate;
