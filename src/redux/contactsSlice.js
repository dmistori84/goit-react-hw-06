// import { createSlice } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";

// const initialState = {
// 	contacts: {
// 		items: [],
// 	},
// 	filters: {
// 		name: "",
// 	},
// };

// const contactsSlice = createSlice({
// 	// Ім'я слайсу
// 	name: "tasks",
// 	// Початковий стан редюсера слайсу
// 	initialState,
// 	// Об'єкт редюсерів
// 	reducers: {
// 		addContact(state, action) {
// 			state.contacts.items.push(action.payload);
// 		},
// 		deleteContact(state, action) {
// 			state.contacts.items = state.contacts.items.filter(
// 				contact => contact.id !== action.payload
// 			);
// 		},
// 	},
// });

// // Генератори екшенів
// export const { addContact, deleteContact } = contactsSlice.actions;
// // Редюсер слайсу
// export const contactReducer = contactsSlice.reducer;
