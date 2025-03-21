"use client";
import { useState } from 'react';
import Image from 'next/image';
import TitleDivider from '@/components/TitleDivider';
import AIChat from '@/components/AIChat';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };
    return (
      <div className="container mx-auto max-w-3xl py-12 px-6 flex flex-col items-center relative">
        {/* Left Section: Contact Form */}
        <div className="w-full md:w-2/3">
          <h1 className="text-5xl font-bold text-center mb-8 text-gray-900 tracking-wide">
            Get in Touch <TitleDivider />
          </h1>
  
          <p className="text-lg text-center text-gray-700 mb-8">
            Have a question or want to collaborate? Feel free to reach out using the form below.
          </p>
  
          {/* Contact Form */}
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-300">
            <div className="mb-4">
              <label className="block text-lg font-semibold mb-2 text-white">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="Enter your name"
                required
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-lg font-semibold mb-2 text-white">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-lg font-semibold mb-2 text-white">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                placeholder="Enter your message"
                rows={5}
                required
              ></textarea>
            </div>
  
            <button
              type="submit"
              className="w-full bg-primary text-white font-bold py-3 rounded-md hover:bg-accent transition-all"
            >
              Send Message
            </button>
          </form>
  
          {/* Contact Info */}
          <div className="mt-10 text-center">
            <p className="text-lg font-semibold text-gray-800">Connect with me</p>
            <div className="flex justify-center gap-6 mt-4">
              <a href="https://github.com/techthumb1" target="_blank" rel="noopener noreferrer">
                <Image src="/assets/icons/github.png" alt="GitHub" width={30} height={30} />
              </a>
              <a href="https://linkedin.com/in/jasrobinson12" target="_blank" rel="noopener noreferrer">
                <Image src="/assets/icons/linkedin.png" alt="LinkedIn" width={30} height={30} />
              </a>
              <a href="mailto:your.robinsonjason761@gmail.com" target="_blank" rel="noopener noreferrer">
                <Image src="/assets/icons/gmail.png" alt="Email" width={30} height={30} />
              </a>
            </div>
          </div>
        </div>
  
        {/* Right Section: AIChat - Fixed Under Navbar */}
        <div className="hidden md:block w-1/3">
          <div className="sticky top-20 right-8">
           <AIChat />
          </div>
        </div>
      </div>
    );
  }   