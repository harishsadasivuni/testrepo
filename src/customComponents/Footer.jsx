import icon1 from '../assets/linkedinlogo.png'
import icon2 from '../assets/githublogo.webp'
import icon3 from '../assets/learn.png'
import icon4 from '../assets/emaillogo.webp'



function Footer() {
    return(<>
        <footer>
            <ul className="custom-footer-linke-line-one">
                <li><a href="https://www.linkedin.com/in/aparna-darapaneni/"><img className="footer-logo" src={icon1}></img></a></li>
                <li><a href="#"><img className="footer-logo" src={icon2}></img></a></li>
                <li><a href="https://learn.microsoft.com/en-us/users/aparnadarapaneni-9776/"><img className="footer-logo" src={icon3}></img></a></li>
                <li><a href="mailto:aparna.darapaneni14@gmail.com"><img className="footer-logo" src={icon4}></img></a></li>
            </ul>
            
        </footer>
    </>);
}
export default Footer