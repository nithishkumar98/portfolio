import React from "react";
import "./Skill.css";
import htmlImg from "../../assests/html.png";
import cssImg from "../../assests/css.png";
import jsImg from "../../assests/javascript.png";
import jqueryImg from "../../assests/jquery.png";
import reduxImg from "../../assests/redux.png";
import bootstrapImg from "../../assests/bootstrap.png";
import reactImg from "../../assests/react.png";
import tailwindImg from "../../assests/tailwind.png";
import mongoImg from "../../assests/mongo-db.png";
import nodejsImg from "../../assests/nodejs.png";
import pythonImg from "../../assests/python.png";
import expressjsImg from "../../assests/expressjs.png";

const Skills = () => {
  let ipSkills = [
    "Creative",
    "Adapative",
    "Team work",
    "Problem solving",
    "Critical thinking",
    "Emotional intelligence",
  ];

  return (
    <div>
      <div id="skills" className=" bg-blue-100 p-10  sm:p-20 ">
        <div className="text-4xl">
          <p
            style={{ fontFamily: "Josefin Sans" }}
            className="flex flex-wrap justify-center mb-5 mt-10 text-blue-600 underline"
          >
            Skills
          </p>
          <p
            style={{ fontFamily: "Josefin Sans" }}
            className="flex flex-wrap justify-center mb-5 text-blue-500 text-2xl"
          >
            Tech-Skills
          </p>
          <div className="flex justify-center">
            <div className="skill-wrapper justify-center flex-wrap w-full sm:w-1/2 flex gap-8 ">
              <img
                src={htmlImg}
                alt="html"
                className="sm:w-24 sm:h-24  w-20 h-20"
              />
              <img
                src={cssImg}
                alt="css"
                className="sm:w-24 sm:h-24 w-20 h-20"
              />
              <img src={jsImg} alt="js" className="sm:w-24 sm:h-24 w-20 h-20" />
              <img
                src={jqueryImg}
                alt="jquery"
                className="sm:w-24 sm:h-24 w-20 h-20"
              />
              <img
                src={bootstrapImg}
                alt="bootstrap"
                className="sm:w-24 sm:h-24 w-20 h-20"
              />
              <img
                src={reactImg}
                alt="react"
                className="sm:w-24 sm:h-24 w-20 h-20"
              />
              <img
                src={reduxImg}
                alt="redux"
                className="sm:w-24 sm:h-24 w-20 h-20"
              />
              <img
                src={tailwindImg}
                alt="redux"
                className="sm:w-24 sm:h-24 w-20 h-20"
              />
              <img
                src={mongoImg}
                alt="redux"
                className="sm:w-24 sm:h-24 w-20 h-20"
              />
              <img
                src={nodejsImg}
                alt="redux"
                className="sm:w-24 sm:h-24 w-20 h-20"
              />
              <img
                src={expressjsImg}
                alt="redux"
                className="sm:w-24 sm:h-24 w-20 h-20"
              />
              <img
                src={pythonImg}
                alt="redux"
                className="sm:w-24 sm:h-24 w-20 h-20"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="interpersonal-skills  w-full sm:w-1/2">
            <p
              style={{ fontFamily: "Josefin Sans" }}
              className="flex flex-wrap justify-center mb-5 mt-10 text-blue-500  text-2xl"
            >
              Inter personal-Skills
            </p>
            <div className="ip-wrapper flex flex-wrap justify-center gap-5">
              {ipSkills.map((skill) => (
                <div
                  style={{
                    boxShadow: "rgb(0 0 0 / 30%) 0px -2px 5px 0px inset",
                    background: "rgb(130 52 222)",
                    fontFamily: "Montserrat",
                  }}
                  className=" flex justify-center items-center px-10 h-10 rounded bg-white text-bold text-white"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
