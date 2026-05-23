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
  Globe,
  Zap,
  FileText,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export default function OutOfNetworkBillingPage() {
  const heroStats: StatItem[] = [
    {
      icon: <Search strokeWidth={1.5} />,
      value: "2.8%",
      label: "Monthly Service Fee",
      highlight: true,
    },
    {
      icon: <Receipt strokeWidth={1.5} />,
      value: "97%",
      label: "Out-of-Network Recovery",
      highlight: false,
    },
    {
      icon: <CheckCircle strokeWidth={1.5} />,
      value: "100%",
      label: "Balance Billing",
      highlight: true,
    },
    {
      icon: <BrainCircuit strokeWidth={1.5} />,
      value: "HIPAA",
      label: "Secure Process",
      highlight: false,
    },
  ];

  const solutionsCards: SolutionCard[] = [
    {
      icon: <Globe size={32} />,
      title: "OON Claim Submission",
      description: "Expert submission for out-of-network provider reimbursement.",
      gradient: "bg-gradient-to-br from-blue-600 to-blue-800",
    },
    {
      icon: <Receipt size={32} />,
      title: "Balance Billing",
      description: "Clear patient statements for out-of-network payments.",
      gradient: "bg-gradient-to-br from-slate-700 to-slate-900",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Fee Schedule Optimization",
      description: "Custom pricing strategy for OON revenue recovery.",
      gradient: "bg-gradient-to-br from-green-600 to-green-800",
    },
    {
      icon: <Zap size={32} />,
      title: "Payer Negotiation",
      description: "Support for fee disputes and payer communications.",
      gradient: "bg-gradient-to-br from-cyan-600 to-cyan-800",
    },
    {
      icon: <FileText size={32} />,
      title: "Payment Recovery",
      description: "Recover unpaid out-of-network amounts quickly.",
      gradient: "bg-gradient-to-br from-orange-600 to-orange-800",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Claims Accuracy",
      description: "Minimize errors with specialized OON claim workflows.",
      gradient: "bg-gradient-to-br from-red-600 to-red-800",
    },
  ];

  const fieldsSubSpecialties: SubSpecialtyItem[] = [
    {
      icon: <Globe size={22} className="text-white" />,
      label: "Specialist Claims",
      image: "/medical.jpg",
    },
    {
      icon: <FileText size={22} className="text-white" />,
      label: "Balance Billing",
      image: "/medical.jpg",
    },
    {
      icon: <Zap size={22} className="text-white" />,
      label: "Insurance Negotiation",
      image: "/medical.jpg",
    },
    {
      icon: <TrendingUp size={22} className="text-white" />,
      label: "Fee Schedules",
      image: "/medical.jpg",
    },
    {
      icon: <ShieldCheck size={22} className="text-white" />,
      label: "Patient Transparency",
      image: "/medical.jpg",
    },
  ];

  return (
    <ServiceTemplate
      heroHeaderSmall="Out of Network Billing Services"
      heroTitle="Maximize Reimbursement for OON Services"
      heroDescription="Handle out-of-network claims confidently with expert billing, balance billing, and payer negotiation strategies."
      heroStats={heroStats}
      servicesHeaderSmall="Out of Network Expertise"
      servicesTitle="Specialized Billing for Out-of-Network Providers"
      servicesParagraphs={[
        "Out-of-network claims require tailored handling to ensure proper reimbursement and transparency for patients.",
        "Our team manages OON claim submission, balance billing, and payer engagement to recover revenue with minimal friction.",
        "Trust us to support your practice with the right OON workflows, documentation, and patient communication.",
      ]}
      servicesMainImage="/out-of.jpeg"
      solutionsHeaderSmall="OON Billing Solutions"
      solutionsTitle="Our Out-of-Network Billing Capabilities"
      solutionsCards={solutionsCards}
      hipaaBannerText="Secure OON Billing with HIPAA Compliance and Revenue Recovery Expertise"
      fieldsHeaderSmall="OON Support for Specialists"
      fieldsTitle="Out-of-Network Billing Services for Complex Practices"
      fieldsDescription="We support OON billing across specialist services, urgent care, and private providers:"
      fieldsDoctorImage="/doctor-hero.png"
      fieldsSubSpecialties={fieldsSubSpecialties}
      partnerHeaderSmall="Partner with OON Billing Specialists"
      partnerTitle="Recover More with MTS LLC OON Billing"
      partnerParagraphs={[
        "Our OON team helps providers capture fair payment while keeping patients informed and compliant.",
        "Work with experts who understand payer rules, patient billing expectations, and out-of-network revenue recovery.",
      ]}
      partnerMainImage="/medical-coding.jpeg"
      partnerLogosImage="/partner-logos.png"
    />
  );
}
