import css from "./SearchBox.module.css";

const SearchBox = ({ filter, onChangeFilter }) => {
	return (
		<label className={css.label}>
			Find contacts by name
			<input
				className={css.input}
				type="text"
				value={filter}
				onChange={onChangeFilter}
			/>
		</label>
	);
};

export default SearchBox;
