import "../assets/css/FAQ.css";
import { Accordion } from "react-bootstrap";

function FAQ() {
  const questions = [
    {
      header: "Who can attend?",
      body: "MontyHacks is open to any high schoolers and middle schoolers above the age of 13.",
    },
    {
      header: "What skill levels is MontyHacks intended for?",
      body: "MontyHacks draws a wide range of participant skill levels — in past years, we’ve had large numbers of both complete beginners and experienced programmers participate. Our workshops will vary in complexity and difficulty, and we’ll also be offering a prize specifically for beginner projects!",
    },
    {
      header: "What is the maximum team size I can work in?",
      body: "You may work in a team of up to five people.",
    },
    {
      header: "Is it alright if I don’t have a team?",
      body: "Yes! You can compete alone or also find other people interested in forming a team on the day of the hackathon.",
    },
    {
      header: "Is there any cost to attending MontyHacks?",
      body: "No, MontyHacks is completely free! All food, merch, and prizes will be provided to participants at zero cost (thanks to our generous sponsors).",
    },
  ];

  return (
    <div className="faq" id="faq">
      <h2 className="section-title">FAQ</h2>
      <Accordion defaultActiveKey="0">
        {questions.map(({ header, body }, index) => (
          <Accordion.Item eventKey={index.toString()}>
            <Accordion.Header>{header}</Accordion.Header>
            <Accordion.Body>{body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default FAQ;
