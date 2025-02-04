import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import QuestionMaker from "./QuestionMaker"; // Import the child component

function FormBuilder() {
  const [questions, setQuestions] = useState([]);
  const [inputState, setInputState] = useState({ title: "Hello" });

  // Add a new question
  const addQuestion = () => {
    setQuestions([
      ...questions,
      { id: "", question: "", questionType: "shortAnswer", options: [""] },
    ]);
  };

  // Update a question's data
  const updateQuestion = (id, updatedData) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) => (q.id === id ? updatedData : q))
    );
  };

  // Remove a question
  const removeQuestion = (id) => {
    setQuestions((prevQuestions) => prevQuestions.filter((q) => q.id !== id));
  };

  // Submit form (Send questions to backend)
  const handleSubmit = async () => {
    console.log("Submitting Form Data:", questions);
    // Example: Send data to backend
    /*
    await fetch("/api/submit-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ questions }),
    });
    */
  };

  return (
    <Container className="mt-4">
      <h1 style={{ justifyContent: "center" }}>Form Builder</h1>
      <br />
      <br />
      <Form.Group className="mb-3">
        <Form.Label className="h2">Form Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter form title"
          value={inputState.title}
          onChange={(e) =>
            setInputState({ ...inputState, title: e.target.value })
          }
          required
        />
      </Form.Group>

      {questions.map((q, index) => (
        <QuestionMaker
          key={q.id}
          id={q.id}
          data={q}
          updateQuestion={updateQuestion}
          removeQuestion={removeQuestion}
        />
      ))}

      <Button variant="secondary" className="mt-3" onClick={addQuestion}>
        + Add
      </Button>
      <Button variant="primary" className="mt-3 ms-2" onClick={handleSubmit}>
        Submit Form
      </Button>
    </Container>
  );
}

export default FormBuilder;
