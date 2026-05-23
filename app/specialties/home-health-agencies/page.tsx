import ServiceTemplate from "@/app/Components/ServiceTemplate";
import {
  StatItem,
  SolutionCard,
  SubSpecialtyItem,
} from "@/app/Components/ServiceTemplate";
import {
  Home,
  CheckCircle,
  Shield,
  TrendingUp,
  Zap,
  Database,
  ShieldCheck,
  BarChart3,
  Users,
  CheckCheck,
  Heart,
  Stethoscope,
} from "lucide-react";

export default function HomeHealthAgenciesPage() {
  const heroStats: StatItem[] = [
    {
      icon: <Home strokeWidth={1.5} />,
      value: "98%",
      label: "Home Health Claim Success",
      highlight: true,
    },
    {
      icon: <CheckCircle strokeWidth={1.5} />,
      value: "99%",
      label: "Medicare/Medicaid Approved",
      highlight: false,
    },
    {
      icon: <Shield strokeWidth={1.5} />,
      value: "2.9%",
      label: "Monthly Earnings Fee",
      highlight: true,
    },
    {
      icon: <TrendingUp strokeWidth={1.5} />,
      value: "24/7",
      label: "Claim Support",
      highlight: false,
    },
  ];

  const solutionsCards: SolutionCard[] = [
    {
      icon: <Zap size={32} />,
      title: "Home Health Expertise",
      description: "Specialized billing for all home care services",
      gradient: "bg-gradient-to-br from-green-600 to-green-800",
    },
    {
      icon: <Database size={32} />,
      title: "Episode Payment Mastery",
      description: "Optimized HHVBP and episode billing",
      gradient: "bg-gradient-to-br from-emerald-700 to-emerald-900",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Compliance & Audits",
      description: "Full Medicare/Medicaid compliance assurance",
      gradient: "bg-gradient-to-br from-teal-600 to-teal-800",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "OASIS Documentation",
      description: "Expert handling of OASIS coding requirements",
      gradient: "bg-gradient-to-br from-green-700 to-slate-900",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Revenue Maximization",
      description: "Enhanced income through accurate claims",
      gradient: "bg-gradient-to-br from-lime-600 to-lime-800",
    },
    {
      icon: <CheckCheck size={32} />,
      title: "Denial Management",
      description: "Reduced rejections and faster payments",
      gradient: "bg-gradient-to-br from-slate-700 to-slate-900",
    },
  ];

  const fieldsSubSpecialties: SubSpecialtyItem[] = [
    {
      icon: <Stethoscope size={22} className="text-white" />,
      label: "Skilled Nursing Care",
      image: "/medical.jpg",
    },
    {
      icon: <Heart size={22} className="text-white" />,
      label: "Physical Therapy",
      image: "/medical.jpg",
    },
    {
      icon: <Users size={22} className="text-white" />,
      label: "Occupational Therapy",
      image: "/medical.jpg",
    },
    {
      icon: <CheckCircle size={22} className="text-white" />,
      label: "Speech Pathology",
      image: "/medical.jpg",
    },
    {
      icon: <Home size={22} className="text-white" />,
      label: "Home Health Aides",
      image: "/medical.jpg",
    },
  ];

  return (
    <ServiceTemplate
      heroHeaderSmall="Home Health Billing Excellence"
      heroTitle="Optimize Your Home Health Revenue"
      heroDescription="Expert billing solutions for home health agencies ensuring accurate coding and maximum reimbursement."
      heroStats={heroStats}

      servicesHeaderSmall="Home Health Billing Specialization"
      servicesTitle="Complete Home Health Agency Billing Services"
      servicesParagraphs={[
        "Home health agencies face unique billing challenges with episode-based reimbursement and complex documentation needs. We master these complexities.",
        "At MTS LLC, we provide comprehensive billing services designed specifically for home health organizations, ensuring accurate coding and timely payments.",
        "Let us handle your billing while you focus on delivering exceptional patient care in the home setting.",
      ]}
      servicesMainImage="/Streamlined-Billing.png"

      solutionsHeaderSmall="Where Home Health Expertise Meets Excellence"
      solutionsTitle="MTS LLC's Home Health Billing Solutions"
      solutionsCards={solutionsCards}

      hipaaBannerText="10+ Years Home Health Billing Experience with Full HIPAA & Medicare Compliance"

      fieldsHeaderSmall="Excellence Across Home Health Services"
      fieldsTitle="Specialized Expertise for Home Health Care Types"
      fieldsDescription="Tailored billing solutions for all home health service categories:"
      fieldsDoctorImage="/doctor-hero.png"
      fieldsSubSpecialties={fieldsSubSpecialties}

      partnerHeaderSmall="Partnering with Home Health Leaders"
      partnerTitle="Partner with MTS LLC for Home Health Billing Success"
      partnerParagraphs={[
        "Your home health agency's financial success depends on accurate billing and effective claims management. MTS LLC provides the specialized expertise you need.",
        "Trust our team to handle episode-based billing and all regulatory compliance. We maximize your revenue so you can focus on patient care.",
      ]}
      partnerMainImage="/medical-coding.jpeg"
      partnerLogosImage="/partner-logos.png"
    />
  );
}