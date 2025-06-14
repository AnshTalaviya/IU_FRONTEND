import React from "react";

const CityServiceMap = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-gray-300 text-gray-800">
      <section className="py-10 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-400">Cities We Serve</h2>

        <div className="relative w-full aspect-[4/3] max-w-4xl mx-auto rounded-xl shadow-lg overflow-hidden">
          <div
            className="absolute inset-0 bg-center bg-no-repeat bg-contain"
            style={{
              backgroundImage:
                "url('https://dom-website-prod-cdn-cms.porter.in/porter_india_v3_847f077bba_639cd5ce3a.webp')",
            }}
          />
        </div>

        <p className="text-white max-w-md mx-auto mt-6">
          IdharUdhar currently offers consignment delivery services in these key cities.
        </p>
      </section>
    </div>
  );
};

export default CityServiceMap;
