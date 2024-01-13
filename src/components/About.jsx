import React from "react";
// import "./About.css";

const About = ({ About }) => {
  return (
    <div>
      <div className="About card">
        {About.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">📕 {item.info}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
