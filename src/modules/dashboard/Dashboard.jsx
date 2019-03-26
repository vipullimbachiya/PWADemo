import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const noop = () => {};

const Dashboard = ({
  name, email, age, handleFieldChange, handleSubmit, submittedValues,
}) => (
  <div className="dashboard">
    <Container>
      <div className="content">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={handleFieldChange}
              placeholder="Enter name"
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={handleFieldChange}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group controlId="age">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              name="age"
              value={age}
              onChange={handleFieldChange}
              placeholder="Enter age"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        {
          submittedValues && Object.keys(submittedValues).length > 0
          && (
            <div className="submitted-info">
              <Table striped bordered>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>{submittedValues.name}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{submittedValues.email}</td>
                  </tr>
                  <tr>
                    <td>Age</td>
                    <td>{submittedValues.age}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          )
        }
      </div>
    </Container>
  </div>
);

Dashboard.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  age: PropTypes.number,
  handleFieldChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  submittedValues: PropTypes.instanceOf(Object),
};

Dashboard.defaultProps = {
  name: '',
  email: '',
  age: 0,
  handleFieldChange: noop,
  handleSubmit: noop,
  submittedValues: {},
};

export default Dashboard;
