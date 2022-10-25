import React, { useState } from "react";

function Cards() {
  return (
    <>
      <div>
        <div class="px-5 mt-8 max-w-prose min-w-fit space-y-2 justify-center text-[#091E42]">
          <p class="text-3xl font-medium">Features to help your team succeed</p>
          <p class="text-lg">
            Powering a productive team means using a powerful tool (and plenty
            of snacks). From meetings and projects to events and goal setting,
            Trello's intuitive features give any team the ability to quickly set
            up and customize workflows for just about anything.
          </p>
        </div>
      </div>
      <div class="px-5 mt-10 justify-between text-[#091E42] bg-gradient-to-b from-[#EAE6FF] to-white py-5">
        <div>
          <img src="/viewboard.svg" alt="IMG NOT FOUND" />
        </div>
        <div class="flex-col space-y-1 max-w-prose">
          <p>CHOOSE A VIEW</p>
          <p class="text-3xl font-medium">The board is just the beginning</p>
          <p class="text-left text-lg text-slate-500">
            Lists and cards are the building blocks of organizing work on a
            Trello board. Grow from there with task assignments, timelines,
            productivity metrics, calendars, and more.
          </p>
          <p class="text-lg font-medium">+ Learn More</p>
        </div>
      </div>
      <div class="px-5 mt-10 text-[#091E42] bg-gradient-to-b from-[#EAE6FF] to-white py-5">
        <div class="flex-col space-y-1 max-w-prose">
          <div>
            <img src="/card-back.svg" alt="IMG NOT FOUND" />
          </div>
          <p>DIVE INTO THE DETAILS</p>
          <p class="text-3xl font-medium">Cards contain everything you need</p>
          <p class="text-lg text-slate-500">
            Trello cards are your portal to more organized work—where every
            single part of your task can be managed, tracked, and shared with
            teammates. Open any card to uncover an ecosystem of checklists, due
            dates, attachments, conversations, and more.
          </p>
          <p class="text-lg font-medium">+ Learn More</p>
        </div>
      </div>
      <div class="px-5 mt-10 text-[#091E42] bg-gradient-to-b from-[#EAE6FF] to-white py-5">
        <div>
          <img src="/automation.webp" alt="IMG NOT FOUND" />
        </div>
        <div class="flex-col space-y-1 max-w-prose">
          <p>MEET YOUR NEW BUTLER</p>
          <p class="text-3xl font-medium text-left">No-code automation</p>
          <p class="text-left text-lg text-slate-500">
            Let the robots do the work—so your team can focus on work that
            matters. With Trello's built-in automation, Butler, reduce the
            number of tedious tasks (and clicks) on your project board by
            harnessing the power of automation across your entire team.
          </p>
          <p class="text-lg font-medium">+ Learn More</p>
        </div>
      </div>
      <div class="px-5 mt-10 text-[#091E42] bg-gradient-to-b from-[#EAE6FF] to-white py-5">
        <div>
          <img src="/power-ups.webp" alt="IMG NOT FOUND" />
        </div>
        <div class="flex-col space-y-1 max-w-prose">
          <p>POWER-UPS</p>
          <p class="text-3xl font-medium">Integrate top work tools</p>
          <p class="text-lg text-slate-500 py-4">
            Easily connect the apps your team already uses into your Trello
            workflow, or add a Power-Up that helps fine-tune one specific need.
            With hundreds of Power-Ups available, your team's workflow wishes
            are covered.
          </p>
          <p class="text-lg font-medium">+ Learn More</p>
        </div>
      </div>
    </>
  );
}
export default Cards;
