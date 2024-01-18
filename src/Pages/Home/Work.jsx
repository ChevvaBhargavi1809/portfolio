import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import timelineElements from "././timelineElements";
import myLogo from './hv-logo.jpg'
import school from './sjsu-logo2.jpg'
export default function Work() {
    return(
        <div id="work" className="testimonial--section">
            <h1 className="sections--heading">WORK EXPERIENCE</h1>
            <VerticalTimeline>
                {
                    timelineElements.map((element) => {
                        let isWorkIcon = element.icon === "work";
                        return(
                            <VerticalTimelineElement 
                            key={element.key} 
                            date={element.date}
                            dateClassName="date"
                            
                            icon= {isWorkIcon? <img src={myLogo} alt="hv"  style={{ borderRadius: '50%', width: '100%', height: '100%' }} /> : <img src={school} alt="sjsu"  style={{ borderRadius: '50%', width: '100%', height: '100%' }} />}
                            >
                                <h3 className="vertical-timeline-element-title" >{element.title}</h3>
                                <h5 className="vertical-timeline-element-subtitle" >{element.location}</h5>
                                <p id="description">{element.description}</p>
                            </VerticalTimelineElement>
                        );
                    })
                }
            </VerticalTimeline>
        </div>
    );
}