import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export default (function AddNewTodo({ addTodo }) {
  const [value, setValue] = useState("");

  const onSubmit = event => {
    event.preventDefault();
    if (!value) {
      alert('Please Enter a value')
      return;
    }
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={onSubmit}> 
    <Form.Group>
      <Form.Label><b>Create Todo</b></Form.Label>
      <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Create todo" />
    </Form.Group><br/>
    <Button variant="primary mb-3" type="submit">
      Submit
    </Button>
  </Form>
  );
});
