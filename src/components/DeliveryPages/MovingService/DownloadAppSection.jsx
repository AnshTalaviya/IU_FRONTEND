import React from 'react';

const DownloadAppSection = () => {
    return (
        <section className="bg-white dark:bg-gray-900 dark:text-gray-300 text-gray-800 flex justify-center items-center py-12 px-4">
            <div className="bg-gradient-to-r from-blue-100 via-gray-400 to-rose-100 rounded-xl shadow-md text-center px-6 py-10 max-w-3xl w-full">
                <h2 className="dark:text-white text-black text-2xl md:text-3xl font-semibold mb-2">
                    Think Logistics, Think IdharUdhar!
                </h2>
                <p className="dark:text-gray-100 text-gray-700 mb-6">
                    Get the IdharUdhar mobile app to start booking your orders!
                </p>
                {/* Fake QR Code using qrserver.com */}
                <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://example.com"
                    alt="QR Code to download app"
                    className="mx-auto w-28 h-28 mb-4"
                />

                <p className="dark:text-gray-100 text-gray-700 text-lg">Scan to download our app!</p>
            </div>
        </section>
        
    );
};

export default DownloadAppSection;