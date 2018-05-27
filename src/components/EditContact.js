import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as actions from '../actions/ContactsListActions';
import { Input } from './common/Input';
import { SelectInput } from './common/SelectInput';
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
    this.onStatusChange = this.onStatusChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState ({
      contactDetails: nextProps.contactDetails,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.actions.updateContact(this.state.contactDetails);
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

  onStatusChange(e) {
    this.setState({
      contactDetails: { ...this.state.contactDetails, status: e.currentTarget.value }
    })
  }

  render () {
    const { firstName, lastName, email, phoneNumber, status } = this.state.contactDetails;
    return (
     <form className="addContactForm" onSubmit={this.handleSubmit}>
       <h2>Edit Contact</h2>

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

      <SelectInput
          name="status"
          onChange={this.onStatusChange}
          placeholder="Select the contact status"
          title="Status"
          value={status}
        />

       <button  className="btn btn-primary">
          Update Contact
       </button>
     </form>
   )
 }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditContact);
