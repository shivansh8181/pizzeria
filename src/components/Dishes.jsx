import React from "react";
import img1 from "../assets/img/D1.jpg";
import img2 from "../assets/img/D2.jpg";
import img3 from "../assets/img/D3.jpg";
import img4 from "../assets/img/D4.jpg";
import img5 from "../assets/img/D5.jpg";
import img6 from "../assets/img/D6.jpg";
import DishesCard from "../layouts/DishesCard";

const Dishes = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 select-none">
      <h1 className="font-pacifico text-4xl font-semibold text-center pt-24 pb-10">
        Our Dishes
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={img1} title="Margherita Magic 🍅🧀" price="Rs 299" />
        <DishesCard img={img2} title="Smoky BBQ Feast 🔥🍖" price="Rs 399" />
        <DishesCard img={img3} title="Tuscany Treat 🍕🌿" price="Rs 349" />
        <DishesCard img={img4} title="Classic Caprese 🥬🍅" price="Rs 429" />
        <DishesCard img={img5} title="Truffle Temptation 🍄✨" price="Rs 249" />
        <DishesCard img={img6} title="Golden Crust Supreme 🧄🍯" price="Rs 299" />
      </div>
    </div>
  );
};

export default Dishes;
