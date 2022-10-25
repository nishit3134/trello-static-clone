import React, { useState } from "react";

function Navbar() {
  return (
    <>
      <div>
        <div class="px-3 py-2 bg-white flex justify-between lg:py-4 lg:px-6">
          <div class="lg:flex space-x-8">
            <div>
              <img
                class="h-8 lg:h-9"
                src="/Trello_logo.svg.png"
                alt="TRELLO LOGO"
              />
            </div>
            <div class="hidden lg:flex space-x-12 my-auto">
              <a href="#">Features</a>
              <a href="#">Solutions</a>
              <a href="#">Plans</a>
              <a href="#">Pricing</a>
              <a href="#">Resources</a>
            </div>
          </div>
          <div class="lg:hidden">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="w-8 h-8 stroke-[#091E42]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
