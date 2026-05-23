import ContentTemplate from "@/app/Components/ContentTemplate";
import { ClipboardList, Clock, CheckCircle, Shield } from "lucide-react";

export default function ProviderFormPage() {
  return (
    <ContentTemplate
      pageCategorySmall="Resources"
      pageTitle="Provider Enrollment Form"
      pageSubtitle="Submit your provider details to begin credentialing and billing enrollment."
      pageDescription="Use our streamlined provider form to share information needed for credentialing, payer enrollment, and billing setup."
      featuredImage="/doctor-hero.png"
      statCards={[
        { value: "<15 min", label: "Average Form Completion Time", icon: <Clock className="w-8 h-8 text-[#99C050]" /> },
        { value: "30 days", label: "Typical Credentialing Timeline", icon: <CheckCircle className="w-8 h-8 text-[#99C050]" /> },
        { value: "500+", label: "Providers Successfully Enrolled", icon: <ClipboardList className="w-8 h-8 text-[#99C050]" /> },
        { value: "100%", label: "Data Security Compliance", icon: <Shield className="w-8 h-8 text-[#99C050]" /> },
      ]}
      keyBenefits={[
        {
          title: "Streamlined Enrollment",
          description: "Simple form design that gathers all required information in just 15 minutes.",
        },
        {
          title: "Accurate Credentialing",
          description: "Complete provider information reduces delays and rejection from payers.",
        },
        {
          title: "Secure Data Handling",
          description: "HIPAA-compliant process protects all provider information with enterprise security.",
        },
        {
          title: "Dedicated Support",
          description: "Our team reviews submissions and follows up with clarifications to ensure accuracy.",
        },
      ]}
      sections={[
        {
          heading: "Streamlined Provider Enrollment Process",
          paragraphs: [
            "Completing the provider form helps us gather the critical details required for credentialing and payer panel enrollment.",
            "The information you submit is used to create accurate provider profiles and reduce delays during the credentialing process.",
            "We've designed the form to be efficient and capture exactly what payers require for quick panel approval.",
          ],
          bullets: [
            "Provider licensure and demographic details",
            "Practice location and insurance participation preferences",
            "Professional credentials and specialty areas",
            "Tax ID, NPI, and billing information",
            "Hospital affiliations and admitting privileges",
            "Insurance and malpractice coverage details",
          ],
        },
        {
          heading: "What Information We Need",
          paragraphs: [
            "Our form requests essential information that payers require for credentialing and billing setup.",
            "Having complete information from the start prevents delays and rejection from insurance companies.",
          ],
          bullets: [
            "Personal and professional identifiers (NPI, DEA, state licenses)",
            "Education and training background",
            "Malpractice history and disciplinary records",
            "Hospital privileges and admitting rights",
            "Insurance and liability coverage information",
            "Preferred insurance panels and participation preferences",
          ],
        },
        {
          heading: "The Enrollment Timeline",
          paragraphs: [
            "Once your form is submitted, our team reviews the information, confirms missing details, and begins the enrollment process with payers.",
            "We keep providers informed through each stage until panel access is secured and billing can begin.",
            "Typical credentialing takes 30-60 days depending on payer requirements and response times.",
          ],
          bullets: [
            "Day 1-3: Form review and completeness check",
            "Day 4-7: Initial submission to payers",
            "Day 8-30: Payer verification and credentialing review",
            "Day 31-60: Panel approval and billing system activation",
            "Throughout: Dedicated support addressing any payer requests",
            "Post-approval: Ongoing monitoring and recredentialing support",
          ],
        },
      ]}
      highlightCards={[
        {
          title: "Faster Credentialing",
          description: "Complete enrollment data helps reduce setup time and payer processing.",
        },
        {
          title: "Accurate Provider Records",
          description: "We build clean provider profiles for seamless billing and payer access.",
        },
        {
          title: "Dedicated Support",
          description: "Our team follows up on every submission to ensure accuracy and completeness.",
        },
        {
          title: "Secure Process",
          description: "HIPAA-compliant handling protects all sensitive provider information.",
        },
      ]}
      ctaText="Complete Provider Form"
      ctaLink="/Contact"
    />
  );
}
