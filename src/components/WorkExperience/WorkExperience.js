import React from "react";
import "./WorkExperience.css";

const WorkExperience = () => {
  return (
    <div>
      <div id="experience" className=" bg-blue-100 p-10 sm:p-10 ">
        <p
          style={{ fontFamily: "Josefin Sans" }}
          className="flex flex-wrap justify-center mb-5 mt-10 text-blue-500  text-2xl"
        >
          Work Experience
        </p>
        <div className="work-exp-wrapper flex flex-wrap gap-5 w-full">
          <div className="work-left-wrapper sm:w-1/3 w-full">
            <div
              style={{ fontFamily: "Josefin Sans" }}
              className="text-bold text-blue-800"
            >
              {" "}
              ITILITE Technologies
              <p
                style={{ fontFamily: "Josefin Sans" }}
                className="flex flex-wrap justify-left  text-blue-500 "
              >
                Bangalore, India
              </p>
              <p
                style={{ fontFamily: "Josefin Sans" }}
                className="flex flex-wrap justify-left text-xs text-blue-500 "
              >
                04/2022 - 10/2023{" "}
              </p>
              <p className="border-b-2  border-black w-32 my-5"></p>
              <p
                style={{ fontFamily: "Josefin Sans" }}
                className="flex flex-wrap justify-left  text-blue-500 "
              >
                Soft. Engineer Intern.
              </p>
              <p
                style={{ fontFamily: "Josefin Sans" }}
                className="flex flex-wrap justify-left  text-blue-500 "
              >
                Bangalore, India
              </p>
              <p
                style={{ fontFamily: "Josefin Sans" }}
                className="flex flex-wrap justify-left text-xs text-blue-500 "
              >
                04/2022 - 10/2023{" "}
              </p>
            </div>
          </div>
          <div className="work-right-wrapper w-full sm:w-1/2">
            <section className="mb-5">
              <label className="text-blue-800">Reusable Components:</label>
              <span className="text-indigo-700">
                Spearheaded UI enhancement projects using ReactJS, resulting in
                a 30% improvement in overall application aesthetics. Developed
                the Unused Credits feature, allowing users to upload external
                flight credits, contributing to a 16% increase in user
                engagement.
              </span>
            </section>

            <section className="mb-5">
              <label className="text-blue-800">Performance Optimization:</label>
              <span className="text-indigo-700">
                Utilised ReactJS to build reusable components, improving
                application performance by 20%. Revamped the Rental Car booking
                experience, optimising web app speed and achieving a 30%
                increase in loading efficiency.
              </span>
            </section>

            <section className="mb-5">
              <label className="text-blue-800">Feature Development:</label>
              <span className="text-indigo-700">
                Engineered the Pay at Hotel feature, successfully segregating
                payment options and showcasing price breakdowns, leading to a
                20% boost in user satisfaction. Implemented Multi Fares for
                Flight Cards, dynamically creating cards for corporate,
                business, and economy fares, resulting in a 40% increase in
                booking diversity.
              </span>
            </section>

            <section className="mb-5">
              <label className="text-blue-800">Project Management:</label>
              <span className="text-indigo-700">
                Demonstrated good project management skills, ensuring timely
                delivery of front-end tasks and effective collaboration with
                cross-functional teams.
              </span>
            </section>

            <section className="mb-5">
              <label className="text-blue-800">
                User Management and Access Controls:
              </label>
              <span className="text-indigo-700">
              Played a pivotal role in User Management, implementing role-based
              access controls for administrators, enhancing security and
              workflow efficiency.
              </span>
            </section>

            <section className="mb-5">
              <label className="text-blue-800">Quality Assurance:</label>
              <span className="text-indigo-700">
                Conducted comprehensive quality assurance tests on various
                sites, ensuring cross-browser compatibility and mobile
                responsiveness, reducing bug incidents by 20%.
              </span>
            </section>

            <section className="mb-5">
              <label className="text-blue-800">
                Continuous Learning and Adaptation:
              </label>
              <span className="text-indigo-700">
                Maintained a commitment to staying updated with the latest
                trends in front-end technologies, consistently seeking ways to
                improve skills and contribute to the team's success.
              </span>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
