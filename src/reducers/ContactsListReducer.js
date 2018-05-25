import {
  ADD_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
  LIST_CONTACTS,
  RESET_EDIT_ID,
  UPDATE_CONTACT,
} from '../actions/actionTypes'

const initialState = {
  contactsList: [{
    firstName: 'D',
    lastName: 'S',
    email: 'a@c.com',
    phoneNumber: '1234567890',
    id: 12,
  }]
};

export default function contactList(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contactsList: [...state.contactsList, action.contactDetails]
      };
      break;

    case EDIT_CONTACT:
      return {
        ...state,
        editContactId: action.id,
      }
      break;

    case DELETE_CONTACT:
      return {
        ...state,
        contactsList: state.contactsList.filter(contact => contact.id !== action.id)
      }
      break;

    case LIST_CONTACTS:
      return state;
      break;

    case UPDATE_CONTACT:
      return {
        ...state,
        contactsList: state.contactsList.map(contact => {
          return contact.id === action.contactDetails.id ? action.contactDetails : contact;
        })
      };
      break;

    case RESET_EDIT_ID:
        return {
          ...state,
          editContactId: -1,
        }

    default:
      return state;
  }
}
