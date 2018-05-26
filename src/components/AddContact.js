import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/ContactsListActions';
import { Input } from './common/Input';

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

const initialState = {
  id: -1,
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  status: '',
}

class AddContact extends Component {
  constructor(props){
    super(props);

    this.state = {
      contactDetails: initialState
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.actions.addContact({...this.state.contactDetails, id:Math.floor((Math.random() * 100) + 1) });
    this.setState ({
      contactDetails: initialState
    })
  }

  onFirstNameChange(e) {
    this.setState({
      contactDetails: { ...this.state.contactDetails, firstName: e.currentTarget.value }
    })
  }

  onLastNameChange(e) {
    this.setState({
      contactDetails: { ...this.state.contactDetails, lastName: e.currentTarget.value }
    })
  }

  onEmailChange(e) {
    this.setState({
      contactDetails: { ...this.state.contactDetails, email: e.currentTarget.value }
    })
  }

  onPhoneNumberChange(e) {
    this.setState({
      contactDetails: { ...this.state.contactDetails, phoneNumber: e.currentTarget.value }
    })
  }

  render () {
    const { firstName, lastName, email, phoneNumber } = this.state.contactDetails;
    return (
     <form className="addContactForm" onSubmit={this.handleSubmit}>
       <h2 className="title">Add Contact</h2>

       <Input
          title="First Name"
          name="firstName"
          type="text"
          value={firstName}
          onChange={this.onFirstNameChange}
          placeholder="Enter First Name"
        />

        <Input
           title="Last Name"
           name="lastName"
           type="text"
           value={lastName}
           onChange={this.onLastNameChange}
           placeholder="Enter Last Name"
        />

         <Input
            title="Email address"
            name="email"
            type="email"
            value={email}
            onChange={this.onEmailChange}
            placeholder="Enter email address"
            htmlFor="email"
        />

       <Input
          title="Phone Number (Format: 123456789)"
          name="phoneNumber"
          type="text"
          value={phoneNumber}
          onChange={this.onPhoneNumberChange}
          placeholder="Enter phone number"
      />

       <button  className="btn btn-primary">
          Add Contact
       </button>
     </form>
   )
 }
}
export default connect(null, mapDispatchToProps)(AddContact);
