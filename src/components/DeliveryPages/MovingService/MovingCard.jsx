import React from 'react';
import { Handshake, IndianRupee, MapPin } from 'lucide-react';

const MovingCard = () => {
    return (
        <section className=" impactCard bg-white dark:bg-gray-900 dark:text-gray-300 text-gray-800 py-12 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-semibold   mb-10">
                    House Shifting Services with Best Packers and Movers in Ahmedabad
                </h2>

                <div className="impactCard grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {/* Feature 1 */}
                    <div className="impactCard hover:bg-white/4 rounded-xl p-4 sm:p-5 md:p-6 text-center hover:shadow-xl flex flex-col items-center ">
                        <div className="dark:bg-green-900 bg-green-500/50 p-4 rounded-full mb-4">
                            <Handshake className=" text-green-600 w-10 h-10" />
                        </div>
                        <h4 className="font-bold mb-1">100% Damage-Free Shifting</h4>
                        <p>Packers and movers services with safety at every step.</p>
                    </div>

                    {/* Feature 2 */}
                    <div className="impactCard hover:bg-white/4 rounded-xl p-4 sm:p-5 md:p-6 text-center hover:shadow-xl flex flex-col items-center">
                        <div className="dark:bg-green-900 bg-green-500/50 p-4 rounded-full mb-4">
                            <IndianRupee className="text-green-600 w-10 h-10" />
                        </div>
                        <h4 className="font-bold mb-1">Affordable & Assured</h4>
                        <p>Reliable packers and movers services at economical prices.</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="impactCard hover:bg-white/4 rounded-xl p-4 sm:p-5 md:p-6 text-center hover:shadow-xl flex flex-col items-center">
                        <div className="dark:bg-green-900 bg-green-500/50 p-4 rounded-full mb-4">
                            <MapPin className="text-green-600 w-10 h-10" />
                        </div>
                        <h3 className="font-bold mb-1">Expert Handling</h3>
                        <p>Professionally trained experts for damage-free shifting.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MovingCard;
