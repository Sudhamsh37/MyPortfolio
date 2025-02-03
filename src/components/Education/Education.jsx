import React from "react";
import "./Education.css";
import theme_pattern from '../../assets/theme_pattern.svg'

const Education = () => {
  return (
    <div id="education" className="education">
      <div className="Education-title">
            <div><h1>Education</h1></div>
            <div><img src={theme_pattern} alt=''></img></div>
     </div>

      <div className="Qualifications">
        <div className="edu-card">
            <h3>Dr.KKR Gowtham, Gudivada</h3>
            <p>10th Standard - CGPA: 10.0</p>
            <p>2019 - 2020</p>
        </div>

        <div className="edu-card">
            <h3>Sri Chaitanya Jr College</h3>
            <p>Intermediate (Class 12) - 970/1000 Marks</p>
            <p>2020 - 2022</p>
        </div>

        <div className="edu-card">
            <h3>IIT Bhubaneswar</h3>
            <p>B.Tech in Computer Science & Engineering</p>
            <p>2022 - present</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
