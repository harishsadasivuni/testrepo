import icon1 from '../assets/icon-1.png'



function Footer() {
    return(<>
        <footer>
            <ul className="custom-footer-linke-line-one">
                <li><a href="#"><img className="footer-logo" src={icon1}></img></a></li>
                <li>Github</li>
                <li>Tableau</li>
                <li>Salesforce</li>
            </ul>
            <h4 className="emial-footer">Aparna Darapaneni - <a className='footer-link' href="#">aparnadarapaneni@gmail.com</a></h4>
            <ul className="custom-footer-linke-line-two">
            <li><a href="#"><img className="footer-logo" src={icon1}></img></a></li>
            <li><a href="#"><img className="footer-logo" src={icon1}></img></a></li>
            </ul>
        </footer>
    </>);
}
export default Footer