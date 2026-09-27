import React from 'react';

export default function App() {
  return (
    <div className="bg-white text-slate-700 font-sans min-h-screen selection:bg-slate-200 selection:text-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

// 1. NAVBAR COMPONENT
function Navbar() {
  return (
    <header className="bg-slate-900/95 text-white sticky top-0 z-50 shadow-md backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-3.5 cursor-pointer group">
            <div className="w-11 h-11 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl flex items-center justify-center text-white shadow-md group-hover:border-slate-500 transition-all duration-300">
              <svg className="w-6 h-6 text-slate-200" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3m15.5-6.5L12 3 5.5 9.5M18.5 17.5L12 21l-6.5-3.5"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 12h17"></path>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-widest text-white leading-none">
                LAW <span className="text-slate-400 font-light">&</span> CO
              </span>
              <span className="text-[9px] text-slate-400 tracking-[0.25em] uppercase font-semibold mt-1">
                Law Firm & Consultants
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8 items-center text-sm font-medium">
            <a href="#home" className="text-slate-300 hover:text-white transition-colors duration-200 py-2 border-b-2 border-transparent hover:border-white">Home</a>
            <a href="#services" className="text-slate-300 hover:text-white transition-colors duration-200 py-2 border-b-2 border-transparent hover:border-white">Practice Areas</a>
            <a href="#about" className="text-slate-300 hover:text-white transition-colors duration-200 py-2 border-b-2 border-transparent hover:border-white">About Us</a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors duration-200 py-2 border-b-2 border-transparent hover:border-white">Contact</a>
            
            {/* WhatsApp Strict Number with Auto Greeting Message */}
            <a href="https://wa.me/923075540137?text=Hello%20LAW%20%26%20CO,%20I%20would%20like%20to%20consult%20regarding%20a%20legal%20matter." target="_blank" rel="noopener noreferrer" className="bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-wider px-4.5 py-2.5 rounded-xl transition-all duration-200 flex items-center space-x-2 border border-slate-700 shadow-sm hover:shadow">
              <svg className="w-4 h-4 text-emerald-400 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.124-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>WhatsApp Consult</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

// 2. HERO COMPONENT
function Hero() {
  return (
    <section id="home" className="bg-slate-900 text-white py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block bg-slate-800 text-slate-300 border border-slate-700 text-xs px-3.5 py-1.5 rounded-full font-bold uppercase tracking-widest mb-6 shadow-sm">
            Trusted Legal Representation
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 leading-tight text-white">
            Strategic Legal Solutions for <span className="text-slate-300 underline decoration-slate-600 decoration-2 underline-offset-8">Businesses & Families</span>
          </h1>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed font-normal">
            Providing expert legal counsel, tax advisory, civil litigation, and criminal defense with absolute professionalism, integrity, and confidentiality.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#contact" className="bg-white hover:bg-slate-100 text-slate-950 font-bold px-8 py-4 rounded-xl text-center transition-all duration-200 shadow-lg hover:-translate-y-0.5">
              Book Consultation
            </a>
            <a href="#services" className="border border-slate-700 hover:border-slate-500 bg-slate-900/50 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-xl text-center transition-all duration-200">
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// 3. SERVICES COMPONENT
function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-extrabold text-slate-500 tracking-[0.2em] mb-3">Our Expertise</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Core Practice Areas</h3>
          <p className="text-slate-600 mt-3 text-base">Comprehensive legal protection tailored to your personal and commercial needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-50/50 border border-slate-200/80 p-8 rounded-2xl hover:bg-white hover:shadow-xl hover:border-slate-300 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-slate-100 text-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 shadow-sm">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-950 transition-colors">Tax & Corporate Law</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                Expert guidance on income tax filing, FBR notices resolution, company registration, and business contracts drafting.
              </p>
            </div>
            <a href="#contact" className="text-slate-900 font-bold text-sm hover:text-slate-600 flex items-center space-x-2 pt-4 border-t border-slate-100 group-hover:border-slate-200 transition-colors">
              <span>Inquire Now</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>

          <div className="bg-slate-50/50 border border-slate-200/80 p-8 rounded-2xl hover:bg-white hover:shadow-xl hover:border-slate-300 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-slate-100 text-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 shadow-sm">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-950 transition-colors">Family & Civil Litigation</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                Sensitive and effective handling of family disputes, khula, child custody, inheritance certificates, and property matters.
              </p>
            </div>
            <a href="#contact" className="text-slate-900 font-bold text-sm hover:text-slate-600 flex items-center space-x-2 pt-4 border-t border-slate-100 group-hover:border-slate-200 transition-colors">
              <span>Inquire Now</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>

          <div className="bg-slate-50/50 border border-slate-200/80 p-8 rounded-2xl hover:bg-white hover:shadow-xl hover:border-slate-300 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-slate-100 text-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 shadow-sm">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-950 transition-colors">Criminal Defense</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                Strong court representation, pre/post-arrest bails, trial defense, and expert handling of cybercrime related complaints.
              </p>
            </div>
            <a href="#contact" className="text-slate-900 font-bold text-sm hover:text-slate-600 flex items-center space-x-2 pt-4 border-t border-slate-100 group-hover:border-slate-200 transition-colors">
              <span>Inquire Now</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// 4. ABOUT COMPONENT
function About() {
  return (
    <section id="about" className="py-24 bg-slate-100/70 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-xs uppercase font-extrabold text-slate-500 tracking-[0.2em] mb-3">Why Hire LAW & CO</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Dedicated Advocates Committed to Your Success</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We understand that legal matters can be stressful. Our mission at LAW & CO is to provide clear, honest, and robust legal advice so you can make informed decisions with peace of mind.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-slate-800 mt-1 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-slate-700 font-semibold">100% Client Confidentiality & Professional Ethics</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-slate-800 mt-1 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-slate-700 font-semibold">Transparent Case Evaluation & Realistic Legal Strategy</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-slate-800 mt-1 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-slate-700 font-semibold">Prompt Response & Dedicated Personal Attention</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-900 p-8 sm:p-10 rounded-3xl text-white shadow-2xl border border-slate-800">
            <h4 className="text-2xl font-bold mb-3 text-white">Need Immediate Legal Help?</h4>
            <p className="text-slate-300 mb-8 text-sm leading-relaxed">Reach out to our chambers today for an initial consultation regarding your case.</p>
            <div className="space-y-5 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-800 border border-slate-700 text-white rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block uppercase tracking-wider font-semibold">Call Us Directly</span>
                  <span className="font-bold text-white text-base">+92 307 5540137</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-800 border border-slate-700 text-white rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block uppercase tracking-wider font-semibold">Email Us</span>
                  <span className="font-bold text-white text-base">khanp691@gmail.com</span>
                </div>
              </div>
            </div>
            
            <a href="https://wa.me/923075540137?text=Hello%20LAW%20%26%20CO,%20I%20need%20legal%20consultation." target="_blank" rel="noopener noreferrer" className="block bg-white hover:bg-slate-100 text-slate-900 font-bold text-center py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg">
              Chat on WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// 5. CONTACT COMPONENT (With Formspree URL xbglpwkn)
function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase font-extrabold text-slate-500 tracking-[0.2em] mb-3">Get In Touch</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Schedule a Consultation</h3>
          <p className="text-slate-600 mt-3 text-base">Fill out the form below with your case details and LAW & CO will get back to you promptly.</p>
        </div>

        <form action="https://formspree.io/f/xbglpwkn" method="POST" className="bg-slate-50/70 border border-slate-200/80 p-8 sm:p-10 rounded-3xl shadow-xl space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase font-bold text-slate-700 tracking-wider mb-2">Full Name</label>
              <input type="text" name="name" placeholder="Enter your name" className="w-full px-4 py-3.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-white transition-all text-sm" required />
            </div>
            <div>
              <label className="block text-xs uppercase font-bold text-slate-700 tracking-wider mb-2">Phone Number / WhatsApp</label>
              <input type="text" name="phone" placeholder="e.g., 03001234567" className="w-full px-4 py-3.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-white transition-all text-sm" required />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase font-bold text-slate-700 tracking-wider mb-2">Email Address</label>
              <input type="email" name="email" defaultValue="khanp691@gmail.com" placeholder="your@email.com" className="w-full px-4 py-3.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-white transition-all text-sm" />
            </div>
            <div>
              <label className="block text-xs uppercase font-bold text-slate-700 tracking-wider mb-2">Select Practice Area</label>
              <select name="service" className="w-full px-4 py-3.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-white transition-all text-sm">
                <option>Tax & Corporate Law</option>
                <option>Family & Civil Litigation</option>
                <option>Criminal Defense</option>
                <option>Other Legal Consultation</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase font-bold text-slate-700 tracking-wider mb-2">Case Summary / Message</label>
            <textarea name="message" rows="4" placeholder="Briefly describe your legal matter..." className="w-full px-4 py-3.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-white transition-all text-sm"></textarea>
          </div>

          <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg text-base">
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}

// 6. FOOTER COMPONENT
function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-slate-300">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3m15.5-6.5L12 3 5.5 9.5M18.5 17.5L12 21l-6.5-3.5"></path>
            </svg>
          </div>
          <span className="text-white font-bold tracking-wider">LAW & CO</span>
        </div>
        <p className="text-center text-xs text-slate-500 max-w-md leading-relaxed">
          Disclaimer: The information on this website is for general informational purposes only and does not constitute formal legal advice.
        </p>
        <p className="text-xs text-slate-500">&copy; 2026 LAW & CO. All Rights Reserved.</p>
      </div>
    </footer>
  );
}