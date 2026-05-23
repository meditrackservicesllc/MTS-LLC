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
  Mail,
  Zap,
  ShieldCheck,
  TrendingUp,
  FileText,
} from "lucide-react";

export default function PatientBillingPage() {
  const heroStats: StatItem[] = [
    {
      icon: <Search strokeWidth={1.5} />,
      value: "2.5%",
      label: "Monthly Service Fee",
      highlight: true,
    },
    {
      icon: <Receipt strokeWidth={1.5} />,
      value: "96%",
      label: "Patient Payment Rate",
      highlight: false,
    },
    {
      icon: <CheckCircle strokeWidth={1.5} />,
      value: "100%",
      label: "Communication Support",
      highlight: true,
    },
    {
      icon: <BrainCircuit strokeWidth={1.5} />,
      value: "HIPAA",
      label: "Secure Billing",
      highlight: false,
    },
  ];

  const solutionsCards: SolutionCard[] = [
    {
      icon: <Mail size={32} />,
      title: "Friendly Statements",
      description: "Clear patient billing that improves engagement.",
      gradient: "bg-gradient-to-br from-blue-600 to-blue-800",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Payment Options",
      description: "Flexible plans that make patient payments easier.",
      gradient: "bg-gradient-to-br from-slate-700 to-slate-900",
    },
    {
      icon: <Zap size={32} />,
      title: "Patient Communication",
      description: "Professional, empathetic billing outreach.",
      gradient: "bg-gradient-to-br from-green-600 to-green-800",
    },
    {
      icon: <FileText size={32} />,
      title: "Secure Payment Portals",
      description: "Online payment solutions that are easy to use.",
      gradient: "bg-gradient-to-br from-cyan-600 to-cyan-800",
    },
    {
      icon: <Receipt size={32} />,
      title: "Self-Pay Management",
      description: "Support for patients who pay out of pocket.",
      gradient: "bg-gradient-to-br from-orange-600 to-orange-800",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Transparency & Trust",
      description: "Reduce disputes with clear billing practices.",
      gradient: "bg-gradient-to-br from-red-600 to-red-800",
    },
  ];

  const fieldsSubSpecialties: SubSpecialtyItem[] = [
    {
      icon: <Mail size={22} className="text-white" />,
      label: "Payment Notices",
      image: "/medical.jpg",
    },
    {
      icon: <Zap size={22} className="text-white" />,
      label: "Online Portals",
      image: "/medical.jpg",
    },
    {
      icon: <TrendingUp size={22} className="text-white" />,
      label: "Payment Plans",
      image: "/medical.jpg",
    },
    {
      icon: <FileText size={22} className="text-white" />,
      label: "Statement Clarity",
      image: "/medical.jpg",
    },
    {
      icon: <ShieldCheck size={22} className="text-white" />,
      label: "Billing Transparency",
      image: "/medical.jpg",
    },
  ];

  return (
    <ServiceTemplate
      heroHeaderSmall="Patient Billing Services"
      heroTitle="Patient-Friendly Billing That Collects More"
      heroDescription="Improve patient satisfaction and payment rates with clear billing, flexible options, and secure payment experiences."
      heroStats={heroStats}
      servicesHeaderSmall="Patient Billing Excellence"
      servicesTitle="Billing Services Designed for Patients"
      servicesParagraphs={[
        "Patient billing plays a critical role in both patient satisfaction and practice revenue. We make billing easy to understand and simple to pay.",
        "Our team delivers clear statements, payment support, and secure portals to reduce confusion and encourage timely payment.",
        "Partner with us to reduce patient disputes and increase collections while preserving strong patient relationships.",
      ]}
      servicesMainImage="/Revenue-Boost.jpeg"
      solutionsHeaderSmall="Patient-Focused Billing Solutions"
      solutionsTitle="Our Patient Billing Capabilities"
      solutionsCards={solutionsCards}
      hipaaBannerText="Patient Billing with HIPAA-Safe Payments and Transparent Communication"
      fieldsHeaderSmall="Billing Support for Patient Satisfaction"
      fieldsTitle="Patient Billing Services That Drive Collections"
      fieldsDescription="We support every aspect of patient billing, from statements to payment options and communication:"
      fieldsDoctorImage="/doctor-hero.png"
      fieldsSubSpecialties={fieldsSubSpecialties}
      partnerHeaderSmall="Partner with Patient Billing Experts"
      partnerTitle="Improve Patient Collections with MTS LLC"
      partnerParagraphs={[
        "Our patient billing team focuses on clarity, flexibility, and empathy to improve your revenue and patient experience.",
        "We help practices collect more while keeping patients informed and comfortable with their financial responsibility.",
      ]}
      partnerMainImage="/medical-coding.jpeg"
      partnerLogosImage="/partner-logos.png"
    />
  );
}
