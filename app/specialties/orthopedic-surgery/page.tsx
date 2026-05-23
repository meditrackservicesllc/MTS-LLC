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
  Bone,
  Zap,
  Activity,
  TrendingUp,
  Heart,
  ShieldCheck,
  Database,
  BarChart3,
  CheckCheck,
} from "lucide-react";

export default function OrthopedicSurgeryPage() {
  // S1: Hero Stats
  const heroStats: StatItem[] = [
    {
      icon: <Search strokeWidth={1.5} />,
      value: "2.8%",
      label: "Monthly Earnings Fee",
      highlight: true,
    },
    {
      icon: <Receipt strokeWidth={1.5} />,
      value: "98%",
      label: "Orthopedic Claim Success",
      highlight: false,
    },
    {
      icon: <CheckCircle strokeWidth={1.5} />,
      value: "100%",
      label: "Denial Expertise",
      highlight: true,
    },
    {
      icon: <BrainCircuit strokeWidth={1.5} />,
      value: "HIPAA",
      label: "Compliance Audit",
      highlight: false,
    },
  ];

  // S3: Solution Cards
  const solutionsCards: SolutionCard[] = [
    {
      icon: <Zap size={32} />,
      gradient: "bg-gradient-to-br from-teal-600 to-teal-800",
      title: "Streamlined Billing",
      description: "Simplified revenue management for orthopedic practices",
    },
    {
      icon: <Database size={32} />,
      gradient: "bg-gradient-to-br from-slate-700 to-slate-900",
      title: "Code Mastery",
      description: "Expert orthopedic surgical and procedural coding",
    },
    {
      icon: <ShieldCheck size={32} />,
      gradient: "bg-gradient-to-br from-cyan-700 to-cyan-900",
      title: "Specialized Solutions",
      description: "Customized solutions for complex surgical cases",
    },
    {
      icon: <BarChart3 size={32} />,
      gradient: "bg-gradient-to-br from-teal-700 to-slate-900",
      title: "EHR Integration",
      description: "Seamless integration with orthopedic practice systems",
    },
    {
      icon: <TrendingUp size={32} />,
      gradient: "bg-gradient-to-br from-blue-700 to-blue-900",
      title: "Revenue Boost",
      description: "Maximize revenue through accurate surgical coding",
    },
    {
      icon: <CheckCheck size={32} />,
      gradient: "bg-gradient-to-br from-slate-600 to-slate-800",
      title: "Error Reduction",
      description: "Minimize coding mistakes and claim denials",
    },
  ];

  // S6: Sub-Specialty list
  const fieldsSubSpecialties: SubSpecialtyItem[] = [
    {
      icon: <Bone size={22} className="text-white" />,
      label: "General Orthopedics",
      image: "/medical.jpg",
    },
    {
      icon: <Zap size={22} className="text-white" />,
      label: "Sports Medicine",
      image: "/medical.jpg",
    },
    {
      icon: <Activity size={22} className="text-white" />,
      label: "Joint Replacement",
      image: "/medical.jpg",
    },
    {
      icon: <TrendingUp size={22} className="text-white" />,
      label: "Spine Surgery",
      image: "/medical.jpg",
    },
    {
      icon: <Heart size={22} className="text-white" />,
      label: "Hand Surgery",
      image: "/medical.jpg",
    },
  ];

  return (
    <ServiceTemplate
      // Section 1: Hero
      heroHeaderSmall="Enhancing Orthopedic Surgery Billing Precision"
      heroTitle="Precision Surgery Meets Perfect Billing"
      heroDescription="Expert orthopedic surgery billing for boosted revenue through streamlined operations and accurate surgical coding expertise."
      heroStats={heroStats}

      // Section 2: Efficient Services
      servicesHeaderSmall="Orthopedic Surgery Billing Brilliance"
      servicesTitle="Efficient Orthopedic Surgery Medical Billing Services"
      servicesParagraphs={[
        "Orthopedic surgeons perform intricate procedures while managing complex billing challenges. Imagine focusing solely on patient outcomes while your revenue management runs smoothly.",
        "At MTS LLC, we specialize in orthopedic surgery billing, transforming coding complexities into seamless revenue streams. Our expertise in surgical procedures ensures accurate claims and faster reimbursements.",
        "Ready to optimize your surgical practice's financial performance? Connect with us today to discover how specialized billing services can enhance your bottom line.",
      ]}
      servicesMainImage="/Streamlined-Billing.png"

      // Section 3: Solutions
      solutionsHeaderSmall="Where Surgical Excellence Meets Billing Precision"
      solutionsTitle="MTS LLC's Orthopedic Surgery Billing & Coding Solutions"
      solutionsCards={solutionsCards}

      // Section 4: HIPAA CTA Banner
      hipaaBannerText="Experience 10+ Years of Orthopedic Billing Excellence, Backed by HIPAA Compliance"

      // Section 6: Diverse Fields
      fieldsHeaderSmall="Excellence Across Orthopedic Specialties"
      fieldsTitle="Specialized Expertise for Diverse Orthopedic Sub-specialties"
      fieldsDescription="Explore our tailored solutions designed to maximize revenue for various orthopedic surgical specialties:"
      fieldsDoctorImage="/doctor-hero.png"
      fieldsSubSpecialties={fieldsSubSpecialties}

      // Section 7: Partnership
      partnerHeaderSmall="Empowering Orthopedic Surgery, Perfecting Billing"
      partnerTitle="Partner with MTS LLC for Orthopedic Surgery Billing Excellence"
      partnerParagraphs={[
        "By partnering with MTS LLC, your surgical practice benefits from billing experts who understand orthopedic complexities. We create tailored solutions that maximize revenue while ensuring compliance and accuracy.",
        "Begin transforming your practice's financial health today. Contact us to explore how our specialized orthopedic billing services can significantly improve your revenue cycle.",
      ]}
      partnerMainImage="/medical-coding.jpeg"
      partnerLogosImage="/partner-logos.png"
    />
  );
}
