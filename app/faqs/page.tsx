import type { Metadata } from "next";
import ContentTemplate from "@/app/Components/ContentTemplate";
import { HelpCircle, MessageCircleQuestion, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQs | MTS LLC | Medical Billing & RCM Questions Answered",
  description: "Frequently asked questions about medical billing, credentialing, coding, and revenue cycle management. Get answers to 100+ common questions.",
  openGraph: {
    title: "FAQs | MTS LLC | Billing & Credentialing Questions",
    description: "Find answers to common questions about our medical billing and RCM services.",
  },
};

export default function FaqsPage() {
  return (
    <ContentTemplate
      pageCategorySmall="Resources"
      pageTitle="Frequently Asked Questions"
      pageSubtitle="Answers to common questions about MTS LLC services, billing, and practice support."
      pageDescription="Find answers to frequently asked questions about our billing, credentialing, and practice management offerings."
      featuredImage="/Specialized-Solutions.jpg"
      statCards={[
        { value: "100+", label: "FAQ Topics Covered", icon: <HelpCircle className="w-8 h-8 text-[#99C050]" /> },
        { value: "24/7", label: "Support Availability", icon: <Phone className="w-8 h-8 text-[#99C050]" /> },
        { value: "<2 min", label: "Average Response Time", icon: <MessageCircleQuestion className="w-8 h-8 text-[#99C050]" /> },
        { value: "99%", label: "Question Resolution Rate", icon: <Mail className="w-8 h-8 text-[#99C050]" /> },
      ]}
      keyBenefits={[
        {
          title: "Instant Information Access",
          description: "Find answers to common questions instantly without waiting for support contact.",
        },
        {
          title: "Service-Specific Guidance",
          description: "Detailed FAQs for billing, credentialing, coding, denial management, and all our services.",
        },
        {
          title: "Onboarding Support",
          description: "Clarity on implementation timelines, requirements, and what to expect during transition.",
        },
        {
          title: "Compliance Clarity",
          description: "Understanding of how we maintain HIPAA compliance and protect your practice data.",
        },
      ]}
      sections={[
        {
          heading: "Answers to Your Top Questions",
          paragraphs: [
            "Our FAQ page is designed to clarify how MTS LLC supports providers with billing, credentialing, reimbursement, and practice growth.",
            "Whether you're exploring our services, onboarding, or optimizing your current partnership, we provide straightforward answers.",
          ],
          bullets: [
            "How quickly can you onboard a new provider or practice?",
            "What compliance standards and certifications do you maintain?",
            "How do you improve revenue cycle performance and collections?",
            "What technologies and integrations do you support?",
            "How do you handle data security and HIPAA compliance?",
            "What is your typical implementation timeline?",
          ],
        },
        {
          heading: "Service-Related Questions",
          paragraphs: [
            "Get specific information about each of our core services and how they work with your practice.",
            "Learn about billing, credentialing, coding, denial management, and specialized support offerings.",
          ],
          bullets: [
            "How does your medical billing service work?",
            "What is included in credentialing and payer enrollment support?",
            "How do you approach denial prevention and appeals management?",
            "What support do you provide for out-of-network billing?",
            "How does your A/R follow-up process work?",
            "What specialty expertise do you offer in my field?",
          ],
        },
        {
          heading: "Support and Partnership Questions",
          paragraphs: [
            "Understand how we support your practice on an ongoing basis and the partnership experience.",
            "Learn about communication, reporting, and how we ensure your success.",
          ],
          bullets: [
            "Who is my dedicated point of contact and support team?",
            "What reporting and analytics do you provide?",
            "How often will we review performance and discuss improvements?",
            "What happens if I have billing questions or concerns?",
            "How do you stay current with coding changes and payer updates?",
            "Can you integrate with my existing practice management system?",
          ],
        },
      ]}
      highlightCards={[
        {
          title: "Get Clear Answers",
          description: "Comprehensive FAQ designed to reduce confusion and speed decision-making.",
        },
        {
          title: "Practice-Focused Guidance",
          description: "Information crafted for healthcare leadership and billing teams.",
        },
        {
          title: "Quick Access Support",
          description: "Find answers instantly or reach our team for more detailed discussion.",
        },
        {
          title: "Onboarding Resources",
          description: "Clear guidance for transitioning to MTS LLC and getting maximum value.",
        },
      ]}
      ctaText="Contact Us for More Information"
      ctaLink="/Contact"
    />
  );
}
