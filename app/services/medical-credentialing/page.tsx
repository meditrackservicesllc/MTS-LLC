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
  UserCheck,
  Globe,
  ShieldCheck,
  Zap,
  CalendarCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Medical Credentialing Services | MTS LLC | 98% Success Rate",
  description: "Fast-track medical credentialing for providers nationwide. Credentialing, enrollment, verification, and re-credentialing services for all payers.",
  openGraph: {
    title: "Medical Credentialing Services | MTS LLC | Fast Enrollment",
    description: "Professional medical credentialing with 98% success rate and nationwide payer networks.",
    url: "/services/medical-credentialing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Credentialing Services | MTS LLC",
    description: "Fast credentialing and enrollment for healthcare providers.",
  },
};

export default function MedicalCredentialingPage() {
  const heroStats: StatItem[] = [
    {
      icon: <Search strokeWidth={1.5} />,
      value: "2.6%",
      label: "Monthly Service Fee",
      highlight: true,
    },
    {
      icon: <Receipt strokeWidth={1.5} />,
      value: "98%",
      label: "Credential Success Rate",
      highlight: false,
    },
    {
      icon: <CheckCircle strokeWidth={1.5} />,
      value: "100%",
      label: "Enrollment Support",
      highlight: true,
    },
    {
      icon: <BrainCircuit strokeWidth={1.5} />,
      value: "HIPAA",
      label: "Secure Processing",
      highlight: false,
    },
  ];

  const solutionsCards: SolutionCard[] = [
    {
      icon: <UserCheck size={32} />,
      title: "Provider Enrollment",
      description: "Fast credentialing with insurers and payers.",
      gradient: "bg-gradient-to-br from-blue-600 to-blue-800",
    },
    {
      icon: <Globe size={32} />,
      title: "Payer Panel Access",
      description: "Add providers to the right networks with confidence.",
      gradient: "bg-gradient-to-br from-slate-700 to-slate-900",
    },
    {
      icon: <CalendarCheck size={32} />,
      title: "Recredentialing",
      description: "Renewals and updates managed before deadlines.",
      gradient: "bg-gradient-to-br from-green-600 to-green-800",
    },
    {
      icon: <Zap size={32} />,
      title: "CAQH & Data Management",
      description: "Accurate profile management across credentialing portals.",
      gradient: "bg-gradient-to-br from-cyan-600 to-cyan-800",
    },
    {
      icon: <Receipt size={32} />,
      title: "Faster Onboarding",
      description: "Reduce downtime with quicker payer approvals.",
      gradient: "bg-gradient-to-br from-orange-600 to-orange-800",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Credentialing Audits",
      description: "Compliance checks that keep providers active and paid.",
      gradient: "bg-gradient-to-br from-red-600 to-red-800",
    },
  ];

  const fieldsSubSpecialties: SubSpecialtyItem[] = [
    {
      icon: <UserCheck size={22} className="text-white" />,
      label: "Provider Enrollment",
      image: "/medical.jpg",
    },
    {
      icon: <Globe size={22} className="text-white" />,
      label: "Insurance Panel Access",
      image: "/medical.jpg",
    },
    {
      icon: <Zap size={22} className="text-white" />,
      label: "CAQH Management",
      image: "/medical.jpg",
    },
    {
      icon: <CalendarCheck size={22} className="text-white" />,
      label: "Recredentialing",
      image: "/medical.jpg",
    },
    {
      icon: <ShieldCheck size={22} className="text-white" />,
      label: "License Monitoring",
      image: "/medical.jpg",
    },
  ];

  return (
    <ServiceTemplate
      heroHeaderSmall="Medical Credentialing Services"
      heroTitle="Credentialing Made Faster and More Reliable"
      heroDescription="Get providers enrolled and credentialed with insurers quickly, accurately, and with full compliance support."
      heroStats={heroStats}
      servicesHeaderSmall="Credentialing & Enrollment"
      servicesTitle="Complete Medical Credentialing Solutions"
      servicesParagraphs={[
        "Credentialing delays block revenue and patient access. Our team navigates credentialing applications, payer requirements, and renewals so providers can join networks faster.",
        "We manage credential files, CAQH profiles, payer submissions, and recredentialing tasks for consistent coverage and fewer interruptions.",
        "Partner with us to reduce credentialing risk, improve contract access, and keep provider panels active and profitable.",
      ]}
      servicesMainImage="/credentialing.jpeg"
      solutionsHeaderSmall="Credentialing Solutions Built for Practices"
      solutionsTitle="Our Credentialing Capabilities"
      solutionsCards={solutionsCards}
      hipaaBannerText="Trusted Credentialing Services with HIPAA-Safe Data Management"
      fieldsHeaderSmall="Credentialing Services for Every Provider"
      fieldsTitle="Specialty Credentialing and Enrollment Support"
      fieldsDescription="We support credentialing for all provider types, helping them join payer panels and stay active:"
      fieldsDoctorImage="/doctor-hero.png"
      fieldsSubSpecialties={fieldsSubSpecialties}
      partnerHeaderSmall="Partner with Experienced Credentialing Specialists"
      partnerTitle="Streamline Credentialing with MTS LLC"
      partnerParagraphs={[
        "Our credentialing experts reduce paperwork, streamline approvals, and manage ongoing renewals.",
        "With accurate credentialing support, your providers stay eligible, receptive, and ready to treat patients.",
      ]}
      partnerMainImage="/credentialing-services.jpeg"
      partnerLogosImage="/partner-logos.png"
    />
  );
}
