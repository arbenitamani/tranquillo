import React, { Component } from 'react';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state;

    // Send the username and password to your server for authentication
    // You can use the 'fetch' API or a library like Axios for this

    // Example of sending a POST request to your server
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the server, e.g., store authentication token in a secure way
      })
      .catch(error => {
        // Handle authentication error
        console.error('Authentication failed:', error);
      });
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} required />
          </label>

          <label>
            Password:
            <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} required />
          </label>

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
