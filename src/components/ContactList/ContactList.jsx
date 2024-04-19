import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
	return (
		<div>
			<ul className={css.list}>
				{contacts.map(contact => (
					<Contact
						key={contact.id}
						contacts={contact}
						deleteContact={deleteContact}
					/>
				))}
			</ul>
		</div>
	);
};

export default ContactList;
