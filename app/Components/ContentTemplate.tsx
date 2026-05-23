import Image from "next/image";
import { CheckCircle, TrendingUp, Users, Shield } from "lucide-react";

export interface ContentSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  image?: string;
}

export interface StatCard {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export interface ContentTemplateProps {
  pageCategorySmall: string;
  pageTitle: string;
  pageSubtitle: string;
  pageDescription: string;
  featuredImage: string;
  sections: ContentSection[];
  highlightCards?: { title: string; description: string }[];
  statCards?: StatCard[];
  keyBenefits?: { title: string; description: string }[];
  ctaText: string;
  ctaLink: string;
}

export default function ContentTemplate({
  pageCategorySmall,
  pageTitle,
  pageSubtitle,
  pageDescription,
  featuredImage,
  sections,
  highlightCards = [],
  statCards = [],
  keyBenefits = [],
  ctaText,
  ctaLink,
}: ContentTemplateProps) {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#0F2F57] via-[#1E3A8A] to-[#0A1F3D] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#99C050]/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:px-20 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#99C050] font-bold border border-[#99C050]/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#99C050]"></span>
              {pageCategorySmall}
            </div>
            
            <div>
              <h1 className="text-4xl md:text-5xl font-black leading-[1.15] tracking-tight mb-6">
                {pageTitle}
              </h1>
              <p className="text-xl text-slate-200 leading-8 mb-8">
                {pageSubtitle}
              </p>
              <p className="text-lg text-slate-300 leading-8 max-w-2xl">
                {pageDescription}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href={ctaLink}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#99C050] to-[#22c55e] px-8 py-4 text-sm font-bold text-[#0F2F57] shadow-xl shadow-[#99C050]/30 hover:shadow-2xl hover:shadow-[#99C050]/50 hover:-translate-y-1 transition-all duration-300"
              >
                {ctaText}
                <span>→</span>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#99C050] to-[#22c55e] rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-950">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2F57]/80 via-transparent" />
              <Image
                src={featuredImage}
                alt={pageTitle}
                width={600}
                height={600}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      {statCards.length > 0 && (
        <section className="relative bg-slate-950 py-16 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-20">
            <div className="grid md:grid-cols-4 gap-8">
              {statCards.map((stat, idx) => (
                <div key={idx} className="text-center group cursor-pointer">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#99C050]/10 border border-[#99C050]/30 group-hover:border-[#99C050] group-hover:bg-[#99C050]/20 transition mb-4 mx-auto">
                    {stat.icon || <TrendingUp className="w-8 h-8 text-[#99C050]" />}
                  </div>
                  <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-slate-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* KEY BENEFITS SECTION */}
      {keyBenefits.length > 0 && (
        <section className="bg-gradient-to-b from-slate-50 to-white py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-[#1E3A8A] mb-4">
                Why Choose This Solution
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Proven benefits that deliver real results for healthcare practices
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {keyBenefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#99C050]/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#99C050]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#99C050]/20 transition">
                      <CheckCircle className="w-6 h-6 text-[#99C050]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600 leading-7">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* MAIN CONTENT SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 grid lg:grid-cols-[1.8fr_1fr] gap-16">
          <article className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="group">
                <div className="mb-8">
                  <h2 className="text-3xl font-black text-[#1E3A8A] mb-6 group-hover:text-[#99C050] transition">
                    {section.heading}
                  </h2>
                  
                  <div className="space-y-5 text-slate-700">
                    {section.paragraphs.map((paragraph, idx) => (
                      <p key={idx} className="text-lg leading-8">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {section.bullets && (
                    <div className="mt-8 space-y-4">
                      <div className="font-bold text-[#1E3A8A] mb-4">Key Points:</div>
                      <ul className="space-y-3">
                        {section.bullets.map((item, bulletIdx) => (
                          <li key={bulletIdx} className="flex items-start gap-3">
                            <span className="w-2 h-2 rounded-full bg-[#99C050] mt-2.5 flex-shrink-0" />
                            <span className="text-slate-700 leading-7">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {section.image && (
                    <div className="mt-8 rounded-2xl overflow-hidden border border-slate-200">
                      <Image
                        src={section.image}
                        alt={section.heading}
                        width={800}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  )}
                </div>

                {index < sections.length - 1 && (
                  <div className="h-px bg-gradient-to-r from-slate-200 via-slate-300 to-transparent my-12" />
                )}
              </div>
            ))}
          </article>

          {/* SIDEBAR */}
          <aside className="space-y-8">
            {highlightCards.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#1E3A8A] px-2">Quick Facts</h3>
                {highlightCards.map((card, index) => (
                  <div
                    key={index}
                    className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 hover:border-[#99C050] hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <Users className="w-5 h-5 text-[#99C050] mt-0.5 flex-shrink-0" />
                      <h4 className="text-lg font-bold text-[#1E3A8A] group-hover:text-[#99C050] transition">
                        {card.title}
                      </h4>
                    </div>
                    <p className="text-slate-600 leading-7">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* CTA CARD */}
            <div className="sticky top-24 rounded-2xl border-2 border-[#99C050]/30 bg-gradient-to-br from-[#0F2F57] via-[#1E3A8A] to-[#152B5C] p-8 text-white shadow-xl">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#99C050]/20 border border-[#99C050]/50 mb-6 mx-auto">
                <Shield className="w-7 h-7 text-[#99C050]" />
              </div>
              <h3 className="text-2xl font-black text-center mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-slate-200 text-center leading-7 mb-8">
                Connect with our team to explore how we can support your practice success.
              </p>
              <a
                href="/contact"
                className="block w-full rounded-full bg-gradient-to-r from-[#99C050] to-[#22c55e] px-6 py-4 text-center text-sm font-bold text-[#0F2F57] shadow-lg hover:shadow-xl hover:shadow-[#99C050]/30 transition text-white"
              >
                Schedule Consultation
              </a>
              <p className="text-xs text-slate-400 text-center mt-4">
                ✓ No obligation  • ✓ Expert guidance
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-gradient-to-r from-[#0F2F57] to-[#1E3A8A] text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-black mb-6">
            Transform Your Practice Today
          </h2>
          <p className="text-xl text-slate-200 mb-10 leading-8">
            Join hundreds of healthcare practices that have improved their revenue and streamlined operations with our expert support.
          </p>
          <a
            href={ctaLink}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#99C050] to-[#22c55e] px-10 py-4 text-lg font-bold text-[#0F2F57] shadow-xl shadow-[#99C050]/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            {ctaText}
            <span>→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
