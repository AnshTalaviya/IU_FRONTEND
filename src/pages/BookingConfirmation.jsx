import { motion } from "framer-motion";

export default function BookingConfirmation() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6 max-w-md"
      >
        <h1 className="text-3xl font-bold text-orange-500">🎉 Booking Confirmed!</h1>
        <p className="text-lg">
          Thank you for booking with <span className="font-semibold">Idhar Udhar</span>! Our team is on the way.
        </p>
        <button
          onClick={() => window.location.href = "/"} // or navigate('/')
          className="px-6 py-3 bg-orange-600 rounded-lg font-medium hover:bg-orange-700 transition"
        >
          Go to Home
        </button>
      </motion.div>
    </div>
  );
}
