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
  ScanFace,
  Zap,
  Activity,
  TrendingUp,
  Heart,
  ShieldCheck,
  Database,
  BarChart3,
  CheckCheck,
} from "lucide-react";

export default function DermatologyPage() {
  // S1: Hero Stats
  const heroStats: StatItem[] = [
    {
      icon: <Search strokeWidth={1.5} />,
      value: "2.4%",
      label: "Monthly Earnings Fee",
      highlight: true,
    },
    {
      icon: <Receipt strokeWidth={1.5} />,
      value: "98%",
      label: "Dermatology Claim Success",
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
      gradient: "bg-gradient-to-br from-amber-600 to-amber-800",
      title: "Streamlined Billing",
      description: "Simplified revenue management for dermatology practices",
    },
    {
      icon: <Database size={32} />,
      gradient: "bg-gradient-to-br from-stone-700 to-stone-900",
      title: "Code Mastery",
      description: "Expert dermatological and procedural coding",
    },
    {
      icon: <ShieldCheck size={32} />,
      gradient: "bg-gradient-to-br from-orange-600 to-orange-800",
      title: "Specialized Solutions",
      description: "Customized billing for medical and cosmetic dermatology",
    },
    {
      icon: <BarChart3 size={32} />,
      gradient: "bg-gradient-to-br from-amber-700 to-slate-900",
      title: "EHR Integration",
      description: "Seamless integration with dermatology systems",
    },
    {
      icon: <TrendingUp size={32} />,
      gradient: "bg-gradient-to-br from-yellow-600 to-amber-800",
      title: "Revenue Boost",
      description: "Enhanced income through accurate dermatological coding",
    },
    {
      icon: <CheckCheck size={32} />,
      gradient: "bg-gradient-to-br from-slate-700 to-slate-900",
      title: "Error Reduction",
      description: "Minimize mistakes and optimize claim payments",
    },
  ];

  // S6: Sub-Specialty list
  const fieldsSubSpecialties: SubSpecialtyItem[] = [
    {
      icon: <ScanFace size={22} className="text-white" />,
      label: "Medical Dermatology",
      image: "/medical.jpg",
    },
    {
      icon: <Zap size={22} className="text-white" />,
      label: "Surgical Dermatology",
      image: "/medical.jpg",
    },
    {
      icon: <Activity size={22} className="text-white" />,
      label: "Cosmetic Dermatology",
      image: "/medical.jpg",
    },
    {
      icon: <TrendingUp size={22} className="text-white" />,
      label: "Dermatopathology",
      image: "/medical.jpg",
    },
    {
      icon: <Heart size={22} className="text-white" />,
      label: "Mohs Surgery",
      image: "/medical.jpg",
    },
  ];

  return (
    <ServiceTemplate
      // Section 1: Hero
      heroHeaderSmall="Enhancing Dermatology Billing Precision"
      heroTitle="Skin Care & Aesthetic Billing Excellence"
      heroDescription="Expert dermatology billing for enhanced revenue through streamlined operations and specialized dermatological coding expertise."
      heroStats={heroStats}

      // Section 2: Efficient Services
      servicesHeaderSmall="Dermatology Billing Brilliance"
      servicesTitle="Efficient Dermatology Medical Billing Services"
      servicesParagraphs={[
        "Dermatology practices balance medical and cosmetic treatments with complex billing requirements. Focus on patient skin health while we manage your complete revenue cycle.",
        "At MTS LLC, we specialize in dermatology billing, understanding both medical and cosmetic procedures, surgical techniques, and specialized dermatological treatments. Our expertise ensures accurate claims and optimal reimbursements.",
        "Ready to enhance your dermatology practice's profitability? Connect with us today to explore how our specialized billing services can maximize your revenue.",
      ]}
      servicesMainImage="/Specialized-Solutions.jpg"

      // Section 3: Solutions
      solutionsHeaderSmall="Where Dermatology Meets Billing Excellence"
      solutionsTitle="MTS LLC's Dermatology Billing & Coding Solutions"
      solutionsCards={solutionsCards}

      // Section 4: HIPAA CTA Banner
      hipaaBannerText="Experience 10+ Years of Dermatology Billing Excellence, Backed by HIPAA Compliance"

      // Section 6: Diverse Fields
      fieldsHeaderSmall="Excellence Across Dermatology Specialties"
      fieldsTitle="Specialized Expertise for Diverse Dermatology Fields"
      fieldsDescription="Explore our tailored solutions designed for medical, surgical, and cosmetic dermatology:"
      fieldsDoctorImage="/doctor-hero.png"
      fieldsSubSpecialties={fieldsSubSpecialties}

      // Section 7: Partnership
      partnerHeaderSmall="Empowering Dermatology, Perfecting Billing"
      partnerTitle="Partner with MTS LLC for Dermatology Billing Excellence"
      partnerParagraphs={[
        "By partnering with MTS LLC, you ensure your dermatology practice receives expert billing support from professionals who understand both medical and cosmetic billing complexities. We create customized solutions that maximize revenue while maintaining compliance.",
        "Begin your journey towards improved efficiency and amplified profitability today. Contact us to discover how our dermatology billing expertise can transform your practice.",
      ]}
      partnerMainImage="/medical-coding.jpeg"
      partnerLogosImage="/partner-logos.png"
    />
  );
}
