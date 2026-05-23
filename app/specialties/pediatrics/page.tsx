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
  Heart,
  Activity,
  Zap,
  TrendingUp,
  Stethoscope,
  ShieldCheck,
  Database,
  BarChart3,
  CheckCheck,
} from "lucide-react";

export default function PediatricsPage() {
  // S1: Hero Stats
  const heroStats: StatItem[] = [
    {
      icon: <Search strokeWidth={1.5} />,
      value: "2.6%",
      label: "Monthly Earnings Fee",
      highlight: true,
    },
    {
      icon: <Receipt strokeWidth={1.5} />,
      value: "96%",
      label: "Pediatric Claim Success",
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
      gradient: "bg-gradient-to-br from-blue-500 to-blue-700",
      title: "Streamlined Billing",
      description: "Simplified revenue management for pediatric practices",
    },
    {
      icon: <Database size={32} />,
      gradient: "bg-gradient-to-br from-cyan-600 to-cyan-800",
      title: "Code Mastery",
      description: "Expert pediatric billing codes and payer requirements",
    },
    {
      icon: <ShieldCheck size={32} />,
      gradient: "bg-gradient-to-br from-sky-600 to-sky-800",
      title: "Specialized Solutions",
      description: "Customized billing for diverse pediatric cases",
    },
    {
      icon: <BarChart3 size={32} />,
      gradient: "bg-gradient-to-br from-blue-600 to-slate-800",
      title: "EHR Integration",
      description: "Seamless integration with pediatric systems",
    },
    {
      icon: <TrendingUp size={32} />,
      gradient: "bg-gradient-to-br from-cyan-700 to-cyan-900",
      title: "Revenue Boost",
      description: "Enhanced income through accurate pediatric coding",
    },
    {
      icon: <CheckCheck size={32} />,
      gradient: "bg-gradient-to-br from-slate-600 to-slate-800",
      title: "Error Reduction",
      description: "Minimize mistakes and optimize reimbursements",
    },
  ];

  // S6: Sub-Specialty list
  const fieldsSubSpecialties: SubSpecialtyItem[] = [
    {
      icon: <Heart size={22} className="text-white" />,
      label: "General Pediatrics",
      image: "/medical.jpg",
    },
    {
      icon: <Activity size={22} className="text-white" />,
      label: "Pediatric Cardiology",
      image: "/medical.jpg",
    },
    {
      icon: <Zap size={22} className="text-white" />,
      label: "Pediatric Surgery",
      image: "/medical.jpg",
    },
    {
      icon: <TrendingUp size={22} className="text-white" />,
      label: "Neonatology",
      image: "/medical.jpg",
    },
    {
      icon: <Stethoscope size={22} className="text-white" />,
      label: "Pediatric Gastroenterology",
      image: "/medical.jpg",
    },
  ];

  return (
    <ServiceTemplate
      // Section 1: Hero
      heroHeaderSmall="Optimizing Pediatric Billing Excellence"
      heroTitle="Child Healthcare, Adult-Level Billing"
      heroDescription="Expert pediatric billing solutions for boosted revenue through streamlined operations and specialized age-appropriate medical coding."
      heroStats={heroStats}

      // Section 2: Efficient Services
      servicesHeaderSmall="Pediatric Billing Brilliance"
      servicesTitle="Efficient Pediatric Medical Billing Services"
      servicesParagraphs={[
        "Pediatric practices manage complex family health dynamics and unique billing requirements. Focus on providing exceptional child healthcare while we manage your revenue cycle.",
        "At MTS LLC, we specialize in pediatric billing, understanding the nuances of age-based coding and family billing arrangements. Our expertise ensures accurate claims and faster reimbursements.",
        "Ready to optimize your pediatric practice's financial health? Connect with us today to explore how our specialized services can improve your revenue.",
      ]}
      servicesMainImage="/Heart-Failure-Specialists.jpg"

      // Section 3: Solutions
      solutionsHeaderSmall="Where Pediatric Care Meets Billing Excellence"
      solutionsTitle="MTS LLC's Pediatric Billing & Coding Solutions"
      solutionsCards={solutionsCards}

      // Section 4: HIPAA CTA Banner
      hipaaBannerText="Experience 10+ Years of Pediatric Billing Excellence, Backed by HIPAA Compliance"

      // Section 6: Diverse Fields
      fieldsHeaderSmall="Excellence Across Pediatric Specialties"
      fieldsTitle="Specialized Expertise for Diverse Pediatric Fields"
      fieldsDescription="Explore our tailored solutions designed for various pediatric medical specialties:"
      fieldsDoctorImage="/doctor-hero.png"
      fieldsSubSpecialties={fieldsSubSpecialties}

      // Section 7: Partnership
      partnerHeaderSmall="Empowering Pediatric Care, Perfecting Billing"
      partnerTitle="Partner with MTS LLC for Pediatric Billing Excellence"
      partnerParagraphs={[
        "By partnering with MTS LLC, you ensure your pediatric practice receives expert billing support tailored to child healthcare needs. We create customized solutions that maximize revenue while maintaining compliance.",
        "Begin your journey towards improved efficiency and enhanced profitability today. Contact us to discover how our pediatric billing services can transform your practice.",
      ]}
      partnerMainImage="/medical-coding.jpeg"
      partnerLogosImage="/partner-logos.png"
    />
  );
}
