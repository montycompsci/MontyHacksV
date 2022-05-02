import "../assets/css/Schedule.scss";
import { ListGroup } from "react-bootstrap";

function Schedule() {
  const activities = [
    {
      name: "Check In",
      description: "In-Person",
      time: "8:00am",
    },
    {
      name: "Opening Ceremony",
      description: "Hybrid",
      time: "9:00am",
    },
    {
      name: "Hacking Starts",
      time: "10:00am",
    },
    {
      name: "Team Formation",
      description: "Hybrid",
      time: "10:00am",
    },
    {
      name: "Breakfast",
      description: "In-Person",
      time: "10:00am",
    },
    {
      name: "Lunch",
      description: "In-Person",
      time: "1:00pm",
    },
    {
      name: "Workshops",
      description: "Hybrid",
      time: "1:30pm",
    },
    {
      name: "Snack Break",
      description: "In-Person",
      time: "4:00pm",
    },
    {
      name: "Dinner",
      description: "In-Person",
      time: "6:00pm",
    },
    {
      name: "Hacking Ends",
      time: "7:00pm",
    },
    {
      name: "Judging",
      time: "7:30pm",
    },
    {
      name: "Closing Ceremony",
      description: "Hybrid",
      time: "9:00pm",
    },
  ];

  return (
    <div id="schedule">
      <div style={{ height: "30px" }}></div>
      <h2 className="section-title">schedule</h2>
      <div className="schedule app-container" id="schedule">
        <ListGroup as="ul" className="schedule-list">
          {activities.map(({ name, description, time }, index) => (
            <ListGroup.Item
              key={index}
              as="li"
              className={
                "d-flex justify-content-between align-items-start schedule-item " +
                (index === 0 ? "top" : "") +
                (index === activities.length - 1 ? "bottom" : "")
              }
            >
              <div className="ms-2 schedule-item-text">
                <div className="fw-bold">{time}</div>
              </div>
              <div className="ms-4 me-auto schedule-item-text schedule-item-name">
                <div className="fw-bold">{name}</div>
                {description}
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}

export default Schedule;
