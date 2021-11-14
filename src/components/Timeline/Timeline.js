import React from "react";
import "./Timeline.css";

const Timeline = ({ events }) => {
  const timelineEvents = events.map((event, index) => {
    const eventTags = event.tags.map((tag, index) => (
      <li key={index}>{tag}</li>
    ));

    return (
      <div key={index} className="timeline-event">
        <div className="timeline-event__content">
          <h2 className="timeline-event__time">{event.time}</h2>
          <h3 className="timeline-event__position">{event.position}</h3>
          <h4 className="timeline-event__place">{event.place}</h4>
          <ul className="timeline-event__tags">{eventTags}</ul>
        </div>
      </div>
    );
  });

  return <div className="timeline">{timelineEvents}</div>;
};

export default Timeline;
