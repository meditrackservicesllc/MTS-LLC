import { MetadataRoute } from "next";

export const dynamic = "force-static";

const LAST_MODIFIED_DATES: Record<string, string> = {
  "/": "2026-05-22",
  "/services/medical-billing": "2026-05-20",
  "/services/medical-coding": "2026-05-20",
  "/services/medical-credentialing": "2026-05-20",
  "/services/denial-management": "2026-05-20",
  "/services/ar-follow-up": "2026-05-15",
  "/services/out-of-network-billing": "2026-05-15",
  "/services/patient-billing": "2026-05-15",
  "/services/marketing-web-services": "2026-05-10",
  "/specialties/cardiology": "2026-05-18",
  "/specialties/dermatology": "2026-05-18",
  "/specialties/orthopedic-surgery": "2026-05-18",
  "/specialties/pediatrics": "2026-05-18",
  "/specialties/neurology": "2026-05-18",
  "/specialties/family-medicine": "2026-05-18",
  "/specialties/mental-health-counseling": "2026-05-18",
  "/specialties/internal-medicine": "2026-05-18",
  "/specialties/psychiatrist": "2026-05-18",
  "/specialties/psychologist": "2026-05-18",
  "/specialties/home-health-agencies": "2026-05-18",
  "/specialties/dme": "2026-05-18",
  "/specialties/podiatrist": "2026-05-18",
  "/case-study": "2026-05-01",
  "/faqs": "2026-04-15",
  "/insurance-partners": "2026-04-01",
  "/mts-blog": "2026-05-22",
  "/mts-library": "2026-04-20",
  "/newsroom": "2026-05-22",
  "/our-company": "2026-03-01",
  "/nationwide-medical-billing": "2026-04-01",
  "/provider-form": "2026-03-15",
  "/hospital-billing": "2026-04-10",
  "/laboratory-billing": "2026-04-10",
  "/physician-billing": "2026-04-10",
  "/contact": "2026-03-01",
  "/privacy-policy": "2026-01-01",
  "/terms-and-conditions": "2026-01-01",
};

type ChangeFreq =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

interface RouteConfig {
  path: string;
  priority: number;
  changeFrequency: ChangeFreq;
}

const routes: RouteConfig[] = [
  { path: "", priority: 1.0, changeFrequency: "daily" },

  // Core Services
  {
    path: "/services/medical-billing",
    priority: 0.9,
    changeFrequency: "weekly",
  },
  {
    path: "/services/medical-coding",
    priority: 0.9,
    changeFrequency: "weekly",
  },
  {
    path: "/services/medical-credentialing",
    priority: 0.9,
    changeFrequency: "weekly",
  },
  {
    path: "/services/denial-management",
    priority: 0.9,
    changeFrequency: "weekly",
  },
  { path: "/services/ar-follow-up", priority: 0.8, changeFrequency: "weekly" },
  {
    path: "/services/out-of-network-billing",
    priority: 0.8,
    changeFrequency: "weekly",
  },
  {
    path: "/services/patient-billing",
    priority: 0.8,
    changeFrequency: "weekly",
  },
  {
    path: "/services/marketing-web-services",
    priority: 0.7,
    changeFrequency: "weekly",
  },

  // Specialties
  { path: "/specialties/cardiology", priority: 0.8, changeFrequency: "weekly" },
  {
    path: "/specialties/dermatology",
    priority: 0.8,
    changeFrequency: "weekly",
  },
  {
    path: "/specialties/orthopedic-surgery",
    priority: 0.8,
    changeFrequency: "weekly",
  },
  { path: "/specialties/pediatrics", priority: 0.8, changeFrequency: "weekly" },
  { path: "/specialties/neurology", priority: 0.8, changeFrequency: "weekly" },
  {
    path: "/specialties/family-medicine",
    priority: 0.8,
    changeFrequency: "weekly",
  },
  {
    path: "/specialties/mental-health-counseling",
    priority: 0.8,
    changeFrequency: "weekly",
  },
  {
    path: "/specialties/internal-medicine",
    priority: 0.8,
    changeFrequency: "weekly",
  },
  {
    path: "/specialties/psychiatrist",
    priority: 0.8,
    changeFrequency: "weekly",
  },
  {
    path: "/specialties/psychologist",
    priority: 0.8,
    changeFrequency: "weekly",
  },
  {
    path: "/specialties/home-health-agencies",
    priority: 0.8,
    changeFrequency: "weekly",
  },
  { path: "/specialties/dme", priority: 0.8, changeFrequency: "weekly" },
  { path: "/specialties/podiatrist", priority: 0.7, changeFrequency: "weekly" },

  // Billing Verticals
  { path: "/hospital-billing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/laboratory-billing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/physician-billing", priority: 0.8, changeFrequency: "monthly" },
  {
    path: "/nationwide-medical-billing",
    priority: 0.8,
    changeFrequency: "monthly",
  },

  // Content & Resources
  { path: "/case-study", priority: 0.8, changeFrequency: "monthly" },
  { path: "/faqs", priority: 0.7, changeFrequency: "monthly" },
  { path: "/mts-blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/mts-library", priority: 0.7, changeFrequency: "monthly" },
  { path: "/newsroom", priority: 0.7, changeFrequency: "weekly" },

  // Company
  { path: "/our-company", priority: 0.7, changeFrequency: "monthly" },
  { path: "/insurance-partners", priority: 0.6, changeFrequency: "monthly" },
  { path: "/provider-form", priority: 0.6, changeFrequency: "monthly" },

  // Conversion
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },

  // Legal (low priority, rarely changes)
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms-and-conditions", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://medtrackservices.com";

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    lastModified: LAST_MODIFIED_DATES[route.path]
      ? new Date(LAST_MODIFIED_DATES[route.path]).toISOString()
      : new Date().toISOString(),
  }));
}
