import React from "react";
import Lottie from "lottie-react"
import Frontend from "../lotties/Frontend.json";
import SocialMedia from "./SocialMedia/SocialMedia";

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Frontend,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <div id="about" className="home-wrapper min-h-screen flex space-between sm:px-10 px-0 bg-indigo-900 pb-20">
      {/* <div id="about" className="home-wrapper h-screen flex space-between bg-blue-900"> */}
        <div className="left-wrapper w-full px-10 sm:px-30 sm:w-1/2 flex flex-col justify-left mt-20">
          <div style={{fontFamily: "Josefin Sans"}}className="name mt:10 sm:mt-20 font-bold text-4xl text-blue-100 mb-5">
            Nithish Kumar M
            <p className="text-xl text-blue-300 mt-5 sm:w-2/3 w-2/3">Software Engineer | M.Tech in Software Engineering at VIT University | India </p>
          </div>
          <div style={{boxShadow: "0 0 28px 5px #64acc0", fontFamily: "Josefin Sans"}} className="text-l text-justify text-blue-300  mt-5 p-10 sm:p-3 rounded ">
            I am a software engineer with a passion for utilising my skills to
            create innovative solutions that address real-world problems. I
            possess a strong foundation in computer science and am proficient in
            multiple programming languages and technologies. I am eager to apply
            my skills and enthusiasm to any project and am confident in my
            ability to make a positive contribution to any team I join.
            
          </div>
          <div className="mt-10">
            {" "}
          </div>
           <SocialMedia />
        </div>
        <div className="right-wrapper w-1/2 mt-20 hidden sm:block ">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </div>
    </div>
  );
};

export default Home;
