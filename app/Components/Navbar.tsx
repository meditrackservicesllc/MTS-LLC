"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Building2,
  Globe,
  Shield,
  FileText,
  Receipt,
  UserCheck,
  Code,
  ShieldAlert,
  Network,
 
  TrendingUp,
  Users,
  Stethoscope,
  Bone,
  HeartPulse,
  Baby,
  Brain,
  ScanFace,
  Footprints,
  Home,
  Package,
  Building,
  UserPlus,
  FlaskConical,
  BookOpen,
  Library,
  Newspaper,
  Briefcase,
  MessageCircleQuestion,
  ClipboardList,
  Handshake,
  Menu,
  X,
  Mail,
  LucideIcon, // Added for TypeScript safety
} from "lucide-react";

// Types to prevent errors in .tsx
interface NavLink {
  title: string;
  desc?: string;
  icon: LucideIcon;
}

interface NavItem {
  label: string;
  type: "simple" | "mega";
  links?: NavLink[];
  megaTitle?: string;
  megaDesc?: string;
  megaLinks?: NavLink[];
}

// ================== DROPDOWN DATA CONFIGURATION ==================
const navItems: NavItem[] = [
  {
    label: "Why MTS LLC",
    type: "simple",
    links: [
      { title: "Our Company", desc: "Learn about our mission, expertise, and commitment to healthcare practices.", icon: Building2 },
      { title: "Nationwide Medical Billing", desc: "Supporting practices across all U.S. markets with consistent billing excellence.", icon: Globe },
      { title: "Privacy Policy", desc: "How we protect and handle your healthcare data with security and care.", icon: Shield },
      { title: "Terms and Conditions", desc: "Professional service terms designed for practice partnerships and compliance.", icon: FileText },
    ],
  },
  {
    label: "Services",
    type: "mega",
    megaTitle: "Our Premium Services",
    megaDesc: "Complete revenue cycle and practice management solutions.",
    megaLinks: [
      {
        title: "Medical Billing",
        desc: "End-to-end revenue cycle solutions.",
        icon: Receipt,
      },
      {
        title: "Medical Credentialing",
        desc: "Fast provider enrollment & verification.",
        icon: UserCheck,
      },
      {
        title: "Medical Coding",
        desc: "Error-free coding for maximum returns.",
        icon: Code,
      },
      {
        title: "Denial Management",
        desc: "Resolving and preventing claim rejections.",
        icon: ShieldAlert,
      },
      {
        title: "Out of Network Billing",
        desc: "Handling complex out-of-network claims.",
        icon: Network,
      },
     
      {
        title: "A/R Follow Up",
        desc: "Recovering outstanding accounts receivable.",
        icon: TrendingUp,
      },
      {
        title: "Patient Billing",
        desc: "Managing statements and collections.",
        icon: Users,
      },
      {
        title: "Marketing & Web Services",
        desc: "Digital marketing and web development.",
        icon: Globe,
      },
    ],
  },
  {
    label: "Specialties",
    type: "mega",
    megaTitle: "Specialties We Serve",
    megaDesc: "Tailored billing solutions for your specific medical field.",
    megaLinks: [
      {
        title: "Internal Medicine",
        desc: "Comprehensive adult care billing.",
        icon: Stethoscope,
      },
      {
        title: "Orthopedic Surgery",
        desc: "Specialized musculoskeletal coding.",
        icon: Bone,
      },
      {
        title: "Cardiology",
        desc: "Heart & vascular billing solutions.",
        icon: HeartPulse,
      },
      {
        title: "Pediatrics",
        desc: "Child healthcare revenue management.",
        icon: Baby,
      },
      {
        title: "Neurology",
        desc: "Brain & nervous system coding.",
        icon: Brain,
      },
      {
        title: "Dermatology",
        desc: "Skin care & aesthetic billing.",
        icon: ScanFace,
      },
      {
        title: "Family Medicine",
        desc: "Primary care billing solutions.",
        icon: Stethoscope,
      },
      {
        title: "Podiatrist",
        desc: "Foot & ankle care billing.",
        icon: Footprints,
      },
      {
        title: "Mental Health Counseling",
        desc: "Therapy and counseling billing.",
        icon: Brain,
      },
      {
        title: "Psychiatrist",
        desc: "Psychiatric care billing.",
        icon: Brain,
      },
      {
        title: "Psychologist",
        desc: "Psychological services billing.",
        icon: Brain,
      },
      {
        title: "Home Health Agencies",
        desc: "Home care billing solutions.",
        icon: Home,
      },
      {
        title: "DME",
        desc: "Durable medical equipment billing.",
        icon: Package,
      },
    ],
  },
  {
    label: "Servicing Area",
    type: "simple",
    links: [
      { title: "Texas (TX)", icon: Globe },
      { title: "New York (NY)", icon: Globe },
      { title: "New Jersey (NJ)", icon: Globe },
      { title: "Illinois (IL)", icon: Globe },
      { title: "Florida (FL)", icon: Globe },
      { title: "Alabama (AL)", icon: Globe },
      { title: "Alaska (AK)", icon: Globe },
      { title: "Arizona (AZ)", icon: Globe },
      { title: "Arkansas (AR)", icon: Globe },
      { title: "California (CA)", icon: Globe },
      { title: "Colorado (CO)", icon: Globe },
      { title: "Connecticut (CT)", icon: Globe },
      { title: "Delaware (DE)", icon: Globe },
      { title: "Georgia (GA)", icon: Globe },
      { title: "Hawaii (HI)", icon: Globe },
      { title: "Idaho (ID)", icon: Globe },
      { title: "Indiana (IN)", icon: Globe },
      { title: "Iowa (IA)", icon: Globe },
      { title: "Kansas (KS)", icon: Globe },
      { title: "Kentucky (KY)", icon: Globe },
      { title: "Louisiana (LA)", icon: Globe },
      { title: "Maine (ME)", icon: Globe },
      { title: "Maryland (MD)", icon: Globe },
      { title: "Massachusetts (MA)", icon: Globe },
      { title: "Michigan (MI)", icon: Globe },
      { title: "Minnesota (MN)", icon: Globe },
      { title: "Mississippi (MS)", icon: Globe },
      { title: "Missouri (MO)", icon: Globe },
      { title: "Montana (MT)", icon: Globe },
      { title: "Nebraska (NE)", icon: Globe },
      { title: "Nevada (NV)", icon: Globe },
      { title: "New Hampshire (NH)", icon: Globe },
      { title: "New Mexico (NM)", icon: Globe },
      { title: "North Carolina (NC)", icon: Globe },
      { title: "North Dakota (ND)", icon: Globe },
      { title: "Ohio (OH)", icon: Globe },
      { title: "Oklahoma (OK)", icon: Globe },
      { title: "Oregon (OR)", icon: Globe },
      { title: "Pennsylvania (PA)", icon: Globe },
      { title: "Rhode Island (RI)", icon: Globe },
      { title: "South Carolina (SC)", icon: Globe },
      { title: "South Dakota (SD)", icon: Globe },
      { title: "Tennessee (TN)", icon: Globe },
      { title: "Utah (UT)", icon: Globe },
      { title: "Vermont (VT)", icon: Globe },
      { title: "Virginia (VA)", icon: Globe },
      { title: "Washington (WA)", icon: Globe },
      { title: "West Virginia (WV)", icon: Globe },
      { title: "Wisconsin (WI)", icon: Globe },
      { title: "Wyoming (WY)", icon: Globe },
    ],
  },
  {
    label: "Resources",
    type: "simple",
    links: [
      { title: "MTS blog", desc: "Expert articles on billing trends, compliance, and revenue cycle optimization.", icon: BookOpen },
      { title: "MTS library", desc: "Practical guides, checklists, and reference materials for practice management.", icon: Library },
      { title: "Newsroom", desc: "Company news, announcements, and industry updates from MTS LLC.", icon: Newspaper },
      { title: "Case study", desc: "Real-world examples of how we help practices improve revenue and efficiency.", icon: Briefcase },
      { title: "FAQs", desc: "Answers to common questions about our services and billing processes.", icon: MessageCircleQuestion },
      { title: "Provider form", desc: "Submit provider information to begin credentialing and billing setup.", icon: ClipboardList },
      { title: "Insurance partners", desc: "Our network of trusted payer relationships supporting your reimbursement.", icon: Handshake },
      { title: "Contact", desc: "Get in touch with our team.", icon: Mail },
    ],
  },
];

