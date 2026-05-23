"use client";

import { useState, useRef, useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const serviceOptions = [
  "Medical Billing","Credentialing & Enrollment","Medical Coding Services",
  "Quality Payment Program","Front Office Management","Professional Staffing Solutions",
  "Collection Services","Practice Assessment and Consulting Services",
  "TMS and Spravato Credentialing Services","Patient Billing Services",
  "A/R Follow Up Services","Claim Submission Process","Denial Management Services",
  "Out of Network Billing Services","Revenue Cycle Management",
  "Medical Billing Consulting Services","Dental Credentialing Services",
  "Primary Care Billing Services","Prior Authorization Services",
  "Workers' Compensation Billing","Telehealth Billing Services",
  "Nurse Practitioners Services","Behavioral Health Credentialing",
  "Locum Tenens Credentialing","Rural & FQHC Providers",
  "DME & Ancillary Providers","Hospital Credentialing","Other",
];

const specialtyOptions = [
  "Allergy & Immunology","Ambulatory Surgery","Anesthesia","Audiology",
  "Cardiology","Cardiovascular","Chiropractic","Dental","Dermatology",
  "Endocrinology","Family Practice","Gastroenterology","General Surgery",
  "Geriatrics","Hematology","Hepatology","Infectious Disease",
  "Internal Medicine","Medical Clinics","Mental Health","Neonatology",
  "Nephrology","Neurology","Neurosurgery","Nursing Home","OB GYN",
  "Oncology","Ophthalmology","Orthopedic","Physical Therapy",
  "Pain Management","Pathology","Pediatric","Podiatry","Pulmonology",
  "Radiology","Rehab","Rheumatology","Urgent Care","Urology",
  "Wound Care","Other",
];

const healthcareOptions = [
  "Solo Practice","Private Practice","Group Practices",
  "Health Maintenance Organization(HMOs)","Hospital",
  "Intermediate Care Facility","Accountable care organization",
  "Nursing Practice","Ambulatory Surgical Center","Home Health Agency",
  "Hospice Care","Diagnostic & Imaging Center","Assisted Living Facility","Other",
];

export default function BillingSection() {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        website: formData.website || "Not provided",
        service_type: formData.service_type || "Not specified",
        specialty: formData.specialty || "Not specified",
        healthcare_type: formData.healthcare_type || "Not specified",
        message: formData.message || "No additional message",
        form_origin: "Landing Page — Request Information",
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error || "Failed to send email");
      }

      setSubmitMessage("Thank you! Your message has been sent successfully. We'll get back to you soon.");
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
      setSubmitMessage("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ================= MAIN SECTION ================= */}
      <section className="bg-[#153B6D] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              One-Stop Shop For All <br /> Your Billing Needs
            </h2>
            <p className="mt-5 text-blue-200 max-w-lg">
              MTS LLC is a one stop shop to enhance your patient experience. We
              want to give you the convenience to manage your revenue cycle
              while you focus on patient care.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-blue-100">
              <li>✓ Expertise Services – Billing, coding & claim processing</li>
              <li>✓ Seamless Integration – Works with your existing systems</li>
              <li>✓ 24/7 Support – Always available for assistance</li>
              <li>✓ Revenue Growth – Optimized billing strategy</li>
            </ul>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full max-w-xl mx-auto lg:mx-0 bg-white text-slate-800 p-6 md:p-8 rounded-2xl shadow-2xl"
            style={{ border: "1px solid rgba(151,188,80,0.2)" }}>
            <div className="mb-5">
              <h3 className="text-sm font-black uppercase tracking-widest" style={{ color: "#213D64" }}>
                Request Information
              </h3>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-3">
                <input type="text" placeholder="Full Name"
                  className="bg-slate-50 border border-slate-100 p-3 rounded-xl w-full outline-none text-[11px] font-bold transition-all"
                  onFocus={e => { e.target.style.borderColor = "#97BC50"; }}
                  onBlur={e => { e.target.style.borderColor = ""; }}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required />
                <input type="email" placeholder="Email"
                  className="bg-slate-50 border border-slate-100 p-3 rounded-xl w-full outline-none text-[11px] font-bold transition-all"
                  onFocus={e => { e.target.style.borderColor = "#97BC50"; }}
                  onBlur={e => { e.target.style.borderColor = ""; }}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required />
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <input type="tel" placeholder="Phone Number"
                  className="bg-slate-50 border border-slate-100 p-3 rounded-xl w-full outline-none text-[11px] font-bold transition-all"
                  onFocus={e => { e.target.style.borderColor = "#97BC50"; }}
                  onBlur={e => { e.target.style.borderColor = ""; }}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required />
                <input type="url" placeholder="Website (Optional)"
                  className="bg-slate-50 border border-slate-100 p-3 rounded-xl w-full outline-none text-[11px] font-bold transition-all"
                  onFocus={e => { e.target.style.borderColor = "#97BC50"; }}
                  onBlur={e => { e.target.style.borderColor = ""; }}
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })} />
              </div>

              <textarea placeholder="Tell us about your needs"
                className="bg-slate-50 border border-slate-100 p-3 rounded-xl w-full outline-none text-[11px] font-bold transition-all h-20 resize-none"
                onFocus={e => { e.target.style.borderColor = "#97BC50"; }}
                onBlur={e => { e.target.style.borderColor = ""; }}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })} />

              <div className="space-y-3 pt-1" ref={dropdownRef}>

                {/* Service Type */}
                <div className="relative">
                  <div onClick={() => setActiveDropdown(activeDropdown === "service" ? null : "service")}
                    className="w-full flex justify-between items-center bg-white border-2 p-3.5 pl-5 rounded-2xl cursor-pointer transition-all duration-300"
                    style={{ borderColor: activeDropdown === "service" ? "#97BC50" : "#f1f5f9" }}>
                    <span className="text-[11px] font-bold" style={{ color: formData.service_type ? "#213D64" : "#94a3b8" }}>
                      {formData.service_type || "Select Service Type"}
                    </span>
                    <svg className="w-4 h-4 transition-transform duration-300"
                      style={{ color: "#97BC50", transform: activeDropdown === "service" ? "rotate(180deg)" : "rotate(0deg)" }}
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                  {activeDropdown === "service" && (
                    <div className="absolute top-[110%] left-0 w-full bg-white border border-slate-100 rounded-2xl shadow-2xl z-[999] overflow-hidden">
                      <div className="max-h-[200px] overflow-y-auto py-2">
                        {serviceOptions.map((opt) => (
                          <div key={opt}
                            onClick={() => { setFormData({ ...formData, service_type: opt }); setActiveDropdown(null); }}
                            className="px-5 py-2.5 text-[11px] font-bold text-slate-600 hover:bg-slate-50 cursor-pointer transition-colors"
                            onMouseEnter={e => { (e.target as HTMLDivElement).style.color = "#97BC50"; }}
                            onMouseLeave={e => { (e.target as HTMLDivElement).style.color = ""; }}>
                            {opt}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Specialty */}
                <div className="relative">
                  <div onClick={() => setActiveDropdown(activeDropdown === "specialty" ? null : "specialty")}
                    className="w-full flex justify-between items-center bg-white border-2 p-3.5 pl-5 rounded-2xl cursor-pointer transition-all duration-300"
                    style={{ borderColor: activeDropdown === "specialty" ? "#97BC50" : "#f1f5f9" }}>
                    <span className="text-[11px] font-bold" style={{ color: formData.specialty ? "#213D64" : "#94a3b8" }}>
                      {formData.specialty || "Select Specialty"}
                    </span>
                    <svg className="w-4 h-4 transition-transform duration-300"
                      style={{ color: "#97BC50", transform: activeDropdown === "specialty" ? "rotate(180deg)" : "rotate(0deg)" }}
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                  {activeDropdown === "specialty" && (
                    <div className="absolute top-[110%] left-0 w-full bg-white border border-slate-100 rounded-2xl shadow-2xl z-[999] overflow-hidden">
                      <div className="max-h-[200px] overflow-y-auto py-2">
                        {specialtyOptions.map((opt) => (
                          <div key={opt}
                            onClick={() => { setFormData({ ...formData, specialty: opt }); setActiveDropdown(null); }}
                            className="px-5 py-2.5 text-[11px] font-bold text-slate-600 hover:bg-slate-50 cursor-pointer transition-colors"
                            onMouseEnter={e => { (e.target as HTMLDivElement).style.color = "#97BC50"; }}
                            onMouseLeave={e => { (e.target as HTMLDivElement).style.color = ""; }}>
                            {opt}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Healthcare Type */}
                <div className="relative">
                  <div onClick={() => setActiveDropdown(activeDropdown === "healthcare" ? null : "healthcare")}
                    className="w-full flex justify-between items-center bg-white border-2 p-3.5 pl-5 rounded-2xl cursor-pointer transition-all duration-300"
                    style={{ borderColor: activeDropdown === "healthcare" ? "#97BC50" : "#f1f5f9" }}>
                    <span className="text-[11px] font-bold" style={{ color: formData.healthcare_type ? "#213D64" : "#94a3b8" }}>
                      {formData.healthcare_type || "Healthcare Type"}
                    </span>
                    <svg className="w-4 h-4 transition-transform duration-300"
                      style={{ color: "#97BC50", transform: activeDropdown === "healthcare" ? "rotate(180deg)" : "rotate(0deg)" }}
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                  {activeDropdown === "healthcare" && (
                    <div className="absolute top-[110%] left-0 w-full bg-white border border-slate-100 rounded-2xl shadow-2xl z-[999] overflow-hidden">
                      <div className="max-h-[200px] overflow-y-auto py-2">
                        {healthcareOptions.map((opt) => (
                          <div key={opt}
                            onClick={() => { setFormData({ ...formData, healthcare_type: opt }); setActiveDropdown(null); }}
                            className="px-5 py-2.5 text-[11px] font-bold text-slate-600 hover:bg-slate-50 cursor-pointer transition-colors"
                            onMouseEnter={e => { (e.target as HTMLDivElement).style.color = "#97BC50"; }}
                            onMouseLeave={e => { (e.target as HTMLDivElement).style.color = ""; }}>
                            {opt}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {submitMessage && (
                <div className={`p-3 rounded-lg text-sm ${submitMessage.includes("Thank you") ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
                  {submitMessage}
                </div>
              )}

              <button type="submit" disabled={isSubmitting}
                className="w-full text-white p-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-xl mt-4 transform hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60"
                style={{ background: isSubmitting ? "#94a3b8" : "#213D64" }}
                onMouseEnter={e => { if (!isSubmitting) (e.target as HTMLButtonElement).style.background = "#97BC50"; }}
                onMouseLeave={e => { if (!isSubmitting) (e.target as HTMLButtonElement).style.background = "#213D64"; }}>
                {isSubmitting ? "Sending..." : "Get Started Now"}
              </button>

            </form>
          </div>
        </div>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="bg-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center cursor-pointer">
          <ContactCard icon={<MapPin size={20} />} title="Address" text="Dallas, Texas 75206" />
          <ContactCard icon={<Phone size={20} />} title="Contact Info" text="Phone: 929-652-7685" />
          <ContactCard icon={<Mail size={20} />} title="Operational Hours" text="Mon-Fri: 9AM – 6PM" />
        </div>
      </section>
    </>
  );
}

function ContactCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="group bg-white rounded-xl p-6 shadow-sm flex flex-col items-center gap-3 border border-slate-100 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-[#1E3A8A]/30">
      <div className="bg-[#1E3A8A]/10 p-3 rounded-full text-[#1E3A8A] transition-all duration-300 group-hover:bg-[#1E3A8A] group-hover:text-white group-hover:scale-110">
        {icon}
      </div>
      <h4 className="font-semibold text-slate-800 transition-colors duration-300 group-hover:text-[#1E3A8A]">{title}</h4>
      <p className="text-sm text-slate-500 text-center leading-relaxed">{text}</p>
    </div>
  );
}