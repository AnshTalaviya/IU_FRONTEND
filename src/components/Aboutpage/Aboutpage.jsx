import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const coreValues = [
  {
    icon: "fab fa-pagelines",
    title: "Sustainability",
    description: "We're committed to reducing carbon emissions through electric vehicles and eco-friendly practices.",
  },
  {
    icon: "fas fa-shield-alt",
    title: "Safety",
    description: "The safety of our passengers, drivers, and communities is our top priority in everything we do.",
  },
  {
    icon: "fas fa-medal",
    title: "Innovation",
    description: "We constantly push the boundaries of what's possible to create better experiences and solutions.",
  },
  {
    icon: "fas fa-user-friends",
    title: "Community",
    description: "We believe in building stronger communities through accessible, affordable transportation for all.",
  },
];

const impactCards = [
  {
    value: "52K+",
    label: "Tons of CO₂ Saved",
    description: "Through our fleet of electric and low-emission vehicles, we've prevented thousands of tons of carbon from entering the atmosphere.",
  },
  {
    value: "10M+",
    label: "Green Rides Completed",
    description: "Millions of riders have chosen our eco-friendly transportation options, contributing to a greener future with every trip.",
  },
  {
    value: "75K+",
    label: "Driver Partners",
    description: "We've created economic opportunities for thousands of drivers while helping them transition to sustainable vehicles.",
  },
];

const leadership = [
  {
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Amit Kumar",
    role: "CO-Founder & CEO",
    desc: "Former head of sustainability at Tesla, Amit brings 15 years of experience in electric mobility and climate tech",
  },
  {
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Priya Sharma",
    role: "CO-Founder & CEO",
    desc: "With experience scaling operations at Uber and Ola, Priya oversees our rapid expansion across cities.",
  },
  {
    img: "https://randomuser.me/api/portraits/men/68.jpg",
    name: "Raj Patel",
    role: "CTO",
    desc: "Former head of sustainability at Tesla, Amit brings 15 years of experience in electric mobility and climate tech",
  },
];


