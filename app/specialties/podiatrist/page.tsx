import ServiceTemplate from "@/app/Components/ServiceTemplate";
import {
  StatItem,
  SolutionCard,
  SubSpecialtyItem,
} from "@/app/Components/ServiceTemplate";
import {
  Footprints,
  CheckCircle,
  Shield,
  TrendingUp,
  Zap,
  Database,
  ShieldCheck,
  BarChart3,
  Bone,
  CheckCheck,
  Activity,
  Stethoscope,
} from "lucide-react";

export default function PodiatristPage() {
  const heroStats: StatItem[] = [
    {
      icon: <Footprints strokeWidth={1.5} />,
      value: "97%",
      label: "Podiatry Claim Success",
      highlight: true,
    },
    {
      icon: <CheckCircle strokeWidth={1.5} />,
      value: "99%",
      label: "Insurance Network Approved",
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
      value: "16 Days",
      label: "Avg Reimbursement Time",
      highlight: false,
    },
  ];

  const solutionsCards: SolutionCard[] = [
    {
      icon: <Zap size={32} />,
      title: "Podiatry Procedure Coding",
      description: "Expert foot and ankle procedure billing",
      gradient: "bg-gradient-to-br from-orange-600 to-orange-800",
    },
    {
      icon: <Database size={32} />,
      title: "Diabetic Foot Care",
      description: "Specialized diabetic wound care billing",
      gradient: "bg-gradient-to-br from-amber-700 to-amber-900",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Orthotic & Prosthetic",
      description: "Complex device and equipment billing",
      gradient: "bg-gradient-to-br from-yellow-600 to-yellow-800",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Workers' Comp Billing",
      description: "Specialized workers' compensation claims",
      gradient: "bg-gradient-to-br from-orange-700 to-slate-900",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Revenue Optimization",
      description: "Maximized income through accurate coding",
      gradient: "bg-gradient-to-br from-red-600 to-red-800",
    },
    {
      icon: <CheckCheck size={32} />,
      title: "Surgical Billing",
      description: "Complex procedure billing expertise",
      gradient: "bg-gradient-to-br from-slate-700 to-slate-900",
    },
  ];

  const fieldsSubSpecialties: SubSpecialtyItem[] = [
    {
      icon: <Bone size={22} className="text-white" />,
      label: "Foot Surgery",
      image: "/medical.jpg",
    },
    {
      icon: <Activity size={22} className="text-white" />,
      label: "Diabetic Foot Care",
      image: "/medical.jpg",
    },
    {
      icon: <Footprints size={22} className="text-white" />,
      label: "Orthotics & Prosthetics",
      image: "/medical.jpg",
    },
    {
      icon: <Stethoscope size={22} className="text-white" />,
      label: "General Podiatry",
      image: "/medical.jpg",
    },
    {
      icon: <CheckCircle size={22} className="text-white" />,
      label: "Sports Podiatry",
      image: "/medical.jpg",
    },
  ];

  return (
    <ServiceTemplate
      heroHeaderSmall="Expert Podiatry Billing"
      heroTitle="Maximize Podiatry Practice Revenue"
      heroDescription="Specialized billing solutions for podiatrists handling complex procedures and insurance requirements."
      heroStats={heroStats}

      servicesHeaderSmall="Podiatry Billing Specialization"
      servicesTitle="Comprehensive Podiatrist Billing Services"
      servicesParagraphs={[
        "Podiatry practices require specialized billing expertise for surgical procedures, diabetic foot care, and orthotic/prosthetic services. We master these complexities.",
        "At MTS LLC, we provide comprehensive billing services designed specifically for podiatrists, ensuring accurate coding and maximum reimbursement.",
        "Partner with us to optimize your revenue while maintaining full compliance with all podiatry practice regulations.",
      ]}
      servicesMainImage="/code.jpg"

      solutionsHeaderSmall="Where Podiatry Expertise Meets Excellence"
      solutionsTitle="MTS LLC's Podiatrist Billing Solutions"
      solutionsCards={solutionsCards}

      hipaaBannerText="Expert Podiatry Billing with Full HIPAA & Workers' Compensation Compliance"

      fieldsHeaderSmall="Excellence Across Podiatry Services"
      fieldsTitle="Specialized Expertise for Podiatric Services"
      fieldsDescription="Tailored billing solutions for every podiatry service type:"
      fieldsDoctorImage="/doctor-hero.png"
      fieldsSubSpecialties={fieldsSubSpecialties}

      partnerHeaderSmall="Partnering with Podiatrists"
      partnerTitle="Partner with MTS LLC for Podiatry Billing Success"
      partnerParagraphs={[
        "Your podiatry practice's financial success depends on accurate coding and effective insurance management. MTS LLC brings years of specialized expertise.",
        "Let our team handle complex procedure coding, diabetic care billing, and workers' compensation claims. Focus on patient care while we optimize your revenue.",
      ]}
      partnerMainImage="/medical-coding.jpeg"
      partnerLogosImage="/partner-logos.png"
    />
  );
}