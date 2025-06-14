import React, { useState, useRef } from 'react';
import { IndianRupee, Headphones, Calendar } from 'lucide-react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
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
    if (!validate()) return;

    emailjs
      .sendForm(
        'service_qwwxk59',       // ✅ Replace this
        'template_ndmj5wv',      // ✅ Replace this
        formRef.current,
        'q7h1BahWUznHytYWE'           // ✅ Replace this
      )
      .then(
        (result) => {
          setSuccessMessage('Form submitted successfully!');
          setFormData({
            name: '',
            phone: '',
            email: '',
            message: '',
            terms: false,
          });
        },
        (error) => {
          alert('Something went wrong, please try again later.');
        }
      );
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900 dark:text-gray-300 text-gray-800 sm:py-16 lg:py-10">
        <div className="min-h-screen bg-green-800 bg-green-blur dark:text-gray-300 text-gray-800 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-14 pb-32 relative overflow-hidden">
          <h2 className="text-[28px] sm:text-[32px] font-bold text-white mb-2 text-center">Get In Touch</h2>
          <p className="text-gray-200 text-center max-w-2xl text-[14px] sm:text-[15px] mb-10 sm:mb-14 leading-relaxed px-4">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>

          <div className="bg-green-100 backdrop-blur-sm rounded-[20px] shadow-[0px_10px_30px_rgba(0,0,0,0.1)] flex flex-col lg:flex-row w-full max-w-[960px] overflow-hidden mx-4">
            {/* Left Panel */}
            <div className="bg-green-700 text-white p-6 sm:p-8 lg:w-[360px] flex flex-col justify-between relative">
              <div className="px-2 sm:px-4 py-4 sm:py-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-2">Contact Information</h2>
                  <p className="text-sm mb-6 sm:mb-8 leading-relaxed text-gray-200">
                    We're here to help and answer any questions you might have.
                  </p>
                </div>
                <div className="space-y-4 sm:space-y-5 text-sm mx-2 sm:mx-6 py-2 sm:py-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-full"><FaPhone className="w-4 h-4" /></div>
                    <p>+91 99999 88888</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-full"><FaEnvelope className="w-4 h-4" /></div>
                    <p>support@idharudhar.com</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-full"><FaMapMarkerAlt className="w-4 h-4" /></div>
                    <p>Ahmedabad, Gujarat, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel */}
            <div className="p-6 sm:p-10 lg:w-[600px] bg-white dark:bg-gray-900 dark:text-gray-300 text-gray-800 relative">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="to_name" value="GreenRide Support" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <label className="block text-sm mb-1">Your Name</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border-b outline-none p-2 text-sm"
                      placeholder="Enter your name"
                    />
                    {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Phone Number</label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength="10"
                      className="w-full border-b outline-none p-2 text-sm"
                      placeholder="Enter your phone"
                    />
                    {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-1">Your Email</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-b outline-none p-2 text-sm"
                    placeholder="Enter your email"
                  />
                  {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border-b outline-none p-2 text-sm h-24 resize-none"
                    placeholder="Write your message"
                  />
                  {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                  />
                  <label className="text-sm">I agree to the terms and conditions</label>
                </div>
                {errors.terms && <p className="text-red-600 text-sm">{errors.terms}</p>}
                <button
                  type="submit"
                  className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition text-sm"
                >
                  Send Message
                </button>
                {successMessage && <p className="text-green-600 text-sm">{successMessage}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
