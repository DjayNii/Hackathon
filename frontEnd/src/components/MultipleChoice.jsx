import { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
function MultipleChoice() {
    const [selectedOption, setSelectedOption] = useState("");
  
    return (
    <Container>
      <Card className="p-4 shadow-sm">
        <Card.Body>
          <h4>1. What is your favorite programming language?</h4>
          <Form>
            {["JavaScript", "Python", "Java", "C++"].map((lang, idx) => (
              <Form.Check
                key={idx}
                type="radio"
                label={lang}
                name="language"
                value={lang}
                onChange={(e) => setSelectedOption(e.target.value)}
                checked={selectedOption === lang}
              />
            ))}
            <Button variant="primary" className="mt-3">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
    );
  }
export default MultipleChoice;