import React from "react";
import heroImg from '../../assets/HeroImg.png'
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[70vh] my-8 p-26 rounded-3xl container mx-auto">
      <div className="hero-content items-center flex-col lg:flex-row-reverse w-full justify-between">
        <img
          src={heroImg}
          className="max-w-sm rounded-lg"
        />
        <div>
          <h1 className="text-[56px] font-bold">Books to freshen up <br /> your bookshelf</h1>
          <button className="btn bg-green-500 font-semibold text-white mt-9">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
