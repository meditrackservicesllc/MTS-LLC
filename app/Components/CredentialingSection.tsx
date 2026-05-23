"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const tabs = ["Credentialing", "Medical Billing", "EHR"];

const tabContent: Record<
  string,
  {
    title: string;
    description: string;
    image: string;
    features: string[];
    benefits: string[];
  }
> = {
  Credentialing: {
    title: "Credentialing",
    description:
      "Provider credentialing and enrollment services to ensure compliance and reimbursement.",
    image: "/credentialing.jpeg",
    features: [
      "Payer credentialing and re-credentialing",
      "CAQH registration and maintenance",
      "Provider enrollment with insurance networks",
      "Credentialing support and consulting",
    ],
    benefits: [
      "Expedited credentialing processes",
      "Access to a wide network of payers",
      "Reduced administrative burden for providers",
    ],
  },
  "Medical Billing": {
    title: "Medical Billing",
    description:
      "Comprehensive medical billing services to maximize revenue and reduce claim denials.",
    image: "/credentialing.jpeg",
    features: [
      "Accurate claim submission and processing",
      "Claim follow-up and appeals management",
      "Insurance verification and eligibility",
      "Coding compliance and audit support",
    ],
    benefits: [
      "Increased revenue collection",
      "Reduced claim denial rates",
      "Faster payment processing",
      "Improved cash flow",
    ],
  },
  EHR: {
    title: "EHR Integration",
    description:
      "Seamless Electronic Health Record integration for improved patient data management.",
    image: "/credentialing.jpeg",
    features: [
      "EHR system implementation and training",
      "Data migration and integration",
      "Customized templates and workflows",
      "Ongoing technical support",
    ],
    benefits: [
      "Enhanced patient care coordination",
      "Reduced documentation time",
      "Better data accuracy",
      "Improved patient outcomes",
    ],
  },
};

export default function CredentialingSection() {
  const [activeTab, setActiveTab] = useState("Credentialing");
  const content = tabContent[activeTab];

  return (
    <section className="py-24 px-6 md:px-16 bg-[#f5f7fb]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-lg text-slate-600">
            Empowering Providers with Full-Service Healthcare Solutions to
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#153B6D]">
            Optimize Their Practice
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition border cursor-pointer
                ${
                  activeTab === tab
                    ? "bg-[#2b6cb0] text-white border-[#2b6cb0]"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Content with Animation */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left Image */}
          <div className="relative w-full h-[320px] md:h-[420px]">
            <Image
              src={content.image}
              alt={content.title}
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          {/* Right Text */}
          <div>
            <h3 className="text-3xl font-bold text-[#153B6D] mb-4">
              {content.title}
            </h3>

            <p className="text-slate-600 mb-6">{content.description}</p>

            <div className="space-y-6">
              {/* Features */}
              <div>
                <h4 className="font-semibold text-[#153B6D] mb-3">Features:</h4>
                <ul className="space-y-2 text-slate-600">
                  {content.features.map((feature, idx) => (
                    <li key={idx}>▪ {feature}</li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="font-semibold text-[#153B6D] mb-3">Benefits:</h4>
                <ul className="space-y-2 text-slate-600">
                  {content.benefits.map((benefit, idx) => (
                    <li key={idx}>▪ {benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
