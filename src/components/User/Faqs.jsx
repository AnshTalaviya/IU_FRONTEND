import React from 'react';
import { useState } from 'react';
import { IndianRupee, Headphones, Calendar } from 'lucide-react';


const faqData = [
    {
        question: 'What Makes A Good Taxi Service?',
        answer: 'A good taxi service is reliable, safe, clean, and provides good customer support.',
    },
    {
        question: 'What Is The Purpose Of A Taxi Service?',
        answer: 'To provide convenient and on-demand transportation for passengers.',
    },
    {
        question: 'How To Download The IdharUdhar Taxi App Online?',
        answer: 'Visit the Play Store or App Store and search for "IdharUdhar Taxi". Download and install the app.',
    },
    {
        question: 'What Should I Be Asking For First Ride?',
        answer: 'Ask about safety procedures, estimated cost, and driver credentials.',
    },
    {
        question: 'How Many Cars Does IdharUdhar Taxi Service Have?',
        answer: 'The fleet size depends on the city. You can check the app for real-time availability.',
    },
];

const Faqs = () => {
    console.log('Faqs rendered at:', window.location.pathname);

    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        < div className="bg-white dark:bg-gray-900 py-10 ">
            <div  >
                {/* Hero Section */}
                <section className="relative bg-[#166534] text-white min-h-[300px]">
                    <div
                        className="absolute inset-0 bg-center bg-cover opacity-20"
                        style={{
                            backgroundImage: "url('https://www.shreecabs.com/img2/cabs2.jpg')",
                        }}
                    />
                    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 flex flex-col items-start justify-center gap-4">
                        <h1 className="text-2xl sm:text-4xl font-bold leading-tight">
                            Frequently Asked Questions!
                        </h1>
                        <p className="text-sm sm:text-lg text-gray-200">
                            Everything your taxi business needs is already here!
                        </p>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="min-h-[60vh] flex flex-col items-center justify-start px-4 py-10">
                    <div className="w-full max-w-4xl space-y-4">
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-900 border border-gray-200 rounded-xl shadow-md transition hover:shadow-lg"
                            >
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full px-4 py-4 flex justify-between items-center text-base font-semibold text-gray-400"
                                    aria-expanded={openIndex === index}
                                >
                                    <span className="text-left ">{item.question}</span>
                                    <span className="text-2xl text-[#166534]">
                                        {openIndex === index ? '−' : '+'}
                                    </span>
                                </button>
                                <div
                                    className={`px-4 text-gray-600 transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-40 py-4' : 'max-h-0 py-0'
                                        }`}
                                >
                                    {item.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Features Section */}
                <section className="relative bg-[#166534] text-white">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-10"
                        style={{
                            backgroundImage:
                                "url('https://www.shutterstock.com/image-vector/travel-tourism-concept-set-tourists-260nw-2294415843.jpg')",
                        }}
                    />
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
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
                                <p className="text-white/80 text-sm">{desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Call To Action Section */}
                <section className="text-[#166534] py-10 text-center px-4">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to book your next ride?</h2>
                    <p className="text-base sm:text-lg mb-6">
                        Download the IdharUdhar Taxi App and ride smarter, safer, and faster.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a href="#" className="bg-black text-white px-5 py-3 rounded-md hover:bg-gray-800 transition text-sm">
                            Download on App Store
                        </a>
                        <a href="#" className="bg-black text-white px-5 py-3 rounded-md hover:bg-gray-800 transition text-sm">
                            Get it on Google Play
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Faqs;


// 24D103   