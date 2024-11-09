import OffCanvasBottom from "./OffCanvasBottom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo from '../assets/profilepic-removebg.png';
import Button from 'react-bootstrap/Button';
function Banner() {
    return (<>
    <banner id="banner">
        <div className="custom-banner-left" >
        <h1 className="custom-main-title">Hello, I am Aparna!</h1>
        <p className="custom-main-text">Data and Business Intelligence Professional</p>
        <div className="banner-link">
        <OffCanvasBottom key="bottom" placement="bottom" name="View Resume" url="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf"/>
        <Button variant="outline-primary">About me</Button>
        </div>
        </div>
        <div className="custom-banner-right banner-hide">
        <img className="banner-image" src={logo}></img>
        </div>
    </banner>
    </>);
}
export default Banner