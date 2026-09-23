import React from "react";
import useAuth from "../hooks/useAuth";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  const { dark } = useAuth();
  return (
    <div
      className="relative min-h-[450px] bg-cover bg-center bg-no-repeat transition-all duration-500"
      style={{
        backgroundImage: `url(${dark ? "/banner-dark.jpg" : "/banner.jpg"})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-[450px] items-center justify-start md:ml-10 ml-3">
        <div className="text-start text-white">
          <h1 className="text-4xl font-bold md:text-6xl text-white ">
            Welcome to 
            <span className=" text-gradient scale-[1.05] shadow-2xl shadow-base-content/50" >
              <Typewriter
                cursor
                cursorBlinking
                delaySpeed={500}
                deleteSpeed={100}
                loop={0}
                typeSpeed={300}
                words={[
                  " Nigatola University",
                  " Niga Hub",
                ]}
              />
            </span>
          </h1>

          <p className="mt-4 text-lg md:text-xl">
            Empowering Niga students through quality education.
          </p>

          <button className="btn btn-primary mt-6">Explore University</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
