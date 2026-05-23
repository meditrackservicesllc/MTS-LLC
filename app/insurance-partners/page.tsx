import ContentTemplate from "@/app/Components/ContentTemplate";
import { Handshake, Globe, TrendingUp, Users } from "lucide-react";

export default function InsurancePartnersPage() {
  return (
    <ContentTemplate
      pageCategorySmall="Resources"
      pageTitle="Insurance Partners"
      pageSubtitle="Building strong payer relationships to support consistent provider reimbursement."
      pageDescription="MTS LLC works with a broad network of insurance partners to help practices secure contracts and submit claims efficiently."
      featuredImage="/Partnership.png"
      statCards={[
        { value: "200+", label: "Insurance Partners Nationwide", icon: <Handshake className="w-8 h-8 text-[#99C050]" /> },
        { value: "50+", label: "Major Payer Relationships", icon: <Globe className="w-8 h-8 text-[#99C050]" /> },
        { value: "95%", label: "First-Pass Claim Acceptance Rate", icon: <TrendingUp className="w-8 h-8 text-[#99C050]" /> },
        { value: "500+", label: "Practices Connected to Payers", icon: <Users className="w-8 h-8 text-[#99C050]" /> },
      ]}
      keyBenefits={[
        {
          title: "Broad Payer Network",
          description: "Relationships with major national insurers and regional plans supporting practice growth across markets.",
        },
        {
          title: "Payer Expertise",
          description: "Deep knowledge of payer policies, requirements, and submission processes for faster approvals.",
        },
        {
          title: "Credentialing Support",
          description: "Experienced navigation of payer credentialing to get you on panels quickly and efficiently.",
        },
        {
          title: "Claims Advocacy",
          description: "Direct relationships with payer liaison teams enabling rapid resolution of claim issues.",
        },
      ]}
      sections={[
        {
          heading: "Trusted Payer Relationships",
          paragraphs: [
            "Our team maintains experience with national and regional payers to support strong billing performance across the network.",
            "We help providers navigate payer requirements, contract terms, and submission processes with clarity and confidence.",
            "Our established relationships and expertise mean your practice gets faster panel approval, quicker claim processing, and better claim success rates.",
          ],
          bullets: [
            "Commercial insurers - Blue Cross, Aetna, UnitedHealth, Cigna, Humana, and others",
            "Government payers - Medicare, Medicaid, and state-specific programs",
            "Regional insurers and specialty networks",
            "Credentialing and panel access support",
            "Claims follow-up and payer communication",
            "Contract negotiation and verification assistance",
          ],
        },
        {
          heading: "How Our Payer Relationships Benefit Your Practice",
          paragraphs: [
            "Our insurance partner support ensures providers are connected to the right payers and receive timely reimbursement for services rendered.",
            "We assist with payer enrollment, contract verification, and ongoing claim resolution to maintain revenue stability.",
            "Practices benefit from faster credentialing, better claim success rates, and direct escalation paths for problem resolution.",
          ],
          bullets: [
            "Faster payer credentialing with direct relationships",
            "Higher first-pass claim acceptance rates",
            "Quicker resolution of claims issues and denials",
            "Access to payer updates and policy changes",
            "Direct liaison support for contract questions",
            "Better payer communication and transparency",
          ],
        },
        {
          heading: "Payer Coverage Areas",
          paragraphs: [
            "Our network spans national and regional payers, giving your practice access to comprehensive coverage.",
            "We maintain relationships across all major market segments and geographic regions.",
          ],
          bullets: [
            "National commercial carriers with all state participation",
            "Medicare and Medicaid programs in all states",
            "Regional health plans and local insurers",
            "Specialty networks for specific medical fields",
            "Workers' compensation and auto insurance programs",
            "Emerging payers and health plans in growing markets",
          ],
        },
      ]}
      highlightCards={[
        {
          title: "Network Support",
          description: "A broad payer network that supports diverse provider needs and geographic expansion.",
        },
        {
          title: "Payer Communication",
          description: "Experienced coordination with insurers to resolve issues quickly and maintain relationships.",
        },
        {
          title: "Credentialing Excellence",
          description: "Leveraging payer relationships for faster panel approval and less administrative burden.",
        },
        {
          title: "Claims Advocacy",
          description: "Direct payer liaison support for claim resolution and contract matters.",
        },
      ]}
      ctaText="Connect with Our Network Team"
      ctaLink="/Contact"
    />
  );
}
