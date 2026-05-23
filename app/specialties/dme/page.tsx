import ServiceTemplate from "@/app/Components/ServiceTemplate";
import {
  StatItem,
  SolutionCard,
  SubSpecialtyItem,
} from "@/app/Components/ServiceTemplate";
import {
  Package,
  CheckCircle,
  Shield,
  TrendingUp,
  Zap,
  Database,
  ShieldCheck,
  BarChart3,
  Clock,
  CheckCheck,
  Truck,
  Cog,
  FileCheck,
} from "lucide-react";

export default function DMEPage() {
  const heroStats: StatItem[] = [
    {
      icon: <Package strokeWidth={1.5} />,
      value: "95%",
      label: "DME Claim Success Rate",
      highlight: true,
    },
    {
      icon: <CheckCircle strokeWidth={1.5} />,
      value: "100%",
      label: "Medicare Compliance",
      highlight: false,
    },
    {
      icon: <Shield strokeWidth={1.5} />,
      value: "2.5%",
      label: "Monthly Earnings Fee",
      highlight: true,
    },
    {
      icon: <TrendingUp strokeWidth={1.5} />,
      value: "30 Days",
      label: "Avg Reimbursement Time",
      highlight: false,
    },
  ];

  const solutionsCards: SolutionCard[] = [
    {
      icon: <Zap size={32} />,
      title: "HCPCS Coding Expertise",
      description: "Precise DME product coding for maximum reimbursement",
      gradient: "bg-gradient-to-br from-blue-600 to-blue-800",
    },
    {
      icon: <Database size={32} />,
      title: "Competitive Bidding Mastery",
      description: "Navigate Medicare's competitive bidding programs",
      gradient: "bg-gradient-to-br from-cyan-700 to-cyan-900",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Compliance Assurance",
      description: "Full HIPAA and DME supplier compliance",
      gradient: "bg-gradient-to-br from-teal-600 to-teal-800",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Prior Authorization",
      description: "Streamlined PA management and processing",
      gradient: "bg-gradient-to-br from-blue-700 to-slate-900",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Revenue Optimization",
      description: "Enhanced income through accurate billing",
      gradient: "bg-gradient-to-br from-indigo-600 to-indigo-800",
    },
    {
      icon: <CheckCheck size={32} />,
      title: "Error Reduction",
      description: "Minimized denials and claim rejections",
      gradient: "bg-gradient-to-br from-slate-700 to-slate-900",
    },
  ];

  const fieldsSubSpecialties: SubSpecialtyItem[] = [
    {
      icon: <Truck size={22} className="text-white" />,
      label: "Mobility Equipment",
      image: "/medical.jpg",
    },
    {
      icon: <Cog size={22} className="text-white" />,
      label: "Respiratory Equipment",
      image: "/medical.jpg",
    },
    {
      icon: <Package size={22} className="text-white" />,
      label: "Orthotic & Prosthetic",
      image: "/medical.jpg",
    },
    {
      icon: <FileCheck size={22} className="text-white" />,
      label: "Home Medical Equipment",
      image: "/medical.jpg",
    },
    {
      icon: <ShieldCheck size={22} className="text-white" />,
      label: "Hospital Equipment",
      image: "/medical.jpg",
    },
  ];

  return (
    <ServiceTemplate
      heroHeaderSmall="Expert DME Billing Excellence"
      heroTitle="Maximize DME Revenue & Compliance"
      heroDescription="Specialized billing solutions for durable medical equipment suppliers ensuring accurate coding and timely reimbursement."
      heroStats={heroStats}

      servicesHeaderSmall="DME Billing Specialization"
      servicesTitle="Comprehensive DME Medical Billing Services"
      servicesParagraphs={[
        "Managing DME billing requires expertise in HCPCS coding, Medicare competitive bidding, and complex compliance requirements. Let us handle the complexities.",
        "At MTS LLC, we specialize in DME supplier billing with deep knowledge of equipment categories, reimbursement rules, and insurance network requirements.",
        "Partner with us to maximize your revenue while maintaining full compliance with all regulatory requirements.",
      ]}
      servicesMainImage="/Streamlined-Billing.png"

      solutionsHeaderSmall="Where DME Expertise Meets Results"
      solutionsTitle="MTS LLC's DME Billing & Coding Solutions"
      solutionsCards={solutionsCards}

      hipaaBannerText="Expert DME Billing with Full Medicare & Medicaid Compliance"

      fieldsHeaderSmall="Excellence Across DME Categories"
      fieldsTitle="Specialized Expertise for All DME Equipment Types"
      fieldsDescription="Tailored billing solutions for every category of durable medical equipment:"
      fieldsDoctorImage="/doctor-hero.png"
      fieldsSubSpecialties={fieldsSubSpecialties}

      partnerHeaderSmall="Partnering with DME Leaders"
      partnerTitle="Partner with MTS LLC for DME Billing Success"
      partnerParagraphs={[
        "Your success as a DME supplier depends on efficient billing and claim management. MTS LLC brings years of specialized expertise to maximize your revenue potential.",
        "Let our team handle the complexities of DME coding, competitive bidding, and compliance. Focus on serving your patients while we optimize your financial performance.",
      ]}
      partnerMainImage="/medical-coding.jpeg"

      partnerLogosImage="/partner-logos.png"
    />
  );
}