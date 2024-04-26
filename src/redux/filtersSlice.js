import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./contactsSlice";

const filtersSlice = createSlice({
	// Ім'я слайсу
	name: "tastfilter",
	// Початковий стан редюсера слайсу
	initialState,
	// Об'єкт редюсерів
	reducers: {
		changeFilter(state, action) {
			state.filters.name = action.payload;
		},
	},
});

// Генератори екшенів
export const { changeFilter } = filtersSlice.actions;
// Редюсер слайсу
export const filterReducer = filtersSlice.reducer;
