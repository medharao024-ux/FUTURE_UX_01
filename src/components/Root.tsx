import { Outlet, NavLink, Link, useLocation } from 'react-router';
import { useState, useEffect } from 'react';

export default function Root() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="bg-[#0d7a74] text-white text-sm py-2 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              +91 80 4567 8901
            </span>
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              hello@claritymedical.com
            </span>
          </div>
          <span className="text-white/80">Mon–Fri 8am–6pm · Sat 9am–2pm · Bengaluru, Karnataka</span>
        </div>
      </div>

      {/* Main nav */}
      <header className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-[#0d7a74] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z"/></svg>
            </div>
            <div>
              <span className="font-display font-600 text-xl text-gray-900 leading-none block">Clarity</span>
              <span className="text-xs text-[#0d7a74] font-medium tracking-wide">MEDICAL CLINIC</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { to: '/', label: 'Home' },
              { to: '/services/general-medicine', label: 'Services' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${isActive ? 'text-[#0d7a74]' : 'text-gray-600 hover:text-gray-900'}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-[#e8a020] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#d4911b] transition-colors"
            >
              Book Appointment
            </Link>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {menuOpen
                  ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                  : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-4">
            {[
              { to: '/', label: 'Home' },
              { to: '/services/general-medicine', label: 'Services' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `block py-3 text-sm font-medium border-b border-gray-50 ${isActive ? 'text-[#0d7a74]' : 'text-gray-700'}`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-4 w-full flex justify-center bg-[#e8a020] text-white text-sm font-semibold px-5 py-3 rounded-full"
            >
              Book Appointment
            </Link>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#0d7a74] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z"/></svg>
              </div>
              <div>
                <span className="font-display font-600 text-lg text-white leading-none block">Clarity Medical Clinic</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Compassionate, evidence-based care for every stage of life. Your health is our priority.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3 text-gray-300 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['General Medicine', 'Preventive Care', 'Chronic Disease Mgmt', 'Mental Health', 'Pediatrics'].map(s => (
                <li key={s}><Link to="/services/general-medicine" className="hover:text-white transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3 text-gray-300 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>42 MG Road, Koramangala</li>
              <li>Bengaluru, Karnataka 560034</li>
              <li className="pt-1">+91 98765 43210</li>
              <li>hello@claritymedical.in</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 px-4 py-4 text-center text-xs text-gray-600 max-w-6xl mx-auto">
          © 2026 Clarity Medical Clinic · All rights reserved
        </div>
      </footer>
    </div>
  );
}
