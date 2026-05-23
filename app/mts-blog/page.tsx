import ContentTemplate from "@/app/Components/ContentTemplate";
import { BookOpen, TrendingUp, Users, Clock } from "lucide-react";

export default function MtsBlogPage() {
  return (
    <ContentTemplate
      pageCategorySmall="Resources"
      pageTitle="MTS Blog"
      pageSubtitle="Insights, trends, and best practices for smarter medical billing and revenue cycle operations."
      pageDescription="Explore expert articles covering billing strategy, compliance updates, payer trends, and revenue cycle improvements for healthcare practices."
      featuredImage="/Revenue-Boost.jpeg"
      statCards={[
        { value: "100+", label: "Expert Articles Published", icon: <BookOpen className="w-8 h-8 text-[#99C050]" /> },
        { value: "50K+", label: "Healthcare Professionals Reading", icon: <Users className="w-8 h-8 text-[#99C050]" /> },
        { value: "Weekly", label: "New Content Updates", icon: <Clock className="w-8 h-8 text-[#99C050]" /> },
        { value: "98%", label: "Reader Satisfaction Rate", icon: <TrendingUp className="w-8 h-8 text-[#99C050]" /> },
      ]}
      keyBenefits={[
        {
          title: "Compliance Updates",
          description: "Stay informed on regulatory changes, payer policy updates, and ICD-10 coding guidance that affects your practice.",
        },
        {
          title: "Practical Strategies",
          description: "Actionable tips and workflows you can implement immediately to improve revenue cycle performance.",
        },
        {
          title: "Industry Trends",
          description: "Understand market shifts, technology adoption, and healthcare reform implications for your practice.",
        },
        {
          title: "Expert Insights",
          description: "Analysis from billing professionals with decades of healthcare revenue cycle experience.",
        },
      ]}
      sections={[
        {
          heading: "Expert Content for Healthcare Leaders",
          paragraphs: [
            "Stay current with the latest changes in medical billing, coding guidance, and payer policy updates that impact your practice.",
            "Our blog content is designed for practice leaders, billing managers, and providers who want reliable information without the noise.",
            "Each article is thoroughly researched and written by revenue cycle professionals who understand the real challenges practices face.",
          ],
          bullets: [
            "Revenue cycle optimization tips and workflow improvements",
            "Denial prevention strategies and appeals management",
            "Compliance updates and regulatory guidance",
            "Payer policy changes and coding updates",
            "Technology and automation insights for billing teams",
          ],
        },
        {
          heading: "Topics We Cover",
          paragraphs: [
            "Healthcare billing continues to change rapidly. Practices that understand the latest rules and workflow improvements capture more revenue.",
            "Our published articles address the specific challenges that billing managers, compliance officers, and practice administrators face daily.",
          ],
          bullets: [
            "Medical coding and documentation best practices",
            "Claims management and denial reduction techniques",
            "Credentialing and payer enrollment insights",
            "Cash flow optimization and AR management",
            "Patient billing and collections strategies",
            "Compliance and audit preparation guidance",
          ],
        },
        {
          heading: "Why Our Blog Matters",
          paragraphs: [
            "We publish practical advice that helps teams reduce administrative burden and improve financial performance.",
            "Our content is free, accessible, and designed to empower practices with knowledge they can use to strengthen their revenue cycle.",
          ],
          bullets: [
            "Evidence-based recommendations backed by real-world experience",
            "Timely updates on industry changes and regulatory requirements",
            "Actionable strategies you can implement with your current team",
            "Free resources and downloadable templates for practice improvement",
          ],
        },
      ]}
      highlightCards={[
        {
          title: "Actionable Advice",
          description: "Strategies you can apply immediately to improve billing outcomes and revenue performance.",
        },
        {
          title: "Expert Analysis",
          description: "Content created by revenue cycle professionals with real practice experience and expertise.",
        },
        {
          title: "Regular Updates",
          description: "Fresh articles and insights published weekly to keep you informed of industry changes.",
        },
        {
          title: "Free Resources",
          description: "Access templates, checklists, and guides to support your billing team's success.",
        },
      ]}
      ctaText="Read Latest Articles"
      ctaLink="/mts-blog"
    />
  );
}
