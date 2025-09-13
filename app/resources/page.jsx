'use client';

import React, { useState, useEffect } from 'react';

// Resources page content
const ResourcesPageContent = () => (
  
<div className="bg-white font-sans text-gray-800">
  {/* Tailwind CSS CDN */}
  <script src="https://cdn.tailwindcss.com"></script>
  <section className="bg-gray-100 py-16">
    <div className="container mx-auto px-6">
      <h2 className="text-center text-3xl font-bold text-gray-800">Study Resources</h2>
      <p className="mx-auto mt-4 max-w-3xl text-center text-gray-600">
        Access the latest Sunday School, House Fellowship, and daily devotionals here.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="rounded-lg bg-white p-6 text-center shadow-lg">
          <h3 className="mt-4 text-xl font-semibold">Sunday School Manual</h3>
          <p className="mt-2 text-gray-600">
            Download the current Sunday School manual for in-depth study.
          </p>
          <button className="mt-4 rounded-full bg-red-600 px-6 py-2 font-semibold text-white transition hover:bg-red-700">
            Download
          </button>
        </div>

        <div className="rounded-lg bg-white p-6 text-center shadow-lg">
          <h3 className="mt-4 text-xl font-semibold">House Fellowship Manual</h3>
          <p className="mt-2 text-gray-600">
            Stay up-to-date with the weekly House Fellowship manual.
          </p>
          <button className="mt-4 rounded-full bg-red-600 px-6 py-2 font-semibold text-white transition hover:bg-red-700">
            Download
          </button>
        </div>

        <div className="rounded-lg bg-white p-6 text-center shadow-lg">
          <h3 className="mt-4 text-xl font-semibold">Daily Devotional</h3>
          <p className="mt-2 text-gray-600">
            Get your daily dose of inspiration and biblical insights.
          </p>
          <button className="mt-4 rounded-full bg-red-600 px-6 py-2 font-semibold text-white transition hover:bg-red-700">
            Read Online
          </button>
        </div>
      </div>
    </div>
  </section>
</div>
);
export default function Resources() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    // Set the current path on component mount
    setCurrentPath(window.location.pathname);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`bg-white font-sans text-gray-800 ${isMenuOpen ? 'overflow-hidden' : ''}`}>
      <script src="https://cdn.tailwindcss.com"></script>

      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-900">
            RCCG Area 1
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <a href="/" className={`rounded-full px-4 py-2 transition hover:bg-gray-200 ${currentPath === '/' ? 'bg-gray-200' : ''}`}>
                  Home
                </a>
              </li>
              <li>
                <a href="/resources" className={`rounded-full px-4 py-2 transition hover:bg-gray-200 ${currentPath === '/resources' ? 'bg-gray-200' : ''}`}>
                  Resources
                </a>
              </li>
              <li>
                <a href="/contact-us" className={`rounded-full px-4 py-2 transition hover:bg-gray-200 ${currentPath === '/contact-us' ? 'bg-gray-200' : ''}`}>
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Blurred overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm transition-all duration-300"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile Menu Dropdown with slide-in transition */}
      <nav className={`md:hidden fixed top-[60px] left-0 right-0 z-40 bg-white shadow-md transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <ul className="flex flex-col items-center py-4 space-y-4">
          <li>
            <a onClick={toggleMenu} href="/" className="block px-4 py-2 text-lg rounded-full hover:bg-gray-200 w-full text-center">Home</a>
          </li>
          <li>
            <a onClick={toggleMenu} href="/resources" className="block px-4 py-2 text-lg rounded-full hover:bg-gray-200 w-full text-center">Resources</a>
          </li>
          <li>
            <a onClick={toggleMenu} href="/contact-us" className="block px-4 py-2 text-lg rounded-full hover:bg-gray-200 w-full text-center">Contact Us</a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main>
        <ResourcesPageContent />
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 py-8 text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} RCCG Area 1. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
