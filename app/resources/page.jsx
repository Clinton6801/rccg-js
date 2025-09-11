import React from 'react';

const Resources = () => {
  return (
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
};
export default function App() {
  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Tailwind CSS CDN */}
      <script src="https://cdn.tailwindcss.com"></script>

      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-900">
            RCCG Area 1
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="rounded-full px-4 py-2 transition hover:bg-gray-200 ">
                  Home
                </a>
              </li>
              <li>
                <a href="/resources" className="rounded-full px-4 py-2 transition hover:bg-gray-200 bg-gray-200">
                  Resources
                </a>
              </li>
              <li>
                <a href="/contact-us" className="rounded-full px-4 py-2 transition hover:bg-gray-200">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Resources />
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
