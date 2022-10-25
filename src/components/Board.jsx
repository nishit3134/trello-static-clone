import React, { useState } from "react";

function Board() {
  return (
    <>
      <div class="text-[#091E42] space-y-4">
        <div class="px-6">
          <div class=" min-w-full max-w-prose">
            <p class="text-3xl font-medium text-center">
              It's more than work. It's a way of working together.
            </p>
          </div>
          <br />
          <div class="flex justify-center min-w-full max-w-prose">
            <p class="text-center text-lg">
              Start with a Trello board, lists, and cards. Customize and expand
              with more features as your teamwork grows. Manage projects,
              organize tasks, and build team spirit—all in one place.
            </p>
          </div>
        </div>

        <div class="flex justify-center">
          <button class="bg-blue-600 rounded-md text-white px-4 py-4">
            Start Doing
          </button>
        </div>
        <br />

        <div>
          <img src="/public/board.webp" alt="IMG NOT FOUND" />
        </div>
      </div>

      <div class="">
        <div class="justify-center text-center px-6 min-w-full max-w-prose">
          <p class="text-xl text-center text-[#091E42] tracking-wide">
            Join over 2,000,000 teams worldwide that are using Trello to get
            more done.
          </p>
        </div>
        <div>
          <div class="flex justify-center">
            <img class="" src="/public/coinbase.svg" alt="IMG NOT FOUND" />
          </div>
          <div class="flex justify-center">
            <img src="/public/johnDeere.svg" alt="IMG NOT FOUND" />
          </div>
          <div class="flex justify-center">
            <img src="/public/Grand-Hyatt.svg" alt="IMG NOT FOUND" />
          </div>
          <div class="flex justify-center">
            <img src="/public/Google.svg" alt="IMG NOT FOUND" />
          </div>
        </div>
        <div class="">
          <div class="flex justify-center">
            <img src="/public/Visa.svg" alt="IMG NOT FOUND" />
          </div>
          <div class="flex justify-center">
            <img class="h-20" src="/public/Zoom.webp" alt="IMG NOT FOUND" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Board;
