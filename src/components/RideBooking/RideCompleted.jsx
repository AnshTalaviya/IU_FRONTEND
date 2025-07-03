import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Star } from "lucide-react";

export default function RideCompleted() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);
  const navigate = useNavigate();

  const handleRating = (rate) => setRating(rate);

  const handleSubmit = () => {
    if (rating === 0) {
      setErrorPopup(true);
      setTimeout(() => setErrorPopup(false), 4000);
      return;
    }

    console.log("Rating:", rating);
    console.log("Feedback:", feedback);
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
      navigate("/");
    }, 4000);
  };

  useEffect(() => {
    if (rating > 0 && errorPopup) {
      setErrorPopup(false);
    }
  }, [rating, errorPopup]);

  return (
    <div className="bg-white dark:bg-[#1F2937] min-h-screen flex items-center justify-center px-4 relative">
      {/* Custom CSS animation styles */}
      <style>{`
        @keyframes slide-up {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>

      <div className="bg-gray-900 p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-xl text-white text-center">
        <CheckCircle className="w-16 h-16 md:w-20 md:h-20 text-green-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-2">Trip Completed</h2>
        <p className="text-gray-400 mb-6 text-lg">
          Thanks for riding with{" "}
          <span className="text-green-400 font-semibold">Idhar Udhar</span>
        </p>

        <div className="text-left mb-6">
          <label className="text-lg flex justify-center font-semibold mb-2">
            Rate your experience
          </label>
          <div className="flex justify-center gap-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleRating(star)}
                className="transition transform hover:scale-110"
              >
                <Star
                  className={`w-10 h-10 ${rating >= star
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-600"
                    }`}
                  strokeWidth={1.5}
                />
              </button>
            ))}
          </div>
        </div>

        <textarea
          placeholder="Tell us about your experience (optional)"
          className="w-full mt-4 p-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
          rows={5}
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />

        <div className="flex justify-between">
          <button
            onClick={handleSubmit}
            className="mt-6 bg-green-600 hover:bg-green-700 text-black font-semibold px-8 py-2 rounded-xl text-lg transition"
          >
            Submit Rating
          </button>
          <button
            onClick={()=>navigate("/")}
            className="mt-6 bg-green-600 hover:bg-green-700 text-black font-semibold px-8 py-2 rounded-xl text-lg transition"
          >
            Not Now
          </button>
        </div>
      </div>

      {/* ✅ Success Toast */}
      {showPopup && (
        <Toast message="Your rating has been submitted." />
      )}

      {/* ❌ Error Toast */}
      {errorPopup && (
        <Toast message="Please select a rating before submitting." error />
      )}
    </div>
  );
}

function Toast({ message, error }) {
  return (
    <div className="fixed bottom-5 right-5 z-50 animate-slide-up">
      <div
        className={`px-5 py-4 rounded-lg shadow-xl flex items-center gap-4 max-w-md w-full ${error ? "bg-red-600" : "bg-gray-950"
          } text-white`}
      >
        <div className="flex-1 text-sm font-medium">{message}</div>
        <button className="text-xl font-bold leading-none">×</button>
      </div>
    </div>
  );
}
