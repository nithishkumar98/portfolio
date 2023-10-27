import React, { useState } from "react";

const Header = () => {
  const [mobModelState, setMobModelState] = useState(false);
  const mobCloseClickHandler = () => {
    console.log("hello");
    setMobModelState(!mobModelState);
  };

  return (
    <header className="bg-blue-200 h-14 font-bold text-l text-blue-700 fixed w-full z-20">
      {/* <div className="nav-outer-wrapper"> */}
      <div className="web-nav-bar-wrapper hidden sm:flex justify-around h-14 items-center">
        <div className="left-wrapper">
          <a href="#about">
            <span style={{ fontFamily: "Josefin Sans" }} className="title ">
              Nithish Kumar M
            </span>
          </a>
        </div>
        <div
          style={{ fontFamily: "Josefin Sans" }}
          className="mid-wrapper flex gap-10"
        >
          <a href="#about">
            <span href="#skills" className="skills">
              {" "}
              About me
            </span>
          </a>
          <a href="#experience">
            <span className="experience">Work Experience</span>
          </a>
          <a href="#skills">
            <span href="#skills" className="skills">
              Skills
            </span>
          </a>
          <a href="#contact">
            <span className="contact">Contact </span>
          </a>
        </div>{" "}
        <a
          href="https://www.linkedin.com/in/nithishkumar98/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="right-wrapper">Hire me!</span>
        </a>
      </div>

      {/* // mobile   */}
      <div className="nav-mob-outer-wrapper ">
        <div className="nav-mob-wrapper flex sm:hidden justify-between items-center px-4 h-14">
          <div style={{ fontFamily: "Josefin Sans" }} className="mob-title">
            Nithish Kumar M
          </div>
          <div
            onClick={mobCloseClickHandler}
            className="mob-right-ham cursor-pointer text-2xl"
          >
            X
          </div>
        </div>
        <div
          style={{ fontFamily: "Josefin Sans" }}
          className={`mob-mid-wrapper ${
            mobModelState ? "flex" : "hidden"
          } text-white bg-indigo-900 relative flex-col px-3 gap-4 pt-5 h-screen`}
        >
          <a href="#about">
            <span href="#skills" className="skills">
              {" "}
              About me
            </span>
          </a>
          <a href="#experience">
            <span className="experience">Work Experience</span>
          </a>
          <a href="#skills">
            <span href="#skills" className="skills">
              Skills
            </span>
          </a>
          <a href="#contact">
            <span className="contact">Contact </span>
          </a>
          <a
            href="https://www.linkedin.com/in/nithishkumar98/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mob-about mb-10 ">Hire me!</span>
          </a>
        </div>
      </div>

      {/* </div> */}
    </header>
  );
};

export default Header;