// import { ArrowRight } from "lucide-react";
// import { motion } from "framer-motion";

// const services = [
//   {
//     title: "All India Parcel",
//     image:
//       "https://www.shutterstock.com/image-photo/indian-woman-receiving-box-courier-260nw-2248444875.jpg",
//   },
//   {
//     title: "Packers & Movers",
//     image:
//       "https://t3.ftcdn.net/jpg/05/41/66/78/360_F_541667819_2n6o4de3aB4PB9VqkPkNP1BGszqT2V7B.jpg",
//   },
//   {
//     title: "Trucks",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS99twewQBJn5xX8LwTOr7xBs0WdRzFFeukpw&s",
//   },
//   {
//     title: "Two-Wheelers",
//     image:
//       "https://static.vecteezy.com/system/resources/previews/014/950/832/original/food-delivery-guy-online-food-deliver-door-to-door-service-free-vector.jpg",
//   },
// ];

// const duplicatedServices = [...services, ...services]; // duplicate for smooth infinite loop

// export default function OtherServices() {
//   return (
//     <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300 py-8 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 text-center">
//         <h2 className="text-3xl font-bold text-green-400 mb-10">
//           Other Services to Choose From
//         </h2>

//         <div className="relative w-full overflow-hidden">
//           <div className="w-full max-w-[672px] mx-auto overflow-hidden">
//             <motion.div
//               className="flex gap-6 w-max"
//               animate={{ x: ["0%", "-50%"] }}
//               transition={{
//                 duration: 20,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//             >
//               {duplicatedServices.map((service, index) => (
//                 <div
//                   key={index}
//                   className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-xl p-4 w-56 h-60 flex flex-col items-center justify-between shadow-md border border-transparent hover:border-green-500 transition-all"
//                 >
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="h-20 w-24 object-cover rounded-md shadow"
//                   />
//                   <h3 className="text-base font-medium mt-2">
//                     {service.title}
//                   </h3>
//                   <button className="bg-green-600 hover:bg-green-700 transition duration-200 text-white p-2 rounded-full shadow-sm">
//                     <ArrowRight size={18} />
//                   </button>
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "All India Parcel",
    image:
      "https://www.shutterstock.com/image-photo/indian-woman-receiving-box-courier-260nw-2248444875.jpg",
  },
  {
    title: "Packers & Movers",
    image:
      "https://t3.ftcdn.net/jpg/05/41/66/78/360_F_541667819_2n6o4de3aB4PB9VqkPkNP1BGszqT2V7B.jpg",
  },
  {
    title: "Trucks",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS99twewQBJn5xX8LwTOr7xBs0WdRzFFeukpw&s",
  },
  {
    title: "Two-Wheelers",
    image:
      "https://static.vecteezy.com/system/resources/previews/014/950/832/original/food-delivery-guy-online-food-deliver-door-to-door-service-free-vector.jpg",
  },
];

const duplicatedServices = [...services, ...services]; // duplicate for smooth infinite loop

export default function OtherServices() {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-green-400 mb-10">
          Other Services to Choose From
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="w-full max-w-[672px] mx-auto overflow-hidden">
            <motion.div
              className="flex gap-6 w-max"
              animate={{ x: ["-50%", "0%"] }} // <-- Left to Right
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ direction: "ltr" }}
            >
              {duplicatedServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-xl  p-3 sm:p-4 w-40 sm:w-48 md:w-56 h-52 sm:h-60 flex flex-col items-center justify-between shadow-md border border-transparent hover:border-green-500 transition-all"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-20 w-24 object-cover rounded-md shadow"
                  />
                  <h3 className="text-base font-medium mt-2">
                    {service.title}
                  </h3>
                  <button className="bg-green-600 hover:bg-green-700 transition duration-200 text-white p-2 rounded-full shadow-sm">
                    <ArrowRight size={18} />
                  </button>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
