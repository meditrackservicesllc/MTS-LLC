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
  Brain,
  Zap,
  Activity,
  TrendingUp,
  Heart,
  ShieldCheck,
  Database,
  BarChart3,
  CheckCheck,
} from "lucide-react";

export default function NeurologyPage() {
  // S1: Hero Stats
  const heroStats: StatItem[] = [
    {
      icon: <Search strokeWidth={1.5} />,
      value: "2.7%",
      label: "Monthly Earnings Fee",
      highlight: true,
    },
    {
      icon: <Receipt strokeWidth={1.5} />,
      value: "97%",
      label: "Neurology Claim Success",
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
      gradient: "bg-gradient-to-br from-indigo-600 to-indigo-800",
      title: "Streamlined Billing",
      description: "Simplified revenue management for neurology practices",
    },
    {
      icon: <Database size={32} />,
      gradient: "bg-gradient-to-br from-slate-700 to-slate-900",
      title: "Code Mastery",
      description: "Expert neurological and procedural coding",
    },
    {
      icon: <ShieldCheck size={32} />,
      gradient: "bg-gradient-to-br from-purple-700 to-purple-900",
      title: "Specialized Solutions",
      description: "Customized billing for complex neurological cases",
    },
    {
      icon: <BarChart3 size={32} />,
      gradient: "bg-gradient-to-br from-indigo-700 to-slate-900",
      title: "EHR Integration",
      description: "Seamless integration with neurology systems",
    },
    {
      icon: <TrendingUp size={32} />,
      gradient: "bg-gradient-to-br from-purple-600 to-purple-800",
      title: "Revenue Boost",
      description: "Enhanced revenue through accurate neurological coding",
    },
    {
      icon: <CheckCheck size={32} />,
      gradient: "bg-gradient-to-br from-slate-700 to-slate-900",
      title: "Error Reduction",
      description: "Minimize coding mistakes and claim denials",
    },
  ];

  // S6: Sub-Specialty list
  const fieldsSubSpecialties: SubSpecialtyItem[] = [
    {
      icon: <Brain size={22} className="text-white" />,
      label: "General Neurology",
      image: "/medical.jpg",
    },
    {
      icon: <Zap size={22} className="text-white" />,
      label: "Neurosurgery",
      image: "/medical.jpg",
    },
    {
      icon: <Activity size={22} className="text-white" />,
      label: "Neurodiagnostics",
      image: "/medical.jpg",
    },
    {
      icon: <TrendingUp size={22} className="text-white" />,
      label: "Movement Disorders",
      image: "/medical.jpg",
    },
    {
      icon: <Heart size={22} className="text-white" />,
      label: "Epilepsy Specialty",
      image: "/medical.jpg",
    },
  ];

  return (
    <ServiceTemplate
      // Section 1: Hero
      heroHeaderSmall="Enhancing Neurology Billing Precision"
      heroTitle="Brain & Nervous System Coding Excellence"
      heroDescription="Master neurology billing complexities with streamlined operations and expert neurological coding that maximizes your practice revenue."
      heroStats={heroStats}

      // Section 2: Efficient Services
      servicesHeaderSmall="Neurology Billing Brilliance"
      servicesTitle="Efficient Neurology Medical Billing Services"
      servicesParagraphs={[
        "Neurology practices handle complex diagnostic procedures and specialized treatments. Your focus should be on patient neurological care, not billing complexities.",
        "At MTS LLC, we specialize in neurology billing, understanding the intricacies of neurological procedures, EEGs, EMGs, and specialized treatments. Our expertise ensures accurate claims and optimal reimbursements.",
        "Ready to transform your neurology practice's financial performance? Contact us today to explore how our specialized billing services can maximize your revenue.",
      ]}
      servicesMainImage="/EHR-Integration.jpg"

      // Section 3: Solutions
      solutionsHeaderSmall="Where Neurology Meets Billing Expertise"
      solutionsTitle="MTS LLC's Neurology Billing & Coding Solutions"
      solutionsCards={solutionsCards}

      // Section 4: HIPAA CTA Banner
      hipaaBannerText="Experience 10+ Years of Neurology Billing Excellence, Backed by HIPAA Compliance"

      // Section 6: Diverse Fields
      fieldsHeaderSmall="Excellence Across Neurology Specialties"
      fieldsTitle="Specialized Expertise for Diverse Neurology Fields"
      fieldsDescription="Explore our tailored solutions designed for various neurological specialties and procedures:"
      fieldsDoctorImage="/doctor-hero.png"
      fieldsSubSpecialties={fieldsSubSpecialties}

      // Section 7: Partnership
      partnerHeaderSmall="Empowering Neurology, Perfecting Billing"
      partnerTitle="Partner with MTS LLC for Neurology Billing Excellence"
      partnerParagraphs={[
        "By partnering with MTS LLC, you ensure your neurology practice receives expert billing support from professionals who understand complex neurological coding. We create customized solutions that optimize revenue and ensure compliance.",
        "Begin your journey towards improved efficiency and amplified profitability today. Contact us to discover how our neurology billing expertise can transform your practice.",
      ]}
      partnerMainImage="/medical-coding.jpeg"
      partnerLogosImage="/partner-logos.png"
    />
  );
}
