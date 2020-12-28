import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";

const Todo = ({ item, setTodos, todos }) => {
  const deleteTodoHandler = () => {
    setTodos(todos.filter((todo) => todo.id !== item.id));
  };

  const [edit, setEdit] = useState(false);

  const editTodoHandler = () => {
    setEdit(!edit);
  };

  const formatDate = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return (
      date.getMonth() +
      1 +
      "/" +
      date.getDate() +
      "/" +
      date.getFullYear() +
      "  " +
      strTime
    );
  };

  return (
    <ListGroup.Item key={item.id}>
      <Row>
        <Col>{formatDate(item.dateCreated)}</Col>
        <Col>{item.text}</Col>

        <Col>
          <Row>
            <Col>
              <Button type="button" variant="light" onClick={deleteTodoHandler}>
                <i className="fas fa-trash"></i>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default Todo;
