import OffCanvasBottom from "./OffCanvasBottom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo1 from '../assets/pl300.png';
import logo2 from '../assets/dp900.png';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from "./ExampleCarouselImage";
import { useState } from "react";
function AboutSection() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (<>
        <section className="AboutClassSection" id="about">
            <div className="col-12 col-md-6">
            <h2 className="about-me">About me</h2>
                <p className="about-left-para">With a Master’s in Management Information Systems from the University at Buffalo and two years of experience as a Data Analyst at Flextronics, I bring a combination of technical proficiency and hands-on experience in data management, analysis, and visualization. My expertise includes working on complex data migration projects, designing automated ETL workflows, and developing dashboards that drive business insights. I’ve led initiatives to streamline data processes and have experience across various platforms, including Microsoft Azure, SQL, Denodo, and Tableau. I’m passionate about leveraging data to solve real-world challenges and continuously learning new tools and techniques to stay at the forefront of the industry.</p>
            </div>
            <div className="col-12 col-md-6">
                <Carousel className="carosal">
                    <Carousel.Item>
                        <img className="about-banner-image" src={logo1}></img>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="about-banner-image" src={logo2}></img>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="about-banner-image" src={logo1}></img>
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
    </>);
}
export default AboutSection