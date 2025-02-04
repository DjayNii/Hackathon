import React, { useEffect, useState } from "react";
import { Container, Card, Form } from "react-bootstrap";

function FormView() {
    const data = {
        "formData": {
          "title": "User Feedback Form",
          "questions": [
            {
              "question": "What is your name?",
              "questionType": "shortAnswer",
              "options": [""]
            },
            {
              "question": "What is your favorite color?",
              "questionType": "multipleChoice",
              "options": ["Red", "Blue", "Green"]
            },
            {
              "question": "Select your hobbies",
              "questionType": "checkboxes",
              "options": ["Reading", "Gaming", "Traveling"]
            },
            {
              "question": "Select your country",
              "questionType": "dropdown",
              "options": ["USA", "India", "Canada"]
            }
          ]
        }
      }
  const [formData, setFormData] = useState(null);
    useEffect(() => {
        setFormData(data.formData);
    }, []);
//   useEffect(() => {
//     fetch("http://localhost:5000/formData")
//       .then((res) => res.json())
//       .then((data) => setFormData(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

  if (!formData) return <p>Loading form...</p>;

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">{formData.title}</h2>

      {formData.questions.map((question, index) => (
        <Card key={index} className="p-4 shadow-sm rounded mb-3">
          <h5>{index + 1}. {question.question}</h5>
          <Form>
            {question.questionType === "shortAnswer" && (
              <Form.Control type="text" placeholder="Your answer" />
            )}
            {question.questionType === "multipleChoice" && question.options.map((option, optIndex) => (
              <Form.Check key={optIndex} type="radio" name={`question-${index}`} label={option} />
            ))}
            {question.questionType === "checkboxes" && question.options.map((option, optIndex) => (
              <Form.Check key={optIndex} type="checkbox" label={option} />
            ))}
            {question.questionType === "dropdown" && (
              <Form.Select>
                <option>Select an option</option>
                {question.options.map((option, optIndex) => (
                  <option key={optIndex}>{option}</option>
                ))}
              </Form.Select>
            )}
          </Form>
        </Card>
      ))}
    </Container>
  );
}

export default FormView;