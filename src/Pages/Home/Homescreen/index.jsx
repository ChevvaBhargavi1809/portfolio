 import HeroSection from "../HeroSection";
 import MySkills from "../MySkills";
 import AboutMe from "../AboutMe";
 import MyPortfolio from "../MyPortfolio";
 import Testimonial from "../Testimonials";
 import ContactMe from "../ContactMe";
 import Footer from "../Footer";
 import Skills from "../Skills";
 import Work from "../Work";
import Contact from "../Contact";

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