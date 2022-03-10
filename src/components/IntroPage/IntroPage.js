import React, { useState } from "react";
import StewardIntro from "./StewardIntro";
import ChurchIntro from "./ChurchIntro";

function IntroPage() {
  return (
    <main className="max-w-6xl mx-auto px-4">
      <StewardIntro />
      <ChurchIntro />
    </main>
  );
}

export default IntroPage;