import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-400 via-red-500 to-red-600 text-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-red-500 to-red-700 text-white py-6">
          <h1 
            className="text-5xl font-extrabold text-center tracking-tight"
            data-aos="fade-down"
          >
            Get In Touch
          </h1>
          <p 
            className="text-center text-white/80 mt-2"
            data-aos="fade-up"
          >
            We'd love to hear from you. Send us a message or connect through our contact details.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-0">
          {/* Contact Information Section */}
          <div 
            className="bg-gradient-to-br from-gray-100 to-gray-200 p-10 flex flex-col justify-between"
            data-aos="fade-right"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6 text-red-600">Contact Information</h2>
              <p className="mb-6 text-gray-700">
                Need quick assistance? Reach out to us through email, phone, or visit our office.
              </p>
              
              <div className="space-y-5">
                <div className="flex items-center space-x-4">
                  <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-700">info@dmxtechservices.com</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-700">+91 9876543210</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <svg className="w-7 h-7 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700">123 Tech Park, Innovation Street, Bangalore</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex space-x-5">
              <a href="#" className="text-gray-700 hover:text-red-600 transition-colors duration-300">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors duration-300">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-800 transition-colors duration-300">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Contact Form Section */}
          <div 
            className="bg-white p-10"
            data-aos="fade-left"
          >
            <h2 className="text-3xl font-bold mb-6 text-red-600">Send Us a Message</h2>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-700">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-gray-100 text-gray-800 p-3 rounded-lg border-2 border-transparent focus:outline-none focus:border-red-500 transition duration-300" 
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-700">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-gray-100 text-gray-800 p-3 rounded-lg border-2 border-transparent focus:outline-none focus:border-red-500 transition duration-300" 
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 text-gray-700">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-gray-100 text-gray-800 p-3 rounded-lg border-2 border-transparent focus:outline-none focus:border-red-500 transition duration-300" 
                  placeholder="Enter subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-gray-700">Your Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full bg-gray-100 text-gray-800 p-3 rounded-lg border-2 border-transparent focus:outline-none focus:border-red-500 transition duration-300" 
                  placeholder="Type your message..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-red-500 to-red-700 text-white p-3 rounded-lg hover:from-red-600 hover:to-red-800 transition duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;