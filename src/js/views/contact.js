import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/contactCard";

import { Context } from "../store/appContext";

import "../../styles/contact.css";

export const Contact = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			{store.users.map((user, index) => 
				<ContactCard 
					index={index}
					contact={user}
					update={actions.update(user)}
					delete={actions.delete(index)}
					/>
				)}
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
