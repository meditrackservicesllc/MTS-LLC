import ServiceTemplate from "@/app/Components/ServiceTemplate";
import {
  StatItem,
  SolutionCard,
  SubSpecialtyItem,
} from "@/app/Components/ServiceTemplate";
import {
  Search,
  Globe,
  Megaphone,
  Code,
  Smartphone,
  BarChart3,
  Users,
  Target,
  Zap,
  ShieldCheck,
} from "lucide-react";

export default function MarketingWebServicesPage() {
  const heroStats: StatItem[] = [
    {
      icon: <Search strokeWidth={1.5} />,
      value: "150%",
      label: "Average Traffic Increase",
      highlight: true,
    },
    {
      icon: <Globe strokeWidth={1.5} />,
      value: "HIPAA",
      label: "Compliant Websites",
      highlight: false,
    },
    {
      icon: <Megaphone strokeWidth={1.5} />,
      value: "300%",
      label: "Lead Generation Boost",
      highlight: true,
    },
    {
      icon: <Code strokeWidth={1.5} />,
      value: "24/7",
      label: "Website Support",
      highlight: false,
    },
  ];

  const solutionsCards: SolutionCard[] = [
    {
      icon: <Search size={32} className="text-white" />,
      image: "/Revenue-Boost.jpeg",
      title: "Digital Marketing Strategy",
      description: "Comprehensive digital marketing solutions tailored for healthcare practices.",
    },
    {
      icon: <Megaphone size={32} className="text-white" />,
      image: "/Streamlined-Billing.png",
      title: "Web Development Services",
      description: "Modern, responsive websites designed specifically for medical practices.",
    },
    {
      icon: <Target size={32} className="text-white" />,
      image: "/Specialized-Solutions.jpg",
      title: "Patient Engagement",
      description: "Tools and strategies to improve patient interaction and retention.",
    },
  ];

  const fieldsSubSpecialties: SubSpecialtyItem[] = [
    {
      icon: <Search size={22} className="text-white" />,
      label: "SEO Services",
      image: "/coding-marketing-services.png",
    },
    {
      icon: <Megaphone size={22} className="text-white" />,
      label: "Social Media Marketing",
      image: "/coding-marketing-services.png",
    },
    {
      icon: <BarChart3 size={22} className="text-white" />,
      label: "Content Marketing",
      image: "/coding-marketing-services.png",
    },
    {
      icon: <Target size={22} className="text-white" />,
      label: "PPC Advertising",
      image: "/coding-marketing-services.png",
    },
    {
      icon: <Code size={22} className="text-white" />,
      label: "Web Design",
      image: "/coding-marketing-services.png",
    },
    {
      icon: <Smartphone size={22} className="text-white" />,
      label: "Mobile App Development",
      image: "/coding-marketing-services.png",
    },
  ];

  return (
    <ServiceTemplate
      heroHeaderSmall="Digital Marketing & Web Services"
      heroTitle="Grow Your Practice Online"
      heroDescription="Transform your healthcare practice with comprehensive digital marketing and web development services. From SEO optimization to custom website design, we help you attract more patients and build a strong online presence."
      heroStats={heroStats}
      servicesHeaderSmall="Marketing & Web Services"
      servicesTitle="Complete Digital Solutions for Healthcare Practices"
      servicesParagraphs={[
        "Our digital marketing and web development team specializes in healthcare-specific solutions that drive patient acquisition and improve online visibility.",
        "We combine cutting-edge technology with proven marketing strategies to help your practice stand out in a competitive digital landscape.",
        "Let our experts handle your online presence so you can focus on providing exceptional patient care.",
      ]}
      servicesMainImage="/Streamlined-Billing.png"
      solutionsHeaderSmall="Digital Solutions Built for Healthcare"
      solutionsTitle="Our Marketing & Web Capabilities"
      solutionsCards={solutionsCards}
      hipaaBannerText="HIPAA-Compliant Digital Solutions with Proven Results"
      fieldsHeaderSmall="Digital Services for Every Practice"
      fieldsTitle="Specialized Digital Marketing & Web Services"
      fieldsDescription="We provide comprehensive digital solutions for all aspects of your online presence:"
      fieldsDoctorImage="/doctor-hero.png"
      fieldsSubSpecialties={fieldsSubSpecialties}
      partnerHeaderSmall="Partner with Digital Marketing Experts"
      partnerTitle="Enhance Your Online Presence with MTS LLC"
      partnerParagraphs={[
        "Our team helps practices increase online visibility, attract new patients, and build lasting digital relationships.",
        "With expert digital marketing and web development partners, your practice benefits from modern technology and proven strategies.",
      ]}
      partnerMainImage="/medical-coding.jpeg"
      partnerLogosImage="/Partnership.png"
    />
  );
}