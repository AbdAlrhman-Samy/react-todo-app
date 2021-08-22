import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

import { useState } from "react";
const MyForm = ({ newItem }) => {
  const [value, setValue] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    if (!value) return;
    newItem(value);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Form className="mb-5" onSubmit={handleForm}>
      <Row>
        <Col md="8">
        <Form.Control  className="p-2 mb-3" type="text" value={value} onChange={handleChange} required />
        </Col>

        <Col md="4">
        <Button variant="outline-light" className="px-5 mt-sm-3 mt-md-0" type="submit">Add</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default MyForm;
