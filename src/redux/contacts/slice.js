import { createSlice, createSelector } from "@reduxjs/toolkit";
import { addContact, fetchContacts, deleteContact } from "./operations";
import { selectNameFilter } from "../filters/slice";

const handlePending = (state) => {
    state.loading = true;
}

const handleError = (state, action) => {
    state.loading = false;
    state.error = action.payload;
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, handleError)
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.items.push(action.payload);
            })
            .addCase(addContact.rejected, handleError)
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled,
                (state, action) => {
                    state.loading = false;
                    state.error = null;
                    state.items = state.items.filter(contact => contact.id !== action.payload);
            })
            .addCase(deleteContact.rejected, handleError)
    }
    })

export default contactsSlice.reducer;

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (contacts, nameFilter) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(nameFilter.toLowerCase()));
})