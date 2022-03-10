import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';

function ShoppingButton() {
  return (
    <section className="w-10/12 select-none relative mx-auto">
      <Link to="/market">
      <button 
        className="float-right mt-2 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
      >
      장보러 가기 <AiOutlineShoppingCart className="inline" size={19}/></button>
      </Link>
    </section>
  );
}

export default ShoppingButton;