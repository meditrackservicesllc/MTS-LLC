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
  FileText,
  Zap,
  ShieldCheck,
  TrendingUp,
  Activity,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Medical Coding Services | MTS LLC | 98% Accuracy Rate",
  description: "Expert medical coding services with 98% accuracy and 100% audit readiness. ICD-10, CPT, HCPCS coding for all specialties. HIPAA compliant coding solutions.",
  openGraph: {
    title: "Medical Coding Services | MTS LLC | Expert Coders",
    description: "Professional medical coding with 98% accuracy and audit-ready compliance.",
    url: "/services/medical-coding",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Coding Services | MTS LLC",
    description: "Expert coding with 98% accuracy and HIPAA compliance.",
  },
};

export default function MedicalCodingPage() {
  const heroStats: StatItem[] = [
    {
      icon: <Search strokeWidth={1.5} />,
      value: "2.3%",
      label: "Monthly Service Fee",
      highlight: true,
    },
    {
      icon: <Receipt strokeWidth={1.5} />,
      value: "98%",
      label: "Coding Accuracy",
      highlight: false,
    },
    {
      icon: <CheckCircle strokeWidth={1.5} />,
      value: "100%",
      label: "Audit Readiness",
      highlight: true,
    },
    {
      icon: <BrainCircuit strokeWidth={1.5} />,
      value: "HIPAA",
      label: "Secure Coding",
      highlight: false,
    },
  ];

  const solutionsCards: SolutionCard[] = [
    {
      icon: <CheckCircle size={32} />,
      title: "Code Accuracy",
      description: "Precise CPT and ICD coding for every encounter.",
      gradient: "bg-gradient-to-br from-blue-600 to-blue-800",
    },
    {
      icon: <FileText size={32} />,
      title: "Documentation Review",
      description: "Clinical documentation optimized for correct coding.",
      gradient: "bg-gradient-to-br from-slate-700 to-slate-900",
    },
    {
      icon: <Zap size={32} />,
      title: "Specialty Coding",
      description: "Experts in cardiology, pediatrics, orthopedics, and more.",
      gradient: "bg-gradient-to-br from-green-600 to-green-800",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Coding Workflow",
      description: "Integrated workflows that reduce errors and delays.",
      gradient: "bg-gradient-to-br from-cyan-600 to-cyan-800",
    },
    {
      icon: <Receipt size={32} />,
      title: "Revenue Integrity",
      description: "Capture every eligible service with compliant coding.",
      gradient: "bg-gradient-to-br from-orange-600 to-orange-800",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Compliance Support",
      description: "Audit-ready coding that meets payer and regulatory standards.",
      gradient: "bg-gradient-to-br from-red-600 to-red-800",
    },
  ];

  const fieldsSubSpecialties: SubSpecialtyItem[] = [
    {
      icon: <FileText size={22} className="text-white" />,
      label: "Evaluation & Management",
      image: "/medical.jpg",
    },
    {
      icon: <TrendingUp size={22} className="text-white" />,
      label: "Procedure Coding",
      image: "/medical.jpg",
    },
    {
      icon: <Zap size={22} className="text-white" />,
      label: "Inpatient Coding",
      image: "/medical.jpg",
    },
    {
      icon: <Activity size={22} className="text-white" />,
      label: "Outpatient Coding",
      image: "/medical.jpg",
    },
    {
      icon: <ShieldCheck size={22} className="text-white" />,
      label: "Coding Audit Support",
      image: "/medical.jpg",
    },
  ];

  return (
    <ServiceTemplate
      heroHeaderSmall="Expert Medical Coding Services"
      heroTitle="Accurate Coding for Stronger Revenue"
      heroDescription="Reduce coding risk and capture every appropriate revenue opportunity with specialty-level coding services."
      heroStats={heroStats}
      servicesHeaderSmall="Medical Coding Excellence"
      servicesTitle="Comprehensive Medical Coding & Compliance"
      servicesParagraphs={[
        "Accurate coding is the foundation of timely reimbursement and compliance. Our coding specialists ensure every encounter is coded correctly and supported by strong documentation.",
        "From E/M to procedural coding, we deliver coding services that reduce denials and improve claim throughput.",
        "Partner with our coding team to close revenue gaps, reduce audits, and improve financial performance.",
      ]}
      servicesMainImage="/code.jpg"
      solutionsHeaderSmall="Coding Services Built for Every Specialty"
      solutionsTitle="Our Medical Coding Capabilities"
      solutionsCards={solutionsCards}
      hipaaBannerText="Accurate Medical Coding with HIPAA-Safe Processes and Audit Readiness"
      fieldsHeaderSmall="Coding Support for Complex Services"
      fieldsTitle="Specialty Coding Services for All Practices"
      fieldsDescription="We support coding for every service line, helping practices capture the full value of their work:"
      fieldsDoctorImage="/doctor-hero.png"
      fieldsSubSpecialties={fieldsSubSpecialties}
      partnerHeaderSmall="Partner with Expert Medical Coders"
      partnerTitle="Improve Collections with MTS LLC Coding Excellence"
      partnerParagraphs={[
        "Our coders reduce billing risk while increasing allowable revenue through accurate clinical coding.",
        "Work with a team that understands payer rules, documentation requirements, and specialty-specific coding nuances.",
      ]}
      partnerMainImage="/medical-coding.jpeg"
      partnerLogosImage="/partner-logos.png"
    />
  );
}
