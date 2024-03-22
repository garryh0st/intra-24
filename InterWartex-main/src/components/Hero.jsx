import Transition from "../transition";
import bgImage from "./../assets/pxfuel.webp";
import { MouseParallax, ScrollParallax } from "react-just-parallax";

const Hero = () => {
  return (
    <>
      <Transition>
        <ScrollParallax isAbsolutelyPositioned>
          <div
            className="h-[100vh]"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
          ></div>
        </ScrollParallax>
        <div className="hero h-[100vh] flex justify-center items-center">
          <div className="">
            <div className="relative isolate px-6  lg:px-8">
              <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
              >
                {/* <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e900be] to-[#ff6a00] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              /> */}
              </div>
              <div className="mx-auto max-w-6xl py-20 sm:py-24 lg:py-24">
                <div className="text-center">
                  <h1 className="text-[80px] sm:mb-0 mt-4 sm:mt-20 font-thin text-gray-100 sm:text-[200px] hero-heading ">
                    WARTEX #9.0
                  </h1>
                  <div className=" sm:block">
                    <div className="mt-4 sm:mt-0 flex items-center justify-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.2}
                        stroke="white"
                        className="w-10 h-7 hidden sm:block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                      <p className="rounded-md address text-center  text-[25px] uppercase px-3.5 py-2.5 md:text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ">
                        SRDAV public school dayanand vihar
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.2}
                        stroke="white"
                        className="w-10 h-7 hidden sm:block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                        />
                      </svg>

                      <p className="date md:text-sm hidden sm:block text-[30px] text-left font-semibold ml-4 leading-6 text-white  uppercase ">
                        26 OCTOBER, 2023
                      </p>
                    </div>
                  </div>
                  <div className="block">
                    <div className="mt-0 flex items-center justify-center ">
                      <div className="">
                        <p className="mt-2 sm:hidden flex justify-center text-[25px] rounded-md address  text-center  uppercase px-3.5 py-2.5 md:text-sm font-semibold text-white ">
                          26 OCTOBER, 2023
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="mt-6 flex items-center justify-center sm:hidden ">
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.2}
                stroke="white"
                className="w-10 h-7 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
  
      
              <p className="date sm:hidden block md:text-sm text-xs  text-left font-semibold ml-4 leading-6 text-white  uppercase">
                26 OCTOBER, 2023
              </p>
            </div> */}

                  <div className="mt-8 sm:mt-4 flex items-center justify-center gap-x-6">
                    <a
                      href="#"
                      className="border-2 tracking-widest line text-sm  transition ease-in-out duration-[1s]  border-[#fff] rounded-full font-semibold px-4 py-2.5  text-white cursor-pointer hover:bg-[#5864F2] hover:border-white hover:text-[#fff] "
                    >
                      DISCORD
                    </a>
                    <a
                      href="#"
                      className="border-2 tracking-widest line text-sm  transition ease-in-out duration-[1s]  border-[#fff] rounded-full font-semibold px-4 py-2.5  text-white cursor-pointer hover:bg-[#ffffff] hover:border-white hover:text-[#280d47]"
                    >
                      REGISTER
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default Hero;
