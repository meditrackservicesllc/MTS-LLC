import ServiceTemplate from "@/app/Components/ServiceTemplate";
import {
  StatItem,
  SolutionCard,
  SubSpecialtyItem,
} from "@/app/Components/ServiceTemplate";
import {
  Stethoscope,
  CheckCircle,
  Shield,
  TrendingUp,
  Zap,
  Database,
  ShieldCheck,
  BarChart3,
  Users,
  CheckCheck,
  Heart,
  Baby,
} from "lucide-react";

export default function FamilyMedicinePage() {
  const heroStats: StatItem[] = [
    {
      icon: <Stethoscope strokeWidth={1.5} />,
      value: "98%",
      label: "Primary Care Claim Success",
      highlight: true,
    },
    {
      icon: <CheckCircle strokeWidth={1.5} />,
      value: "99%",
      label: "Insurance Network Approved",
      highlight: false,
    },
    {
      icon: <Shield strokeWidth={1.5} />,
      value: "2.4%",
      label: "Monthly Earnings Fee",
      highlight: true,
    },
    {
      icon: <TrendingUp strokeWidth={1.5} />,
      value: "14 Days",
      label: "Avg Reimbursement Time",
      highlight: false,
    },
  ];

  const solutionsCards: SolutionCard[] = [
    {
      icon: <Zap size={32} />,
      title: "Preventive Care Coding",
      description: "Expert wellness and preventive service billing",
      gradient: "bg-gradient-to-br from-green-600 to-green-800",
    },
    {
      icon: <Database size={32} />,
      title: "Chronic Disease Management",
      description: "Specialized chronic care billing expertise",
      gradient: "bg-gradient-to-br from-emerald-700 to-emerald-900",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Primary Care Networks",
      description: "Comprehensive insurance panel management",
      gradient: "bg-gradient-to-br from-teal-600 to-teal-800",
    },
    {
      icon: <BarChart3 size={32} />,
      title: "E/M Code Optimization",
      description: "Maximized evaluation & management billing",
      gradient: "bg-gradient-to-br from-green-700 to-slate-900",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Revenue Maximization",
      description: "Enhanced income through accurate billing",
      gradient: "bg-gradient-to-br from-lime-600 to-lime-800",
    },
    {
      icon: <CheckCheck size={32} />,
      title: "Denial Management",
      description: "Reduced rejections and faster payments",
      gradient: "bg-gradient-to-br from-slate-700 to-slate-900",
    },
  ];

  const fieldsSubSpecialties: SubSpecialtyItem[] = [
    {
      icon: <Heart size={22} className="text-white" />,
      label: "Adult Family Medicine",
      image: "/medical.jpg",
    },
    {
      icon: <Baby size={22} className="text-white" />,
      label: "Pediatric Care",
      image: "/medical.jpg",
    },
    {
      icon: <Users size={22} className="text-white" />,
      label: "Preventive Health",
      image: "/medical.jpg",
    },
    {
      icon: <Stethoscope size={22} className="text-white" />,
      label: "Chronic Conditions",
      image: "/medical.jpg",
    },
    {
      icon: <CheckCircle size={22} className="text-white" />,
      label: "Women's Health",
      image: "/medical.jpg",
    },
  ];

  return (
    <ServiceTemplate
      heroHeaderSmall="Family Medicine Billing Excellence"
      heroTitle="Optimize Primary Care Revenue"
      heroDescription="Specialized billing solutions for family medicine practices handling preventive care and chronic disease management."
      heroStats={heroStats}

      servicesHeaderSmall="Family Medicine Billing Specialization"
      servicesTitle="Comprehensive Family Medicine Billing Services"
      servicesParagraphs={[
        "Family medicine practices manage complex billing for preventive care, chronic disease, and diverse patient populations. Let us handle this complexity.",
        "At MTS LLC, we provide comprehensive billing services designed specifically for family medicine providers, ensuring accurate E/M coding and maximum reimbursement.",
        "Partner with us to optimize your revenue while maintaining full compliance with all primary care regulations.",
      ]}
      servicesMainImage="/Streamlined-Billing.png"

      solutionsHeaderSmall="Where Family Medicine Expertise Meets Excellence"
      solutionsTitle="MTS LLC's Family Medicine Billing Solutions"
      solutionsCards={solutionsCards}

      hipaaBannerText="Expert Family Medicine Billing with Full HIPAA & Primary Care Compliance"

      fieldsHeaderSmall="Excellence Across Family Medicine Services"
      fieldsTitle="Specialized Expertise for Family Medicine Care Types"
      fieldsDescription="Tailored billing solutions for every family medicine service category:"
      fieldsDoctorImage="/doctor-hero.png"
      fieldsSubSpecialties={fieldsSubSpecialties}

      partnerHeaderSmall="Partnering with Family Medicine Providers"
      partnerTitle="Partner with MTS LLC for Family Medicine Billing Success"
      partnerParagraphs={[
        "Your family medicine practice's financial success depends on accurate billing and effective insurance management. MTS LLC brings years of specialized expertise.",
        "Let our team handle preventive care coding, chronic disease management, and insurance credentialing. Focus on patient care while we optimize your revenue.",
      ]}
           partnerMainImage="/medical-coding.jpeg"

      partnerLogosImage="/partner-logos.png"
    />
  );
}