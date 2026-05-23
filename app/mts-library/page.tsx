import ContentTemplate from "@/app/Components/ContentTemplate";
import { Library, Download, CheckCircle, Award } from "lucide-react";

export default function MtsLibraryPage() {
  return (
    <ContentTemplate
      pageCategorySmall="Resources"
      pageTitle="MTS Library"
      pageSubtitle="A resource center for billing guides, checklists, and financial reference materials."
      pageDescription="Access useful resources that help practices improve workflows, prepare for audits, and optimize revenue cycle management."
      featuredImage="/EHR-Integration.jpg"
      statCards={[
        { value: "75+", label: "Downloadable Resources", icon: <Download className="w-8 h-8 text-[#99C050]" /> },
        { value: "20+", label: "Complete Guide Libraries", icon: <Library className="w-8 h-8 text-[#99C050]" /> },
        { value: "100%", label: "Compliance-Verified Content", icon: <CheckCircle className="w-8 h-8 text-[#99C050]" /> },
        { value: "30K+", label: "Practices Using Templates", icon: <Award className="w-8 h-8 text-[#99C050]" /> },
      ]}
      keyBenefits={[
        {
          title: "Ready-to-Use Templates",
          description: "Download and customize checklists, process flows, and audit preparations specific to your practice.",
        },
        {
          title: "Coding References",
          description: "Access comprehensive guides for ICD-10, CPT coding, and specialty-specific documentation requirements.",
        },
        {
          title: "Compliance Resources",
          description: "Ensure your practice meets regulatory requirements with compliance checklists and audit preparation materials.",
        },
        {
          title: "Staff Training Materials",
          description: "Equip your team with educational guides, workflow diagrams, and best practice documentation.",
        },
      ]}
      sections={[
        {
          heading: "Practical Billing Resources for Your Team",
          paragraphs: [
            "Our library includes guides, reference sheets, and process checklists designed to support your billing team.",
            "These tools help practices stay compliant, improve documentation, and streamline revenue cycle execution.",
            "Every resource is created by billing professionals and updated regularly to reflect current industry standards and regulatory requirements.",
          ],
          bullets: [
            "Billing and coding checklists for daily accuracy",
            "Credentialing and payer enrollment guides with step-by-step instructions",
            "Denial prevention and appeals reference materials",
            "Compliance and audit preparation documentation",
            "Process maps and workflow diagrams for training",
            "Policy templates and procedure documentation",
          ],
        },
        {
          heading: "Resources for Every Practice Type",
          paragraphs: [
            "Whether you are a small clinic or a larger group, the library is designed to provide accessible insights and operational support.",
            "Use these materials to align your team, train staff, and reduce administrative friction across your revenue cycle.",
          ],
          bullets: [
            "Specialty-specific guides for cardiology, orthopedics, pediatrics, and more",
            "Hospital billing and physician billing reference materials",
            "Laboratory and diagnostic testing billing resources",
            "Multi-location practice coordination templates",
            "Staff onboarding and training documentation",
          ],
        },
        {
          heading: "How to Use These Resources",
          paragraphs: [
            "The library is organized by topic and practice type to make finding what you need fast and easy.",
            "Download any resource and customize it for your practice's specific workflows and requirements.",
          ],
          bullets: [
            "Print and distribute to your billing and compliance team",
            "Customize templates with your practice name and specific requirements",
            "Use as training materials for new staff members",
            "Reference during compliance audits and regulatory reviews",
            "Share with practice leadership to improve operational efficiency",
          ],
        },
      ]}
      highlightCards={[
        {
          title: "Reference Materials",
          description: "Downloadable tools for billing accuracy and practice management.",
        },
        {
          title: "Practice Improvement",
          description: "Content aimed at improving process efficiency and compliance.",
        },
        {
          title: "Training Resources",
          description: "Educate your team with professional guides and process documentation.",
        },
        {
          title: "Audit Support",
          description: "Preparation materials to ensure compliance and reduce audit risk.",
        },
      ]}
      ctaText="Browse Full Library"
      ctaLink="/mts-library"
    />
  );
}
