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
            setTimeout(() => setErrorPopup(false), 5000);
            return;
        }

        console.log("Rating:", rating);
        console.log("Feedback:", feedback);
        setShowPopup(true);

        setTimeout(() => {
            setShowPopup(false);
            navigate("/");
        }, 5000);
    };

    // ✅ Automatically hide error popup when rating is selected
    useEffect(() => {
        if (rating > 0 && errorPopup) {
            setErrorPopup(false);
        }
    }, [rating, errorPopup]);

    return (
        <div className="bg-white dark:bg-[#1F2937] min-h-screen flex items-center justify-center px-4 relative">
            <div className="bg-gray-800 p-10 rounded-2xl shadow-2xl w-full max-w-2xl text-white text-center">
                <div className="flex justify-center mb-6">
                    <CheckCircle className="w-20 h-20 text-green-500" />
                </div>
                <h2 className="text-3xl font-bold mb-2">Ride Completed</h2>
                <p className="text-gray-400 mb-8 text-lg">
                    Thank you for riding with{" "}
                    <span className="text-green-400 font-semibold">Idhar Udhar</span>
                </p>

                <div className="text-left mb-6">
                    <label className="text-lg font-semibold block mb-2">
                        Rate your experience
                    </label>
                    <div className="flex justify-center gap-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => handleRating(star)}
                                className="transition-transform transform hover:scale-110"
                            >
                                <Star
                                    className={`w-10 h-10 ${rating >= star
                                        ? "text-yellow-400 fill-yellow-400"
                                        : "text-gray-500"
                                        }`}
                                    strokeWidth={1.5}
                                />
                            </button>
                        ))}
                    </div>
                </div>

                <textarea
                    placeholder="Tell us about your experience (optional)"
                    className="w-full mt-4 p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 resize-y focus:outline-none focus:ring-2 focus:ring-green-400"
                    rows={7}
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                />

                <button
                    onClick={handleSubmit}
                    className="mt-8 bg-green-600 hover:bg-green-900 text-black font-semibold px-8 py-2 rounded-2xl text-lg transition"
                >
                    Submit Rating
                </button>
            </div>

            {/* ✅ Success Toast Popup */}
            {showPopup && (
                <div className="fixed bottom-4 left-4 right-4 md:bottom-6 md:right-6 md:left-auto z-50">
                    <div className="bg-gray-950 text-white px-4 py-4 md:px-6 md:py-5 rounded-xl shadow-xl flex items-start gap-4 w-full max-w-sm md:max-w-md animate-slide-up relative mx-auto md:mx-0">
                        <div className="flex-1">
                            <p className="font-semibold text-base md:text-lg">Thank you for your feedback!</p>
                            <p className="text-sm text-white/90">Your Rating has been submitted.</p>
                        </div>
                        <button
                            onClick={() => setShowPopup(false)}
                            className="absolute top-2 right-3 text-white hover:text-white/70 text-xl font-bold cursor-pointer"
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}

            {/* ❌ Error Toast Popup */}
            {errorPopup && (
                <div className="fixed bottom-4 left-4 right-4 md:bottom-6 md:right-6 md:left-auto z-50">
                    <div className="bg-red-800 text-white px-4 py-4 md:px-6 md:py-5 rounded-xl shadow-xl flex items-start gap-4 w-full max-w-sm md:max-w-md animate-slide-up relative mx-auto md:mx-0">
                        <div className="flex-1">
                            <p className="font-semibold text-base md:text-lg">Please select a rating.</p>
                        </div>
                        <button
                            onClick={() => setErrorPopup(false)}
                            className="absolute top-2 right-3 text-white hover:text-white/70 text-xl font-bold cursor-pointer"
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
