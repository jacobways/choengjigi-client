import React, { useState } from "react";
import Carousel from "./Carousel";
import ShoppingButton from "./ShoppingButton";

function LandingPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 min-h-mainBasic h-auto">
      <Carousel />
      <ShoppingButton />
    </main>
  );
}

export default LandingPage;