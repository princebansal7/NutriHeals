'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import LogoIcon from './LogoIcon';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Plans', href: '#plans' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const toolsLinks = [
  { name: 'BMI Calculator', href: '/tools/bmi', available: true },
  { name: 'Protein Calculator', href: '/tools/protein', available: true },
  { name: 'Daily Calorie', href: '/tools/calorie', available: true },
  { name: 'Ideal Weight', href: '/tools/ideal-weight', available: true },
];

function CalcIcon({ href }: { href: string }) {
  const p = {
    viewBox: '0 0 24 24' as const,
    fill: 'none' as const,
    stroke: 'currentColor' as const,
    strokeWidth: '1.75',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className: 'w-[17px] h-[17px]',
  };
  if (href === '/tools/bmi') return (
    // Speedometer / gauge
    <svg {...p}>
      <path d="M5 16a7 7 0 1 1 14 0" />
      <path d="M5 16h14" />
      <path d="M12 16l-3.5-6" />
      <circle cx="12" cy="16" r="1.25" fill="currentColor" stroke="none" />
    </svg>
  );
  if (href === '/tools/protein') return (
    // Dumbbell
    <svg {...p}>
      <path d="M6.5 8v8" />
      <path d="M17.5 8v8" />
      <path d="M4.5 10v4" />
      <path d="M19.5 10v4" />
      <path d="M6.5 12h11" />
    </svg>
  );
  if (href === '/tools/calorie') return (
    // Flame
    <svg {...p}>
      <path d="M12 22c3.5 0 6-2.7 6-6.5 0-3.5-2.5-6-4-7.5-.5 2-1.5 3-1.5 3S12 9 10.5 6c0 3-1.5 4.5-1.5 7 0 0-1.5-.5-1.5-2.5C7 15 8 22 12 22z" />
    </svg>
  );
  // ideal-weight — bullseye / target
  return (
    <svg {...p}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setToolsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const isToolsActive = pathname.startsWith('/tools');

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('/')) {
      router.push(href);
      return;
    }
    if (pathname !== '/') {
      router.push(`/${href}`);
      return;
    }
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  function NavBtn({ link }: { link: { name: string; href: string } }) {
    const isActive = link.href.startsWith('/') && pathname === link.href;
    return (
      <button
        onClick={() => scrollToSection(link.href)}
        className={`transition-colors relative group text-sm ${isActive ? 'text-primary' : 'text-text-secondary hover:text-primary'}`}
      >
        {link.name}
        <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
      </button>
    );
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/70 backdrop-blur-lg shadow-sm border-b border-white/60 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href={pathname === '/' ? '#home' : '/'} className="flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: 8 }}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm"
            >
              <LogoIcon className="w-7 h-7" />
            </motion.div>
            <span className="text-2xl font-playfair font-bold text-primary">NutriHeals</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">

            {/* All nav links */}
            {navLinks.map((link) => <NavBtn key={link.name} link={link} />)}

            {/* Calculators Dropdown — last before CTA */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setToolsOpen(true)}
              onMouseLeave={() => setToolsOpen(false)}
            >
              <button
                onClick={() => setToolsOpen((o) => !o)}
                className={`flex items-center gap-1 text-sm transition-colors relative group ${
                  isToolsActive ? 'text-primary' : 'text-text-secondary hover:text-primary'
                }`}
              >
                Calculators
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${toolsOpen ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${isToolsActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </button>

              <AnimatePresence>
                {toolsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full right-0 mt-3 w-60 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50"
                  >
                    <div className="py-2">
                      {toolsLinks.map((tool) => (
                        <button
                          key={tool.name}
                          onClick={() => {
                            if (!tool.available) return;
                            router.push(tool.href);
                            setToolsOpen(false);
                          }}
                          disabled={!tool.available}
                          className={`flex items-center gap-3 w-full px-4 py-2.5 text-left text-sm transition-colors
                            ${tool.available
                              ? `${pathname === tool.href ? 'bg-green-50 text-primary' : 'text-gray-700 hover:bg-green-50 hover:text-primary'}`
                              : 'text-gray-400 cursor-not-allowed opacity-60'
                            }`}
                        >
                          <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${pathname === tool.href ? 'bg-primary text-white' : 'bg-green-50 text-primary'}`}>
                            <CalcIcon href={tool.href} />
                          </div>
                          <span className="flex-1 font-medium">{tool.name}</span>
                          {!tool.available && (
                            <span className="text-[10px] font-semibold bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded-full">
                              Soon
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button onClick={() => scrollToSection('#contact')} className="btn-primary">
              Book Consultation
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/80 backdrop-blur-lg border border-white/60 shadow-lg mt-3 mx-4 rounded-2xl overflow-hidden"
          >
            <div className="p-4 space-y-1">
              {/* All nav links */}
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-4 py-2.5 text-text-secondary hover:text-primary hover:bg-(--gradient-start) rounded-xl transition-all"
                >
                  {link.name}
                </button>
              ))}

              {/* Mobile Calculators accordion — last */}
              <div>
                <button
                  onClick={() => setMobileToolsOpen((o) => !o)}
                  className={`flex items-center justify-between w-full px-4 py-2.5 rounded-xl transition-all ${
                    isToolsActive ? 'text-primary bg-green-50' : 'text-text-secondary hover:text-primary hover:bg-(--gradient-start)'
                  }`}
                >
                  <span>Calculators</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${mobileToolsOpen ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {mobileToolsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 py-1 space-y-0.5">
                        {toolsLinks.map((tool) => (
                          <button
                            key={tool.name}
                            onClick={() => {
                              if (!tool.available) return;
                              router.push(tool.href);
                              setIsMobileMenuOpen(false);
                            }}
                            disabled={!tool.available}
                            className={`flex items-center gap-2.5 w-full px-4 py-2 rounded-xl text-sm transition-all
                              ${tool.available
                                ? `${pathname === tool.href ? 'bg-green-50 text-primary' : 'text-text-secondary hover:text-primary hover:bg-(--gradient-start)'}`
                                : 'text-text-muted opacity-60 cursor-not-allowed'
                              }`}
                          >
                            <div className="w-6 h-6 rounded-md flex items-center justify-center shrink-0 bg-green-50 text-primary">
                              <CalcIcon href={tool.href} />
                            </div>
                            <span className="flex-1">{tool.name}</span>
                            {!tool.available && (
                              <span className="text-[10px] bg-gray-100 px-1.5 py-0.5 rounded-full">Soon</span>
                            )}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="pt-2">
                <button onClick={() => scrollToSection('#contact')} className="btn-primary w-full">
                  Book Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
