import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            marked: false,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
    toggleMarked(state, action) {
      for (const contact of state) {
        if (contact.id === action.payload) {
          contact.marked = !contact.marked;
          break;
        }
      }
    },
  },
});

export const { addContact, deleteContact, toggleMarked } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
