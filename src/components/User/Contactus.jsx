import React, { useState } from 'react';
import { IndianRupee, Headphones, Calendar } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    captcha: '',
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!phoneRegex.test(formData.phone)) newErrors.phone = 'Enter a valid 10-digit phone number';
    if (!emailRegex.test(formData.email)) newErrors.email = 'Enter a valid email address';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.terms) newErrors.terms = 'You must agree to the terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      window.location.reload();
    }
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900 py-10 pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-500 mb-2">Contact Us</h2>
            <h3 className="text-2xl sm:text-3xl font-semibold text-green-500">Information</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter Your Name*"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none"
                    required
                  />
                  {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number*"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none"
                    required
                  />
                  {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your Email-Id*"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none"
                  required
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message*"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none"
                  required
                />
                {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-[#166534] text-white py-3 rounded-md text-lg font-semibold"
              >
                Send Message
              </button>
            </form>

            <div className="space-y-8">
              <div className="space-y-4 text-lg text-gray-800 dark:text-gray-300">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#166534]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>support@idharudhar.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#166534]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.684l1.27 3.81a1 1 0 01-.21 1.04l-2.12 2.12a16.001 16.001 0 006.59 6.59l2.12-2.12a1 1 0 011.04-.21l3.81 1.27A1 1 0 0121 18.72V22a2 2 0 01-2 2h-.18C10.4 23.4 0.6 13.6.02 3.18A2 2 0 012 1h3z" />
                  </svg>
                  <span>+91 99999 88888</span>
                </div>
              </div>

              <div className="w-full h-64 sm:h-80 md:h-96">
                <iframe
                  title="Google Maps Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7720720870757!2d72.52421197504878!3d23.032351779164598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e856f5fbe2e01%3A0x98e43e3e62ed273b!2sJivraj%20Park%20Sub%20Post%20Office!5e0!3m2!1sen!2sin!4v1686240166123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  className="border rounded-md"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          <section className="relative bg-[#166534] text-white w-full mt-16">
            <div className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{ backgroundImage: "url('https://www.shutterstock.com/image-vector/travel-tourism-concept-set-tourists-260nw-2294415843.jpg')" }}
            />
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
              {[{
                Icon: IndianRupee,
                title: "Best Price Guaranteed",
                desc: "Get the best rates for quality rides."
              }, {
                Icon: Headphones,
                title: "24/7 Customer Care",
                desc: "We’re always here to support you."
              }, {
                Icon: Calendar,
                title: "Easy Bookings",
                desc: "Plan your ride effortlessly."
              }].map(({ Icon, title, desc }, i) => (
                <div key={i} className="flex flex-col items-center space-y-3 hover:scale-105 transition-transform">
                  <Icon className="w-12 h-12 border-2 rounded-full p-3 border-white" />
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-white/80 text-sm md:text-base">{desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default ContactPage;