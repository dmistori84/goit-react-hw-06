import css from "./Contact.module.css";

const Contact = ({ contacts, deleteContact }) => {
	return (
		<li className={css.item}>
			<span>
				<p>👤{contacts.name}</p>
				<p>📞{contacts.number}</p>
			</span>
			<button className={css.btn} onClick={() => deleteContact(contacts.id)}>
				Delete
			</button>
		</li>
	);
};

export default Contact;
