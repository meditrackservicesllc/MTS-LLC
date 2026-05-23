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
  UserPlus,
  Briefcase,
  TrendingUp,
  Zap,
  Heart,
  AlertCircle,
} from "lucide-react";

export default function PhysicianBillingPage() {
  // S1: Hero Stats
  const heroStats: StatItem[] = [
    {
      icon: <Search strokeWidth={1.5} />,
      value: "2.5%",
      label: "Physician Fee",
      highlight: true,
    },
    {
      icon: <Receipt strokeWidth={1.5} />,
      value: "98%",
      label: "Claim Success Rate",
      highlight: false,
    },
    {
      icon: <CheckCircle strokeWidth={1.5} />,
      value: "100%",
      label: "Expertise Guarantee",
      highlight: true,
    },
    {
      icon: <BrainCircuit strokeWidth={1.5} />,
      value: "HIPAA",
      label: "Fully Compliant",
      highlight: false,
    },
  ];

  // S3: Solution Cards
  const solutionsCards: SolutionCard[] = [
    {
      image: "/Streamlined-Billing.png",
      title: "Streamlined Physician Billing",
      description: "Solo to multi-specialty practice billing management",
    },
    {
      image: "/code.jpg",
      title: "Physician Code Mastery",
      description: "Expert evaluation & management and procedure coding",
    },
    {
      image: "/Specialized-Solutions.jpg",
      title: "Practice-Specific Solutions",
      description: "Customized billing for any medical specialty",
    },
    {
      image: "/EHR-Integration.jpg",
      title: "EHR System Integration",
      description: "Seamless integration with your existing practice systems",
    },
    {
      image: "/Revenue-Boost.jpeg",
      title: "Revenue Maximization",
      description: "Increase collections and optimize reimbursements",
    },
    {
      image: "/reduce-error.png",
      title: "Denial Prevention",
      description: "Proactive compliance to minimize claim rejections",
    },
  ];

  // S6: Sub-Specialty list
  const fieldsSubSpecialties: SubSpecialtyItem[] = [
    {
      icon: <UserPlus size={22} className="text-white" />,
      label: "Solo Practices",
      image: "/medical.jpg",
    },
    {
      icon: <Briefcase size={22} className="text-white" />,
      label: "Group Practices",
      image: "/medical.jpg",
    },
    {
      icon: <TrendingUp size={22} className="text-white" />,
      label: "Multi-Specialty Groups",
      image: "/medical.jpg",
    },
    {
      icon: <Zap size={22} className="text-white" />,
      label: "Urgent Care Centers",
      image: "/medical.jpg",
    },
    {
      icon: <Heart size={22} className="text-white" />,
      label: "Community Health Centers",
      image: "/medical.jpg",
    },
  ];

  return (
    <ServiceTemplate
      // Section 1: Hero
      heroHeaderSmall="Physician Practice Billing Solutions"
      heroTitle="Focus on Patients, We Handle Billing"
      heroDescription="Comprehensive physician billing services for solo and group practices. Streamline your revenue cycle and maximize reimbursements with expert billing support."
      heroStats={heroStats}

      // Section 2: Efficient Services
      servicesHeaderSmall="Physician Billing Excellence"
      servicesTitle="Complete Billing Services for Medical Practices"
      servicesParagraphs={[
        "Physicians and medical practices deserve to focus on patient care, not billing complexities. Managing claims, denials, and payer relations takes valuable time away from what matters most.",
        "At MTS LLC, we handle your complete billing needs—from claim submission to reimbursement. Our expertise spans all medical specialties and practice types, ensuring accurate coding and optimal payments.",
        "Partner with us to reclaim your time and increase your practice profitability. Let our billing experts transform your revenue cycle.",
      ]}
      servicesMainImage="/Cardiologists.jpg"

      // Section 3: Solutions
      solutionsHeaderSmall="Tailored Solutions for Physician Practices"
      solutionsTitle="MTS LLC's Physician Billing & Revenue Solutions"
      solutionsCards={solutionsCards}

      // Section 4: HIPAA CTA Banner
      hipaaBannerText="Physician Billing Excellence with 10+ Years Experience & Complete HIPAA Compliance"

      // Section 6: Diverse Fields
      fieldsHeaderSmall="Supporting All Practice Types"
      fieldsTitle="Billing Solutions for Every Practice Model"
      fieldsDescription="From solo practitioners to large group practices, we serve all physician billing needs:"
      fieldsDoctorImage="/doctor-hero.png"
      fieldsSubSpecialties={fieldsSubSpecialties}

      // Section 7: Partnership
      partnerHeaderSmall="Empowering Physician Practices, Perfecting Billing"
      partnerTitle="Partner with MTS LLC for Physician Billing Excellence"
      partnerParagraphs={[
        "By partnering with MTS LLC, you gain a dedicated billing team committed to your practice's financial success. We handle all billing complexities while you focus on delivering exceptional patient care.",
        "Our team of RCM experts will work with your practice to optimize revenue, reduce administrative burden, and increase profitability. Contact us today to transform your practice's financial health.",
      ]}
      partnerMainImage="/Partnership.png"
      partnerLogosImage="/partner-logos.png"
    />
  );
}
