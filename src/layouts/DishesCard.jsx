import React, { useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Button from "../layouts/Button";
import OrderForm from "../layouts/orderform"; // Import the OrderForm component

const DishesCard = (props) => {
  const [showOrderForm, setShowOrderForm] = useState(false);

  const handleBuyNowClick = () => {
    // Show the order form when "Buy Now" is clicked
    setShowOrderForm(true);
  };

  const handleCloseOrderForm = () => {
    setShowOrderForm(false); // Close the order form when done
  };

  return (
    <div className="w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
      <img className="rounded-xl" src={props.img} alt="img" />
      <div className="space-y-4">
        <h3 className="font-semibold text-center text-xl pt-6">{props.title}</h3>
        <div className="flex flex-row justify-center">
          <BsStarFill className="text-brightColor" />
          <BsStarFill className="text-brightColor" />
          <BsStarFill className="text-brightColor" />
          <BsStarFill className="text-brightColor" />
          <BsStarHalf className="text-brightColor" />
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <h3 className="font-semibold text-lg">{props.price}</h3>
          <Button title="Buy Now" onClick={handleBuyNowClick} />
        </div>
      </div>

      {/* Conditionally render the Order Form */}
      {showOrderForm && <OrderForm onClose={handleCloseOrderForm} pizza={props} />}
    </div>
  );
};

export default DishesCard;
