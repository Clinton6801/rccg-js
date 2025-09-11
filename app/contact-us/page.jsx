import React from 'react';
const Contact = () => {
  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Tailwind CSS CDN */}
      <script src="https://cdn.tailwindcss.com"></script>
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
                <a href="/resources" className="rounded-full px-4 py-2 transition hover:bg-gray-200">
                  Resources
                </a>
              </li>
              <li>
                <a href="/contact-us" className="rounded-full px-4 py-2 transition hover:bg-gray-200 bg-gray-200">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Contact />
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
