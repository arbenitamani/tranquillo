import React, { Component } from 'react';

class RegistrationForm extends Component {
    constructor() {
      super();
      this.state = {
        username: '',
        password: '',
        email: '',
        registration_date: new Date().toISOString(), // Initialize with the current date and time
        role: 'user',
        name: '',
        specialization: '',
        availability: '',
        experience: '',
        bio: '',
       
      };
    }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation and submit the data to your Node.js server for registration
    // You can use the 'fetch' API or a library like Axios to make a POST request to your server
  }

  render() {
    return (
      <div>
        <h2>Registration Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} required />
          </label>

          <label>
            Password:
            <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} required />
          </label>
          <label>
            Confirm Password:
            <input type="password" name="Confirm Password" value={this.state.password} onChange={this.handleInputChange} required />
          </label>


          <label>
            Email:
            <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} required />
          </label>

          <label>
            Role:
            <select name="role" value={this.state.role} onChange={this.handleInputChange}>
              <option value="user">User</option>
              <option value="therapist">Therapist</option>
            </select>
          </label>

          {this.state.role === 'therapist' && (
            <>
              <label>
                Name (Therapist):
                <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
              </label>

              <label>
                Specialization (Therapist):
                <input type="text" name="specialization" value={this.state.specialization} onChange={this.handleInputChange} />
              </label>
              <label>
  Availability (Therapist):
  <input
    type="text"
    name="availability"
    value={this.state.availability}
    onChange={this.handleInputChange}
    placeholder="e.g., Monday-Friday, 9 AM - 5 PM"
  />
</label>

<label>
  Experience (Therapist):
  <input
    type="number" name="experience" value={this.state.experience} onChange={this.handleInputChange} placeholder="e.g., 5 years"
 />
</label>

<label>
  Bio (Therapist):
  <textarea
    name="bio" value={this.state.bio} onChange={this.handleInputChange} placeholder="Tell us about yourself and your experience as a therapist."
  ></textarea>
</label>

              
            </>
          )}

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
