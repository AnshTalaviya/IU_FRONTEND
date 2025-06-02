import React, { useState, useEffect } from "react";
import { FaStar, FaSearch, FaShoppingCart } from "react-icons/fa";

const FoodDelivery = () => {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [showCartPage, setShowCartPage] = useState(false);

  const restaurants = [
    {
      name: "Spicy Biryani",
      cuisine: "Indian",
      rating: 4.5,
      deliveryTime: "30 mins",
      image: "https://source.unsplash.com/400x300/?biryani",
      menu: [
        { name: "Chicken Biryani", price: 200 },
        { name: "Veg Biryani", price: 150 },
        { name: "Paneer Biryani", price: 180 },
      ],
    },
    {
      name: "Sushi House",
      cuisine: "Japanese",
      rating: 4.8,
      deliveryTime: "45 mins",
      image: "https://source.unsplash.com/400x300/?sushi",
      menu: [
        { name: "Salmon Sushi", price: 350 },
        { name: "Veg Sushi Roll", price: 250 },
        { name: "Tuna Nigiri", price: 400 },
      ],
    },
    {
      name: "Pizza Planet",
      cuisine: "Italian",
      rating: 4.2,
      deliveryTime: "25 mins",
      image: "https://source.unsplash.com/400x300/?pizza",
      menu: [
        { name: "Margherita Pizza", price: 220 },
        { name: "Pepperoni Pizza", price: 280 },
        { name: "Farmhouse Pizza", price: 250 },
      ],
    },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
    setShowCart(true);
  };

  useEffect(() => {
    if (showCart) {
      const timer = setTimeout(() => setShowCart(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showCart]);

  const filteredRestaurants = restaurants.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-900 min-h-screen text-white p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Food Delivery</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search restaurants..."
            className="px-4 py-2 rounded-lg text-black"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="absolute right-3 top-3 text-black" />
        </div>
        <div className="relative">
          <FaShoppingCart size={28} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 rounded-full">
              {cart.length}
            </span>
          )}
        </div>
      </div>

      {showCartPage ? (
        <div>
          <button
            onClick={() => setShowCartPage(false)}
            className="mb-4 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded"
          >
            ← Back
          </button>
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-800 p-4 rounded-xl shadow flex justify-between items-center"
                >
                  <span>{item.name}</span>
                  <span>₹{item.price}</span>
                </div>
              ))}
              <div className="text-right font-bold text-lg">
                Total: ₹{cart.reduce((sum, item) => sum + item.price, 0)}
              </div>
              <button className="w-full mt-4 bg-green-600 hover:bg-green-700 py-2 rounded">
                Place Order
              </button>
            </div>
          )}
        </div>
      ) : !selectedRestaurant ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-1">{restaurant.name}</h2>
                <p className="text-sm text-gray-400">{restaurant.cuisine}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" /> {restaurant.rating}
                  </span>
                  <span>{restaurant.deliveryTime}</span>
                </div>
                <button
                  onClick={() => setSelectedRestaurant(restaurant)}
                  className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
                >
                  View Menu
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <button
            onClick={() => setSelectedRestaurant(null)}
            className="mb-4 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded"
          >
            ← Back to Restaurants
          </button>
          <h2 className="text-2xl font-bold mb-4">Menu - {selectedRestaurant.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedRestaurant.menu.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-400">₹{item.price}</p>
                <button
                  onClick={() => addToCart(item)}
                  className="mt-2 bg-green-600 hover:bg-green-700 px-3 py-1 rounded"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Cart Summary */}
      {showCart && cart.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-gray-800 p-4 rounded-xl shadow-xl w-72">
          <h3 className="text-lg font-bold mb-2">Cart Summary</h3>
          {cart.map((item, i) => (
            <div key={i} className="text-sm border-b border-gray-700 py-1">
              {item.name} - ₹{item.price}
            </div>
          ))}
          <button
            onClick={() => setShowCartPage(true)}
            className="mt-3 w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};


export default FoodDelivery;