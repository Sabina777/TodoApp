import React from "react";
import { Row, Col, ListGroup, Button } from "react-bootstrap";
import formatDate from "../utils/formatDate";
const Todo = ({ item, setTodos, todos }) => {
  const deleteTodoHandler = () => {
    setTodos(todos.filter((todo) => todo.id !== item.id));
  };

  return (
    <ListGroup.Item key={item.id}>
      <Row>
        <Col>{formatDate(item.dateCreated)}</Col>
        <Col>{item.text}</Col>

        <Col>
          <Button type="button" variant="light" onClick={deleteTodoHandler}>
            <i className="fas fa-trash"></i>
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default Todo;
