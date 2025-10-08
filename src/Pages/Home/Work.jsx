import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import timelineElements from "././timelineElements";
import hv from './hv-logo.jpg'
import vault from './vjs-logo.png';
export default function Work() {
    return(
        <div id="work" className="testimonial--section">
            <h1 className="sections--heading">WORK EXPERIENCE</h1>
            <VerticalTimeline>
                {
                    timelineElements.map((element) => {
                        let isWorkIcon = element.icon === "vault";
                        return(
                            <VerticalTimelineElement 
                            key={element.key} 
                            date={element.date}
                            dateClassName="date"
                            
                            icon= {isWorkIcon? <img src={vault} alt="Vault JS"  style={{ borderRadius: '50%', width: '100%', height: '100%' }} /> : <img src={hv} alt="Hitachi Vantara"  style={{ borderRadius: '50%', width: '100%', height: '100%' }} />}
                            >
                                <h3 className="vertical-timeline-element-title" >{element.title}</h3>
                                <h5 className="vertical-timeline-element-subtitle" >{element.location}</h5>
                                <h4 id="description">{element.description.split("\n").map((line, index) => (
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