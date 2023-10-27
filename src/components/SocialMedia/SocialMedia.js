import React from "react";
import githubImg from "../../assests/socialmedia/github.png";
import instaImg from "../../assests/socialmedia/instagram.png";
import twitterImg from "../../assests/socialmedia/twitter.png";
import linkedinImg from "../../assests/socialmedia/linkedin.png";
// import youtubeImg from "../../assests/socialmedia/youtube.png";

const SocialMedia = (props) => {
  // In this props will be width size, horzi/vertical,

  let imgArr = [];
  imgArr.push(githubImg);
  imgArr.push(instaImg);
  imgArr.push(twitterImg);
  imgArr.push(linkedinImg);

  //   imgArr.push(youtubeImg)
  return (
    <div>
      <div
        className={`social-media-wrapper flex flex-wrap justify-center  sm:gap-10 cursor-pointer gap-6 mt-5`}
      >
        {/* {imgArr.map((img) => ( */}
        <a
          href="https://github.com/nithishkumar98"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            style={{ boxShadow: "rgb(95 219 255) 0px 0px 12px 2px" }}
            src={githubImg}
            alt="github"
            className="sm:w-12 sm:h-12 w-10 h-10 rounded"
          />
        </a>
        <a
          href="https://www.instagram.com/m.nithish_kumar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            style={{ boxShadow: "rgb(95 219 255) 0px 0px 12px 2px" }}
            src={instaImg}
            alt="insta"
            className="sm:w-12 sm:h-12 w-10 h-10 rounded"
          />
        </a>
        <a
          href="https://twitter.com/m_nithish_kumar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            style={{ boxShadow: "rgb(95 219 255) 0px 0px 12px 2px" }}
            src={twitterImg}
            alt="twitter"
            className="sm:w-12 sm:h-12 w-10 h-10 rounded"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/nithishkumar98/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            style={{ boxShadow: "rgb(95 219 255) 0px 0px 12px 2px" }}
            src={linkedinImg}
            alt="linkedin"
            className="sm:w-12 sm:h-12 w-10 h-10 rounded"
          />
        </a>
        {/* <img  style={{boxShadow: "0 0 28px 5px rgb(4 35 44)"}} src={img} className="sm:w-12 sm:h-12 w-10 h-10 rounded" /> */}
        {/* ))} */}
      </div>
    </div>
  );
};

export default SocialMedia;
