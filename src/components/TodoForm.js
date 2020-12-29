import React from "react";

import { Row, Col, Form, Button } from "react-bootstrap";

const TodoForm = ({ setInputText, todos, setTodos, inputText }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
        dateCreated: new Date(),
      },
    ]);

    setInputText("");
  };
  return (
    <Form onSubmit={submitTodoHandler}>
      <Row>
        <Col>
          <Form.Group controlId="todo">
            <Form.Control
              type="text"
              placeholder="Enter new todo"
              value={inputText}
              onChange={inputTextHandler}
            ></Form.Control>
          </Form.Group>
        </Col>

        <Col>
          <Button type="submit" variant="info">
            Add
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default TodoForm;
