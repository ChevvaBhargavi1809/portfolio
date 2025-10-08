import data from "../../data/index.json";

export default function Skills() {
    return (
        <section id="skills" className="testimonial--section--2">
            <h1 className="sections--heading"> SKILLS</h1>
            <br/> 
            <div className="testimonial--section--2">
                <h2 className="sections--heading-2"> Programming Languages and Frameworks</h2>
            <div className="testimonial--section--card">
                {data?.pl?.map((item,index) =>
                (
                    <div key={index} className="testimonial--section--card--review">
                        <h3 className ="testimonial--author--name"> {item.title} </h3>
                        <div>
                        {Array.from({length:item.count}, (reviews, index)=>
                        (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="27"
                                    height="26"
                                    viewBox="0 0 27 26"
                                    fill="none"
                                >
                                    <path
                                    d="M12.0945 0.953177C12.5528 -0.135435 14.1138 -0.135434 14.5722 0.95318L17.2772 7.37836C17.4705 7.8373 17.9074 8.15087 18.4089 8.19059L25.4302 8.74669C26.6199 8.84091 27.1022 10.3076 26.1959 11.0746L20.8464 15.6016C20.4643 15.925 20.2973 16.4324 20.4141 16.9158L22.0484 23.6847C22.3253 24.8315 21.0625 25.7381 20.044 25.1235L14.0327 21.4961C13.6033 21.237 13.0633 21.237 12.634 21.4961L6.62265 25.1235C5.60415 25.7381 4.34127 24.8315 4.61818 23.6847L6.25256 16.9158C6.3693 16.4324 6.20243 15.925 5.82034 15.6016L0.47075 11.0746C-0.435624 10.3076 0.0467572 8.84091 1.23639 8.74669L8.25781 8.19059C8.75933 8.15087 9.19621 7.8373 9.38942 7.37836L12.0945 0.953177Z"
                                    fill="#daa520"
                                    />
                                </svg>                   
                        ))}
                        </div>
                    </div>
                ))}
            </div>

            </div>
            <div className="testimonial--section--2">
                <h2 className="sections--heading-2"> Cloud and Database Systems </h2>
            <div className="testimonial--section--card">
                {data?.db?.map((item,index) =>
                (
                    <div key={index} className="testimonial--section--card--review">
                        <h3 className ="testimonial--author--name"> {item.title} </h3>
                        <div>
                        {Array.from({length:item.count}, (reviews, index)=>
                        (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="27"
                                    height="26"
                                    viewBox="0 0 27 26"
                                    fill="none"
                                >
                                    <path
                                    d="M12.0945 0.953177C12.5528 -0.135435 14.1138 -0.135434 14.5722 0.95318L17.2772 7.37836C17.4705 7.8373 17.9074 8.15087 18.4089 8.19059L25.4302 8.74669C26.6199 8.84091 27.1022 10.3076 26.1959 11.0746L20.8464 15.6016C20.4643 15.925 20.2973 16.4324 20.4141 16.9158L22.0484 23.6847C22.3253 24.8315 21.0625 25.7381 20.044 25.1235L14.0327 21.4961C13.6033 21.237 13.0633 21.237 12.634 21.4961L6.62265 25.1235C5.60415 25.7381 4.34127 24.8315 4.61818 23.6847L6.25256 16.9158C6.3693 16.4324 6.20243 15.925 5.82034 15.6016L0.47075 11.0746C-0.435624 10.3076 0.0467572 8.84091 1.23639 8.74669L8.25781 8.19059C8.75933 8.15087 9.19621 7.8373 9.38942 7.37836L12.0945 0.953177Z"
                                    fill="#daa520"
                                    />
                                </svg>                   
                        ))}
                        </div>
                    </div>
                ))}
            </div>
            </div>
            <div className="testimonial--section--2">
                <h2 className="sections--heading-2"> Web Technologies </h2>
            <div className="testimonial--section--card">
                {data?.wt?.map((item,index) =>
                (
                    <div key={index} className="testimonial--section--card--review">
                        <h3 className ="testimonial--author--name"> {item.title} </h3>
                        <div>
                        {Array.from({length:item.count}, (reviews, index)=>
                        (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="27"
                                    height="26"
                                    viewBox="0 0 27 26"
                                    fill="none"
                                >
                                    <path
                                    d="M12.0945 0.953177C12.5528 -0.135435 14.1138 -0.135434 14.5722 0.95318L17.2772 7.37836C17.4705 7.8373 17.9074 8.15087 18.4089 8.19059L25.4302 8.74669C26.6199 8.84091 27.1022 10.3076 26.1959 11.0746L20.8464 15.6016C20.4643 15.925 20.2973 16.4324 20.4141 16.9158L22.0484 23.6847C22.3253 24.8315 21.0625 25.7381 20.044 25.1235L14.0327 21.4961C13.6033 21.237 13.0633 21.237 12.634 21.4961L6.62265 25.1235C5.60415 25.7381 4.34127 24.8315 4.61818 23.6847L6.25256 16.9158C6.3693 16.4324 6.20243 15.925 5.82034 15.6016L0.47075 11.0746C-0.435624 10.3076 0.0467572 8.84091 1.23639 8.74669L8.25781 8.19059C8.75933 8.15087 9.19621 7.8373 9.38942 7.37836L12.0945 0.953177Z"
                                    fill="#daa520"
                                    />
                                </svg>                   
                        ))}
                        </div>
                    </div>
                ))}
            </div>
            </div>

            <div className="testimonial--section--2">
                <h2 className="sections--heading-2"> Others </h2>
            <div className="testimonial--section--card">
                {data?.others?.map((item,index) =>
                (
                    <div key={index} className="testimonial--section--card--review">
                        <h3 className ="testimonial--author--name"> {item.title} </h3>
                        <div>
                        {Array.from({length:item.count}, (reviews, index)=>
                        (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="27"
                                    height="26"
                                    viewBox="0 0 27 26"
                                    fill="none"
                                >
                                    <path
                                    d="M12.0945 0.953177C12.5528 -0.135435 14.1138 -0.135434 14.5722 0.95318L17.2772 7.37836C17.4705 7.8373 17.9074 8.15087 18.4089 8.19059L25.4302 8.74669C26.6199 8.84091 27.1022 10.3076 26.1959 11.0746L20.8464 15.6016C20.4643 15.925 20.2973 16.4324 20.4141 16.9158L22.0484 23.6847C22.3253 24.8315 21.0625 25.7381 20.044 25.1235L14.0327 21.4961C13.6033 21.237 13.0633 21.237 12.634 21.4961L6.62265 25.1235C5.60415 25.7381 4.34127 24.8315 4.61818 23.6847L6.25256 16.9158C6.3693 16.4324 6.20243 15.925 5.82034 15.6016L0.47075 11.0746C-0.435624 10.3076 0.0467572 8.84091 1.23639 8.74669L8.25781 8.19059C8.75933 8.15087 9.19621 7.8373 9.38942 7.37836L12.0945 0.953177Z"
                                    fill="#daa520"
                                    />
                                </svg>                   
                        ))}
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
}