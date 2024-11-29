import React, { useState } from "react";
import ReviewCard from "../layouts/ReviewCard";
import Button from "../layouts/Button";
import img1 from "../assets/img/R2.png";
import img2 from "../assets/img/r1.png";
import img3 from "../assets/img/R3.png";
import { AiOutlineClose } from "react-icons/ai";

const Review = () => {
  const [showInput, setShowInput] = useState(false); // State to toggle the input box
  const [review, setReview] = useState(""); // State to capture review input

  // Toggle the visibility of the input box
  const handleToggleInput = () => {
    setShowInput((prev) => !prev); // Toggle between true and false
  };

  // Handle review input change
  const handleInputChange = (e) => {
    setReview(e.target.value);
  };

  // Handle review submission
  const handleSubmit = () => {
    console.log("Review submitted:", review); // Log the review (for now)
    setReview(""); // Clear the review
    setShowInput(false); // Hide the input box
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:px-32 px-5 select-none">
      <h1 className="font-pacifico text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
        Customer's Review
      </h1>
      <div className="flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard
          img={img1}
          name="Sophia Azura"
          text="The best pizza I’ve ever had! The crust was perfectly crispy, and the toppings were so fresh. Highly recommend! 🍕✨"
        />
        <ReviewCard
          img={img2}
          name="John Deo"
          text="Absolutely loved it! The variety on the menu is amazing, and the flavors are unmatched. Perfect for a cozy dinner with friends. ❤️🍕"
        />
        <ReviewCard
          img={img3}
          name="Victoria Zoe"
          text="The pizza was to die for! 🥰 The wood-fired flavor really sets it apart. Great options for vegetarians too! 🌱🍕"
        />
      </div>

      <div className="mt-10 w-full md:w-1/2 flex flex-col items-center">
        {/* Add Review Button */}
        <Button title={showInput ? (
          <AiOutlineClose className="text-xl" />) : ( "Add a Review")} className="mb-5" onClick={handleToggleInput}/>


        {/* Review Input Box */}
        {showInput && (
          <div className="w-full flex flex-col items-center">
            <textarea
              value={review}
              onChange={handleInputChange}
              className="border-2 border-gray-300 p-2 rounded-md w-full"
              placeholder="Write your review here..."
            ></textarea>
            <Button
              title="Submit"
              className="mt-3"
              onClick={handleSubmit}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Review;
