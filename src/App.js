import React from "react";
import Header from "./Header";
import ScrollUpButton from "react-scroll-up-button";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div>
        <ScrollUpButton
          ContainerClassName="scroll-arrow"
          EasingType="easeInOutBack"
          ShowAtPosition={30}
          AnimationDuration={500}
        />
      </div>
      <section className="nav-section">
        <div className="App">
          <Header />
        </div>
      </section>
      <section>
        <h3 className="intro">
          Hi! I'm <span>Kay</span>, an adventurous front end dev.
        </h3>
        <h3 className="intro-blurb">
          {/* //{proficency examples} */}
          As a developer, I enjoy using my thorough communication skills, my
          strong passion for continous learning, and my unrelenting drive to
          help others. I have a vast proficiency in problem solving and a
          curious mind to help guide and motivate me.
        </h3>
      </section>
    </div>
  );
}

export default App;
