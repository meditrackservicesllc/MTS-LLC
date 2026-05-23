import ContentTemplate from "@/app/Components/ContentTemplate";

export default function NationwideMedicalBillingPage() {
  return (
    <ContentTemplate
      pageCategorySmall="Why MTS LLC"
      pageTitle="Nationwide Medical Billing Coverage"
      pageSubtitle="Billing and revenue cycle services built to support practices across every U.S. market."
      pageDescription="MTS LLC delivers standardized workflows, payer expertise, and remote support for providers throughout the country. Our team ensures consistent reimbursement performance no matter where you are located."
      featuredImage="/nation-wide.png"
      sections={[
        {
          heading: "Seamless National Billing Support",
          paragraphs: [
            "Our remote billing model supports practices across state lines with consistent processes and reliable payer communication.",
            "We manage claim submission, payer follow-up, credentialing, and reporting for providers in urban and rural markets alike.",
          ],
          bullets: [
            "State-aware billing regulations and payer rules",
            "Centralized team with local market knowledge",
            "Scalable services for growing provider networks",
          ],
        },
        {
          heading: "Nationwide Servicing Area",
          paragraphs: [
            "MTS LLC provides comprehensive medical billing services across all 50 states, ensuring your practice receives expert support regardless of location.",
            "Our team is equipped to handle state-specific payer requirements, regulations, and reimbursement structures.",
          ],
          bullets: [
            "Texas (TX)", "New York (NY)", "New Jersey (NJ)", "Illinois (IL)", "Florida (FL)",
            "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Georgia", "Hawaii", "Idaho", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Mexico", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
          ],
        },
        {
          heading: "Optimized Revenue for Every Region",
          paragraphs: [
            "From commercial payers to government plans, we optimize billing workflows for the unique reimbursement requirements of each region.",
            "Our reporting and analytics help practices identify the highest-value opportunities and keep revenue moving efficiently.",
          ],
        },
      ]}
      highlightCards={[
        {
          title: "Remote Practice Support",
          description: "Nationwide billing expertise without geographic limits.",
        },
        {
          title: "Multi-Payer Compliance",
          description: "We manage evolving payer rules across different states and payers.",
        },
      ]}
      ctaText="Book Nationwide Billing"
      ctaLink="/Contact"
    />
  );
}
