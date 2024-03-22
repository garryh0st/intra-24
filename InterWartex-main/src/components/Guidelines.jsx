import React from "react";
import AOS from 'aos';

AOS.init()


export default function Guidelines() {
  return (
    <div className="p-4 sm:p-28 xl:p-42 bg-black dark:bg-[#ebe2e2] Sfsf ">
      <h1 data-aos="fade-up" data-aos-duration="750" className="drop-shadow-[0_0px_35px_#007bc4] text-center text-[#007bc4] mb-14 text-4xl heading">
        THE GUIDELINES
      </h1>
      <ol className="relative">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 drop-shadow-[0_0px_20px_#007bc4] bg-[#007bc4] rounded-full mt-1.5 -left-1.5   "></div>
          <p data-aos="fade-up" data-aos-duration="750" className="sf mb-4 text-base font-normal text-gray-300 dark:text-black">
            Participants can bring electronic devices for event purposes only along with prior permission.
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 drop-shadow-[0_0px_20px_#007bc4] bg-[#007bc4] rounded-full mt-1.5 -left-1.5  "></div>
          <p data-aos="fade-up" data-aos-duration="750" className="sf text-base font-normal text-gray-300 dark:text-black">
          The school will not take responsibility for the loss of any device brought by the participants.
          </p>
        </li>
        <li className="ml-4 mb-10">
          <div className="absolute w-3 h-3 drop-shadow-[0_0px_20px_#007bc4] bg-[#007bc4] rounded-full mt-1.5 -left-1.5  "></div>
          <p data-aos="fade-up" data-aos-duration="750" className="sf text-base font-normal text-gray-300 dark:text-black">
            It is strictly prohibited for any participant to cause damage or cause any infringement to school property. They will be held liable and compensation will be taken from them. 
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 drop-shadow-[0_0px_20px_#007bc4] bg-[#007bc4] rounded-full mt-1.5 -left-1.5   "></div>
          <p data-aos="fade-up" data-aos-duration="750" className="sf mb-4 text-base font-normal text-gray-300 dark:text-black">
            We want a fair competition for all, any form of cheating in any of the competitions is strictly prohibited. The individual/team will be disqualified immediately.
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 drop-shadow-[0_0px_20px_#007bc4] bg-[#007bc4] rounded-full mt-1.5 -left-1.5  "></div>
          <p data-aos="fade-up" data-aos-duration="750" className="sf text-base font-normal text-gray-300 dark:text-black">
            At the end of day, we all are here for entertainment purposes only. We strongly discourage the usage of harsh language among the participants. We envision for a friendly and welcoming environment for all the participants.
          </p>
        </li>
      </ol>
    </div>
  );
}
