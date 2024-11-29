import React from "react";
import img from "../assets/img/chooseus (2).png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 select-none">
      <img src={img} alt="img" className="w-96"/>

      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-pacifico font-semibold text-4xl text-center md:text-start ">
          Why Choose Us?
        </h1>
          <p className="text-center mb-4 text-lg">At <strong className="text-brightColor font-love">Pizzeria</strong>, we’re passionate about serving the best pizza in town. Here’s why you’ll love us:</p>
          <ul className="space-y-4 text-base">
            <li><strong className="text-brightColor ">Authentic & Flavorful:</strong> Traditional recipes, fresh ingredients, and wood-fired perfection.</li>
            <li><strong className="text-brightColor ">Variety for Everyone:</strong> Classic, creative, and dietary-friendly options to suit every taste.</li>
            <li><strong className="text-brightColor ">Cozy Atmosphere:</strong> A warm and welcoming environment perfect for any occasion.</li>
            <li><strong className="text-brightColor ">Fast Delivery:</strong> Hot, fresh pizza delivered right to your door.</li>
            <li><strong className="text-brightColor ">Great Value:</strong> High-quality pizza at affordable prices, with daily specials and deals.</li>
          </ul>
          <p className="text-center mt-6 text-lg">Come taste the difference at <strong className="text-brightColor font-love">Pizzeria</strong> – where every bite is a slice of happiness!</p>
        <div className=" flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
