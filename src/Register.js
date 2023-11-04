import React, { Component } from 'react';

class RegistrationForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      confirmPassword: '', // Added confirmPassword field
      email: '',
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

    // Add form validation logic here to check if the password and confirmPassword match

    if (this.state.password !== this.state.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Prepare the registration data from the form state
    const registrationData = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      role: this.state.role,
      name: this.state.name,
      specialization: this.state.specialization,
      availability: this.state.availability,
      experience: this.state.experience,
      bio: this.state.bio,
    };

    // Make an HTTP POST request to the server's registration API
    fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      })
        .then((response) => {
          if (response.ok) {
            // Registration was successful
            response.json().then((data) => {
              console.log('Registration successful:', data);
              // Optionally redirect to a login page or show a success message
            });
          } else {
            // Registration failed
            response.json().then((data) => {
              console.error('Registration failed:', data.message);
              // You can show an error message to the user.
            });
          }
        })
        .catch((error) => {
          console.error('Error registering:', error);
          // Handle any unexpected errors here.
        });
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
            <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleInputChange} required />
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
                  type="number"
                  name="experience"
                  value={this.state.experience}
                  onChange={this.handleInputChange}
                  placeholder="e.g., 5 years"
                />
              </label>

              <label>
                Bio (Therapist):
                <textarea
                  name="bio"
                  value={this.state.bio}
                  onChange={this.handleInputChange}
                  placeholder="Tell us about yourself and your experience as a therapist."
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
