import React from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div id="contact" className=" bg-indigo-900 pb-10 pt-5">
        <p
          style={{ fontFamily: "Josefin Sans" }}
          className="flex flex-wrap justify-center mb-5 mt-10 text-blue-500 text-2xl"
        >
          Contact
        </p>
        <div className="contact-form flex flex-wrap justify-center flex-col items-center gap-2">
          <input
            placeholder="Name"
            className="rounded h-12 sm:w-1/3 w-5/6 p-2 mb-3"
            type="text"
          />
          <input
            placeholder="E-mail"
            className="rounded h-12 sm:w-1/3 w-5/6 p-2 mb-3"
            type="text"
          />
          <textarea
            placeholder="Message"
            className="rounded h-24 sm:w-1/3 w-5/6 p-2 mb-5"
            type="text"
          />
        </div>
        <div className="contact-info flex flex-col items-center justify-center text-blue-300 mb-10">
          <div>
            <a className="mr-5" href="tel:9626377550">+91 9626377550</a>
            <a href="tel:8248486057">+91 8248486057</a>
          </div>
          <a href="mailto:meganathannithishkumar@gmail.com">
            meganathannithishkumar@gmail.com
          </a>
        </div>
        <SocialMedia />
      </div>
    </>
  );
};

export default Contact;
