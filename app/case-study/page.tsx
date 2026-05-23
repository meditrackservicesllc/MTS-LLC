import type { Metadata } from "next";
import ContentTemplate from "@/app/Components/ContentTemplate";
import { TrendingUp, Users, CheckCircle, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies | MTS LLC | Medical Billing Success Stories",
  description: "Real-world examples of how MTS LLC helped healthcare practices improve revenue, reduce denials, and streamline operations. 350+ successful transformations.",
  openGraph: {
    title: "Case Studies | MTS LLC | $50M+ Revenue Recovered",
    description: "See how practices achieved 45% denial reduction and improved collections with our RCM services.",
  },
};

export default function CaseStudyPage() {
  return (
    <ContentTemplate
      pageCategorySmall="Resources"
      pageTitle="Case Studies"
      pageSubtitle="See how MTS LLC helped healthcare practices improve revenue and streamline operations."
      pageDescription="Real-world examples of how targeted billing, coding, and credentialing support deliver measurable financial results."
      featuredImage="/Partnership.png"
      statCards={[
        { value: "350+", label: "Successful Practice Transformations", icon: <Users className="w-8 h-8 text-[#99C050]" /> },
        { value: "$50M+", label: "Total Revenue Recovered", icon: <TrendingUp className="w-8 h-8 text-[#99C050]" /> },
        { value: "45%", label: "Average Denial Reduction", icon: <CheckCircle className="w-8 h-8 text-[#99C050]" /> },
        { value: "60+", label: "Detailed Case Studies Available", icon: <Clock className="w-8 h-8 text-[#99C050]" /> },
      ]}
      keyBenefits={[
        {
          title: "Proven Track Record",
          description: "Real practices achieving tangible improvements in collections, denials, and operational efficiency.",
        },
        {
          title: "Specialty-Specific Solutions",
          description: "Case studies from cardiology, orthopedics, pediatrics, and other specialties show tailored approach.",
        },
        {
          title: "Measurable Results",
          description: "Before-and-after metrics demonstrating revenue gains, time savings, and process improvements.",
        },
        {
          title: "Replicable Models",
          description: "Success patterns you can apply to your practice with our proven implementation methodology.",
        },
      ]}
      sections={[
        {
          heading: "Real-World Success Stories",
          paragraphs: [
            "Our case studies showcase real healthcare practices that partnered with MTS LLC to transform their revenue cycle operations.",
            "Each case demonstrates how we identify challenges, implement targeted solutions, and deliver measurable improvements.",
            "From small clinics to larger groups, our proven approach helps practices of all sizes improve financial performance and operational efficiency.",
          ],
          bullets: [
            "Specialty practices in cardiology, orthopedics, pediatrics, neurology, and dermatology",
            "Hospital billing operations and physician group practices",
            "Single-location clinics and multi-state healthcare systems",
            "Practices facing specific challenges: denial issues, credentialing delays, documentation gaps",
            "Organizations seeking to automate workflows and improve team productivity",
          ],
        },
        {
          heading: "Typical Challenges We Addressed",
          paragraphs: [
            "Most practices we work with face similar obstacles: delayed claims, rising denials, and staff stretched thin managing billing.",
            "Our case studies show how we systematically resolve these issues through targeted interventions.",
          ],
          bullets: [
            "High denial rates and failed appeals processes",
            "Delayed claims and extended payment cycles",
            "Documentation and coding accuracy gaps",
            "Credentialing delays blocking new payer access",
            "Manual billing processes consuming staff time",
            "Compliance risks and audit vulnerability",
          ],
        },
        {
          heading: "The Results Our Clients Achieve",
          paragraphs: [
            "Across all case studies, MTS LLC clients experience consistent improvements in key performance metrics.",
            "These results directly impact practice profitability, staff satisfaction, and your ability to focus on patient care.",
          ],
          bullets: [
            "30-50% reduction in claim denial rates",
            "20-40% improvement in average days to payment",
            "Improved monthly cash flow and collections",
            "Significant staff time recovered for other priorities",
            "Better payer relationships and increased panel access",
            "Confidence in compliance and audit readiness",
          ],
        },
      ]}
      highlightCards={[
        {
          title: "Revenue Impact",
          description: "Improved collections and faster claim resolution delivering tangible financial results.",
        },
        {
          title: "Operational Benefits",
          description: "Reduced staff burden and stronger payer relationships improving daily efficiency.",
        },
        {
          title: "Compliance Assurance",
          description: "Documentation improvements and process standardization ensuring regulatory compliance.",
        },
        {
          title: "Practice Growth",
          description: "Operational improvements freeing resources for strategic practice expansion.",
        },
      ]}
      ctaText="View Detailed Case Studies"
      ctaLink="/case-study"
    />
  );
}