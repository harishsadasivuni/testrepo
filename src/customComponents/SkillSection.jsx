import OffCanvasBottom from "./OffCanvasBottom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo from '../assets/profilepic-removebg.png';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from "./ExampleCarouselImage";
import { useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import ProgessTopicSkill from "./ProgessTopicSkill";
function SkillSection() {

    return (<>
        <section className="SkillClassSection" id="skills">
            <h2 className="skills-me">Skills</h2>
            <div className="SkillClassSection-flex">
                <div className="col-md-6 col-12 custom-progressbar">
                    <ProgessTopicSkill name="SQL" now="90"></ProgessTopicSkill>
                    <ProgessTopicSkill name="Power BI" now="85"></ProgessTopicSkill>
                    <ProgessTopicSkill name="Python" now="80"></ProgessTopicSkill>
                    <ProgessTopicSkill name="Azure DE" now="75"></ProgessTopicSkill>
                    <ProgessTopicSkill name="Tableau" now="70"></ProgessTopicSkill>
                </div>
                <div className="col-6  custom-progressbar-right">
                    <p className="about-left-para">I focus on analyzing and visualizing data to provide actionable insights that drive strategic decision-making. With a strong foundation in database management, data modeling, and cloud technologies, I create efficient data pipelines and BI solutions. My goal is to leverage data to solve complex problems and support data-driven business strategies. </p>
                </div>
            </div>
        </section>
    </>);
}
export default SkillSection