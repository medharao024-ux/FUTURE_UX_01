import { Link } from 'react-router';
import { useState } from 'react';

const services = [
  {
    slug: 'general-medicine',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
    ),
    title: 'General Medicine',
    desc: 'Comprehensive primary care for all ages — from routine check-ups to managing complex health concerns.',
    tag: 'Most Popular',
  },
  {
    slug: 'preventive-care',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
    title: 'Preventive Care',
    desc: 'Annual wellness exams, immunizations, screenings, and personalized health plans to stay ahead of illness.',
    tag: 'Recommended',
  },
  {
    slug: 'chronic-disease',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
    ),
    title: 'Chronic Disease Care',
    desc: 'Ongoing management of diabetes, hypertension, asthma, and other long-term conditions with a personalized approach.',
    tag: null,
  },
  {
    slug: 'mental-health',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
    ),
    title: 'Mental Health',
    desc: 'Compassionate support for anxiety, depression, and stress with counseling and integrated care pathways.',
    tag: null,
  },
  {
    slug: 'pediatrics',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2"/></svg>
    ),
    title: 'Pediatrics',
    desc: 'Gentle, expert care for infants, children, and adolescents — growth tracking, vaccinations, and developmental screenings.',
    tag: null,
  },
  {
    slug: 'womens-health',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="8" r="5"/><path d="M12 13v8M9 18h6"/></svg>
    ),
    title: "Women's Health",
    desc: 'Dedicated care including gynecology, prenatal guidance, hormonal health, and annual well-woman exams.',
    tag: null,
  },
];

const stats = [
  { value: '4,800+', label: 'Patients Served' },
  { value: '18+', label: 'Years in Practice' },
  { value: '97%', label: 'Patient Satisfaction' },
  { value: '12', label: 'Specialist Physicians' },
];

const testimonials = [
  {
    name: 'Maria Gonzalez',
    role: 'Patient since 2019',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&auto=format',
    text: 'Dr. Patel took time to truly listen to my concerns. For the first time in years, I feel like my health is in expert hands. The whole team is welcoming and professional.',
    stars: 5,
  },
  {
    name: 'James Okafor',
    role: 'Patient since 2021',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=80&h=80&fit=crop&auto=format',
    text: "Clarity helped me get my diabetes under control after years of struggling. The chronic disease management program is structured, personalized, and genuinely changed my life.",
    stars: 5,
  },
  {
    name: 'Priya Nair',
    role: 'Patient since 2022',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format',
    text: "Booking is easy, wait times are short, and the staff actually remembers who you are. It's the kind of clinic I'd recommend to anyone looking for real, attentive care.",
    stars: 5,
  },
];

