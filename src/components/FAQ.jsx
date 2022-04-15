import '../assets/css/FAQ.css'
import { Accordion } from 'react-bootstrap'

function FAQ() {
    return (
        <div className="faq" id="faq">
            <h2 className="section-title">FAQ</h2>
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>What skill levels is MontyHacks intended for?</Accordion.Header>
                <Accordion.Body>
                MontyHacks draws a wide range of participant skill levels — in past years, we’ve had large numbers of both complete beginners and experienced programmers participate. Our workshops will vary in complexity and difficulty, and we’ll also be offering a prize specifically for beginner projects!
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>What is the maximum team size I can work in?</Accordion.Header>
                <Accordion.Body>
                You may work in a team of up to five people.
                </Accordion.Body>
                </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Is it alright if I don’t have a team?</Accordion.Header>
                <Accordion.Body>
                Yes! You can compete alone or also find other people interested in forming a team on the day of the hackathon.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Is there any cost to attending MontyHacks?</Accordion.Header>
                <Accordion.Body>
                No, MontyHacks is completely free! All food, merch, and prizes will be provided to participants at zero cost (thanks to our generous sponsors).
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default FAQ;