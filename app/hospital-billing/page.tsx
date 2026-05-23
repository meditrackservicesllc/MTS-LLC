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
  Building,
  Users,
  TrendingUp,
  AlertCircle,
  Zap,
  Shield,
} from "lucide-react";

export default function HospitalBillingPage() {
  // S1: Hero Stats
  const heroStats: StatItem[] = [
    {
      icon: <Search strokeWidth={1.5} />,
      value: "3.2%",
      label: "Monthly Service Fee",
      highlight: true,
    },
    {
      icon: <Receipt strokeWidth={1.5} />,
      value: "99%",
      label: "Hospital Claim Success",
      highlight: false,
    },
    {
      icon: <CheckCircle strokeWidth={1.5} />,
      value: "Multi-Specialty",
      label: "Complete Coverage",
      highlight: true,
    },
    {
      icon: <BrainCircuit strokeWidth={1.5} />,
      value: "HIPAA",
      label: "Compliance Certified",
      highlight: false,
    },
  ];

  // S3: Solution Cards
  const solutionsCards: SolutionCard[] = [
    {
      image: "/Streamlined-Billing.png",
      title: "Streamlined Hospital Billing",
      description: "Complex multi-department billing management",
    },
    {
      image: "/code.jpg",
      title: "Hospital Code Expertise",
      description: "Inpatient and outpatient coding mastery",
    },
    {
      image: "/Specialized-Solutions.jpg",
      title: "Department-Specific Solutions",
      description: "Customized billing for each hospital department",
    },
    {
      image: "/EHR-Integration.jpg",
      title: "Hospital Systems Integration",
      description: "Seamless EHR/EMR and billing system connectivity",
    },
    {
      image: "/Revenue-Boost.jpeg",
      title: "Revenue Optimization",
      description: "Maximize inpatient and outpatient reimbursements",
    },
    {
      image: "/reduce-error.png",
      title: "Error & Denial Reduction",
      description: "Advanced compliance and appeal processes",
    },
  ];

  // S6: Sub-Specialty list - Hospital Departments
  const fieldsSubSpecialties: SubSpecialtyItem[] = [
    {
      icon: <Building size={22} className="text-white" />,
      label: "Emergency Department",
      image: "/medical.jpg",
    },
    {
      icon: <Users size={22} className="text-white" />,
      label: "Inpatient Services",
      image: "/medical.jpg",
    },
    {
      icon: <Zap size={22} className="text-white" />,
      label: "Surgical Services",
      image: "/medical.jpg",
    },
    {
      icon: <TrendingUp size={22} className="text-white" />,
      label: "ICU/Critical Care",
      image: "/medical.jpg",
    },
    {
      icon: <AlertCircle size={22} className="text-white" />,
      label: "Ancillary Services",
      image: "/medical.jpg",
    },
  ];

  return (
    <ServiceTemplate
      // Section 1: Hero
      heroHeaderSmall="Enterprise-Grade Hospital Billing Solutions"
      heroTitle="Complex Hospital Billing Made Simple"
      heroDescription="Manage multi-specialty hospital billing with precision. Streamline operations across departments and maximize revenue with our comprehensive hospital billing expertise."
      heroStats={heroStats}

      // Section 2: Efficient Services
      servicesHeaderSmall="Hospital Billing Excellence"
      servicesTitle="Complete Hospital Billing & Revenue Cycle Management"
      servicesParagraphs={[
        "Hospitals operate with intricate billing requirements spanning multiple departments, multiple specialties, and complex payer contracts. Managing this complexity internally drains resources and impacts your bottom line.",
        "At MTS LLC, we specialize in enterprise-level hospital billing solutions. Our team handles inpatient and outpatient claims, manages multiple revenue streams, and ensures compliance across all hospital departments.",
        "Partner with us to unlock your hospital's revenue potential. Our experts will streamline your billing operations, reduce denials, and accelerate cash flow across your entire system.",
      ]}
      servicesMainImage="/Heart.png"

      // Section 3: Solutions
      solutionsHeaderSmall="Enterprise Solutions for Hospital Systems"
      solutionsTitle="MTS LLC's Comprehensive Hospital Billing Solutions"
      solutionsCards={solutionsCards}

      // Section 4: HIPAA CTA Banner
      hipaaBannerText="Enterprise Hospital Billing with 10+ Years of Success & Full HIPAA Compliance"

      // Section 6: Diverse Fields
      fieldsHeaderSmall="Excellence Across Hospital Departments"
      fieldsTitle="Specialized Billing for All Hospital Services"
      fieldsDescription="We manage billing complexities across all hospital departments and service lines:"
      fieldsDoctorImage="/doctor-hero.png"
      fieldsSubSpecialties={fieldsSubSpecialties}

      // Section 7: Partnership
      partnerHeaderSmall="Empowering Hospital Operations, Perfecting Billing"
      partnerTitle="Partner with MTS LLC for Hospital Billing Excellence"
      partnerParagraphs={[
        "By partnering with MTS LLC, your hospital gains access to enterprise-grade billing expertise. We handle the complexity so your finance and clinical teams can focus on patient care and strategic initiatives.",
        "Our dedicated team of RCM experts works with your hospital systems to optimize every aspect of your revenue cycle. Let's transform your billing operations and unlock revenue growth today.",
      ]}
      partnerMainImage="/Partnership.png"
      partnerLogosImage="/partner-logos.png"
    />
  );
}
