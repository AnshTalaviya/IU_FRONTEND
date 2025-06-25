import React, { useState } from 'react';
import { IndianRupee, Headphones, Calendar } from 'lucide-react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

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

    setIsSending(true);
    setSuccessMsg('');
    emailjs.send(
      'service_qwwxk59',
      'template_ndmj5wv',
      {
        from_name: formData.name,
        phone: formData.phone,
        message: formData.message,
        reply_to: formData.email,
      },
      'q7h1BahWUznHytYWE'
    )
      .then(() => {
        setSuccessMsg('Message sent successfully!');
        setFormData({ name: '', phone: '', email: '', message: '', terms: false });
        setErrors({});
      })
      .catch(() => {
        setSuccessMsg('Failed to send message. Please try again.');
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section className="bg-gradient-to-b from-green-900 to-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-center text-white/80 mb-12 max-w-2xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>

        <div className="flex flex-col lg:flex-row bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden shadow-lg">
          {/* Contact Info */}
          <div className="bg-green-700 p-8 lg:w-1/3 text-white flex flex-col justify-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Let's Connect</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-sm text-white/80">+91 99999 88888</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-white/80">support@idharudhar.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Address</p>
                    <p className="text-sm text-white/80">Ahmedabad, Gujarat, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className= "text-gray-200 p-8 lg:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none"
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    pattern="[0-9]{10}"
                    maxLength="10"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none"
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none"
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
                  className="w-full px-4 py-2 border rounded-md focus:outline-none h-28 resize-none"
                  placeholder="Write your message here"
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

              {successMsg && <p className="text-green-600 font-medium">{successMsg}</p>}

              <button
                type="submit"
                disabled={isSending}
                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
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
            <div key={i} className="bg-white/10 p-6 rounded-xl hover:scale-102 transition-transform">
              <Icon className="w-10 h-10 mx-auto mb-3 text-green-400" />
              <h3 className="text-lg font-semibold mb-1">{title}</h3>
              <p className="text-sm text-white/80">{desc}</p>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="w-full h-60 sm:h-80 md:h-96 mt-16">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7720720870757!2d72.52421197504878!3d23.032351779164598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e856f5fbe2e01%3A0x98e43e3e62ed273b!2sJivraj%20Park%20Sub%20Post%20Office!5e0!3m2!1sen!2sin!4v1686240166123!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="rounded-xl border"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
