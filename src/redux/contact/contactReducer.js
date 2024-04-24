import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	contacts: {
		items: [],
	},
	filters: {
		name: "",
	},
};

const contactsSlice = createSlice({
	// Ім'я слайсу
	name: "tasks",
	// Початковий стан редюсера слайсу
	initialState,
	// Об'єкт редюсерів
	reducers: {
		addContact(state, action) {
			state.contacts.items.push(action.payload);
		},
		deleteContact(state, action) {
			state.contacts.items = state.contacts.items.filter(
				contact => contact.id !== action.payload
			);
		},
		setFilter(state, action) {
			state.filters.name = action.payload;
		},
	},
});

// Генератори екшенів
export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
// Редюсер слайсу
export const contactReducer = contactsSlice.reducer;
