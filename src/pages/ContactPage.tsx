import { useState } from 'react';

const services = [
  'General Medicine',
  'Preventive Care',
  'Chronic Disease Management',
  'Mental Health',
  'Pediatrics',
  "Women's Health",
  'Other',
];

const timeSlots = [
  'Morning (8am–12pm)',
  'Afternoon (12pm–4pm)',
  'Evening (4pm–6pm)',
];

const insurers = [
  'Blue Cross Blue Shield',
  'Aetna',
  'Cigna',
  'UnitedHealthcare',
  'Medicare',
  'Medicaid',
  'Self-Pay / Uninsured',
  'Other',
];

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    service: '',
    preferredTime: '',
    insurance: '',
    newPatient: 'yes',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-[#e8f7f6] flex items-center justify-center mx-auto mb-6">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0d7a74" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h2 className="font-display text-3xl font-semibold text-gray-900 mb-3">Request Received!</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Thank you, <strong>{form.firstName}</strong>. Our care coordinator will reach out within 1 business hour to confirm your appointment. Check your email at <strong>{form.email}</strong> for a confirmation.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ firstName: '', lastName: '', email: '', phone: '', dob: '', service: '', preferredTime: '', insurance: '', newPatient: 'yes', message: '' }); }}
            className="bg-[#0d7a74] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#095f5a] transition-colors"
          >
            Book Another Appointment
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Page header */}
      <section className="bg-[#0d7a74] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-white/60 text-sm font-semibold tracking-wider uppercase">Get in Touch</span>
            <h1 className="font-display text-4xl font-semibold text-white mt-2 mb-4">
              Book Your Appointment
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Fill out the form and our team will confirm your appointment within 1 business hour. Same-day availability most days.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end">
            {[
              { icon: '📞', label: 'Call Us', value: '+91 80 4567 8901', href: 'tel:5552347890' },
              { icon: '✉️', label: 'Email', value: 'hello@claritymedical.com', href: 'mailto:hello@claritymedical.com' },
            ].map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-3 hover:bg-white/20 transition-colors"
              >
                <span className="text-2xl">{icon}</span>
                <div>
                  <div className="text-white/60 text-xs">{label}</div>
                  <div className="text-white font-medium text-sm">{value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-12">
        {/* FORM */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-1">Appointment Request</h2>
            <p className="text-gray-500 text-sm mb-8">All fields marked * are required. We respond within 1 business hour.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">First Name *</label>
                  <input
                    required
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Maria"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d7a74]/30 focus:border-[#0d7a74] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Last Name *</label>
                  <input
                    required
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Gonzalez"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d7a74]/30 focus:border-[#0d7a74] transition-all"
                  />
                </div>
              </div>

              {/* Contact row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="maria@email.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d7a74]/30 focus:border-[#0d7a74] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone *</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(512) 000-0000"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d7a74]/30 focus:border-[#0d7a74] transition-all"
                  />
                </div>
              </div>

              {/* DOB + New Patient */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Date of Birth *</label>
                  <input
                    required
                    type="date"
                    name="dob"
                    value={form.dob}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d7a74]/30 focus:border-[#0d7a74] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Are you a new patient? *</label>
                  <div className="flex gap-3 mt-2">
                    {['yes', 'no'].map((v) => (
                      <label key={v} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="newPatient"
                          value={v}
                          checked={form.newPatient === v}
                          onChange={handleChange}
                          className="accent-[#0d7a74] w-4 h-4"
                        />
                        <span className="text-sm text-gray-700 capitalize">{v === 'yes' ? 'Yes, new patient' : 'No, returning'}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service + Time */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Service Needed *</label>
                  <select
                    required
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d7a74]/30 focus:border-[#0d7a74] transition-all bg-white"
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Preferred Time *</label>
                  <select
                    required
                    name="preferredTime"
                    value={form.preferredTime}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d7a74]/30 focus:border-[#0d7a74] transition-all bg-white"
                  >
                    <option value="">Select a time...</option>
                    {timeSlots.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              {/* Insurance */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Insurance Provider</label>
                <select
                  name="insurance"
                  value={form.insurance}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d7a74]/30 focus:border-[#0d7a74] transition-all bg-white"
                >
                  <option value="">Select insurance...</option>
                  {insurers.map((i) => <option key={i}>{i}</option>)}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Additional Notes</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your symptoms, concerns, or anything helpful for your visit..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0d7a74]/30 focus:border-[#0d7a74] transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center gap-2 bg-[#e8a020] text-white font-bold py-4 rounded-full hover:bg-[#d4911b] transition-colors disabled:opacity-70 text-base shadow-lg shadow-amber-100"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeOpacity=".3"/><path d="M12 3a9 9 0 019 9"/></svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    Request Appointment
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-400">
                By submitting, you agree to our{' '}
                <span className="underline cursor-pointer hover:text-gray-600">Privacy Policy</span>.
                {' '}We never sell your data.
              </p>
            </form>
          </div>
        </div>

        {/* SIDEBAR INFO */}
        <div className="space-y-6">
          {/* Hours */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-display font-semibold text-lg text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-[#0d7a74]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </span>
              Clinic Hours
            </h3>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-gray-50">
                {[
                  ['Monday – Friday', '8:00 am – 6:00 pm'],
                  ['Saturday', '9:00 am – 2:00 pm'],
                  ['Sunday', 'Closed'],
                ].map(([day, hours]) => (
                  <tr key={day}>
                    <td className="py-2.5 text-gray-600 font-medium">{day}</td>
                    <td className="py-2.5 text-gray-900 text-right">{hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 flex items-center gap-2 text-xs text-[#0d7a74] bg-[#e8f7f6] rounded-lg px-3 py-2">
              <span className="w-2 h-2 rounded-full bg-[#0d7a74] animate-pulse"/>
              Urgent care slots available Mon–Sat
            </div>
          </div>

          {/* Location */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-display font-semibold text-lg text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-[#0d7a74]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </span>
              Our Location
            </h3>
            <div className="rounded-xl overflow-hidden bg-gray-100 h-36 mb-4 relative">
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=200&fit=crop&auto=format"
                alt="Clinic building"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur rounded-lg px-3 py-2 text-xs font-semibold text-gray-700 shadow">
                  📍 42 MG Road, Bengaluru, Karnataka
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600">42 MG Road, Koramangala<br/>Bengaluru, Karnataka 560034</p>
            <p className="text-xs text-gray-400 mt-2">Free parking available. Accessible entrance on MG Road side.</p>
          </div>

          {/* Trust badges */}
          <div className="bg-[#f0f9f8] rounded-2xl border border-[#0d7a74]/10 p-6">
            <h3 className="font-semibold text-sm text-gray-900 mb-4">Why Patients Choose Us</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              {[
                '✓ Board-certified physicians',
                '✓ Most insurances accepted',
                '✓ HIPAA-compliant patient portal',
                '✓ On-site lab & imaging referrals',
                '✓ Spanish-speaking staff available',
                '✓ 4.9★ average on Google Reviews',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#0d7a74]">{item.slice(0, 1)}</span>
                  <span>{item.slice(2)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
