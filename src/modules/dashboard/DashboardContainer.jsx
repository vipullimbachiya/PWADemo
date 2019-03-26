import React, { Component } from 'react';

import Dashboard from './Dashboard';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      age: 0,
      submittedValues: {},
    };
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFieldChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(prevState => ({
      submittedValues: {
        name: prevState.name,
        email: prevState.email,
        age: prevState.age,
      },
    }));
  }

  render() {
    const {
      name, email, age, submittedValues,
    } = this.state;
    return (
      <Dashboard
        name={name}
        email={email}
        age={age}
        handleFieldChange={this.handleFieldChange}
        submittedValues={submittedValues}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default DashboardContainer;
