import React from "react";

import "./Timeline.css";

const Timeline = ({ events }) => {
  const timelineEvents = events.map((event) => {
    const eventTags = event.tags.map((tag) => <li>{tag}</li>);
    return (
      <div>
        <div>
          <h2>{event.time}</h2>
          <h3>{event.position}</h3>
          <h4>{event.place}</h4>
          <ul className="tags">{eventTags}</ul>
        </div>
      </div>
    );
  });

  return <div className="timeline">{timelineEvents}</div>;
};

export default Timeline;
