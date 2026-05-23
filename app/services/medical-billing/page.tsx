import type { Metadata } from "next";
import ServiceTemplate from "@/app/Components/ServiceTemplate";
import {
  StatItem,
  SolutionCard,
  SubSpecialtyItem,
} from "@/app/Components/ServiceTemplate";
import {
  Search,
  Receipt,
  CheckCircle,
  BrainCircuit,
  Globe,
  FileText,
  TrendingUp,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Medical Billing Services | MTS LLC | 99% Claims Success Rate",
  description: "End-to-end medical billing services with 99% claims success rate. HIPAA compliant, transparent pricing (2.4% fee). Improve collections and reduce billing errors.",
  openGraph: {
    title: "Medical Billing Services | MTS LLC | Expert RCM Solutions",
    description: "Professional medical billing with 100% accuracy and 99% claims success rate.",
  },
};

export default function MedicalBillingPage() {
  const heroStats: StatItem[] = [
    {
      icon: <Search strokeWidth={1.5} />,
      value: "2.4%",
      label: "Monthly Service Fee",
      highlight: true,
    },
    {
      icon: <Receipt strokeWidth={1.5} />,
      value: "99%",
      label: "Claims Success Rate",
      highlight: false,
    },
    {
      icon: <CheckCircle strokeWidth={1.5} />,
      value: "100%",
      label: "Billing Accuracy",
      highlight: true,
    },
    {
      icon: <BrainCircuit strokeWidth={1.5} />,
      value: "HIPAA",
      label: "Compliance Certified",
      highlight: false,
    },
  ];

  const solutionsCards: SolutionCard[] = [
    {
      icon: <Zap size={32} />,
      title: "Claims Management",
      description: "Fast, accurate claim submission and status monitoring.",
      gradient: "bg-gradient-to-br from-blue-600 to-blue-800",
    },
    {
      icon: <FileText size={32} />,
      title: "Coding Accuracy",
      description: "Specialty-aware CPT and ICD coding for higher reimbursements.",
      gradient: "bg-gradient-to-br from-slate-700 to-slate-900",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Payer Follow-Up",
      description: "Proactive follow-up to reduce denials and accelerate payments.",
      gradient: "bg-gradient-to-br from-green-600 to-green-800",
    },
    {
      icon: <Globe size={32} />,
      title: "EHR Integration",
      description: "Seamless data flow between your EMR and billing systems.",
      gradient: "bg-gradient-to-br from-cyan-600 to-cyan-800",
    },
    {
      icon: <Receipt size={32} />,
      title: "Revenue Optimization",
      description: "Intelligent workflows that maximize collections and cash flow.",
      gradient: "bg-gradient-to-br from-orange-600 to-orange-800",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Denial Reduction",
      description: "Root cause analysis to prevent repeat claim rejections.",
      gradient: "bg-gradient-to-br from-red-600 to-red-800",
    },
  ];

  const fieldsSubSpecialties: SubSpecialtyItem[] = [
    {
      icon: <Globe size={22} className="text-white" />,
      label: "Physician Claims",
      image: "/medical.jpg",
    },
    {
      icon: <FileText size={22} className="text-white" />,
      label: "Facility Billing",
      image: "/medical.jpg",
    },
    {
      icon: <TrendingUp size={22} className="text-white" />,
      label: "Payer Contracting",
      image: "/medical.jpg",
    },
    {
      icon: <Zap size={22} className="text-white" />,
      label: "Claims Follow-Up",
      image: "/medical.jpg",
    },
    {
      icon: <ShieldCheck size={22} className="text-white" />,
      label: "Patient Statements",
      image: "/medical.jpg",
    },
  ];

  return (
    <ServiceTemplate
      heroHeaderSmall="Complete Medical Billing Services"
      heroTitle="Accurate Billing for Every Claim"
      heroDescription="Experience end-to-end medical billing designed to reduce denials, accelerate cash flow, and improve revenue across your practice."
      heroStats={heroStats}
      servicesHeaderSmall="Medical Billing Expertise"
      servicesTitle="End-to-End Medical Billing & Revenue Cycle Management"
      servicesParagraphs={[
        "Our medical billing team is built to support complex claims across specialties, code accurately, and keep reimbursements moving quickly.",
        "We combine claim submission best practices, payer follow-up, and intelligent reporting to ensure your practice gets paid for every service delivered.",
        "Let our experts manage your billing operations so you can focus on patient care and practice growth.",
      ]}
      servicesMainImage="/Medical_billing.jpeg"
      solutionsHeaderSmall="Billing Solutions Built for Providers"
      solutionsTitle="Our Medical Billing Capabilities"
      solutionsCards={solutionsCards}
      hipaaBannerText="Trusted Medical Billing with HIPAA Compliance and Proven Success"
      fieldsHeaderSmall="Billing Support for Every Practice Type"
      fieldsTitle="Specialized Billing Services for Key Practice Areas"
      fieldsDescription="We support billing for all primary and specialty care settings, delivering reliable revenue cycle execution:"
      fieldsDoctorImage="/doctor-hero.png"
      fieldsSubSpecialties={fieldsSubSpecialties}
      partnerHeaderSmall="Partner with Experts in Medical Billing"
      partnerTitle="Enhance Your Revenue Cycle with MTS LLC"
      partnerParagraphs={[
        "Our team helps practices improve billing accuracy, shorten payment cycles, and eliminate claim leakage.",
        "With an expert partner on your side, your practice benefits from faster payments, fewer denials, and less administrative burden.",
      ]}
      partnerMainImage="/revenue.jpeg"
      partnerLogosImage="/partner-logos.png"
    />
  );
}
