import React from "react";
import ImageAbout from "./About.jpg";
import Same from "./Same";
import "../Css/HomeAbout.css";

const About = () => {
  return (
    <>
      <Same
        title="Learn more about us"
        text="We all are living in the 21st century, an
        era of developing technology, and things which were seen as impossible
        in the past are now seen as a daily part of all our lives. Technology is
        the application of scientific knowledge for practical purposes,
        especially in industry. Imagine spending one day with no source of
        technology."
        imgsrc={ImageAbout}
        btn="Know More"
      />
    </>
  );
};

export default About;