const doctors = [
  {
    name: 'Dr. Ananya Patel',
    specialty: 'General Medicine & Internal Medicine',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&auto=format',
    creds: 'MD, FACP · 15 yrs experience',
  },
  {
    name: 'Dr. Marcus Webb',
    specialty: 'Pediatrics & Family Medicine',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&auto=format',
    creds: 'MD, FAAP · 11 yrs experience',
  },
  {
    name: 'Dr. Sofia Chen',
    specialty: "Women's Health & Preventive Care",
    img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&auto=format',
    creds: 'MD, MPH · 9 yrs experience',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#e8a020" stroke="none">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#fafaf8]">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#e8f7f6] text-[#0d7a74] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0d7a74] animate-pulse inline-block"/>
              Now Accepting New Patients
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-6">
              Healthcare That{' '}
              <span className="italic text-[#0d7a74]">Puts You</span>{' '}
              First
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
              Clarity Medical Clinic delivers compassionate, evidence-based primary care for the whole family. Same-day appointments available — no long waits, no rushed visits.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#e8a020] text-white font-semibold px-6 py-3.5 rounded-full hover:bg-[#d4911b] transition-colors shadow-lg shadow-amber-200"
              >
                Book an Appointment
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link
                to="/services/general-medicine"
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 font-semibold px-6 py-3.5 rounded-full hover:border-[#0d7a74] hover:text-[#0d7a74] transition-colors"
              >
                View Services
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {['photo-1580489944761-15a19d654956', 'photo-1547425260-76bcadfb4f2c', 'photo-1438761681033-6461ffad8d80'].map((id, i) => (
                  <img
                    key={i}
                    src={`https://images.unsplash.com/${id}?w=40&h=40&fit=crop&auto=format`}
                    alt=""
                    className="w-9 h-9 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">4,800+ patients</span> trust Clarity for their care
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&h=750&fit=crop&auto=format"
                alt="Doctor consulting with patient"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"/>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#e8f7f6] flex items-center justify-center text-[#0d7a74]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>
              </div>
              <div>
                <div className="font-semibold text-sm text-gray-900">Same-Day Booking</div>
                <div className="text-xs text-gray-500">Available Mon–Sat</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-[#0d7a74] text-white rounded-2xl shadow-xl p-4">
              <div className="text-2xl font-display font-bold">97%</div>
              <div className="text-xs text-white/80">Patient Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-[#0d7a74]">
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <div className="font-display text-3xl font-semibold mb-1">{value}</div>
              <div className="text-sm text-white/70">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <span className="text-[#0d7a74] font-semibold text-sm tracking-wider uppercase">What We Offer</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-gray-900 mt-2 mb-4">
            Comprehensive Services for Every Need
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
            From routine wellness to complex chronic care, our board-certified physicians cover the full spectrum of primary and preventive healthcare.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <Link
              key={svc.slug}
              to={`/services/${svc.slug}`}
              className="group relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#0d7a74]/30 hover:shadow-lg transition-all duration-200"
            >
              {svc.tag && (
                <span className="absolute top-4 right-4 text-xs font-semibold bg-[#e8f7f6] text-[#0d7a74] px-2.5 py-1 rounded-full">
                  {svc.tag}
                </span>
              )}
              <div className="w-14 h-14 rounded-xl bg-[#e8f7f6] text-[#0d7a74] flex items-center justify-center mb-4 group-hover:bg-[#0d7a74] group-hover:text-white transition-colors duration-200">
                {svc.icon}
              </div>
              <h3 className="font-display font-semibold text-lg text-gray-900 mb-2">{svc.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{svc.desc}</p>
              <div className="flex items-center gap-1 text-[#0d7a74] text-sm font-medium group-hover:gap-2 transition-all">
                Learn more
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#f0f9f8]">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=450&fit=crop&auto=format"
                alt="Modern clinic interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <span className="text-[#0d7a74] font-semibold text-sm tracking-wider uppercase">Why Clarity</span>
            <h2 className="font-display text-3xl font-semibold text-gray-900 mt-2 mb-6">
              Medicine the Way It Was Meant to Be
            </h2>
            <div className="space-y-5">
              {[
                {
                  icon: '🕐',
                  title: 'Same-Day & Next-Day Appointments',
                  desc: 'We respect your time. Book online in minutes and get seen quickly.',
                },
                {
                  icon: '📋',
                  title: 'Continuous, Coordinated Care',
                  desc: 'Your doctor knows your history, your goals, and your family. No starting over every visit.',
                },
                {
                  icon: '💬',
                  title: 'Direct Communication',
                  desc: 'Message your care team anytime via secure patient portal — no phone-tag games.',
                },
                {
                  icon: '🏥',
                  title: 'Specialist Referral Network',
                  desc: 'When specialized care is needed, we connect you to the right expert without the runaround.',
                },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-xl flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-0.5">{title}</div>
                    <div className="text-gray-500 text-sm leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-[#0d7a74] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#095f5a] transition-colors"
            >
              Schedule a Visit
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* MEET THE DOCTORS */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <span className="text-[#0d7a74] font-semibold text-sm tracking-wider uppercase">Our Team</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-gray-900 mt-2 mb-4">
            Meet Your Care Team
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Board-certified physicians with a shared commitment to patient-centered, evidence-based medicine.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {doctors.map((doc) => (
            <div key={doc.name} className="text-center group">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4 bg-gray-200 shadow-lg ring-4 ring-white group-hover:ring-[#0d7a74]/20 transition-all duration-200">
                <img src={doc.img} alt={doc.name} className="w-full h-full object-cover"/>
              </div>
              <h3 className="font-display font-semibold text-lg text-gray-900">{doc.name}</h3>
              <p className="text-[#0d7a74] text-sm font-medium mt-1">{doc.specialty}</p>
              <p className="text-gray-500 text-xs mt-1">{doc.creds}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[#0d7a74] font-semibold text-sm tracking-wider uppercase">Patient Stories</span>
            <h2 className="font-display text-3xl font-semibold text-white mt-2">
              Real Words from Real Patients
            </h2>
          </div>
          <div className="relative">
            <div className="bg-gray-800 rounded-2xl p-8 md:p-10">
              <Stars count={testimonials[activeTestimonial].stars} />
              <p className="text-gray-300 text-lg leading-relaxed mt-5 mb-6 italic font-display">
                "{testimonials[activeTestimonial].text}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonials[activeTestimonial].avatar}
                  alt={testimonials[activeTestimonial].name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-white">{testimonials[activeTestimonial].name}</div>
                  <div className="text-gray-400 text-sm">{testimonials[activeTestimonial].role}</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${i === activeTestimonial ? 'bg-[#0d7a74] w-6' : 'bg-gray-600 hover:bg-gray-400'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-[#e8a020]">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
            Ready to Take Charge of Your Health?
          </h2>
          <p className="text-amber-100 text-lg mb-8">
            Same-day appointments available. Most major insurance plans accepted. Walk-ins welcome.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#0d7a74] font-bold px-8 py-4 rounded-full hover:bg-amber-50 transition-colors shadow-lg text-lg"
            >
              Book Your Visit Today
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <a
              href="tel:+918045678901"
              className="inline-flex items-center gap-2 border-2 border-white/60 text-white font-semibold px-8 py-4 rounded-full hover:border-white hover:bg-white/10 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              Call +91 80 4567 8901
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
