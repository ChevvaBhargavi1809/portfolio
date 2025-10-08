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
                        I’m a Software Engineer who loves turning complex challenges into elegant, scalable solutions. Whether it’s building serverless architectures on AWS, deploying machine learning models in production, or optimizing Big Data pipelines, I bring curiosity, creativity, and impact to every project.
                        <br></br>
                        <br></br>
                        I've designed serverless REST APIs (utilizing AWS Lambda and Redshift) to deliver 10GB+ of data seamlessly, engineered automated schedulers to reduce human error, and deployed a Machine Learning model with real-time tuning that achieved 84% prediction accuracy. I've also developed and executed Appium test suites for mobile applications, leveraging AWS Device Farm
                        I strengthened enterprise platforms by enhancing security with CSRF vulnerability fixes and maintaining production-grade Big Data plugins (Hive, Oozie, HDFS, MongoDB, etc). My work improved speed, reliability, and security for thousands of end-users.
                        <br></br>
                        <br></br>
                        Beyond my roles, I’ve built - Personalized medical predictions using NLP, Transformers, and Graph Attention Networks, Distributed Chat Application with MongoDB + load balancing for high availability and Job Recommender System powered by Neural Collaborative Filtering (87% hit ratio)
                    </p>
                </div>
                <a href="https://www.linkedin.com/in/bhargavi-chevva/" class="btn btn-primary">Let's Connect!</a>
            </div>
            <div className="hero--section--img">
                <img src="./img/bh.png" alt="Hero Section" style={{ borderRadius: '50%', width: '50%', height: '50%', boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.5)'}}/>
            </div>
        </section>
    )
    ;
}