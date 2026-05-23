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
  ArrowUpRight,
  Zap,
  TrendingUp,
  ShieldCheck,
  Activity,
} from "lucide-react";

export default function ArFollowUpPage() {
  const heroStats: StatItem[] = [
    {
      icon: <Search strokeWidth={1.5} />,
      value: "2.7%",
      label: "Monthly Service Fee",
      highlight: true,
    },
    {
      icon: <Receipt strokeWidth={1.5} />,
      value: "98%",
      label: "A/R Recovery Rate",
      highlight: false,
    },
    {
      icon: <CheckCircle strokeWidth={1.5} />,
      value: "100%",
      label: "Aging Reduction",
      highlight: true,
    },
    {
      icon: <BrainCircuit strokeWidth={1.5} />,
      value: "HIPAA",
      label: "Secure Follow-Up",
      highlight: false,
    },
  ];

  const solutionsCards: SolutionCard[] = [
    {
      icon: <ArrowUpRight size={32} />,
      title: "A/R Aging Management",
      description: "Track and prioritize outstanding balances across all payers.",
      gradient: "bg-gradient-to-br from-blue-600 to-blue-800",
    },
    {
      icon: <Receipt size={32} />,
      title: "Payer Follow-Up",
      description: "Persistent outreach to accelerate claim payments.",
      gradient: "bg-gradient-to-br from-slate-700 to-slate-900",
    },
    {
      icon: <Zap size={32} />,
      title: "Patient Collections",
      description: "Patient-friendly follow-up that preserves relationships.",
      gradient: "bg-gradient-to-br from-green-600 to-green-800",
    },
    {
      icon: <Activity size={32} />,
      title: "Posted Payments",
      description: "Accurate payment posting and reconciliation every cycle.",
      gradient: "bg-gradient-to-br from-cyan-600 to-cyan-800",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Cash Flow Improvement",
      description: "Reduce days in A/R and improve revenue predictability.",
      gradient: "bg-gradient-to-br from-orange-600 to-orange-800",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Denial Recovery",
      description: "Identify and resolve technical denials quickly.",
      gradient: "bg-gradient-to-br from-red-600 to-red-800",
    },
  ];

  const fieldsSubSpecialties: SubSpecialtyItem[] = [
    {
      icon: <ArrowUpRight size={22} className="text-white" />,
      label: "A/R Aging Management",
      image: "/medical.jpg",
    },
    {
      icon: <Zap size={22} className="text-white" />,
      label: "Payer Outreach",
      image: "/medical.jpg",
    },
    {
      icon: <TrendingUp size={22} className="text-white" />,
      label: "Patient Collections",
      image: "/medical.jpg",
    },
    {
      icon: <Activity size={22} className="text-white" />,
      label: "Payment Posting",
      image: "/medical.jpg",
    },
    {
      icon: <ShieldCheck size={22} className="text-white" />,
      label: "Cash Flow Forecasting",
      image: "/medical.jpg",
    },
  ];

  return (
    <ServiceTemplate
      heroHeaderSmall="A/R Follow Up Services"
      heroTitle="Collect More, Faster with Proactive A/R"
      heroDescription="Reduce your accounts receivable days and improve cash flow with dedicated follow-up for payers and patients."
      heroStats={heroStats}
      servicesHeaderSmall="Accounts Receivable Management"
      servicesTitle="Proactive A/R Follow-Up Services"
      servicesParagraphs={[
        "Outstanding receivables slow down your practice. Our dedicated A/R team follows every unpaid claim until it is resolved and paid.",
        "We manage aging balances, appeal payer denials, and support patient payments so your revenue cycle stays healthy.",
        "Partner with us to free up your team and recover more revenue from aged accounts.",
      ]}
      servicesMainImage="/Specialized-Solutions.jpg"
      solutionsHeaderSmall="A/R Follow-Up Capabilities"
      solutionsTitle="Our Accounts Receivable Support"
      solutionsCards={solutionsCards}
      hipaaBannerText="Secure A/R Follow-Up with HIPAA-Compliant Communication"
      fieldsHeaderSmall="A/R Support for Every Practice"
      fieldsTitle="Accounts Receivable Services that Improve Cash Flow"
      fieldsDescription="We support every step of AR recovery, from aging review to patient payment coordination:"
      fieldsDoctorImage="/doctor-hero.png"
      fieldsSubSpecialties={fieldsSubSpecialties}
      partnerHeaderSmall="Partner with A/R Recovery Specialists"
      partnerTitle="Increase Collections with MTS LLC A/R Follow-Up"
      partnerParagraphs={[
        "Our focus on aged receivables helps practices reduce days in A/R and increase cash collections.",
        "We handle payer negotiation, patient follow-up, and accurate reconciliation for reliable results.",
      ]}
      partnerMainImage="/medical-coding.jpeg"
      partnerLogosImage="/partner-logos.png"
    />
  );
}
