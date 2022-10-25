import React, { useState } from "react";

function Hero() {
  return (
    <>
      <div class="px-3 text-[#091E42] lg:flex items-center justify-center lg:min-h-screen bg-gradient-to-b from-[#EAE6FF] to-white">
        <div class="flex justify-center pt-3 pr-5">
          <img class="h-80 lg:h-96" src="/public/hero.webp" alt="HERO" />
        </div>
        <div class="max-h-fit">
          <div class="mt-8 px-4">
            <p class="text-3xl font-medium text-center max-w-prose lg:text-left lg:text-5xl lg:leading-tight">
              Trello helps teams move <br class="hidden lg:flex" />
              work forward.
            </p>
            <p class="text-lg text-center mt-1 max-w-prose lg:text-left">
              Collaborate, manage projects, and reach new productivity peaks.
              From high rises to the home office, the way your team works is
              unique-accomplish it all with Trello.
            </p>
          </div>
          <div class="flex justify-center min-h-fit">
            <div class="hidden lg:flex">
              <input
                class="h-12 my-4 border-solid border-slate-400 rounded-md"
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div class="flex bg-blue-600 py-4 px-4 my-2 text-white rounded-md">
              <input type="submit" value="Sign up-it's free" />
            </div>
          </div>
        </div>
        <hr class="border-1 border-slate-400 min-w-max mx-10 my-8" />
      </div>
    </>
  );
}
export default Hero;
