import { routerActions  } from 'react-router-redux';

export function addContact(contactDetails) {
  return {
    type: 'ADD_CONTACT',
    contactDetails,
  };
};

export function navigateToListContact() {
  return dispatch => {
     dispatch( routerActions.push('/listContact') );
   }
};

export function updateContact(contactDetails) {
  return {
    type: 'UPDATE_CONTACT',
    contactDetails,
  };
};

export function listContacts() {
  return {
    type: 'LIST_CONTACTS',
  };
};

export function deleteContact(id) {
  return {
    type: 'DELETE_CONTACT',
    id,
  };
};

export function editContact(id) {
  return {
    type: 'EDIT_CONTACT',
    id,
  };
};

export function resetEditContact() {
  return {
    type: 'RESET_EDIT_CONTACT',
    };
};
