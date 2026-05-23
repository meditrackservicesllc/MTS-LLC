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
  Stethoscope,
  Activity,
  Heart,
  TrendingUp,
  Clock,
  Zap,
  ShieldCheck,
  Zap as FastIcon,
  Database,
  BarChart3,
  CheckCheck,
  Shield,
} from "lucide-react";

export default function InternalMedicinePage() {
  // S1: Hero Stats
  const heroStats: StatItem[] = [
    {
      icon: <Search strokeWidth={1.5} />,
      value: "2.5%",
      label: "Monthly Earnings Fee",
      highlight: true,
    },
    {
      icon: <Receipt strokeWidth={1.5} />,
      value: "97%",
      label: "Claim Success Rate",
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

  // S3: Solution Cards with Icons
  const solutionsCards: SolutionCard[] = [
    {
      icon: <FastIcon size={32} />,
      title: "Streamlined Billing",
      description: "Simplified revenue management for internal medicine practices",
      gradient: "bg-gradient-to-br from-blue-600 to-blue-800",
    },
    {
      icon: <Database size={32} />,
      title: "Code Mastery",
      description: "Expert knowledge of internal medicine billing codes",
      gradient: "bg-gradient-to-br from-slate-600 to-slate-800",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Specialized Solutions",
      description: "Tailored options for complex internal medicine cases",
      gradient: "bg-gradient-to-br from-cyan-600 to-cyan-800",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "EHR Integration",
      description: "Seamlessly integrates with internal medicine systems",
      gradient: "bg-gradient-to-br from-blue-700 to-indigo-900",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Revenue Boost",
      description: "Enhanced income through accurate comprehensive coding",
      gradient: "bg-gradient-to-br from-teal-600 to-teal-800",
    },
    {
      icon: <CheckCheck size={32} />,
      title: "Error Reduction",
      description: "Minimized mistakes for maximum revenue recovery",
      gradient: "bg-gradient-to-br from-slate-700 to-slate-900",
    },
  ];

  // S6: Sub-Specialty list
  const fieldsSubSpecialties: SubSpecialtyItem[] = [
    {
      icon: <Stethoscope size={22} className="text-white" />,
      label: "General Internal Medicine",
      image: "/medical.jpg",
    },
    {
      icon: <Heart size={22} className="text-white" />,
      label: "Geriatrics",
      image: "/Heart.png",
    },
    {
      icon: <Activity size={22} className="text-white" />,
      label: "Infectious Disease",
      image: "/medical.jpg",
    },
    {
      icon: <Zap size={22} className="text-white" />,
      label: "Rheumatology",
      image: "/medical.jpg",
    },
    {
      icon: <TrendingUp size={22} className="text-white" />,
      label: "Oncology",
      image: "/medical.jpg",
    },
  ];

  return (
    <ServiceTemplate
      // Section 1: Hero
      heroHeaderSmall="Optimizing Internal Medicine Billing Excellence"
      heroTitle="Comprehensive Care, Precise Billing"
      heroDescription="Master the complexities of internal medicine billing with streamlined operations and accurate coding that maximizes your revenue potential."
      heroStats={heroStats}

      // Section 2: Efficient Services
      servicesHeaderSmall="Internal Medicine Billing Brilliance"
      servicesTitle="Efficient Internal Medicine Medical Billing Services"
      servicesParagraphs={[
        "Your internal medicine practice manages countless patient encounters daily. Are billing complexities stealing your focus and resources? Imagine a world where your team concentrates solely on patient care.",
        "At MTS LLC, we specialize in transforming internal medicine billing challenges into seamless revenue management. Our services are tailored to the unique needs of internal medicine practices, ensuring accurate coding and faster reimbursements.",
        "Ready to reclaim your time and financial success? Contact us today to explore how our billing experts can streamline your practice operations.",
      ]}
      servicesMainImage="/Heart.png"

      // Section 3: Solutions
      solutionsHeaderSmall="Where Internal Medicine Meets Precision"
      solutionsTitle="MTS LLC's Internal Medicine Billing & Coding Solutions"
      solutionsCards={solutionsCards}

      // Section 4: HIPAA CTA Banner
      hipaaBannerText="Experience 10+ Years of Internal Medicine Billing Excellence, Backed by HIPAA Compliance"

      // Section 6: Diverse Fields
      fieldsHeaderSmall="Excellence Across Internal Medicine Subspecialties"
      fieldsTitle="Specialized Expertise for Internal Medicine Sub-specialties"
      fieldsDescription="Explore our tailored solutions designed to elevate billing and coding for a range of internal medicine sub-specialties:"
      fieldsDoctorImage="/doctor-hero.png"
      fieldsSubSpecialties={fieldsSubSpecialties}

      // Section 7: Partnership
      partnerHeaderSmall="Empowering Internal Medicine, Perfecting Billing"
      partnerTitle="Partner with MTS LLC for Internal Medicine Billing Excellence"
      partnerParagraphs={[
        "By partnering with MTS LLC, you put your practice's financial success in the hands of proven professionals. Our experts understand the deep complexities of internal medicine billing and coding, enabling them to create tailored solutions that maximize revenue for your practice.",
        "Begin your journey towards improved efficiency and amplified cash flow today. Contact us to discover how our specialized billing services can transform your finances and provide true peace of mind.",
      ]}
      partnerMainImage="/medical-coding.jpeg"
      partnerLogosImage="/partner-logos.png"
    />
  );
}
