import '../assets/css/Schedule.css';
import { ListGroup, Badge } from 'react-bootstrap';

function Schedule() {
    const activities = [
        {
            name: 'activity name 1',
            description: 'activity description 1',
            time: 'time 1'
        },
        {
            name: 'activity name 2',
            description: 'activity description 2',
            time: 'time 2'
        },
    ]

    return (
        <div className="schedule" id="schedule">
            <h2 className="section-title">Schedule</h2>
            <ListGroup as="ol" numbered>
                {activities.map(({name, description, time}, index) => 
                    <ListGroup.Item
                        key={index}
                        as="li"
                        className="d-flex justify-content-between align-items-start schedule-item"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{name}</div>
                            {description}
                        </div>
                        <Badge bg="primary" pill>
                            {time}
                        </Badge>
                    </ListGroup.Item>
                )}
            </ListGroup>
        </div>
    )
}

export default Schedule;