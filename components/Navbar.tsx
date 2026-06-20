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
  { name: 'BMI Calculator', href: '/tools/bmi', icon: '📊', available: true },
  { name: 'Protein Calculator', href: '/tools/protein', icon: '🥩', available: true },
  { name: 'Daily Calorie', href: '/tools/calorie', icon: '🔥', available: true },
  { name: 'Ideal Weight', href: '/tools/ideal-weight', icon: '⚖️', available: true },
];

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
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
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
                          <span className="text-base">{tool.icon}</span>
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
            className="md:hidden glass mt-3 mx-4 rounded-2xl overflow-hidden"
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
                            <span>{tool.icon}</span>
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
