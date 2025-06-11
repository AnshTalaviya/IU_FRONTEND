import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const services = [
  {
    title: "All India Parcel",
    image:
      "https://www.shutterstock.com/image-photo/indian-woman-receiving-box-courier-260nw-2248444875.jpg",
    route: "/services/city-to-city", // Added route property
  },
  {
    title: "Packers & Movers",
    image:
      "https://t3.ftcdn.net/jpg/05/41/66/78/360_F_541667819_2n6o4de3aB4PB9VqkPkNP1BGszqT2V7B.jpg",
    route: "/services/move-service", // Added route property
  },
  {
    title: "Bike Delivery",
    image:
      "https://www.financialexpress.com/wp-content/uploads/2023/01/porter-two-wheeler-services.jpg",
    route: "/services/bike-delivery", // Added route property
  },
];

export default function OtherServices() {
  const [visibleCards, setVisibleCards] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    services.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index]);
      }, 200 * index); // Staggered delay
    });
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 dark:text-gray-300 text-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-green-400 mb-10">
          Other Services to Choose From
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={` dark:bg-gray-800 bg-gray-100 dark:text-gray-300  text-gray-800  rounded-xl p-4 w-56 h-60 flex flex-col items-center justify-between shadow-md border border-transparent hover:border-green-500 transition-all duration-700 ease-out ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              onClick={() => navigate(service.route)} // Navigate to the specific service route
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-20 w-24 object-cover rounded-md shadow"
              />
              <h3 className="text-base font-medium mt-2">{service.title}</h3>
              <button className="bg-green-600 hover:bg-green-700 transition duration-200 text-white p-2 rounded-full shadow-sm">
                <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}