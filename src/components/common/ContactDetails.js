import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import * as actions from '../../actions/ContactsListActions';

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

class ContactDetails extends Component {
  constructor(props){
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleDelete(e) {
    this.props.actions.deleteContact(this.props.contact.id);
  }

  handleEdit(e) {
    this.props.actions.editContact(this.props.contact.id);
  }


  render() {
    const { firstName, lastName, phoneNumber, email, id } = this.props.contact;

    return (

          <tbody>
            <tr>
              <td className="row">
                {firstName}
              </td>
              <td className="row">
                {lastName}
              </td>
              <td className="row">
                {email}
              </td>
              <td className="row">
                {phoneNumber}
              </td>
              <td className="row">
                <button  className="btn btn-primary" onClick={this.handleEdit}>
                  <Link to="/editContact">Edit Contact</Link>
                </button>
              </td>
              <td className="row">
                <button  className="btn btn-primary" onClick={this.handleDelete}>
                   Delete Contact
                </button>
              </td>
            </tr>
          </tbody>
  )
  }
}
export default connect(null, mapDispatchToProps)(ContactDetails);
