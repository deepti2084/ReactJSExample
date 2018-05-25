export const getContactById = state => state.contactsList.filter(
  contact => contact.id === state.editContactId
)
