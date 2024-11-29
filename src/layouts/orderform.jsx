import React, { useState } from "react";
import D1 from "../assets/img/D1.jpg";
import D2 from "../assets/img/D2.jpg";
import D3 from "../assets/img/D3.jpg";
import D4 from "../assets/img/D4.jpg";
import D5 from "../assets/img/D5.jpg";
import D6 from "../assets/img/D6.jpg";
import PM4 from "../assets/img/PM4.jpg";
import PM2 from "../assets/img/PM2.jpg";
import PM3 from "../assets/img/PM3.jpg";


const OrderForm = ({ onClose }) => {
  const [selectedPizzas, setSelectedPizzas] = useState([]); // Track multiple selected pizzas
  const [quantity, setQuantity] = useState(1);

  // User info state
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
  });

  const pizzas = [
    {
      id: 1,
      name: "Margherita Magic 🍅🧀",
      price: 299,
      image: D1,
    },
    {
      id: 2,
      name: "Smoky BBQ Feast 🔥🍖",
      price: 399,
      image: D2,
    },
    {
      id: 3,
      name: "Tuscany Treat 🍕🌿",
      price: 349,
      image: D3,
    },
    {
      id: 4,
      name: "Veggie Supreme",
      price: 429,
      image: D4,
    },
    {
      id: 5,
      name: "Classic Caprese 🥬🍅",
      price: 249,
      image: D5,
    },
    {
      id: 6,
      name: "Truffle Temptation 🍄✨",
      price: 299,
      image: D6,
    },
    {
      id: 7,
      name: "Truffle Supreme 🍄",
      price: 599,
      image: PM4,
    },
    {
      id: 8,
      name: "Inferno Royale 🌶️",
      price: 549,
      image: PM2,
    },
    {
      id: 9,
      name: "Mediterranean Bliss 🍅",
      price: 529,
      image: PM3,
    },
  ];
  
  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePizzaSelection = (pizza) => {
    setSelectedPizzas((prevSelectedPizzas) => {
      const existingPizza = prevSelectedPizzas.find((item) => item.id === pizza.id);
  
      if (existingPizza) {
        // Update the quantity if pizza already selected
        return prevSelectedPizzas.map((item) =>
          item.id === pizza.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Add the pizza to the list with quantity 1 if not already selected
        return [...prevSelectedPizzas, { ...pizza, quantity: 1 }];
      }
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedPizzas.length === 0) {
      alert("Please select at least one pizza!");
      return;
    }
    if (!userInfo.name || !userInfo.email) {
      alert("Please enter your name and email!");
      return;
    }

    console.log("Order Details:", {
      user: userInfo,
      pizzas: selectedPizzas,
    });
    console.log(`Order placed for ${selectedPizzas.length} pizza(s)!`);
    onClose(); // Close the form after submission
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg flex justify-center items-center">

      <div className="w-full max-w-lg mx-auto bg-white rounded-lg shadow-lg">
        <form
          onSubmit={handleSubmit}
          className="p-5 flex flex-col h-[calc(100vh*2.8/3)] overflow-y-auto"
        >
          <h2 className="text-3xl font-bold mb-4 font-pacifico text-center">Order Form</h2>

          {/* User Info Fields */}
          <div className="mb-4">
            <label className="block font-semibold mb-1">Your Name:</label>
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleUserInfoChange}
              className="w-full p-2 border rounded-lg text-sm"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-1">Your Email:</label>
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleUserInfoChange}
              className="w-full p-2 border rounded-lg text-sm"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Pizza Selection */}
          <div className="mb-4 max-h-60 overflow-y-auto">
            {pizzas.map((pizza) => (
              <div
                key={pizza.id}
                className="border p-4 rounded-lg shadow-md flex items-center space-x-4 cursor-pointer"
                onClick={() => handlePizzaSelection(pizza)} // Select pizza when clicked
              >
                <img
                  src={pizza.image}
                  alt={pizza.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-semibold">{pizza.name}</h3>
                  <p className="text-gray-600">Rs{pizza.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Show selected pizza details */}
          {selectedPizzas.length > 0 && (
            <div className="mb-4 max-h-40 overflow-y-auto min-h-20">
              <h3 className="font-semibold mb-2">You selected:</h3>
              <div>
                {selectedPizzas.map((pizza) => (
                  <div key={pizza.id} className="flex justify-between items-center mb-2">
                    <span>{pizza.name} x{pizza.quantity}</span>
                    <span>${(pizza.price * pizza.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Submit and Cancel buttons */}
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-600 w-full"
          >
            Place Order
          </button>
          <button
            type="button"
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 w-full"
            onClick={onClose}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
