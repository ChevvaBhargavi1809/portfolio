 import HeroSection from "../HeroSection.jsx";
 import MyPortfolio from "../MyPortfolio.jsx";
 import Skills from "../Skills.jsx";
 import Work from "../Work.jsx";
import Contact from "../Contact.jsx";

 export default function Home()
 {
    return (
        <>
            <HeroSection/>
            <Skills/>
            <Work/>
            <MyPortfolio/>
            <Contact/>
        </>
    )
 }