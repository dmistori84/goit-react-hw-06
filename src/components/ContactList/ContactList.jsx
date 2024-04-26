import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
	const contacts = useSelector(state => state.contacts.items);
	const filter = useSelector(state => state.filters.name);

	const filteredContacts = contacts.filter(contact =>
		contact.name.toLowerCase().includes(filter.toLowerCase())
	);

	return (
		<div>
			<ul className={css.list}>
				{filteredContacts.map(contact => (
					<Contact key={contact.id} contacts={contact} />
				))}
			</ul>
		</div>
	);
};

export default ContactList;
