'use client';

import React, { useState, useEffect } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prayerTheme, setPrayerTheme] = useState('');
  const [generatedPrayer, setGeneratedPrayer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    // Set the current path only on the client side to avoid hydration errors
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  // Function to toggle the menu's state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleGeneratePrayer = async () => {
    if (!prayerTheme.trim()) return;

    setIsLoading(true);
    setGeneratedPrayer('');

    try {
      const apiKey = "";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
      
      const systemPrompt = "You are a spiritual guide. Write a short, uplifting, and comforting Christian prayer based on the user's theme. Do not add any introductory or concluding phrases, just the prayer itself.";
      const userQuery = `Write a prayer for the following theme: ${prayerTheme}.`;

      const payload = {
        contents: [{ parts: [{ text: userQuery }] }],
        systemInstruction: {
          parts: [{ text: systemPrompt }]
        },
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (text) {
        setGeneratedPrayer(text);
      } else {
        setGeneratedPrayer("Sorry, I couldn't generate a prayer at this time. Please try again.");
      }

    } catch (error) {
      console.error('Error generating prayer:', error);
      setGeneratedPrayer("An error occurred while generating the prayer. Please check the console for details.");
    } finally {
      setIsLoading(false);
    }
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

      {/* Main Content Sections (formerly in the Home component) */}
      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-[60vh] flex-col items-center justify-center bg-blue-900 bg-cover bg-center py-24 text-white md:min-h-[75vh]"
          style={{ backgroundImage: `url('/Rccg_logo.png')` }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="z-10 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Welcome to RCCG Area 1, Redemption Parish
            </h1>
            <p className="mt-4 max-w-lg text-lg sm:text-xl mx-auto">
              A place of worship, fellowship, and divine encounter. Join us as we grow in faith.
            </p>
            <button className="mt-8 rounded-full bg-red-600 px-8 py-3 font-semibold transition hover:bg-red-700">
              Join Our Service
            </button>
          </div>
        </section>

        {/* About Us Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-center text-3xl font-bold text-gray-800">Our Mission</h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-gray-600">
              We are a family of believers committed to spreading the gospel of Jesus Christ. Our mission is to raise disciples who will impact their communities and nations for God. We are a part of the global RCCG family, led by our General Overseer, Pastor E.A. Adeboye.
            </p>
          </div>
        </section>

        {/* Ministries Section */}
<section className="bg-gray-50 py-16">
  <div className="container mx-auto px-6">
    <h2 className="text-center text-3xl font-bold text-gray-800">Our Ministries</h2>
    <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-3">
      {/* Evangelism Card */}
      <div className="relative flex flex-col items-center justify-center rounded-lg p-6 text-center shadow-lg overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url('/evange.png')` }}
        ></div>
        <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
        <div className="relative z-10 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="mx-auto h-12 w-12 text-white" viewBox="0 0 20 20">
            <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1 1 0 011.006-.554l.06-.013c.691-.157 1.458-.236 2.213-.236h.536a.5.5 0 01.5.5v1.5a.5.5 0 01-.5.5h-.536c-.755 0-1.522-.079-2.213-.236l-.06-.013a1 1 0 01-.554-1.006zM10 16a6 6 0 100-12 6 6 0 000 12z" />
          </svg>
          <h3 className="mt-4 text-xl font-semibold">Evangelism</h3>
          <p className="mt-2 text-white/90">
            Spreading the Word of God through local and global outreach.
          </p>
        </div>
      </div>
      {/* Youth & Teens Card */}
      <div className="relative flex flex-col items-center justify-center rounded-lg p-6 text-center shadow-lg overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url('/yaya.jpg')` }}
        ></div>
        <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
        <div className="relative z-10 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="mx-auto h-12 w-12 text-white" viewBox="0 0 20 20">
            <path d="M5 2h10a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2zm0 2v12h10V4H5zM10 5a1 1 0 011 1v4a1 1 0 01-2 0V6a1 1 0 011-1z" />
          </svg>
          <h3 className="mt-4 text-xl font-semibold">Youth & Teens</h3>
          <p className="mt-2 text-white/90">
            Building a generation of young leaders and passionate followers of Christ.
          </p>
        </div>
      </div>
      {/* Children's Ministry Card */}
      <div className="relative flex flex-col items-center justify-center rounded-lg p-6 text-center shadow-lg overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url('/child.jpg')` }}
        ></div>
        <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
        <div className="relative z-10 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="mx-auto h-12 w-12 text-white" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path d="M.5 10a9.5 9.5 0 1019 0 9.5 9.5 0 00-19 0zM10 1a9 9 0 110 18 9 9 0 010-18z" />
          </svg>
          <h3 className="mt-4 text-xl font-semibold">Children's Ministry</h3>
          <p className="mt-2 text-white/90">
            Nurturing the spiritual growth of our children in a fun and safe environment.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Divine Inspiration Section powered by Gemini API */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-xl">
              <h2 className="text-center text-3xl font-bold text-gray-800">
                Divine Inspiration ✨
              </h2>
              <p className="mx-auto mt-4 text-center text-gray-600">
                Receive a personalized prayer. Tell us what's on your heart, and we will generate a prayer for you.
              </p>
              <div className="mt-8 flex flex-col items-center">
                <textarea
                  className="w-full rounded-md border-2 border-gray-300 p-4 text-gray-800 focus:border-blue-500 focus:outline-none"
                  rows={4}
                  placeholder="e.g., 'strength during a difficult time' or 'thanksgiving for blessings'"
                  value={prayerTheme}
                  onChange={(e) => setPrayerTheme(e.target.value)}
                ></textarea>
                <button
                  onClick={handleGeneratePrayer}
                  disabled={isLoading}
                  className={`mt-4 w-full rounded-full px-8 py-3 font-semibold transition ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <svg className="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span className="ml-2">Generating...</span>
                    </div>
                  ) : (
                    "Generate Prayer"
                  )}
                </button>
              </div>
              {generatedPrayer && (
                <div className="mt-8 rounded-lg bg-gray-50 p-6 shadow-md">
                  <h3 className="text-center text-xl font-semibold text-gray-800">Your Prayer</h3>
                  <p className="mt-4 text-gray-600 text-center">{generatedPrayer}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Service Times & Location */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-center text-3xl font-bold text-gray-800">Service Times & Location</h2>
            <div className="mt-8 flex flex-col items-center justify-center gap-8 md:flex-row md:items-start">
              <div className="w-full rounded-lg bg-gray-50 p-6 shadow-md md:w-1/2"
               style={{ backgroundImage: `url('/bible-study.png')` }}>
                <h3 className="text-xl font-semibold text-gray-800">Weekly Services</h3>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>Sunday Service: 9:00 AM - 12:00 PM</li>
                  <li>Mid-Week Service: Wednesday, 6:00 PM - 7:30 PM</li>
                  <li>Digging Deep: Tuesday, 6:00 PM - 7:30 PM</li>
                </ul>
              </div>
              <div className="w-full rounded-lg bg-gray-50 p-6 shadow-md md:w-1/2">
                <h3 className="text-xl font-semibold text-gray-800">Our Location</h3>
                <p className="mt-4 text-gray-600">
                  123 Church Avenue, Redemption Estate,
                  <br />
                  Abeokuta, Ogun State.
                </p>
                <div className="mt-4 h-48 w-full rounded-lg bg-gray-300">
                  {/* Placeholder for map */}
                </div>
              </div>
            </div>
          </div>
        </section>
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
