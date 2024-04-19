import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
// import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

const defaultContacts = [
	{ id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
	{ id: "id-2", name: "Hermione Kline", number: "443-89-12" },
	{ id: "id-3", name: "Eden Clements", number: "645-17-79" },
	{ id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
	// const [contacts, setContacts] = useState(defaultContacts);
	const [contacts, setContacts] = useState(() => {
		const stringifyContacts = localStorage.getItem("contacts");
		if (!stringifyContacts) return defaultContacts;
		const parsedContacts = JSON.parse(stringifyContacts);
		return parsedContacts;
	});
	const [filter, setFilter] = useState("");

	useEffect(() => {
		localStorage.setItem("contacts", JSON.stringify(contacts));
	}, [contacts]);

	const onChangeFilter = event => {
		setFilter(event.target.value);
	};

	const getContacts = data => {
		const newContact = {
			...data,
			id: nanoid(),
		};
		setContacts(prevState => [...prevState, newContact]);
	};

	const filteredContacts = contacts.filter(contact =>
		contact.name.toLowerCase().includes(filter.toLowerCase())
	);

	const deleteContact = id => {
		setContacts(prevState => prevState.filter(contact => contact.id !== id));
	};

	return (
		<>
			<h1>Phonebook</h1>
			<ContactForm getContacts={getContacts} />
			<SearchBox filter={filter} onChangeFilter={onChangeFilter} />
			<ContactList contacts={filteredContacts} deleteContact={deleteContact} />
		</>
	);
}

export default App;
