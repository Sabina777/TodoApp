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
import TodoItem from "../components/TodoItem";
import comparisionByProperty from "../utils/comparisionByProperty";
const TodoList = ({ todos, setTodos, inputText, setInputText }) => {
  const [sort, setSort] = useState(false);
  const sortHandler = () => {
    setSort(!sort);
  };

  let todofinal = [];

  if (sort) {
    const sortedList = todos.sort(comparisionByProperty("dateCreated"));
    todofinal = sortedList;
  } else {
    todofinal = todos;
  }

  return (
    <Row>
      <Col>
        <Button onClick={sortHandler} type="submit">
          Sort By Date
        </Button>
      </Col>

      <ListGroup variant="flush">
        {todofinal.map((item) => (
          <TodoItem
            item={item}
            setTodos={setTodos}
            todos={todos}
            inputText={inputText}
            setInputText={setInputText}
          />
        ))}
      </ListGroup>
    </Row>
  );
};

export default TodoList;
