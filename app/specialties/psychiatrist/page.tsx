import ServiceTemplate from "@/app/Components/ServiceTemplate";
import {
  StatItem,
  SolutionCard,
  SubSpecialtyItem,
} from "@/app/Components/ServiceTemplate";
import {
  Brain,
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
  Pill,
} from "lucide-react";

export default function PsychiatristPage() {
  const heroStats: StatItem[] = [
    {
      icon: <Brain strokeWidth={1.5} />,
      value: "97%",
      label: "Psychiatric Claim Success",
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
      value: "2.8%",
      label: "Monthly Earnings Fee",
      highlight: true,
    },
    {
      icon: <TrendingUp strokeWidth={1.5} />,
      value: "15 Days",
      label: "Avg Reimbursement Time",
      highlight: false,
    },
  ];

  const solutionsCards: SolutionCard[] = [
    {
      icon: <Zap size={32} />,
      title: "Psychiatric Coding Expertise",
      description: "Complex psychiatric procedure and E/M coding",
      gradient: "bg-gradient-to-br from-purple-600 to-purple-800",
    },
    {
      icon: <Database size={32} />,
      title: "Medication Management",
      description: "Specialized billing for medication services",
      gradient: "bg-gradient-to-br from-indigo-700 to-indigo-900",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Insurance Network Mastery",
      description: "Comprehensive mental health insurance coverage",
      gradient: "bg-gradient-to-br from-blue-600 to-blue-800",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "DEA Compliance",
      description: "Full DEA registration and maintenance support",
      gradient: "bg-gradient-to-br from-purple-700 to-slate-900",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Revenue Optimization",
      description: "Maximized income through accurate billing",
      gradient: "bg-gradient-to-br from-violet-600 to-violet-800",
    },
    {
      icon: <CheckCheck size={32} />,
      title: "Error Reduction",
      description: "Minimized denials for mental health services",
      gradient: "bg-gradient-to-br from-slate-700 to-slate-900",
    },
  ];

  const fieldsSubSpecialties: SubSpecialtyItem[] = [
    {
      icon: <Pill size={22} className="text-white" />,
      label: "Medication Management",
      image: "/medical.jpg",
    },
    {
      icon: <Heart size={22} className="text-white" />,
      label: "Psychiatric Evaluation",
      image: "/medical.jpg",
    },
    {
      icon: <Brain size={22} className="text-white" />,
      label: "Adult Psychiatry",
      image: "/medical.jpg",
    },
    {
      icon: <Users size={22} className="text-white" />,
      label: "Child & Adolescent",
      image: "/medical.jpg",
    },
    {
      icon: <CheckCircle size={22} className="text-white" />,
      label: "Psychopharmacology",
      image: "/medical.jpg",
    },
  ];

  return (
    <ServiceTemplate
      heroHeaderSmall="Expert Psychiatrist Billing"
      heroTitle="Maximize Psychiatric Practice Revenue"
      heroDescription="Specialized billing solutions for psychiatrists handling complex coding, insurance networks, and DEA compliance."
      heroStats={heroStats}

      servicesHeaderSmall="Psychiatric Billing Specialization"
      servicesTitle="Comprehensive Psychiatrist Billing Services"
      servicesParagraphs={[
        "Psychiatric billing requires expertise in complex coding, multiple insurance networks, and regulatory compliance. We provide specialized solutions for your practice.",
        "At MTS LLC, we understand the unique challenges psychiatrists face with coding, credentialing, and payer requirements. Our team ensures accurate billing and maximum reimbursement.",
        "Partner with us to optimize your revenue while maintaining full compliance with all psychiatric practice regulations.",
      ]}
      servicesMainImage="/Specialized-Solutions.jpg"

      solutionsHeaderSmall="Where Psychiatric Expertise Meets Results"
      solutionsTitle="MTS LLC's Psychiatrist Billing Solutions"
      solutionsCards={solutionsCards}

      hipaaBannerText="Expert Psychiatric Billing with Full HIPAA, DEA & Insurance Compliance"

      fieldsHeaderSmall="Excellence Across Psychiatric Specialties"
      fieldsTitle="Specialized Expertise for Psychiatric Services"
      fieldsDescription="Tailored billing solutions for every psychiatric service type:"
      fieldsDoctorImage="/doctor-hero.png"
      fieldsSubSpecialties={fieldsSubSpecialties}

      partnerHeaderSmall="Partnering with Psychiatrists"
      partnerTitle="Partner with MTS LLC for Psychiatrist Billing Success"
      partnerParagraphs={[
        "Your psychiatric practice's financial success depends on accurate coding and effective insurance management. MTS LLC brings years of specialized expertise.",
        "Let our team handle complex psychiatric coding, network credentialing, and regulatory compliance. Focus on patient care while we optimize your revenue.",
      ]}
      partnerMainImage="/medical-coding.jpeg"
      partnerLogosImage="/partner-logos.png"
    />
  );
}