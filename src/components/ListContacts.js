import React, { Component } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import * as actions from '../actions/ContactsListActions';
import ContactDetails from './common/ContactDetails';

const mapStateToProps = state => {
  const { contactsList } = state;
  return {
    contactsList,
  }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

class ListContacts extends Component {
  componentDidMount() {
    this.props.actions.listContacts();
  }

  render() {
    const {contactsList} = this.props;
    const hasContacts = contactsList && contactsList.length > 0

    const content = hasContacts ? (
      contactsList.map( contact =>
      <ContactDetails
        contact={contact}
        key={contact.id}
      />
    )
    ) :
    (
      <em>Please add some products to cart.</em>
    )
      return (
        <div>
          {content}
        </div>
      )
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ListContacts);
