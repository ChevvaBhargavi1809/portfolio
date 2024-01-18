export default function HeroSection()
{
    return (
        <section id="heroSection" className = "hero--section">
            <div className = "hero--section--content--box">
                <div className = "hero--section--content">
                    <p className = "section--title">
                        Hi! I'm 
                    </p>
                    <h1 className="hero--section--title">
                        <span className ="hero--section-title--color">Bhargavi </span>{" "}
                        <br/>
                        Chevva
                    </h1>
                    <p className = "here--section-description">
                        A <b>Computer Science</b> graduate student at <b>San Jose State University</b>. I love simplifying people's lives with lines of code. 
                        <br/>
                        I'm proficient in <b>Java, Web Technologies, and Machine Learning</b>. I will be graduating in May 2024 and actively looking for <b>full time job opportunities</b> in software development/research areas.
                    </p>
                </div>
                <a href="https://www.linkedin.com/in/bhargavi-chevva/" class="btn btn-primary">Let's Connect!</a>
            </div>
            <div className="hero--section--img">
                <img src="./img/chb-logo.jpeg" alt="Hero Section" style={{ borderRadius: '50%', width: '50%', height: '50%', boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.5)'}}/>
            </div>
        </section>
    )
    ;
}