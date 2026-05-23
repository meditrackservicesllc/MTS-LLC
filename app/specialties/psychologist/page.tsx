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
  ClipboardList,
  Lightbulb,
  Heart,
} from "lucide-react";

export default function PsychologistPage() {
  const heroStats: StatItem[] = [
    {
      icon: <Brain strokeWidth={1.5} />,
      value: "96%",
      label: "Psychology Claim Success",
      highlight: true,
    },
    {
      icon: <CheckCircle strokeWidth={1.5} />,
      value: "98%",
      label: "Insurance Network Approved",
      highlight: false,
    },
    {
      icon: <Shield strokeWidth={1.5} />,
      value: "2.7%",
      label: "Monthly Earnings Fee",
      highlight: true,
    },
    {
      icon: <TrendingUp strokeWidth={1.5} />,
      value: "18 Days",
      label: "Avg Reimbursement Time",
      highlight: false,
    },
  ];

  const solutionsCards: SolutionCard[] = [
    {
      icon: <Zap size={32} />,
      title: "Psychological Assessment Coding",
      description: "Expert billing for testing and evaluations",
      gradient: "bg-gradient-to-br from-blue-600 to-blue-800",
    },
    {
      icon: <Database size={32} />,
      title: "Therapy Billing Expertise",
      description: "Individual, group, and family therapy billing",
      gradient: "bg-gradient-to-br from-indigo-700 to-indigo-900",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Insurance Network Management",
      description: "Comprehensive mental health insurance coverage",
      gradient: "bg-gradient-to-br from-purple-600 to-purple-800",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Neuropsych Testing",
      description: "Specialized neuropsychological evaluation billing",
      gradient: "bg-gradient-to-br from-blue-700 to-slate-900",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Revenue Optimization",
      description: "Maximized income through accurate billing",
      gradient: "bg-gradient-to-br from-cyan-600 to-cyan-800",
    },
    {
      icon: <CheckCheck size={32} />,
      title: "Error Reduction",
      description: "Minimized denials for psychology services",
      gradient: "bg-gradient-to-br from-slate-700 to-slate-900",
    },
  ];

  const fieldsSubSpecialties: SubSpecialtyItem[] = [
    {
      icon: <ClipboardList size={22} className="text-white" />,
      label: "Psychological Testing",
      image: "/medical.jpg",
    },
    {
      icon: <Users size={22} className="text-white" />,
      label: "Individual Therapy",
      image: "/medical.jpg",
    },
    {
      icon: <Lightbulb size={22} className="text-white" />,
      label: "Group Therapy",
      image: "/medical.jpg",
    },
    {
      icon: <Heart size={22} className="text-white" />,
      label: "Family Therapy",
      image: "/medical.jpg",
    },
    {
      icon: <Brain size={22} className="text-white" />,
      label: "Neuropsych Evaluation",
      image: "/medical.jpg",
    },
  ];

  return (
    <ServiceTemplate
      heroHeaderSmall="Expert Psychologist Billing"
      heroTitle="Maximize Psychology Practice Revenue"
      heroDescription="Specialized billing solutions for psychologists handling assessments, therapy, and insurance requirements."
      heroStats={heroStats}

      servicesHeaderSmall="Psychology Billing Specialization"
      servicesTitle="Comprehensive Psychologist Billing Services"
      servicesParagraphs={[
        "Psychology practices require specialized billing expertise for assessments, therapy sessions, and insurance management. Let us handle the complexities.",
        "At MTS LLC, we understand the unique challenges psychologists face with coding, credentialing, and multiple insurance networks. Our team ensures accurate billing and maximum reimbursement.",
        "Partner with us to optimize your revenue while maintaining full compliance with all psychology practice regulations.",
      ]}
      servicesMainImage="/EHR-Integration.jpg"

      solutionsHeaderSmall="Where Psychology Expertise Meets Results"
      solutionsTitle="MTS LLC's Psychologist Billing Solutions"
      solutionsCards={solutionsCards}

      hipaaBannerText="Expert Psychology Billing with Full HIPAA & Insurance Compliance"

      fieldsHeaderSmall="Excellence Across Psychology Services"
      fieldsTitle="Specialized Expertise for Psychological Services"
      fieldsDescription="Tailored billing solutions for every psychology service type:"
      fieldsDoctorImage="/doctor-hero.png"
      fieldsSubSpecialties={fieldsSubSpecialties}

      partnerHeaderSmall="Partnering with Psychologists"
      partnerTitle="Partner with MTS LLC for Psychology Billing Success"
      partnerParagraphs={[
        "Your psychology practice's financial success depends on accurate coding and effective insurance management. MTS LLC brings years of specialized expertise.",
        "Let our team handle assessment coding, therapy billing, and network credentialing. Focus on patient care while we optimize your revenue.",
      ]}
      partnerMainImage="/medical-coding.jpeg"
      partnerLogosImage="/partner-logos.png"
    />
  );
}