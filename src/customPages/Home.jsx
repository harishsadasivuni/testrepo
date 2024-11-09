import Header from '../customComponents/Header';
import Footer from '../customComponents/Footer';
import Banner from '../customComponents/Banner';
import Bannercard from '../customComponents/Bannercard';
import Education from '../customComponents/Education';
import ContactBanner from '../customComponents/ContactBanner';
import ItemLogoList from '../customComponents/ItemLogoList';
import AboutSection from '../customComponents/AboutSection';
import SkillSection from '../customComponents/SkillSection'
import ProjectModel from '../customComponents/ProjectModel'
function Home() {
    return (<>
        
        <Banner />
        <AboutSection></AboutSection>
        <SkillSection></SkillSection>
        <ProjectModel></ProjectModel>
        <Education/>
        
           
    </>);
}
export default Home