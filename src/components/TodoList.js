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

const TodoList = ({ todos, setTodos, inputText, setInputText }) => {
  const comparisonFunctionByPropertyName = (propertyName) => {
    return function (object1, object2) {
      var value1 = object1[propertyName];
      var value2 = object2[propertyName];

      if (value1 < value2) {
        return 1;
      } else if (value1 > value2) {
        return -1;
      } else {
        return 0;
      }
    };
  };
  const [sort, setSort] = useState(false);
  const sortHandler = () => {
    setSort(!sort);
  };

  let todofinal = [];

  if (sort) {
    const sortedList = todos.sort(
      comparisonFunctionByPropertyName("dateCreated")
    );
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
