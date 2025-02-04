import React from 'react'

import { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";

function QuestionBuilder() {
  const [question, setQuestion] = useState("");
  const [questionType, setQuestionType] = useState("shortAnswer");
  const [options, setOptions] = useState([""]);

  // Handle question text change
  const handleQuestionChange = (e) => setQuestion(e.target.value);

  // Handle question type change
  const handleQuestionTypeChange = (e) => {
    setQuestionType(e.target.value);
    setOptions([""]); // Reset options for multiple choice/checkboxes
  };

  // Handle option change
  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  // Add a new option
  const addOption = () => setOptions([...options, ""]);

  // Remove an option
  const removeOption = (index) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card className="p-4 shadow-lg rounded" style={{ width: "100%", maxWidth: "600px" }}>
        {/* <h4 className="text-center mb-4">Create a Question</h4> */}

        
        <Form>
          {/* Question Text */}
          <Form.Group className="mb-3">
            <Form.Label>Question</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your question"
              value={question}
              onChange={handleQuestionChange}
              required
            />
          </Form.Group>

          {/* Question Type Selector */}
          <Form.Group className="mb-3">
            <Form.Label>Question Type</Form.Label>
            <Form.Select value={questionType} onChange={handleQuestionTypeChange}>
              <option value="shortAnswer">Short Answer</option>
              <option value="multipleChoice">Multiple Choice</option>
              <option value="checkboxes">Checkboxes</option>
              <option value="dropdown">Dropdown</option>
            </Form.Select>
          </Form.Group>

          {/* Conditional Rendering */}
          {questionType === "shortAnswer" && (
            <Form.Control type="text" placeholder="User will enter a short answer" disabled />
          )}

{(questionType === "multipleChoice" || questionType === "checkboxes" || questionType === "dropdown") && (
            <div>
              <p className="mb-2">Options:</p>
              {options.map((option, index) => (
                <div key={index} className="d-flex align-items-center mb-2">
                  {questionType === "multipleChoice" ? (
                    <Form.Check type="radio" name="multipleChoice" disabled />
                  ) : questionType === "checkboxes" ? (
                    <Form.Check type="checkbox" disabled />
                  ) : null}
                  <Form.Control
                    type="text"
                    placeholder={`Option ${index + 1}`}
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    className="mx-2"
                    required
                  />
                  <Button variant="danger" size="sm" onClick={() => removeOption(index)}>-</Button>
                </div>
              ))}
              <Button variant="secondary" size="sm" onClick={addOption}>+ Add Option</Button>
            </div>
          )}

          

          {/* Save button */}
          <Button variant="primary" className="mt-3 w-100">
            Save Question
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default QuestionBuilder;