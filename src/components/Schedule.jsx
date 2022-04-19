import "../assets/css/Schedule.scss";
import { ListGroup, Badge } from "react-bootstrap";

function Schedule() {
  const space1 = "                      ";
  const space2 = "                   ";
  const activities = [
    {
      name: "Check In",
      description: "In-Person",
      time: "8:00am - 9:00am",
    },
    {
      name: "Opening Ceremony",
      description: "Hybrid (In-Person @ MHS Auditorium)",
      time: "9:00am - 9:30am",
    },
    {
      name: "Hacking Starts",
      time: "10:00am" + space2,
    },
    {
      name: "Team Formation",
      description: "Hybrid",
      time: "10:00am" + space2,
    },
    {
      name: "Breakfast",
      description: "In-Person",
      time: "10:00am" + space2,
    },
    {
      name: "Lunch",
      description: "In-Person",
      time: "1:00pm" + space1,
    },
    {
      name: "Workshops",
      description: "Hybrid",
      time: "1:30pm" + space1,
    },
    {
      name: "Snack Break",
      description: "In-Person",
      time: "4:00pm  " + space2,
    },
    {
      name: "Dinner",
      description: "In-Person",
      time: "6:00pm" + space1,
    },
    {
      name: "Hacking Ends",
      time: "7:00pm" + space1,
    },
    {
      name: "Judging",
      time: "7:30pm - 9:00pm ",
    },
    {
      name: "Closing Ceremony",
      description: "Hybrid",
      time: "9:00pm - 9:45pm ",
    },
  ];

  return (
    <div className="schedule" id="schedule">
      <h2 className="section-title">Schedule</h2>
      <ListGroup as="ul">
        {activities.map(({ name, description, time }, index) => (
          <ListGroup.Item
            key={index}
            as="li"
            className="d-flex justify-content-between align-items-start schedule-item"
          >
            <div className="ms-2 schedule-item-text">
              <div className="fw-bold">{time}</div>
            </div>
            <div className="ms-4 me-auto schedule-item-text">
              <div className="fw-bold">{name}</div>
              {description}
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Schedule;
