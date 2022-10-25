import React, { useState } from "react";

function SignUp() {
  return (
    <>
      <div class="bg-[#e6fcff] text-[#091E42] px-5 py-8 mt-8">
        <div class="px-8 py-2">
          <p class="text-2xl">
            Everyone loves it, it has democratized our finance function. In some
            ways Trello shattered hierarchy and brought us together.
          </p>

          <p>
            <span class="font-medium">BHARATH SUNDAR </span> - Finance, eBay
          </p>
          <p>
            Industry: <span class="font-medium">eCommerce</span>
          </p>

          <div class="flex justify-end h-20">
            <img src="/ebay.png" alt="eBay" />
          </div>
        </div>
      </div>
      <div class="bg-top bg-gradient-to-b from-[#413a9c] to-[#4b98fd] mx-12 px-5 py-8 rounded-lg text-white -mt-8">
        <p class="text-2xl text-center">
          Sign up and get started with Trello today. A world of productive
          teamwork awaits!
        </p>
        <div class="flex justify-center mt-8">
          <div class="hidden">
            <input
              class="h-12 w-96 border-solid border-slate-400 rounded-md"
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div class="flex bg-white px-4 py-3 rounded-md ml-4 text-[#091E42]">
            <input type="submit" value="Sign up" />
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
