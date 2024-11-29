import React from "react";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { CiPizza } from "react-icons/ci";


const Footer = () => {
  return (
    <div className=" bg-black text-white rounded-t-3xl mt-8 md:mt-0 select-none">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <div className="flex">
            <span className="text-yellow-400">
                <CiPizza size={32} />
            </span>
            <h1 className=" font-love text-2xl pb-4 select-none">Pizzeria</h1>
          </div>
          <p className=" text-sm select-none">
          “In crust we trust, where every slice feels like home!”
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className="custom-link"
            >
              Dishes
            </a>
            <a
              className="custom-link"
            >
              About
            </a>
            <a
              className="custom-link"
            >
              Menu
            </a>
            <a
              className="custom-link"
            >
              Reviews
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className="custom-link"
            >
              Our Dishes
            </a>
            <a
              className="custom-link"
            >
              Premium Menu
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className="custom-link"
            >
              pizzeria@email.com
            </a>
            <a
              className="custom-link"
            >
              +91 958 248 9664
            </a>
            <div className="flex gap-2">
              <a
                className="custom-link"
              >
                <span>
                    <BsInstagram size={20} />
                </span>
              </a>
              <a
                className="custom-link"
              >
                <span>
                    <BsFacebook size={20} />
                </span>
              </a>
              <a
                className="custom-link"
              >
                <span>
                    <RiTwitterXFill size={20} />
                </span>
              </a>
              <a
                className="custom-link"
              >
                <span>
                    <BsWhatsapp size={20} />
                </span>
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4 text-base">
            @copyright developed by
            <span className=" text-brightColor"> Shivansh Sharma</span> |
            All rights reserved
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
