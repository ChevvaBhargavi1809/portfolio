 import HeroSection from "../HeroSection.jsx";
 import MyPortfolio from "../MyPortfolio.jsx";
 import Skills from "../Skills.jsx";
 import Work from "../Work.jsx";
import Contact from "../Contact.jsx";
import SkillsSection from "../SkillsSection.jsx";

 export default function Home()
 {
    return (
        <>
            <HeroSection/>
            <SkillsSection/>
            <Work/>
            <MyPortfolio/>
        </>
    )
 }