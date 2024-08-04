import React from "react";
import BannerBooks from "../../public/BannerBooks.png"
function Banner() {
  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto md:px-2 px-4 flex flex-col md:flex-row my-10 ">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-20">
          <div className="space-y-12">
            <h1 className="text-3xl font-bold text-black">
              Explore, Engage, and Enlighten. The Hub of lifelong
              <span className="text-blue-400 space-x-3  "> learning </span> and
              <span className="text-yellow-500 space-x-3"> inspiration </span>
            </h1>
            <p className="gradient-text  space-y-10 ">
              We are more than just ink on paper. We are gateways to different
              worlds, times, and perspectives. Each of us has a power to
              transport you, ignite your imagination, and broaden your horizons.
            </p>
            <label className="input input-bordered flex items-center gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn mt-4 btn-outline btn-primary">Get Started</button>
        </div>
        <div className="order-1 w-full md:w-1/2">
        <img src={BannerBooks} className="w-92 h-92" alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
