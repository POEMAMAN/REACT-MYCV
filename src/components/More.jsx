import React from "react";
// import "./More.css";

const More = ({ languages, volunteer, habilities }) => {
  return (
    <>
    <h3>LANGUAGES</h3>
    <div key={JSON.stringify(languages)}>
      <p className="languages">📕 Languages: {languages.language}</p>
      <p>Write Level: {languages.wrlevel}</p>
      <p>Speech Level: {languages.splevel}</p>
    </div>
    <h3>VOLUNTEER</h3>
    <div key={JSON.stringify(volunteer)}>
      <p className="volunteer">📕 {volunteer.name}</p>
      <p>{volunteer.where}</p>
      <p>{volunteer.description}</p>
    </div>
    <h3>HABILITIES</h3>
    <div key={JSON.stringify(habilities)}>
      <p className="habilities">📕 {habilities} </p>
    </div>
    </>
  );
};

export default More;
