import { Link, useParams } from 'react-router';
import { useState } from 'react';

const serviceData: Record<string, {
  title: string;
  tagline: string;
  heroImg: string;
  overview: string;
  benefits: string[];
  whatToExpect: { step: string; desc: string }[];
  packages: { name: string; price: string; freq: string; features: string[]; highlight?: boolean }[];
  faqs: { q: string; a: string }[];
}> = {
  default: {
    title: 'General Medicine',
    tagline: 'Your trusted partner for comprehensive primary care',
    heroImg: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=900&h=500&fit=crop&auto=format',
    overview:
      'Our general medicine service is the cornerstone of Clarity Medical Clinic. Whether you need a routine annual physical, treatment for an acute illness, or ongoing management of a chronic condition, our board-certified internists and family medicine physicians are here for you — every step of the way.',
    benefits: [
      'Comprehensive annual wellness exams and physical assessments',
      'Acute illness evaluation and same-day treatment',
      'Laboratory tests, referrals, and specialist coordination',
      'Medication management and prescription renewals',
      'Preventive screenings tailored to your age and risk profile',
      'Lifestyle and nutrition counseling integrated into every visit',
    ],
    whatToExpect: [
      { step: '1. Book Online', desc: 'Choose your date and time through our patient portal in under 2 minutes. Same-day slots are available Monday through Saturday.' },
      { step: '2. Pre-Visit Check-In', desc: 'Complete intake forms digitally before you arrive. We review your history so your appointment time is spent on care, not paperwork.' },
      { step: '3. Personalized Consultation', desc: 'Your physician takes a thorough history, performs a physical exam, and listens — no 7-minute rushed visits here.' },
      { step: '4. Care Plan & Follow-Up', desc: 'Leave with a clear plan: prescriptions, referrals, lab orders, or lifestyle goals. Your care team follows up to ensure you’re on track.' },
    ],
    packages: [
      {
        name: 'Single Visit',
        price: '₹120',
        freq: 'per visit',
        features: [
          'Full evaluation & exam',
          'Lab order & referrals',
          'Same-day availability',
          'Secure portal access',
        ],
      },
      {
        name: 'Annual Care Plan',
        price: '₹480',
        freq: 'per year',
        highlight: true,
        features: [
          'Unlimited primary care visits',
          'Annual wellness physical',
          'Preventive screenings included',
          'Priority same-day appointments',
          'Care team messaging',
          'Specialist coordination',
        ],
      },
      {
        name: 'Family Bundle',
        price: '₹840',
        freq: 'per year (up to 4)',
        features: [
          'All Annual Care Plan features',
          'Covers up to 4 family members',
          'Pediatric & adult care',
          'Family health dashboard',
        ],
      },
    ],
    faqs: [
      { q: 'Do you accept insurance?', a: 'Yes — we accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, United Health, and Medicare. Contact us to verify your specific plan.' },
      { q: 'What if I need to see a specialist?', a: 'We maintain a curated referral network of top specialists in Austin. We coordinate directly with the specialist office and share your records to ensure continuity of care.' },
      { q: 'Can I get lab work done here?', a: 'Yes, we have an on-site lab for common tests. Results are typically available within 24–48 hours and sent directly to your patient portal.' },
      { q: 'How long are appointments?', a: 'New patient visits are 45–60 minutes. Follow-up and acute visits are 20–30 minutes. We never rush you out of the room.' },
      { q: 'Is telehealth available?', a: 'Yes — we offer secure video visits for follow-ups, prescription renewals, and minor concerns. Book through the same portal as in-person appointments.' },
    ],
  },
};

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        <span className="font-medium text-gray-900 pr-4">{q}</span>
        <svg
          width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          className={`flex-shrink-0 text-[#0d7a74] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
      {open && (
        <p className="text-gray-600 text-sm leading-relaxed pb-4">{a}</p>
      )}
    </div>
  );
}

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const data = serviceData[slug ?? ''] ?? serviceData.default;

  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="relative h-72 md:h-96 overflow-hidden bg-gray-300">
          <img src={data.heroImg} alt={data.title} className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/30"/>
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-6xl mx-auto px-4 pb-10 w-full">
              <nav className="text-sm text-white/60 mb-3 flex items-center gap-1.5">
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <span className="text-white">Services</span>
                <span>/</span>
                <span className="text-white">{data.title}</span>
              </nav>
              <h1 className="font-display text-3xl md:text-5xl font-semibold text-white mb-2">{data.title}</h1>
              <p className="text-white/80 text-lg">{data.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        {/* OVERVIEW */}
        <section className="py-16 grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <span className="text-[#0d7a74] font-semibold text-sm tracking-wider uppercase">Overview</span>
            <h2 className="font-display text-2xl font-semibold text-gray-900 mt-2 mb-4">About This Service</h2>
            <p className="text-gray-600 leading-relaxed">{data.overview}</p>

            <h3 className="font-display text-xl font-semibold text-gray-900 mt-8 mb-4">What's Included</h3>
            <ul className="space-y-3">
              {data.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#e8f7f6] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0d7a74" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar CTA */}
          <div>
            <div className="sticky top-28 bg-[#0d7a74] text-white rounded-2xl p-6 shadow-xl">
              <h3 className="font-display text-xl font-semibold mb-2">Ready to Get Started?</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Same-day appointments available. Book online or call us directly.
              </p>
              <Link
                to="/contact"
                className="w-full flex justify-center items-center gap-2 bg-[#e8a020] text-white font-semibold py-3 rounded-full hover:bg-[#d4911b] transition-colors mb-3"
              >
                Book Appointment
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <a
                href="tel:5552347890"
                className="w-full flex justify-center items-center gap-2 border border-white/30 text-white font-medium py-3 rounded-full hover:bg-white/10 transition-colors text-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                (555) 234-7890
              </a>
              <div className="mt-6 pt-6 border-t border-white/20 space-y-3 text-sm text-white/70">
                <div className="flex items-center gap-2"><span>✓</span> Most insurances accepted</div>
                <div className="flex items-center gap-2"><span>✓</span> No referral needed</div>
                <div className="flex items-center gap-2"><span>✓</span> On-site lab & pharmacy</div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT TO EXPECT */}
        <section className="py-12 border-t border-gray-100">
          <span className="text-[#0d7a74] font-semibold text-sm tracking-wider uppercase">Process</span>
          <h2 className="font-display text-2xl font-semibold text-gray-900 mt-2 mb-8">What to Expect</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.whatToExpect.map(({ step, desc }) => (
              <div key={step} className="bg-[#f0f9f8] rounded-2xl p-5">
                <div className="font-display text-[#0d7a74] font-semibold text-sm mb-2">{step}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section className="py-16 border-t border-gray-100">
          <div className="text-center mb-10">
            <span className="text-[#0d7a74] font-semibold text-sm tracking-wider uppercase">Pricing</span>
            <h2 className="font-display text-2xl font-semibold text-gray-900 mt-2">Simple, Transparent Pricing</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {data.packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-7 border-2 relative ${pkg.highlight ? 'bg-[#0d7a74] border-[#0d7a74] text-white shadow-2xl' : 'bg-white border-gray-100 text-gray-900'}`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e8a020] text-white text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <div className={`text-sm font-semibold mb-2 ${pkg.highlight ? 'text-white/70' : 'text-[#0d7a74]'}`}>{pkg.name}</div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-display text-4xl font-bold">{pkg.price}</span>
                </div>
                <div className={`text-xs mb-6 ${pkg.highlight ? 'text-white/60' : 'text-gray-400'}`}>{pkg.freq}</div>
                <ul className="space-y-2.5 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={pkg.highlight ? 'white' : '#0d7a74'} strokeWidth="2.5" className="flex-shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                      <span className={pkg.highlight ? 'text-white/90' : 'text-gray-600'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center font-semibold py-3 rounded-full transition-colors ${
                    pkg.highlight
                      ? 'bg-white text-[#0d7a74] hover:bg-amber-50'
                      : 'bg-[#e8f7f6] text-[#0d7a74] hover:bg-[#0d7a74] hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 border-t border-gray-100 pb-20">
          <div className="max-w-2xl mx-auto">
            <span className="text-[#0d7a74] font-semibold text-sm tracking-wider uppercase">FAQ</span>
            <h2 className="font-display text-2xl font-semibold text-gray-900 mt-2 mb-8">Frequently Asked Questions</h2>
            <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-100 px-6">
              {data.faqs.map((faq) => (
                <FAQItem key={faq.q} {...faq} />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Bottom CTA */}
      <section className="bg-[#f0f9f8] border-t border-[#0d7a74]/10">
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <h2 className="font-display text-3xl font-semibold text-gray-900 mb-4">
            Have More Questions? We're Here.
          </h2>
          <p className="text-gray-600 mb-8">
            Our care coordinators are available by phone, chat, or in-person to help you navigate your options.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#0d7a74] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#095f5a] transition-colors text-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
