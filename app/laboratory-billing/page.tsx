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
  FlaskConical,
  Activity,
  Beaker,
  TrendingUp,
  Zap,
  AlertCircle,
} from "lucide-react";

export default function LaboratoryBillingPage() {
  // S1: Hero Stats
  const heroStats: StatItem[] = [
    {
      icon: <Search strokeWidth={1.5} />,
      value: "2.3%",
      label: "Monthly Service Fee",
      highlight: true,
    },
    {
      icon: <Receipt strokeWidth={1.5} />,
      value: "99%",
      label: "Lab Claim Success",
      highlight: false,
    },
    {
      icon: <CheckCircle strokeWidth={1.5} />,
      value: "CAP/CLIA",
      label: "Full Compliance",
      highlight: true,
    },
    {
      icon: <BrainCircuit strokeWidth={1.5} />,
      value: "HIPAA",
      label: "Data Security",
      highlight: false,
    },
  ];

  // S3: Solution Cards
  const solutionsCards: SolutionCard[] = [
    {
      image: "/Streamlined-Billing.png",
      title: "Streamlined Lab Billing",
      description: "End-to-end laboratory billing management",
    },
    {
      image: "/code.jpg",
      title: "Lab Code Expertise",
      description: "Expert CPT and CLIA code knowledge",
    },
    {
      image: "/Specialized-Solutions.jpg",
      title: "Test-Specific Billing",
      description: "Accurate billing for all laboratory test types",
    },
    {
      image: "/EHR-Integration.jpg",
      title: "LIS Integration",
      description: "Seamless Laboratory Information System connectivity",
    },
    {
      image: "/Revenue-Boost.jpeg",
      title: "Reference Lab Optimization",
      description: "Maximize revenue from reference laboratory services",
    },
    {
      image: "/reduce-error.png",
      title: "Compliance & Accuracy",
      description: "CAP and CLIA compliant billing processes",
    },
  ];

  // S6: Sub-Specialty list
  const fieldsSubSpecialties: SubSpecialtyItem[] = [
    {
      icon: <FlaskConical size={22} className="text-white" />,
      label: "Clinical Laboratory",
      image: "/medical.jpg",
    },
    {
      icon: <Activity size={22} className="text-white" />,
      label: "Anatomical Pathology",
      image: "/medical.jpg",
    },
    {
      icon: <Beaker size={22} className="text-white" />,
      label: "Toxicology Testing",
      image: "/medical.jpg",
    },
    {
      icon: <TrendingUp size={22} className="text-white" />,
      label: "Molecular Diagnostics",
      image: "/medical.jpg",
    },
    {
      icon: <Zap size={22} className="text-white" />,
      label: "Reference Laboratory",
      image: "/medical.jpg",
    },
  ];

  return (
    <ServiceTemplate
      // Section 1: Hero
      heroHeaderSmall="Advanced Laboratory Billing Solutions"
      heroTitle="Precision Lab Billing for Accurate Reimbursements"
      heroDescription="Expert laboratory billing services with deep knowledge of CPT codes, CLIA compliance, and insurance payer requirements for optimal revenue."
      heroStats={heroStats}

      // Section 2: Efficient Services
      servicesHeaderSmall="Laboratory Billing Excellence"
      servicesTitle="Complete Laboratory Billing & Revenue Management"
      servicesParagraphs={[
        "Laboratory operations are complex—managing diverse test codes, insurance requirements, and compliance standards requires specialized expertise. Billing errors directly impact your lab's profitability.",
        "At MTS LLC, we specialize in laboratory billing with deep knowledge of CPT coding, CLIA compliance, and payer-specific requirements. Our team ensures accurate billing for every test and optimizes your revenue cycle.",
        "Partner with us to eliminate billing errors, reduce denials, and maximize reimbursements for your laboratory services.",
      ]}
      servicesMainImage="/code.jpg"

      // Section 3: Solutions
      solutionsHeaderSmall="Laboratory-Specific Billing Solutions"
      solutionsTitle="MTS LLC's Laboratory Billing & Coding Solutions"
      solutionsCards={solutionsCards}

      // Section 4: HIPAA CTA Banner
      hipaaBannerText="Laboratory Billing Excellence with CAP/CLIA Compliance & 10+ Years of Expertise"

      // Section 6: Diverse Fields
      fieldsHeaderSmall="Excellence Across Laboratory Services"
      fieldsTitle="Specialized Billing for All Laboratory Types"
      fieldsDescription="We manage billing for all laboratory service lines and testing specialties:"
      fieldsDoctorImage="/doctor-hero.png"
      fieldsSubSpecialties={fieldsSubSpecialties}

      // Section 7: Partnership
      partnerHeaderSmall="Empowering Laboratories, Perfecting Billing"
      partnerTitle="Partner with MTS LLC for Laboratory Billing Excellence"
      partnerParagraphs={[
        "By partnering with MTS LLC, your laboratory gains access to specialized billing expertise that understands the unique requirements of lab operations. We ensure compliance while maximizing every reimbursement opportunity.",
        "Our dedicated laboratory billing team will optimize your revenue cycle, reduce denials, and improve cash flow. Connect with us today to transform your laboratory's financial performance.",
      ]}
      partnerMainImage="/Partnership.png"
      partnerLogosImage="/partner-logos.png"
    />
  );
}