export default function Aboutpage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      <section className="Hero bg-green-700 pt-10 sm:pt-16 md:pt-20 relative overflow-hidden">
        {/* Text Content */}
        <div className="container mx-auto px-4 text-center">
          <div data-aos="fade-down">
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mt-10 leading-tight">
              Driving the Future of
            </h3>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-green-300 dark:text-green-500 mt-5 leading-tight">
              Sustainable Mobility
            </h2>
            <p className="text-gray-800 dark:text-gray-300 font-medium mt-6 text-[16px] md:w-1/2 w-[90%] mx-auto">
              IdharUdhar is revolutionizing urban transportation with eco-friendly rides,
              cutting-edge technology,
              <span className="block text-center">and a commitment to a greener planet.</span>
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 mb-10">
              <button className="bg-white text-green-700 dark:text-green-500 shadow-sm rounded-lg h-11 w-[80%] sm:w-40 font-medium hover:bg-gray-200 dark:hover:bg-gray-900 transition-all duration-200">
                Join Our Team
              </button>
              <button className="bg-gray-300 dark:bg-gray-900 shadow-sm hover:bg-green-200 dark:hover:bg-green-500/60 border border-gray-300 dark:border-gray-700/30 rounded-lg h-11 w-[80%] sm:w-40 text-black dark:text-white font-medium transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Gradient Divider */}
        <div
          className="absolute w-full h-16 sm:h-18 md:h-20 bg-white/90 dark:bg-gray-950"
          style={{
            background: 'linear-gradient(to bottom, #15803d, rgba(255, 255, 255, 0))',
          }}
        />

        {/* Our Mission Section */}
        <div className="w-full bg-white dark:bg-gray-950 flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-14 py-14 gap-8">
          {/* Image */}
          <div
            data-aos="zoom-in"
            className="w-full md:w-1/2 flex justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?w=800&auto=format&fit=crop&q=60"
              alt="IdharUdhar Mission"
              className="rounded-xl w-full max-w-[600px] h-auto object-cover shadow-md mt-18"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 pt-4 md:pt-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white text-start">
              Our Mission
            </h3>
            <p className="text-gray-700 dark:text-gray-400 font-medium mt-4 text-base sm:text-lg text-start">
              At IdharUdhar, our mission is to transform urban mobility by providing
              eco-friendly, affordable transportation options that reduce carbon emissions
              while enhancing the quality of urban life.
            </p>
            <p className="text-gray-700 dark:text-gray-400 font-medium mt-4 text-base sm:text-lg text-start">
              We believe that sustainable transportation shouldn't come at a premium cost.
              By leveraging cutting-edge technology, we're making green rides accessible
              to everyone, everywhere.
            </p>
            <button className="group bg-green-600 hover:bg-green-800 text-white px-6 py-2 mt-6 rounded-lg transition-all duration-200 flex items-center">
              Explore Our Services
              <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-all duration-300" />
            </button>
          </div>
        </div>
      </section>





      <section className="StorySection bg-gray-100 dark:bg-gray-900 transition-colors duration-300 pb-10 px-4 sm:px-6 md:px-12">
        <div className="OurStory pt-10 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Our Story
          </h3>
          <p className="text-gray-700 dark:text-gray-300 max-w-[95%] sm:max-w-[75%] md:max-w-[50%] mx-auto mt-4 text-sm sm:text-base md:text-lg">
            Founded in 2023, IdharUdhar emerged from a simple yet powerful vision: to reinvent urban transportation with sustainability at its core.
          </p>
        </div>

        <div className="StoryList mt-10 space-y-10 relative">
          {/* Vertical line through the center on md+ screens */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full border-l-2 border-green-900 dark:border-green-900 transform -translate-x-1/2 z-0" />

          {[
            {
              year: "2023: The Beginning",
              text: "IdharUdhar was founded in New Delhi by a team of environmental enthusiasts and tech innovators determined to reduce the carbon footprint of urban transportation.",
              imgAlt: "Story 2023",
              reverse: false,
            },
            {
              year: "2024: Rapid Expansion",
              text: "Within a year, IdharUdhar expanded to 50+ cities across India and partnered with major electric vehicle manufacturers to build a fleet of zero-emission vehicles.",
              imgAlt: "Story 2024",
              reverse: true,
            },
            {
              year: "2025: Today & Beyond",
              text: "Today, IdharUdhar serves over 500 cities globally with a mission to make sustainable transportation the norm rather than the exception, while continuously innovating to reduce our environmental impact.",
              imgAlt: "Story 2025",
              reverse: false,
            },
          ].map((story, index) => (
            <div
              key={index}
              className={`StoryLine relative z-10 flex flex-col-reverse ${story.reverse ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-2`}
            >
              {/* Text Content */}
              <div className="StoryText md:w-1/2 w-full md:pr-10 flex flex-col justify-center items-center md:items-end text-center md:text-right gap-3 sm:gap-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {story.year}
                </h3>
                <p className="text-gray-700 dark:text-gray-400 max-w-[90%] md:max-w-[85%] text-sm sm:text-base">
                  {story.text}
                </p>
              </div>

              {/* Timeline Dot + Line */}
              <div className="hidden md:flex flex-col items-center z-10">
                <div className="h-5 w-5 bg-green-700 dark:bg-green-400 rounded-full z-10" />
                {/* <div className="flex-1 w-1 bg-green-600 dark:bg-green-400 mt-1" /> */}
              </div>

              {/* Image */}
              <div
                data-aos="zoom-in"
                className="StoryImg md:w-1/2 w-full flex justify-center items-center mt-2 md:mt-0"
              >
                <img
                  src="https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?w=800&auto=format&fit=crop&q=60"
                  alt={story.imgAlt}
                  className="w-[85%] max-w-[360px] sm:max-w-[400px] md:w-[60%] h-auto rounded-xl shadow-md"
                />
              </div>
            </div>
          ))}
        </div>
      </section>




      <section className="coreValues bg-white dark:bg-gray-950 pt-8 sm:pt-10 md:pt-12 pb-10 sm:pb-15 md:pb-20">
        {/* Heading */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-black dark:text-white">
          Our Core Values
        </h3>

        {/* Subheading */}
        <p className="text-gray-700 dark:text-gray-400 text-xs sm:text-sm md:text-base max-w-[95%] sm:max-w-[80%] md:max-w-[60%] mx-auto text-center mt-2 sm:mt-3 px-2 sm:px-4">
          The principles that guide every decision we make and every service we provide.
        </p>

        {/* Value Cards */}
        <div className="ValueCards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-8 px-3 sm:px-6 md:px-12">
          {coreValues.map((value, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="valueCard bg-gray-100 dark:bg-gray-700/40 rounded-xl flex flex-col p-4 sm:p-5 md:p-6 shadow-lg transition hover:shadow-xl"
            >
              {/* Icon */}
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-green-100 dark:bg-green-600/15 flex items-center justify-center text-green-600 dark:text-green-500 text-lg sm:text-xl">
                <i className={value.icon}></i>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-black dark:text-white text-start mt-3">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-400 text-start mt-2 text-xs sm:text-sm md:text-base leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>





      <section className="impact bg-[#166534] dark:bg-green-800 text-white pt-8 sm:pt-12 md:pt-16 pb-10 sm:pb-14 md:pb-20">
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center px-2 sm:px-4">
          Our Impact
        </h2>

        {/* Subheading */}
        <p className="font-medium text-xs sm:text-sm md:text-base mt-2 sm:mt-3 text-center max-w-[90%] sm:max-w-[70%] md:max-w-[60%] mx-auto px-2 sm:px-4">
          Since our founding, we've made meaningful contributions to creating a greener, more connected world.
        </p>

        {/* Cards */}
        <div className="impactcards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-10 px-3 sm:px-6 md:px-12">
          {impactCards.map((item, index) => (
            <div
              key={index}
              className="impactCard hover:bg-white/10 rounded-xl p-4 sm:p-5 md:p-6 text-center hover:shadow-md"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-300">
                {item.value}
              </h3>
              <h4 className="text-base sm:text-lg font-semibold mt-1 sm:mt-2">
                {item.label}
              </h4>
              <p className="text-xs sm:text-sm mt-1 sm:mt-2 text-white/90 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>




      <section className="OurLeadership bg-white dark:bg-gray-950 pt-8 sm:pt-10 pb-10 sm:pb-12 md:pb-16">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black dark:text-white text-center px-2">
          Our Leadership
        </h3>

        <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-200 w-[95%] sm:max-w-[80%] md:max-w-[60%] mx-auto mt-2 sm:mt-3 text-center px-2">
          Meet the team driving our mission to revolutionize urban mobility.
        </p>

        <div className="Leaders grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-10 px-3 sm:px-6 md:px-12">
          {leadership.map((person, index) => (
            <div
              key={index}
              className="Leader bg-[#1a1f2c] dark:bg-gray-800 text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              {/* Taller, rounded image like screenshot */}
              <img
                src={person.img}
                alt={person.name}
                className="w-full h-60 sm:h-66 md:h-72 object-cover"
              />

              <div className="LeaderInfo  bg-gray-100 dark:bg-gray-700/70 p-4 sm:p-5">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-black dark:text-white">
                  {person.name}
                </h3>
                <h4 className="text-sm sm:text-base text-green-600 dark:text-green-400 mt-1">
                  {person.role}
                </h4>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-400 mt-2 leading-relaxed">
                  {person.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="greenRevolution bg-green-100 dark:bg-green-800 pt-10 sm:pt-15 md:pt-18 pb-10 sm:pb-12 md:pb-16">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white text-center">Join the Green Revolution</h3>
        <p className="text-gray-700 dark:text-gray-100 text-sm sm:text-base md:text-lg font-medium w-[95%] sm:w-[80%] md:w-[50%] mx-auto mt-4 sm:mt-6 md:mt-10">
          Whether you're a rider, driver, or potential team member, be part of our journey to transform urban mobility and create a more sustainable future.
        </p>
        <div className="aboutButtons flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-10 px-4">
          <button className="btn bg-white text-green-700 dark:text-green-600 shadow-sm rounded-lg h-10 sm:h-11 w-full sm:w-42 font-medium hover:bg-gray-200 dark:hover:bg-gray-950 transition-all duration-200">
            <i className="fas fa-car-side"></i> Book a Ride
          </button>
          <button className="btn bg-gray-200 dark:bg-gray-950 shadow-sm hover:bg-green-200 dark:hover:bg-green-500/60 border border-gray-300 dark:border-gray-500/30 rounded-lg h-10 sm:h-11 w-full sm:w-42 text-black dark:text-white font-medium transition-all duration-200">
            <i className="fas fa-biking"></i> Become a Driver
          </button>
          <button className="btn bg-gray-200 dark:bg-gray-950 shadow-sm hover:bg-green-200 dark:hover:bg-green-500/60 border border-gray-300 dark:border-gray-500/30 rounded-lg h-10 sm:h-11 w-full sm:w-42 text-black dark:text-white font-medium transition-all duration-200">
            <i className="fas fa-user-friends"></i> Join Our Team
          </button>
        </div>
      </section>

      <section className="GlobalPresence bg-white dark:bg-gray-950 pt-8 sm:pt-10 md:pt-14 pb-8 sm:pb-10 md:pb-12">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black dark:text-white text-center">Our Global Presence</h3>
        <p className="text-gray-700 dark:text-gray-400 text-sm sm:text-base w-[95%] sm:w-[80%] md:w-[45%] mx-auto mt-2 sm:mt-4 md:mt-5 text-center">
          From bustling metropolises to emerging cities, we're bringing sustainable mobility solutions worldwide.
        </p>
        <div className="Map w-[95%] sm:w-[90%] h-64 sm:h-80 md:h-90 bg-gray-300 dark:bg-gray-600/80 flex justify-center items-center mx-auto rounded-xl mt-6 sm:mt-8 md:mt-10 relative">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.611380645141!2d73.85674331500338!3d18.520430987396022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c078a7f2f8ff%3A0xfda59cdeab94a7a4!2sPune%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1685321980363!5m2!1sen!2sus"
            width="100%"
            height="100%"
            className="rounded-xl"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="grdient w-full px-2 flex flex-wrap gap-2 justify-center items-center h-20 sm:h-22 bg-gradient-to-b from-transparent to-gray-200 dark:to-gray-950 absolute bottom-0">
            <button className='px-2 bg-gray-500/90 text-white text-xs sm:text-sm rounded-full h-6 sm:h-7'>Pune</button>
            <button className='px-2 bg-gray-500/90 text-white text-xs sm:text-sm rounded-full h-6 sm:h-7'>Mumbai</button>
            <button className='px-2 bg-gray-500/90 text-white text-xs sm:text-sm rounded-full h-6 sm:h-7'>New Delhi</button>
            <button className='px-2 bg-gray-500/90 text-white text-xs sm:text-sm rounded-full h-6 sm:h-7'>Baglore</button>
            <button className='px-2 bg-gray-500/90 text-white text-xs sm:text-sm rounded-full h-6 sm:h-7'>Hydrabad</button>
            <button className='px-2 bg-gray-500/90 text-white text-xs sm:text-sm rounded-full h-6 sm:h-7'>Chennai</button>
            <button className='px-2 bg-gray-500/90 text-white text-xs sm:text-sm rounded-full h-6 sm:h-7'>Kolkata</button>
            <button className='px-2 bg-gray-500/90 text-white text-xs sm:text-sm rounded-full h-6 sm:h-7'>Ahmedabaad</button>
            <button className='px-2 bg-gray-500/90 text-white text-xs sm:text-sm rounded-full h-6 sm:h-7'>+495 more</button>
            <button className='px-2 bg-green-400/90 text-white text-xs sm:text-sm rounded-full h-6 sm:h-7'><Link to='/allcities'>View All Cities</Link></button>
          </div>
        </div>
      </section>
    </>
  )
}
