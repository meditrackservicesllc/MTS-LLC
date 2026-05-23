import ContentTemplate from "@/app/Components/ContentTemplate";
import { Users, TrendingUp, Shield, Target } from "lucide-react";

export default function OurCompanyPage() {
  return (
    <ContentTemplate
      pageCategorySmall="Why MTS LLC"
      pageTitle="Trusted Medical Billing Leadership"
      pageSubtitle="Driven by transparency, expertise, and a commitment to growing healthcare practices nationwide."
      pageDescription="MTS LLC combines deep revenue cycle experience with modern technology to help clinical teams reclaim time, reduce denials, and improve financial outcomes."
      featuredImage="/hero.jpeg"
      statCards={[ 
        { value: "10+", label: "Years of Healthcare Experience", icon: <Shield className="w-8 h-8 text-[#99C050]" /> },
        { value: "500+", label: "Healthcare Practices Served", icon: <Users className="w-8 h-8 text-[#99C050]" /> },
        { value: "99%", label: "Claim Success Rate", icon: <TrendingUp className="w-8 h-8 text-[#99C050]" /> },
        { value: "HIPAA", label: "Compliance Certified", icon: <Target className="w-8 h-8 text-[#99C050]" /> },
      ]}
      keyBenefits={[
        {
          title: "Proven Track Record",
          description: "Two decades of healthcare billing expertise combined with modern technology ensures consistent results for practices of all sizes.",
        },
        {
          title: "Specialty Expertise",
          description: "Deep knowledge in cardiology, orthopedics, pediatrics, neurology, dermatology, and all major medical specialties.",
        },
        {
          title: "Client-Centered Approach",
          description: "We build custom solutions that match each practice's goals, using analytics and process automation.",
        },
        {
          title: "Dedicated Support Team",
          description: "A single point of contact guides every step of your revenue cycle journey with responsive, transparent communication.",
        },
      ]}
      sections={[
        {
          heading: "A Proven Partner for Healthcare Providers",
          paragraphs: [
            "We support healthcare organizations with end-to-end billing, credentialing, coding, and revenue cycle services. Our focus is on accuracy, efficiency, and measurable revenue growth.",
            "From solo practitioners to multi-specialty groups, our team adapts to your workflow and payer mix so your staff can focus on delivering exceptional care.",
            "Our commitment to service excellence means your practice gets the attention and expertise it deserves, every single day.",
          ],
          bullets: [
            "10+ years of healthcare billing and RCM experience",
            "Specialty-specific coding and credentialing expertise",
            "HIPAA-safe processes and payer compliance",
            "Transparent reporting and performance metrics",
            "Dedicated account management for every client",
          ],
        },
        {
          heading: "Our Mission and Values",
          paragraphs: [
            "At MTS LLC, we believe that healthcare providers should focus on patient care, not administrative burden. Our mission is to simplify billing so practices can thrive.",
            "We operate with transparency, integrity, and a deep commitment to your success. Every decision we make is guided by your practice's financial and operational well-being.",
            "Our team stays current with industry changes, payer requirements, and regulatory updates to ensure your practice remains compliant and competitive.",
          ],
          bullets: [
            "Patient-first approach to healthcare billing",
            "Continuous innovation in RCM technology",
            "Proactive compliance and regulatory expertise",
            "Partnership mindset with every client",
          ],
        },
        {
          heading: "Client-Centered Approach",
          paragraphs: [
            "We build custom solutions that match each practice's goals, using analytics and process automation to reduce administrative burden and accelerate collections.",
            "Your practice's success is measured in real outcomes: faster payments, lower denials, improved cash flow, and happier staff. We focus on metrics that matter to you.",
            "Our team is dedicated to responsiveness, transparent communication, and continuous improvement through monthly performance reporting and strategic reviews.",
          ],
          bullets: [
            "Monthly performance dashboards and reporting",
            "Quarterly strategic review meetings",
            "Dedicated practice support specialist",
            "24/7 access to billing status and information",
            "Proactive denial prevention and recovery",
          ],
        },
      ]}
      highlightCards={[
        {
          title: "Dedicated Practice Support",
          description: "A single point of contact guides every step of your revenue cycle journey with responsive support.",
        },
        {
          title: "Scalable Billing Operations",
          description: "From small clinics to larger health systems, we scale services seamlessly with your growth.",
        },
        {
          title: "Technology-Driven Solutions",
          description: "Modern RCM tools combined with expert team expertise for optimal results.",
        },
        {
          title: "Performance Guarantee",
          description: "We commit to measurable improvements in collections, denials, and cash flow.",
        },
      ]}
      ctaText="Start Your Practice Audit"
      ctaLink="/Contact"
    />
  );
}