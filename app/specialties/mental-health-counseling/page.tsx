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
  MessageCircle,
} from "lucide-react";

export default function MentalHealthCounselingPage() {
  const heroStats: StatItem[] = [
    {
      icon: <Brain strokeWidth={1.5} />,
      value: "96%",
      label: "Counseling Claim Success",
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
      value: "2.6%",
      label: "Monthly Earnings Fee",
      highlight: true,
    },
    {
      icon: <TrendingUp strokeWidth={1.5} />,
      value: "20 Days",
      label: "Avg Reimbursement Time",
      highlight: false,
    },
  ];

  const solutionsCards: SolutionCard[] = [
    {
      icon: <Zap size={32} />,
      title: "Counseling Session Billing",
      description: "Expert billing for therapy and counseling services",
      gradient: "bg-gradient-to-br from-green-600 to-green-800",
    },
    {
      icon: <Database size={32} />,
      title: "CPT Coding Expertise",
      description: "Accurate counseling and therapy CPT coding",
      gradient: "bg-gradient-to-br from-emerald-700 to-emerald-900",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "HIPAA Compliance",
      description: "Secure and compliant billing processing",
      gradient: "bg-gradient-to-br from-teal-600 to-teal-800",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Insurance Management",
      description: "Comprehensive mental health insurance coverage",
      gradient: "bg-gradient-to-br from-green-700 to-slate-900",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Revenue Optimization",
      description: "Maximized income through accurate billing",
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
      icon: <MessageCircle size={22} className="text-white" />,
      label: "Individual Counseling",
      image: "/medical.jpg",
    },
    {
      icon: <Users size={22} className="text-white" />,
      label: "Group Counseling",
      image: "/medical.jpg",
    },
    {
      icon: <Heart size={22} className="text-white" />,
      label: "Family Counseling",
      image: "/medical.jpg",
    },
    {
      icon: <Brain size={22} className="text-white" />,
      label: "Crisis Counseling",
      image: "/medical.jpg",
    },
    {
      icon: <CheckCircle size={22} className="text-white" />,
      label: "Substance Abuse",
      image: "/medical.jpg",
    },
  ];

  return (
    <ServiceTemplate
      heroHeaderSmall="Mental Health Counseling Expertise"
      heroTitle="Optimize Counseling Practice Revenue"
      heroDescription="Specialized billing solutions for mental health counselors ensuring accurate coding and maximum reimbursement."
      heroStats={heroStats}

      servicesHeaderSmall="Mental Health Counseling Specialization"
      servicesTitle="Comprehensive Mental Health Counseling Billing Services"
      servicesParagraphs={[
        "Mental health counseling practices require specialized billing expertise for various therapy modalities and insurance networks. We understand these complexities.",
        "At MTS LLC, we provide comprehensive billing services designed specifically for mental health counselors, ensuring accurate coding and timely reimbursement.",
        "Partner with us to optimize your revenue while maintaining full HIPAA compliance and patient privacy.",
      ]}
      servicesMainImage="/Specialized-Solutions.jpg"

      solutionsHeaderSmall="Where Mental Health Expertise Meets Excellence"
      solutionsTitle="MTS LLC's Mental Health Counseling Billing Solutions"
      solutionsCards={solutionsCards}

      hipaaBannerText="Expert Mental Health Counseling Billing with Full HIPAA & Privacy Compliance"

      fieldsHeaderSmall="Excellence Across Counseling Services"
      fieldsTitle="Specialized Expertise for Mental Health Counseling Types"
      fieldsDescription="Tailored billing solutions for every counseling service category:"
      fieldsDoctorImage="/doctor-hero.png"
      fieldsSubSpecialties={fieldsSubSpecialties}

      partnerHeaderSmall="Partnering with Mental Health Counselors"
      partnerTitle="Partner with MTS LLC for Counseling Billing Success"
      partnerParagraphs={[
        "Your counseling practice's financial success depends on accurate billing and effective insurance management. MTS LLC brings specialized expertise in mental health services.",
        "Let our team handle billing complexities and regulatory compliance. Focus on helping your clients while we optimize your financial performance.",
      ]}
      partnerMainImage="/medical-coding.jpeg"
      partnerLogosImage="/partner-logos.png"
    />
  );
}