"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ChevronDown, AlertCircle } from "lucide-react";

// Brand colors (matched to ServiceTemplate)
// #213D64 — Navy (primary)
// #97BC50 — Green (accent)
// #E0C193 — Gold (highlight)

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

export default function ContactPage() {
  const dropdownRef = useRef<HTMLDivElement>(null);
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

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const templateParams = {
        form_origin: "Contact Page",
        fullName: formData.fullName, // ✅
        email: formData.email, // ✅
        phone: formData.phone,
        website: formData.website || "Not provided",
        service_type: formData.service_type || "Not specified",
        specialty: formData.specialty || "Not specified",
        healthcare_type: formData.healthcare_type || "Not specified",
        message: formData.message || "No message",
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(templateParams),
      });

      if (!response.ok) throw new Error("Failed to send");

      setSuccessMessage(
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
      console.error(error);
      setErrorMessage(
        "Something went wrong. Please try again or contact us directly.",
      );
    } finally {
      setLoading(false);
    }
  };

  // Shared input focus/blur handlers
  const inputFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.target.style.borderColor = "#97BC50";
  };
  const inputBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.target.style.borderColor = "#e2e8f0";
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ── HERO ── */}
      <div
        className="relative py-24 px-6 overflow-hidden"
        style={{ background: "#213D64" }}
      >
        {/* Background orbs */}
        <div
          className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full blur-[120px] opacity-20 pointer-events-none"
          style={{ background: "#97BC50" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full blur-[100px] opacity-15 pointer-events-none"
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
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <nav
            className="text-xs uppercase font-bold tracking-[0.25em] mb-4"
            style={{ color: "#97BC50" }}
          >
            Contact Us
          </nav>
          <h1 className="text-5xl font-black text-white mb-4">Get In Touch</h1>
          <p style={{ color: "rgba(224,193,147,0.85)" }} className="text-lg">
            We'd love to hear from you. Our team will respond within 24 hours.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* ── INFO CARDS ── */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <Mail className="w-7 h-7" />,
              label: "Email",
              value: "meditrackservicesllc@gmail.com",
            },
            {
              icon: <Phone className="w-7 h-7" />,
              label: "Phone",
              value: "Available upon request",
            },
            {
              icon: <MapPin className="w-7 h-7" />,
              label: "Location",
              value: "Nationwide Coverage",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-white p-7 rounded-2xl shadow-sm flex flex-col gap-3 border-t-4"
              style={{ borderTopColor: "#97BC50" }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: "rgba(151,188,80,0.1)", color: "#97BC50" }}
              >
                {card.icon}
              </div>
              <h3 className="font-bold text-lg" style={{ color: "#213D64" }}>
                {card.label}
              </h3>
              <p className="text-slate-500 text-sm">{card.value}</p>
            </div>
          ))}
        </div>

        {/* ── FORM CARD ── */}
        <div
          className="bg-white rounded-3xl shadow-lg overflow-hidden"
          style={{ border: "1px solid rgba(151,188,80,0.15)" }}
        >
          {/* Card header bar */}
          <div
            className="px-10 py-6 flex items-center gap-3"
            style={{ background: "#213D64" }}
          >
            <div
              className="w-1 h-8 rounded-full"
              style={{ background: "#97BC50" }}
            />
            <div>
              <p
                className="text-[10px] uppercase font-bold tracking-widest"
                style={{ color: "#97BC50" }}
              >
                Request Information
              </p>
              <h2 className="text-xl font-black text-white">
                Send Us a Message
              </h2>
            </div>
          </div>

          <div className="p-10">
            {successMessage && (
              <div className="mb-6 p-4 rounded-xl text-sm font-medium bg-green-50 text-green-700 border border-green-200">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="mb-6 p-4 rounded-xl text-sm font-medium bg-red-50 text-red-700 border border-red-200 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1 */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  onFocus={inputFocus}
                  onBlur={inputBlur}
                  className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl w-full outline-none text-[13px] font-semibold text-slate-700 placeholder:text-slate-400 transition-all"
                  style={{ transition: "border-color 0.2s" }}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  onFocus={inputFocus}
                  onBlur={inputBlur}
                  className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl w-full outline-none text-[13px] font-semibold text-slate-700 placeholder:text-slate-400 transition-all"
                  style={{ transition: "border-color 0.2s" }}
                />
              </div>

              {/* Row 2 */}
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  onFocus={inputFocus}
                  onBlur={inputBlur}
                  className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl w-full outline-none text-[13px] font-semibold text-slate-700 placeholder:text-slate-400 transition-all"
                  style={{ transition: "border-color 0.2s" }}
                />
                <input
                  type="url"
                  placeholder="Website (Optional)"
                  value={formData.website}
                  onChange={(e) =>
                    setFormData({ ...formData, website: e.target.value })
                  }
                  onFocus={inputFocus}
                  onBlur={inputBlur}
                  className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl w-full outline-none text-[13px] font-semibold text-slate-700 placeholder:text-slate-400 transition-all"
                  style={{ transition: "border-color 0.2s" }}
                />
              </div>

              {/* Message */}
              <textarea
                placeholder="Tell us about your needs"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                onFocus={inputFocus}
                onBlur={inputBlur}
                className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl w-full outline-none text-[13px] font-semibold text-slate-700 placeholder:text-slate-400 h-28 resize-none transition-all"
                style={{ transition: "border-color 0.2s" }}
              />

              {/* Dropdowns */}
              <div className="space-y-3 pt-1" ref={dropdownRef}>
                {/* Service Type */}
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
                        activeDropdown === "service" ? "#97BC50" : "#e2e8f0",
                    }}
                  >
                    <span
                      className="text-[13px] font-semibold"
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
                      <div className="max-h-[220px] overflow-y-auto py-2">
                        {serviceOptions.map((opt) => (
                          <div
                            key={opt}
                            onClick={() => {
                              setFormData({ ...formData, service_type: opt });
                              setActiveDropdown(null);
                            }}
                            className="px-5 py-2.5 text-[13px] font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer transition-colors"
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

                {/* Specialty */}
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
                        activeDropdown === "specialty" ? "#97BC50" : "#e2e8f0",
                    }}
                  >
                    <span
                      className="text-[13px] font-semibold"
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
                      <div className="max-h-[220px] overflow-y-auto py-2">
                        {specialtyOptions.map((opt) => (
                          <div
                            key={opt}
                            onClick={() => {
                              setFormData({ ...formData, specialty: opt });
                              setActiveDropdown(null);
                            }}
                            className="px-5 py-2.5 text-[13px] font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer transition-colors"
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

                {/* Healthcare Type */}
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
                        activeDropdown === "healthcare" ? "#97BC50" : "#e2e8f0",
                    }}
                  >
                    <span
                      className="text-[13px] font-semibold"
                      style={{
                        color: formData.healthcare_type ? "#213D64" : "#94a3b8",
                      }}
                    >
                      {formData.healthcare_type || "Select Healthcare Type"}
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
                      <div className="max-h-[220px] overflow-y-auto py-2">
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
                            className="px-5 py-2.5 text-[13px] font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer transition-colors"
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

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full text-white p-4 rounded-xl text-xs font-black uppercase tracking-widest mt-4 transform hover:-translate-y-1 transition-all shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: loading ? "#94a3b8" : "#213D64" }}
                onMouseEnter={(e) => {
                  if (!loading)
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "#97BC50";
                }}
                onMouseLeave={(e) => {
                  if (!loading)
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "#213D64";
                }}
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>
            </form>
          </div>
        </div>

        {/* ── CTA BANNER ── */}
        <div
          className="mt-16 rounded-3xl p-12 text-center text-white relative overflow-hidden"
          style={{ background: "#213D64" }}
        >
          <div
            className="absolute top-0 left-0 w-64 h-64 rounded-full blur-[80px] opacity-20 pointer-events-none"
            style={{ background: "#97BC50" }}
          />
          <div
            className="absolute bottom-0 right-0 w-56 h-56 rounded-full blur-[80px] opacity-15 pointer-events-none"
            style={{ background: "#E0C193" }}
          />
          <div className="relative z-10">
            <span
              className="text-[10px] uppercase font-bold tracking-widest block mb-3"
              style={{ color: "#97BC50" }}
            >
              Ready to Get Started?
            </span>
            <h2 className="text-4xl font-black mb-3 text-white">
              Let's Build Something Together
            </h2>
            <p
              className="mb-8 text-sm"
              style={{ color: "rgba(224,193,147,0.75)" }}
            >
              Contact our team today and take the first step.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-block font-black text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all hover:-translate-y-1 transform shadow-lg cursor-pointer"
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
              Start Your Trial →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
