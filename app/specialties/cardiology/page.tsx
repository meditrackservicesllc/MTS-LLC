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
  HeartPulse,
  Stethoscope,
  Activity,
  Zap,
  Heart,
  ShieldCheck,
  TrendingUp,
  Clock,
  Database,
  BarChart3,
  CheckCheck,
  Shield,
} from "lucide-react";

export default function CardiologyPage() {
  // S1: Hero Stats
  const heroStats: StatItem[] = [
    {
      icon: <Search strokeWidth={1.5} />,
      value: "2.9%",
      label: "Monthly Earnings Fee",
      highlight: true,
    },
    {
      icon: <Receipt strokeWidth={1.5} />,
      value: "99%",
      label: "Cardio Claim Success",
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
      icon: <Zap size={32} />,
      title: "Streamlined Billing",
      description: "Simplified revenue management for cardiology",
      gradient: "bg-gradient-to-br from-red-600 to-red-800",
    },
    {
      icon: <Database size={32} />,
      title: "Code Mastery",
      description: "Expertise in cardiology billing codes",
      gradient: "bg-gradient-to-br from-rose-700 to-rose-900",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Specialized Solutions",
      description: "Customized options for cardiology sub-specialties",
      gradient: "bg-gradient-to-br from-amber-600 to-amber-800",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "EHR Integration",
      description: "Seamlessly blends with cardiology EHR systems",
      gradient: "bg-gradient-to-br from-red-700 to-slate-900",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Revenue Boost",
      description: "Enhanced income through accurate billing",
      gradient: "bg-gradient-to-br from-orange-600 to-orange-800",
    },
    {
      icon: <CheckCheck size={32} />,
      title: "Error Reduction",
      description: "Minimized mistakes for increased revenue",
      gradient: "bg-gradient-to-br from-stone-700 to-stone-900",
    },
  ];



  // S6: Sub-Specialty list
  const fieldsSubSpecialties: SubSpecialtyItem[] = [
    {
      icon: <HeartPulse size={22} className="text-white" />,
      label: "Cardiologists",
      image: "/Cardiologists.jpg",
    },
    {
      icon: <Stethoscope size={22} className="text-white" />,
      label: "Interventional Cardiologists",
      image: "/Interventional-Cardiologists.jpg",
    },
    {
      icon: <Zap size={22} className="text-white" />,
      label: "Electrophysiologists",
      image: "/Electrophysiologists.jpg",
    },
    {
      icon: <Activity size={22} className="text-white" />,
      label: "Cardiovascular Surgeons",
      image: "/Cardiovascular-Surgeons.jpg",
    },
    {
      icon: <Heart size={22} className="text-white" />,
      label: "Heart Failure Specialists",
      image: "/Heart-Failure-Specialists.jpg",
    },
  ];

  return (
    <ServiceTemplate
      // Section 1: Hero
      heroHeaderSmall="Enhancing Cardiology Billing Precision"
      heroTitle="Precision for Exceptional Outcomes"
      heroDescription="Experience precision in cardiology billing for boosted revenue through streamlined operations and accurate coding."
      heroStats={heroStats}

      // Section 2: Efficient Services
      servicesHeaderSmall="Cardiology Billing Brilliance"
      servicesTitle="Efficient Cardiology Medical Billing Services"
      servicesParagraphs={[
        "You're in the business of saving lives. But are billing complexities choking your time and resources? Imagine a world where your focus remains solely on your patients.",
        "At MTS LLC, we specialize in transforming billing headaches into seamless revenue management. Our services are tailored to your unique practice, ensuring accurate coding and faster reimbursements.",
        "Are you ready to regain control of your time and financial well-being? Reach out to us today to explore how our experts can streamline your processes.",
      ]}
      servicesMainImage="/Heart.png"

      // Section 3: Solutions
      solutionsHeaderSmall="Where Billing Precision Meets Insight"
      solutionsTitle="MTS LLC's Exceptional Cardiology Billing & Coding Solutions"
      solutionsCards={solutionsCards}

      // Section 4: HIPAA CTA Banner
      hipaaBannerText="Experience 10+ Years of Cardiology Billing Excellence, Backed by HIPAA Compliance"



      // Section 6: Diverse Fields
      fieldsHeaderSmall="Excellence Across Cardiology Specialties"
      fieldsTitle="Specialized Expertise for Diverse Cardiology Fields"
      fieldsDescription="Explore our tailored solutions designed to elevate billing and coding for a range of sub-specialties:"
      fieldsDoctorImage="/doctor-hero.png"
      fieldsSubSpecialties={fieldsSubSpecialties}

      // Section 7: Partnership
      partnerHeaderSmall="Empowering Cardiology, Perfecting Billing"
      partnerTitle="Partner with MTS LLC for Cardiology Billing Excellence"
      partnerParagraphs={[
        "By partnering with MTS LLC, you put your financial success in the hands of proven professionals. Our experts understand the deep complexities of medical billing and coding, enabling them to create tailored solutions that maximize revenue potential for your practice.",
        "Begin your journey towards improved efficiency and amplified cash flow today. Contact us now to explore how our specialized billing services can transform your finances and provide true peace of mind.",
      ]}
      partnerMainImage="/medical.jpg"
      
      // NEW: Partner Logos (Fixed the "Missing Properties" error)
      partnerLogosImage="/partner-logos.png" 
    />
  );
}