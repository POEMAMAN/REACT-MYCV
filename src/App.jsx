// import { useState } from "react";
import "./App.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import More from "./components/More";

import { CV } from "./cv/cv";

const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {
  return (
    <div className="App">
        <Hero hero={hero}/>
        <Education education={education}/>
        <Experience experience={experience}/>
        <More
          languages={languages}
          habilities={habilities}
          volunteer={volunteer}
          />
    </div>
  );
}

export default App;
