import React, { useState } from "react";

function Footer() {
  return (
    <>
      <div class="text-white bg-[#091E42] px-5 pt-4">
        <div class="flex justify-between ">
          <img class="h-20" src="/Trello-logodark.png" alt="Trello" />
          <a class="my-auto" href="">
            Log In
          </a>
        </div>

        <div class="mt-0 mx-auto">
          <div class="hover:bg-[#061530] py-4 px-2 max-w-fit">
            <button>
              <p class="text-left">About Trel</p>
              <p class="text-sm pt-2 text-left">Whats behind the boards.</p>
            </button>
          </div>
          <hr class="border-1 border-slate-400" />
          <div class="hover:bg-[#061530] py-4 px-2 max-w-fit">
            <button>
              <p class="text-left">Jobs</p>
              <p class="text-sm pt-2 text-left">
                Learm about open roles on the
                <br />
                Trello team.
              </p>
            </button>
          </div>
          <hr class="border-1 border-slate-400" />
          <div class="hover:bg-[#061530] py-4 px-2 max-w-fit">
            <button>
              <p class="text-left">Apps</p>
              <p class="text-sm pt-2 text-left">
                Download the Trello App for your
                <br />
                Desktop or Mobile devices.
              </p>
            </button>
          </div>
          <hr class="border-1 border-slate-400" />
          <div class="hover:bg-[#061530] py-4 px-2 max-w-fit">
            <button>
              <p class="text-left">Contact Us</p>
              <p class="text-sm pt-2 text-left">
                Need anything? Get in touch and
                <br />
                we can help.
              </p>
            </button>
          </div>
          <hr class="border-1 border-slate-400" />

          <div class="flex flex-col items-center text-sm my-4 space-y-2">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Cookie Settings</a>
            <a href="#">Copyright © 2022 Atlassian</a>
          </div>
          <hr class="border-1 border-slate-400" />
        </div>
      </div>
    </>
  );
}
export default Footer;
