'use client';

import React, { useState, useEffect } from 'react';

// Contact Us page content
const ContactUsPageContent = () => (
  <section className="bg-gray-100 py-16">
    <div className="container mx-auto px-6">
      <h2 className="text-center text-3xl font-bold text-gray-800">Get in Touch</h2>
      <p className="mx-auto mt-4 max-w-3xl text-center text-gray-600">
        We'd love to hear from you. Please fill out the form below and we will get back to you as soon as possible.
      </p>
      <form className="mx-auto mt-8 max-w-xl rounded-lg bg-white p-8 shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input type="text" id="name" name="name" className="mt-1 w-full rounded-md border p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input type="email" id="email" name="email" className="mt-1 w-full rounded-md border p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700">Message</label>
          <textarea id="message" name="message" rows="4" className="mt-1 w-full rounded-md border p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></textarea>
        </div>
        <button type="submit" className="w-full rounded-md bg-blue-900 px-4 py-2 font-semibold text-white transition hover:bg-blue-800">
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export default function Contact() {
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
        <ContactUsPageContent />
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
