import React from "react";

const CityServiceMap = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-gray-300  text-gray-800">

      <section className="py-10 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-green-400">Cities We Serve</h2>

        <div
          style={{
            position: "relative",
            width: 800,
            height: 600,
            margin: "0 auto",
            backgroundImage:
              "url('https://dom-website-prod-cdn-cms.porter.in/porter_india_v3_847f077bba_639cd5ce3a.webp')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderRadius: 12,
            boxShadow: "0 0 15px rgba(0,0,0,0.3)",
          }}
        >

        </div>

        <p className="text-white max-w-md mx-auto mt-6">
          IdharUdhar currently offers consignment delivery services in these key cities.
        </p>
      </section>
    </div>
  );
};

export default CityServiceMap;
