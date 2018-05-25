import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as actions from '../actions/ContactsListActions';
import { Input } from './common/Input';
import {getContactById} from '../reducers/ContactsListSelector'

const intialState = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  status: '',
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

const mapStateToProps = state => {
  const editContactId = state.editContactId;

  return {
    contactDetails: getContactById(state),
  }
}

class EditContact extends Component {
  constructor(props){
    super(props);

    this.state = {
      contactDetails: !!this.props.contactDetails[0] ? this.props.contactDetails[0] : intialState,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState = {
      contactDetails: nextProps.contactDetails,
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.actions.updateContact(this.state.contactDetails);
  }

  onFirstNameChange(e) {
    const contactDetails = Object.assign(this.state.contactDetails);
    contactDetails.firstName = e.currentTarget.value;
    this.setState({
      contactDetails
    })
  }

  onLastNameChange(e) {
    const contactDetails = Object.assign(this.state.contactDetails);
    contactDetails.lastName = e.currentTarget.value;
    this.setState({
      contactDetails
    })
  }

  onEmailChange(e) {
    const contactDetails = Object.assign(this.state.contactDetails);
    contactDetails.email = e.currentTarget.value;
    this.setState({
      contactDetails
    })
  }

  onPhoneNumberChange(e) {
    const contactDetails = Object.assign(this.state.contactDetails);
    contactDetails.phoneNumber = e.currentTarget.value;
    this.setState({
      contactDetails
    })
  }

  render () {
    const { firstName, lastName, email, phoneNumber } = this.state.contactDetails;
    return (
     <form className="addContactForm" onSubmit={this.handleSubmit}>
       <h2>Edit Contact</h2>

       <Input
          title="First Name"
          name="firstName"
          type="text"
          value={firstName}
          onChange={this.onFirstNameChange}
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
          Update Contact
       </button>
     </form>
   )
 }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditContact);
