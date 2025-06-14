import React, { useState, useEffect } from 'react';
import { Car, Shield, Zap, Clock, Star, Users, MapPin, Heart } from 'lucide-react';

function App() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVisible, setIsVisible] = useState({});

    const slides = [
        {
            image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Premium Rides",
            subtitle: "Experience luxury on wheels",
            bgColor: "from-green-600/80 to-green-800/80"
        },
        {
            image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Eco-Friendly",
            subtitle: "Green transportation for a better tomorrow",
            bgColor: "from-blue-600/80 to-blue-800/80"
        },
        {
            image: "https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "24/7 Service",
            subtitle: "Your trusted ride partner anytime, anywhere",
            bgColor: "from-purple-600/80 to-purple-800/80"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('[id]').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const pricingCards = [
        {
            name: "GreenCar Mini",
            price: "₹9",
            baseFare: "₹30",
            features: ["Compact Hatchback", "Up to 3 passengers", "Air conditioning"],
            color: "green",
            popular: false
        },
        {
            name: "GreenCar Premium",
            price: "₹12",
            baseFare: "₹40",
            features: ["Spacious Sedan", "Up to 4 passengers", "Premium comfort"],
            color: "green",
            popular: true
        },
        {
            name: "GreenCar XL",
            price: "₹16",
            baseFare: "₹60",
            features: ["SUV/Premium vehicle", "Up to 6 passengers", "Extra luggage space"],
            color: "green",
            popular: false
        }
    ];

    const features = [
        {
            icon: Car,
            title: "Comfortable Rides",
            description: "Enjoy spacious, air-conditioned cars with professional drivers for a smooth journey"
        },
        {
            icon: Shield,
            title: "Safe & Secure",
            description: "All rides are monitored with real-time tracking, emergency assistance, and verified drivers"
        },
        {
            icon: Zap,
            title: "Quick & Efficient",
            description: "Fast pickup times, optimized routes, and experienced drivers to get you there quickly"
        }
    ];

    const testimonials = [
        {
            name: "Rahul Sharma",
            role: "Regular User",
            avatar: "R",
            text: "The service is amazing! Clean cars, professional drivers, and always on time. GreenCar has made my daily commute so much better.",
            rating: 5
        },
        {
            name: "Priya Patel",
            role: "Business Traveler",
            avatar: "P",
            text: "As a frequent business traveler, I appreciate the reliability and comfort of GreenCar. The premium service is worth every penny!",
            rating: 5
        },
        {
            name: "Amit Kumar",
            role: "Family User",
            avatar: "A",
            text: "Perfect for family trips! Spacious cars, safe drivers, and great service. My kids love the comfortable rides.",
            rating: 5
        }
    ];

    const stats = [
        { value: "10K+", label: "Happy Customers" },
        { value: "500+", label: "Active Drivers" },
        { value: "50K+", label: "Rides Completed" },
        { value: "4.9", label: "Average Rating" }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Floating Animation Dots */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-green-500/20 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: `${2 + Math.random() * 2}s`
                        }}
                    />
                ))}
            </div>

            {/* Hero Slider */}
            <section className="relative h-screen overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                            }`}
                    >
                        <div className="relative h-full">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgColor} transition-all duration-1000`} />
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                <div className="text-center text-white max-w-4xl px-4">
                                    <h1 className={`text-5xl md:text-7xl font-bold mb-4 transform transition-all duration-1000 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                        }`}>
                                        {slide.title}
                                    </h1>
                                    <p className={`text-xl md:text-2xl mb-8 transform transition-all duration-1000 delay-200 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                        }`}>
                                        {slide.subtitle}
                                    </p>
                                    <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-400 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                        }`}>
                                        <button className="bg-white text-green-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                                            Book a Ride
                                        </button>
                                        <button className="bg-green-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Slide Indicators */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                    ? 'bg-white scale-125'
                                    : 'bg-white/50 hover:bg-white/70'
                                }`}
                        />
                    ))}
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible.pricing ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Simple & Transparent Pricing
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Affordable rides with no hidden charges, clear pricing for every journey
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pricingCards.map((card, index) => (
                            <div
                                key={index}
                                className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-500 hover:scale-105 hover:shadow-2xl transform ${isVisible.pricing ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                    } ${card.popular ? 'border-green-500 shadow-green-500/20' : 'border-gray-200'}`}
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                {card.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className="p-8">
                                    <div className="text-center mb-6">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{card.name}</h3>
                                        <div className="text-5xl font-bold text-green-600 mb-2">
                                            {card.price}<span className="text-lg font-normal text-gray-600">/km</span>
                                        </div>
                                        <p className="text-gray-600">Base fare: {card.baseFare}</p>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        {card.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center space-x-3">
                                                <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0 shadow-lg shadow-green-500/50" />
                                                <span className="text-gray-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible.features ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Why Choose GreenCar?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We provide the best car ride experience with comfort, safety, and affordability in mind
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${isVisible.features ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                <div className="text-green-600 mb-6">
                                    <feature.icon size={48} className="mx-auto" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{feature.title}</h3>
                                <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-green-700">
                <div className="max-w-4xl mx-auto text-center">
                    <div className={`transform transition-all duration-1000 ${isVisible.cta ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Experience GreenCar?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Download our app and get your first ride with a special discount.
                            Use code <span className="font-bold bg-white/20 px-2 py-1 rounded">FIRSTRIDE</span> for 50% off.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-green-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                                Download App
                            </button>
                            <button className="bg-green-500 text-white font-semibold px-8 py-4 rounded-xl hover:bg-green-400 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-20 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible.testimonials ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            What Our Customers Say
                        </h2>
                        <p className="text-xl text-gray-600">
                            Join thousands of satisfied customers who trust GreenCar
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${isVisible.testimonials ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl">
                                        {testimonial.avatar}
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.text}"</p>
                                <div className="flex text-yellow-400">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`text-center transform transition-all duration-1000 ${isVisible.testimonials ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${(index + 3) * 200}ms` }}
                            >
                                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">{stat.value}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="flex items-center justify-center mb-6">
                        <Car className="text-green-500 mr-3" size={32} />
                        <h3 className="text-2xl font-bold">GreenCar</h3>
                    </div>
                    <p className="text-gray-400 mb-6">
                        Your trusted ride partner for comfortable, safe, and eco-friendly transportation.
                    </p>
                    <div className="flex justify-center space-x-6">
                        <MapPin className="text-gray-400 hover:text-green-500 cursor-pointer transition-colors duration-300" />
                        <Users className="text-gray-400 hover:text-green-500 cursor-pointer transition-colors duration-300" />
                        <Heart className="text-gray-400 hover:text-green-500 cursor-pointer transition-colors duration-300" />
                        <Clock className="text-gray-400 hover:text-green-500 cursor-pointer transition-colors duration-300" />
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;