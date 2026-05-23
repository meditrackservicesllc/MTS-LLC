import ContentTemplate from "@/app/Components/ContentTemplate";
import { Newspaper, Trophy, Handshake, Zap } from "lucide-react";

export default function NewsroomPage() {
  return (
    <ContentTemplate
      pageCategorySmall="Resources"
      pageTitle="Newsroom"
      pageSubtitle="Company news, announcements, and the latest updates from MTS LLC."
      pageDescription="Learn about our latest achievements, partnerships, and updates that matter to healthcare providers and practice administrators."
      featuredImage="/doctor-hero.png"
      statCards={[
        { value: "50+", label: "Press Releases & Announcements", icon: <Newspaper className="w-8 h-8 text-[#99C050]" /> },
        { value: "15+", label: "Industry Awards & Recognitions", icon: <Trophy className="w-8 h-8 text-[#99C050]" /> },
        { value: "100+", label: "Partnership Announcements", icon: <Handshake className="w-8 h-8 text-[#99C050]" /> },
        { value: "Weekly", label: "News Updates", icon: <Zap className="w-8 h-8 text-[#99C050]" /> },
      ]}
      keyBenefits={[
        {
          title: "Company Milestones",
          description: "Track our growth, expansion into new markets, and investments in technology and team excellence.",
        },
        {
          title: "Partnership News",
          description: "Learn about strategic partnerships and integrations that enhance our service offerings for practices.",
        },
        {
          title: "Awards & Recognition",
          description: "See how our commitment to excellence is recognized by industry organizations and peers.",
        },
        {
          title: "Client Success Stories",
          description: "Real examples of practices we've helped transform their revenue cycle and operations.",
        },
      ]}
      sections={[
        {
          heading: "Latest Company Updates",
          paragraphs: [
            "Our newsroom shares company milestones, client success stories, and important industry announcements.",
            "Stay informed with news that highlights how we support providers through innovation and expert revenue cycle services.",
            "We're transparent about our growth, achievements, and commitment to serving healthcare practices at the highest level.",
          ],
          bullets: [
            "Press releases and major company announcements",
            "Awards and industry recognitions",
            "Partnership news and strategic initiatives",
            "Technology launches and service enhancements",
            "Client success stories and testimonials",
            "Event participation and speaking engagements",
          ],
        },
        {
          heading: "Why Our News Matters to Your Practice",
          paragraphs: [
            "Keeping practices informed helps them understand how evolving billing services and industry partnerships can impact their operations.",
            "We publish updates that demonstrate our commitment to performance, transparency, and long-term provider success.",
            "When we grow, invest, and win awards, it reflects the quality of service you receive from our team.",
          ],
          bullets: [
            "Understand our company's stability and long-term viability",
            "Learn about new services and capabilities that benefit your practice",
            "See how we're recognized for excellence in healthcare billing",
            "Follow our expansion and commitment to your specialty and market",
            "Stay informed on industry trends and regulatory updates we're addressing",
          ],
        },
        {
          heading: "Featured Coverage Areas",
          paragraphs: [
            "Our news covers a range of topics relevant to healthcare providers and billing professionals.",
            "From regulatory updates to technology innovations, we keep you informed about changes that impact your practice.",
          ],
          bullets: [
            "Healthcare reform and regulatory compliance updates",
            "Technology and automation innovations in billing",
            "Market expansion and new specialty focus areas",
            "Team growth and hiring announcements",
            "Industry partnerships and integrations",
            "Client recognition and success milestones",
          ],
        },
      ]}
      highlightCards={[
        {
          title: "Company Milestones",
          description: "See how MTS LLC continues to grow and invest in provider success.",
        },
        {
          title: "Industry Insights",
          description: "Updates that help you stay ahead of billing and compliance trends.",
        },
        {
          title: "Partnership Announcements",
          description: "New integrations and services that enhance our offerings to practices.",
        },
        {
          title: "Awards & Recognition",
          description: "Industry acknowledgment of our commitment to excellence and innovation.",
        },
      ]}
      ctaText="View All News"
      ctaLink="/newsroom"
    />
  );
}
