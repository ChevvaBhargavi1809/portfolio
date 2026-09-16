import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import timelineElements from "././timelineElements";
import hv from './hv-logo.jpg'
import vault from './vjs-logo.png';
import infotech from './infotech.jpg';
import sjsu from './sjsu-logo2.jpg';
import React, { useState } from "react";

const iconMap = {
    vault: { src: vault, alt: "Vault JS" },
    infotech: { src: infotech, alt: "Infotech" },
    sjsu: { src: sjsu, alt: "San Jose State University" },
};
const defaultIcon = { src: hv, alt: "Hitachi Vantara" };
export default function Work() {
    const [activeCategory, setActiveCategory] = useState(null);
    return(
        <div id="work" className="testimonial--section">
            <h1 className="sections--heading">WORK EXPERIENCE</h1>
            <VerticalTimeline>
                {
                    timelineElements.map((element) => {
                        let { src, alt } = iconMap[element.icon] || defaultIcon;
                        return(
                            <VerticalTimelineElement
                            key={element.key}
                            date={element.date}
                            dateClassName="date"

                            icon= {<img src={src} alt={alt}  style={{ borderRadius: '50%', width: '100%', height: '100%' }} />}
                            >
                                <h3 className=".section--title" >{element.title}</h3>
                                <h5 className=".sub--title" >{element.location}</h5>
                                <h4 id=".hero--section--content">{element.description.split("\n").map((line, index) => (
                                    <p key={index}>{line}</p>
                                    ))}
                                </h4>
                            </VerticalTimelineElement>
                        );
                    })
                }
            </VerticalTimeline>
        </div>
    );
}