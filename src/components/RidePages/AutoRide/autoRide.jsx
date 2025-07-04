import { FaUsers, FaTruckPickup } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AutoRide = () => {
  const rides = [
    {
      name: 'GreenAuto',
      desc: 'Efficient three-wheeler auto trips',
      price: 129,
      eta: '4 mins',
      capacity: 3,
      tags: ['Economical', 'Suitable for short distances'],
    },
    {
      name: 'GreenAuto XL',
      desc: 'Spacious auto for extra comfort',
      price: 149,
      eta: '5 mins',
      capacity: 4,
      tags: ['Spacious', 'Suitable for small groups'],
    },
  ];

  const tagRoutes = {
    'Economical': '/economical',
    'Suitable for short distances': '/economical',
    'Spacious': '/spacious',
    'Suitable for small groups': '/spacious',
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#1F2937] flex items-center justify-center p-4">
      <div className="bg-[#1e293b] w-full max-w-2xl rounded-xl p-6 space-y-6 text-white shadow-lg">
        <h2 className="text-2xl font-bold">Book Your Trip</h2>

        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">Available TRips</h3>
            <p className="text-sm text-gray-400">For immediate pickup</p>
          </div>
          <Link to="/book-ride">
            <button className="bg-[#0f172a] hover:bg-green-900 text-white text-sm px-6 py-2 rounded-md transition-colors duration-200">
              Back
            </button>
          </Link>
        </div>

        {rides.map((ride, index) => (
          <div
            key={index}
            className="bg-[#0B111C] rounded-lg p-5 space-y-3 hover:shadow-md border border-[#1f2a37] transition duration-200"
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-4">
                <div className="text-green-400 bg-[#1a2b3c] p-3 rounded-full">
                  <FaTruckPickup size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{ride.name}</h4>
                  <p className="text-sm text-gray-400">{ride.desc}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg text-white">₹{ride.price}</p>
                <p className="text-xs text-gray-400">ETA: {ride.eta}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 items-center">
              {ride.tags.map((tag, i) => (
                <Link key={i} to={tagRoutes[tag] || '/'}>
                  <span className="text-xs bg-[#2e3c51] text-white px-2.5 py-1 rounded-full cursor-pointer hover:bg-[#3b4a62] transition">
                    {tag}
                  </span>
                </Link>
              ))}
              <div className="ml-auto flex items-center text-xs text-gray-400">
                <FaUsers className="mr-1" /> {ride.capacity}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoRide;