const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/a\/r/g, "ar")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const toggleMobileDropdown = (label: string) => {
    setActiveMobileDropdown(activeMobileDropdown === label ? null : label);
  };

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="bg-linear-to-r from-slate-900 via-[#1E3A8A] to-slate-900 text-slate-200 py-2 px-6 text-[13px] tracking-wide font-medium z-50 relative border-b border-[#99C050]/30 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-center md:justify-end items-center">
          <a
            href="mailto:meditrackservicesllc@gmail.com"
            className="flex items-center gap-2 hover:text-[#99C050] transition-colors group"
          >
            <Mail className="w-4 h-4 text-[#99C050] group-hover:scale-110 transition-transform" />
            <span>
              Drop us an email:{" "}
              <span className="font-bold text-white tracking-wide">
                meditrackservicesllc@gmail.com
              </span>
            </span>
          </a>
        </div>
      </div>

      {/* ================= HEADER ================= */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-40 transition-all border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative overflow-hidden rounded-md shadow-sm border border-slate-100 group-hover:shadow-md transition-all">
              <Image
                src="/logo.jfif"
                alt="MTS Logo"
                width={45}
                height={45}
                unoptimized
              />
            </div>
            <span className="text-xl font-extrabold text-[#1E3A8A] tracking-tight group-hover:text-[#22c55e] transition-colors">
              MTS LLC
            </span>
          </Link>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <nav className="hidden lg:flex space-x-1 font-medium text-slate-700 items-center">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg hover:bg-[#99C050]/10 hover:text-[#1E3A8A] transition-all duration-200 cursor-pointer">
                  {item.label}
                  <ChevronDown className="w-4 h-4 text-[#99C050] transition-transform duration-300 group-hover:rotate-180" />
                </button>

                {item.type === "mega" ? (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-[750px] bg-white border border-slate-100 shadow-[0_20px_50px_rgba(30,58,138,0.1)] rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-150 z-50 overflow-hidden pointer-events-none group-hover:pointer-events-auto">
                    <div className="bg-[#1E3A8A]/5 px-8 py-5 border-b border-[#1E3A8A]/10">
                      <h3 className="text-[#1E3A8A] font-bold text-lg">
                        {item.megaTitle}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1">
                        {item.megaDesc}
                      </p>
                    </div>
                    <div className="p-6 grid grid-cols-2 gap-x-6 gap-y-3 max-h-[60vh] overflow-y-auto custom-scrollbar">
                      {item.megaLinks?.map((link) => {
                        const Icon = link.icon;

                        // PATH LOGIC
                        const linkPath =
                          item.label === "Services"
                            ? `/services/${slugify(link.title)}`
                            : item.label === "Specialties"
                              ? `/specialties/${slugify(link.title)}`
                              : `/${slugify(link.title)}`;

                        return (
                          <Link
                            key={link.title}
                            href={linkPath}
                            className="group/link flex items-center gap-4 p-3 rounded-xl hover:bg-[#99C050]/10 border border-transparent hover:border-[#99C050]/30 transition-all duration-200"
                          >
                            <div className="w-12 h-12 rounded-lg bg-white border border-slate-100 flex items-center justify-center shrink-0 text-2xl shadow-sm group-hover/link:bg-[#1E3A8A] transition-all">
                              <Icon
                                className="w-6 h-6 text-[#1E3A8A] group-hover/link:text-white"
                                strokeWidth={1.5}
                              />
                            </div>
                            <div>
                              <h4 className="text-sm font-bold text-[#1E3A8A] group-hover/link:text-[#22c55e]">
                                {link.title}
                              </h4>
                              <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                                {link.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-80 bg-white border border-slate-100 shadow-[0_15px_40px_rgba(30,58,138,0.1)] rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-150 z-50 py-3 max-h-[55vh] overflow-y-auto custom-scrollbar pointer-events-none group-hover:pointer-events-auto">
                    {item.links?.map((link) => {
                      const Icon = link.icon;
                      return item.label === "Servicing Area" ? (
                        <div
                          key={link.title}
                          className="flex items-center gap-3 px-4 py-3 border-l-4 border-transparent"
                        >
                          <Icon
                            className="w-5 h-5 text-[#99C050] shrink-0"
                            strokeWidth={2}
                          />
                          <div>
                            <p className="text-sm font-bold text-slate-700">
                              {link.title}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={link.title}
                          href={`/${link.title.toLowerCase().replace(/ /g, "-")}`}
                          className="group/link flex items-center gap-3 px-4 py-3 hover:bg-[#99C050]/10 transition-colors border-l-4 border-transparent hover:border-[#22c55e]"
                        >
                          <Icon
                            className="w-5 h-5 text-[#99C050] group-hover/link:text-[#1E3A8A] shrink-0"
                            strokeWidth={2}
                          />
                          <div>
                            <p className="text-sm font-bold text-slate-700 group-hover/link:text-[#1E3A8A]">
                              {link.title}
                            </p>
                            {link.desc && (
                              <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">
                                {link.desc}
                              </p>
                            )}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="px-4 py-2 hover:text-[#22c55e] font-medium transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden lg:inline-flex bg-linear-to-r from-[#99C050] to-[#22c55e] text-[#1E3A8A] px-6 py-2.5 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all font-bold"
            >
              Start Trial
            </Link>
            <button
              className="lg:hidden p-2 text-[#1E3A8A] hover:bg-slate-100 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE DRAWER MENU ================= */}
      <div
        className={`fixed inset-0 bg-[#0F2F57]/60 backdrop-blur-sm z-60 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-70 lg:hidden shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-6 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jfif"
              alt="MTS Logo"
              width={35}
              height={35}
              unoptimized
              className="rounded-md"
            />
            <span className="text-lg font-extrabold text-[#1E3A8A]">
              MTS LLC
            </span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-6 custom-scrollbar">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="border-b border-slate-50 last:border-none"
            >
              <button
                onClick={() => toggleMobileDropdown(item.label)}
                className="w-full flex justify-between items-center py-4 text-left font-semibold text-slate-700 hover:text-[#22c55e] transition-colors"
              >
                {item.label}
                <ChevronDown
                  className={`w-5 h-5 text-[#99C050] transition-transform duration-300 ${activeMobileDropdown === item.label ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${activeMobileDropdown === item.label ? "max-h-screen opacity-100 pb-4" : "max-h-0 opacity-0"}`}
              >
                <div className="pl-4 border-l-2 border-[#99C050]/30 space-y-1">
                  {(item.type === "mega" ? item.megaLinks : item.links)?.map(
                    (link) => {
                      const Icon = link.icon;

                      // MOBILE PATH LOGIC
                      const mobilePath =
                        item.label === "Services"
                          ? `/services/${slugify(link.title)}`
                          : item.label === "Specialties"
                            ? `/specialties/${slugify(link.title)}`
                            : `/${slugify(link.title)}`;

                      return (
                        <Link
                          key={link.title}
                          href={mobilePath}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#99C050]/10 transition-colors"
                        >
                          <Icon
                            className="w-5 h-5 text-[#1E3A8A]"
                            strokeWidth={1.5}
                          />
                          <div>
                            <p className="text-sm font-medium text-slate-700">
                              {link.title}
                            </p>
                            {link.desc && (
                              <p className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">
                                {link.desc}
                              </p>
                            )}
                          </div>
                        </Link>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-4 font-semibold text-slate-700 hover:text-[#22c55e] border-b border-slate-50"
          >
            Contact Us
          </Link>
        </div>

        <div className="p-6 bg-slate-50 border-t border-slate-100">
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full inline-flex justify-center bg-[#1E3A8A] text-white px-6 py-3.5 rounded-xl shadow-md font-bold text-center active:scale-95 transition-transform"
          >
            Start Trial
          </Link>
        </div>
      </div>
    </>
  );
}