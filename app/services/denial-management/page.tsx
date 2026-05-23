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
  ShieldAlert,
  Zap,
  TrendingUp,
  Activity,
  ShieldCheck,
} from "lucide-react";

export default function DenialManagementPage() {
  const heroStats: StatItem[] = [
    {
      icon: <Search strokeWidth={1.5} />,
      value: "2.5%",
      label: "Monthly Service Fee",
      highlight: true,
    },
    {
      icon: <Receipt strokeWidth={1.5} />,
      value: "95%",
      label: "Denial Recovery Rate",
      highlight: false,
    },
    {
      icon: <CheckCircle strokeWidth={1.5} />,
      value: "100%",
      label: "Appeals Support",
      highlight: true,
    },
    {
      icon: <BrainCircuit strokeWidth={1.5} />,
      value: "HIPAA",
      label: "Secure Workflow",
      highlight: false,
    },
  ];

  const solutionsCards: SolutionCard[] = [
    {
      icon: <ShieldAlert size={32} />,
      title: "Denial Review",
      description: "Analyze denials to identify root causes and trends.",
      gradient: "bg-gradient-to-br from-blue-600 to-blue-800",
    },
    {
      icon: <Receipt size={32} />,
      title: "Appeals Management",
      description: "Prepare and submit appeals with strong clinical support.",
      gradient: "bg-gradient-to-br from-slate-700 to-slate-900",
    },
    {
      icon: <Zap size={32} />,
      title: "Prevention Strategies",
      description: "Reduce future denials by fixing billing workflows.",
      gradient: "bg-gradient-to-br from-green-600 to-green-800",
    },
    {
      icon: <Activity size={32} />,
      title: "Payer Engagement",
      description: "Coordinate with payers to resolve rejected claims faster.",
      gradient: "bg-gradient-to-br from-cyan-600 to-cyan-800",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Recovered Revenue",
      description: "Recover lost revenue from denied and underpaid claims.",
      gradient: "bg-gradient-to-br from-orange-600 to-orange-800",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Compliance Control",
      description: "Maintain compliance while appealing claim decisions.",
      gradient: "bg-gradient-to-br from-red-600 to-red-800",
    },
  ];

  const fieldsSubSpecialties: SubSpecialtyItem[] = [
    {
      icon: <ShieldAlert size={22} className="text-white" />,
      label: "Claim Appeals",
      image: "/medical.jpg",
    },
    {
      icon: <Zap size={22} className="text-white" />,
      label: "Denial Prevention",
      image: "/medical.jpg",
    },
    {
      icon: <Activity size={22} className="text-white" />,
      label: "Payment Posting",
      image: "/medical.jpg",
    },
    {
      icon: <TrendingUp size={22} className="text-white" />,
      label: "Root Cause Analysis",
      image: "/medical.jpg",
    },
    {
      icon: <ShieldCheck size={22} className="text-white" />,
      label: "Provider Education",
      image: "/medical.jpg",
    },
  ];

  return (
    <ServiceTemplate
      heroHeaderSmall="Denial Management Services"
      heroTitle="Recover Denials and Prevent Future Rejections"
      heroDescription="Stop losing revenue to denied claims. Our denial management team recovers payments while improving billing workflows to prevent repeat errors."
      heroStats={heroStats}
      servicesHeaderSmall="Denial Resolution Expertise"
      servicesTitle="Complete Denial Management & Appeal Services"
      servicesParagraphs={[
        "Denied claims are a major source of lost revenue. We review denials, appeal them effectively, and correct the underlying issues causing denials.",
        "Our team works with your billing and clinical staff to ensure claims are submitted with the right documentation and compliance support.",
        "Partner with us to lower denial rates, recover revenue, and improve long-term claim performance.",
      ]}
      servicesMainImage="/reduce-error.png"
      solutionsHeaderSmall="Denial Services Designed for Results"
      solutionsTitle="Our Denial Management Capabilities"
      solutionsCards={solutionsCards}
      hipaaBannerText="Secure Denial Management with HIPAA-Compliant Appeal Workflows"
      fieldsHeaderSmall="Denial Support for All Claim Types"
      fieldsTitle="Specialized Denial and Appeal Services"
      fieldsDescription="We support denial resolution across every payer and specialty service line:"
      fieldsDoctorImage="/doctor-hero.png"
      fieldsSubSpecialties={fieldsSubSpecialties}
      partnerHeaderSmall="Partner with Denial Recovery Experts"
      partnerTitle="Improve Collections with MTS LLC Denial Management"
      partnerParagraphs={[
        "Our denial experts recover eligible revenue while teaching your practice to avoid recurring claim issues.",
        "With proactive denial prevention and appeal management, your revenue cycle becomes smoother and more predictable.",
      ]}
      partnerMainImage="/medical-coding.jpeg"
      partnerLogosImage="/partner-logos.png"
    />
  );
}
