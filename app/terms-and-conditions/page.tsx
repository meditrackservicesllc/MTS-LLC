import ContentTemplate from "@/app/Components/ContentTemplate";

export default function TermsAndConditionsPage() {
  return (
    <ContentTemplate
      pageCategorySmall="Why MTS LLC"
      pageTitle="Terms & Conditions"
      pageSubtitle="Professional service terms designed to protect both clients and our delivery operations."
      pageDescription="These terms describe how MTS LLC provides medical billing, credentialing, and practice support services while maintaining service quality and legal compliance."
      featuredImage="/terms.jpeg"
      sections={[
        {
          heading: "Scope of Services",
          paragraphs: [
            "MTS LLC provides medical billing, credentialing, coding, and revenue cycle management services as outlined in each client agreement.",
            "Service delivery is tailored to the needs of each practice and may include remote support, reporting, and payer communication.",
          ],
        },
        {
          heading: "Client Responsibilities",
          paragraphs: [
            "Clients are responsible for providing accurate clinical documentation, timely payer information, and cooperation with staff during onboarding.",
            "Maintaining current provider credentials and timely submission of required data supports effective claim processing.",
          ],
          bullets: [
            "Provide accurate practice and payer information",
            "Share documentation needed for claims and credentialing",
            "Respond to information requests promptly",
          ],
        },
        {
          heading: "Service Agreement Terms",
          paragraphs: [
            "Fees, billing cycles, and termination terms are specified in each engagement agreement.",
            "Clients may contact our team to discuss service adjustments, reporting requirements, or operational changes.",
          ],
        },
      ]}
      highlightCards={[
        {
          title: "Transparent Agreements",
          description: "We keep service terms clear and easy to understand.",
        },
        {
          title: "Flexible Partnering",
          description: "Our agreements are designed for real-world healthcare operations.",
        },
      ]}
      ctaText="Contact Support"
      ctaLink="/Contact"
    />
  );
}
