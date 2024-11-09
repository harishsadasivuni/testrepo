import OffCanvasBottom from "./OffCanvasBottom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo from '../assets/profilepic-removebg.png';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from "./ExampleCarouselImage";
import { useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
function ProgessTopicSkill(props) {
    let now=props.now;
    return (<>
        <span className="custom-skill-percent">
            <span className="col-2 custom-skill-name">{props.name}</span>
            <span className="col-10"> 
            <ProgressBar animated now={now} label={`${now}%`} />
            </span>
        </span>
    </>);
}
export default ProgessTopicSkill