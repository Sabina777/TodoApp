import React, { useState } from "react";
import { Row, Col, ListGroup, Button } from "react-bootstrap";
import TodoItem from "../components/TodoItem";
import comparisionByProperty from "../utils/comparisionByProperty";

const TodoList = ({ todos, setTodos, inputText, setInputText }) => {
  const [sort, setSort] = useState(false);

  const sortHandler = () => {
    setSort(!sort);
  };

  //check whether to display sorted todo lists or normal todo lists
  let finalTodos = [];
  if (sort) {
    const sortedList = todos.sort(comparisionByProperty("dateCreated"));
    finalTodos = sortedList;
  } else {
    finalTodos = todos;
  }

  return (
    <Row>
      <Col md={2}>
        <Button onClick={sortHandler} type="submit">
          Sort
        </Button>
      </Col>
      <Col md={10}>
        <ListGroup variant="flush">
          {finalTodos.map((item) => (
            <TodoItem
              item={item}
              setTodos={setTodos}
              todos={todos}
              inputText={inputText}
              setInputText={setInputText}
              key={item.dateCreated}
            />
          ))}
        </ListGroup>
      </Col>
    </Row>
  );
};

export default TodoList;
