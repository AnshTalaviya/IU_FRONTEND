import React, { useState } from 'react';
import { IndianRupee, Headphones, Calendar } from 'lucide-react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

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
    const { name, value } = e.target;
    if (name === 'phone' && !/^\d*$/.test(value)) return; // allows only digits
    setFormData({ ...formData, [name]: value });
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
      <section className="bg-white dark:bg-gray-900 dark:text-gray-300 text-gray-800 sm:py-16 lg:py-10">
        <div className="min-h-screen bg-green-800 bg-green-blur dark:text-gray-300 text-gray-800 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-14 pb-32 relative overflow-hidden">
          <div className="absolute -top-5 -left-5 w-20 sm:w-28 h-20 sm:h-28 bg-white bg-opacity-30 dark:bg-opacity-20 rounded-full animate-pulse z-0"></div>
          <h2 className="text-[28px] sm:text-[32px] font-bold text-white mb-2 text-center">Get In Touch</h2>
          <p className="text-gray-200 text-center max-w-2xl text-[14px] sm:text-[15px] mb-10 sm:mb-14 leading-relaxed px-4">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>

          <div className="absolute top-42 left-294 w-20 sm:w-28 h-20 sm:h-28 bg-white bg-opacity-30 dark:bg-opacity-20 rounded-full animate-pulse z-0"></div>


          <div className="absolute -bottom-4 -right-4 w-20 sm:w-28 h-20 sm:h-28 bg-white bg-opacity-30 dark:bg-opacity-20 rounded-full animate-pulse z-0"></div>
          <div className="bg-green-100 backdrop-blur-sm rounded-[20px] shadow-[0px_10px_30px_rgba(0,0,0,0.1)] flex flex-col lg:flex-row w-full max-w-[960px] overflow-hidden mx-4">


            {/* Left Panel */}
            <div className="bg-green-700 text-white p-6 sm:p-8 lg:w-[360px] flex flex-col justify-between relative">
              <div className='px-2 sm:px-4 py-4 sm:py-6'>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-2">Contact Information</h2>
                  <p className="text-sm mb-6 sm:mb-8 leading-relaxed text-gray-200">
                    We're here to help and answer any questions you might have.
                  </p>
                </div>
                <div className="space-y-4 sm:space-y-5 text-sm mx-2 sm:mx-6 py-2 sm:py-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-full">
                      <FaPhone className="w-4 h-4" />
                    </div>
                    <p>+91 99999 88888</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-full">
                      <FaEnvelope className="w-4 h-4" />
                    </div>
                    <p>support@idharudhar.com</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-full">
                      <FaMapMarkerAlt className="w-4 h-4" />
                    </div>
                    <p>Ahmedabad, Gujarat, India</p>
                  </div>
                  <div className="absolute -bottom-6 -right-4 w-20 sm:w-28 h-20 sm:h-28 bg-white bg-opacity-30 dark:bg-opacity-20 rounded-full animate-pulse z-0"></div>
                </div>
              </div>
            </div>

            {/* Right Panel */}
            <div className="p-6 sm:p-10 lg:w-[600px] bg-white dark:bg-gray-900 dark:text-gray-300 text-gray-800 relative">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <label className="block text-sm text-gray-600 dark:text-gray-200 mb-1">Your Name</label>
                    <input
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border-b border-black dark:border-white outline-none p-2 text-sm text-gray-700 dark:text-gray-200 placeholder:text-gray-400"
                      placeholder="Enter your name"
                      required
                    />
                    {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 dark:text-gray-200 mb-1">Phone Number</label>
                    <input
                      name="phone"
                      type="tel"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border-b border-black dark:border-white outline-none p-2 text-sm text-gray-700 dark:text-gray-200 placeholder:text-gray-400"
                      placeholder="Enter your phone number"
                      required
                    />
                    {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 dark:text-gray-200 mb-1">Your Email</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-b border-black dark:border-white outline-none p-2 text-sm text-gray-700 dark:text-gray-200 placeholder:text-gray-400"
                    placeholder="Enter your email"
                    required
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm text-gray-600 dark:text-gray-200 mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border-b border-black dark:border-white outline-none p-2 text-sm text-gray-700 dark:text-gray-200 placeholder:text-gray-400 resize-none h-24"
                    placeholder="Write your message here"
                    required
                  />
                  {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800/90 transition text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="w-full h-60 sm:h-80 md:h-96 my-10 sm:my-20 px-4 sm:px-20">
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

        <section className="relative bg-[#166534] text-white w-full mt-10 sm:mt-16">
          <div className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: "url('https://www.shutterstock.com/image-vector/travel-tourism-concept-set-tourists-260nw-2294415843.jpg')" }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center">
            {[{
              Icon: IndianRupee,
              title: "Best Price Guaranteed",
              desc: "Get the best rates for quality rides."
            }, {
              Icon: Headphones,
              title: "24/7 Customer Care",
              desc: "We're always here to support you."
            }, {
              Icon: Calendar,
              title: "Easy Bookings",
              desc: "Plan your ride effortlessly."
            }].map(({ Icon, title, desc }, i) => (
              <div key={i} className="flex flex-col items-center space-y-3 hover:scale-105 transition-transform">
                <Icon className="w-10 h-10 sm:w-12 sm:h-12 border-2 rounded-full p-2 sm:p-3 border-white" />
                <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
                <p className="text-white/80 text-xs sm:text-sm md:text-base">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default ContactPage;

