import ContentTemplate from "@/app/Components/ContentTemplate";

export default function PrivacyPolicyPage() {
  return (
    <ContentTemplate
      pageCategorySmall="Why MTS LLC"
      pageTitle="Privacy Policy"
      pageSubtitle="Protecting your data with secure, compliant billing operations."
      pageDescription="MTS LLC is committed to safeguarding personal and healthcare data while delivering transparent medical billing and revenue cycle services."
      featuredImage="/privacy-policy.jpeg"
      sections={[
        {
          heading: "Information We Collect",
          paragraphs: [
            "We collect only the information needed to provide billing, credentialing, and practice management services, including provider, payer, and patient data when required for claim processing.",
          ],
        },
        {
          heading: "How We Use Your Data",
          paragraphs: [
            "Data is used to complete billing submissions, manage credentials, resolve payer issues, and deliver performance reporting in a secure and compliant manner.",
            "We do not sell your information, and all data is handled under strict internal controls and HIPAA best practices.",
          ],
          bullets: [
            "Billing and claims processing",
            "Credentialing and payer enrollment",
            "Client communication and reporting",
          ],
        },
        {
          heading: "Security and Compliance",
          paragraphs: [
            "Our systems and processes are designed to protect information through encryption, access controls, and secure data handling standards.",
            "We follow HIPAA compliance expectations for all healthcare-related information and conduct ongoing security reviews.",
          ],
        },
      ]}
      highlightCards={[
        {
          title: "HIPAA-Safe Practices",
          description: "We maintain privacy safeguards across every client engagement.",
        },
        {
          title: "Secure Data Handling",
          description: "Your information is stored and processed with care.",
        },
      ]}
      ctaText="Review Our Terms"
      ctaLink="/terms-and-conditions"
    />
  );
}
