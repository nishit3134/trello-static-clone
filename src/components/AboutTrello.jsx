import React, { useState } from "react";

function AboutTrello() {
  return (
    <>
      <div class="mt-10 px-6 text-[#091E42]">
        <div>
          <div>
            <img class="h-32 w-16" src="/proImgs/tag.svg" alt="IMG NOT FOUND" />
          </div>
          <div class="">
            <p class="text-xl font-medium">See Trello pricing</p>
            <p class="py-3">
              Whether you're a team of 2 or 2,000, Trello can be customized for
              your organization. Explore which option is best for you.
            </p>
            <button class="px-4 py-2 text-white bg-[#0065ff] rounded-md">
              Compare Pricing
            </button>
          </div>
        </div>
      </div>
      <div class="mt-6 px-6 text-[#091E42]">
        <div>
          <div>
            <img
              class="h-32 w-16"
              src="/proImgs/compass.svg"
              alt="IMG NOT FOUND"
            />
          </div>
          <div class="">
            <p class="text-xl font-medium">What is Trello?</p>
            <p class="py-3">
              Trello is the visual tool that empowers your team to manage any
              type of project, workflow, or task tracking.
            </p>
            <button class="px-4 py-2 text-white bg-[#0065ff] rounded-md">
              Tour Trello
            </button>
          </div>
        </div>
      </div>
      <div class="mt-6 px-6 text-[#091E42]">
        <div>
          <div>
            <img class="h-32 w-16" src="/proImgs/sol.svg" alt="IMG NOT FOUND" />
          </div>
          <div class="">
            <p class="text-xl font-medium">Discover Trello Enterprise</p>
            <p class="py-3">
              The productivity tool teams love, paired with the features and
              security needed for scale.
            </p>
            <button class="px-4 py-2 text-white bg-[#0065ff] rounded-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <hr class="border-1 border-slate-400 min-w-max mx-10 my-8" />
    </>
  );
}
export default AboutTrello;
