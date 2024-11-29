import React, { useState } from "react";
import Button from "../layouts/Button";
import OrderForm from "../layouts/orderform"; // Make sure to import OrderForm

const Home = () => {
  const [showOrderForm, setShowOrderForm] = useState(false); // State to manage form visibility

  const handleOrderNowClick = () => {
    setShowOrderForm(true); // Show the order form
  };

  const handleCloseForm = () => {
    setShowOrderForm(false); // Hide the order form
  };

  return (
    <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/bgimg.jpg')] bg-cover bg-no-repeat">
      <div className="pt-4 w-full lg:w-2/3 space-y-5">
        <h1 className="text-white font-semibold text-6xl select-none">
          “In crust we trust, where every slice feels like home!”
        </h1>
        <p className="text-white select-none">
          At Pizzeria, we serve more than just pizza; we serve passion, tradition, and a slice of heaven.
          <br />
          Every pizza is handcrafted with the finest ingredients, from our fresh dough to the finest cheeses and vibrant, seasonal toppings.
        </p>
        <div className="lg:pl-44">
          <Button title="Order Now" className="white-bg-button" onClick={handleOrderNowClick} />
        </div>
      </div>

      {showOrderForm && (
        <OrderForm
          onClose={handleCloseForm}
        />
      )}
    </div>
  );
};

export default Home;

