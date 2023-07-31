import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/contactCard";
import { Modal } from "../component/modal";

import { Context } from "../store/appContext";

import "../../styles/contact.css";

export const Contact = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		show: false,
		indexToDelete: null
	});

	console.log(store.users)
	return (
		<div className="container">
			{store.users.map((user, index) => (
				<ContactCard 
					key ={index}
					index={index}
					contact={user}
					update={actions.update}
					delete={() => {
						setState({ show: true, indexToDelete: index })					
					}}
					/>
			))}
			<br />
			<Modal show={state.show} onClose={() => setState({ show: false })} index={state.indexToDelete}/>
			<Link to="/addContact">
				<button className="btn btn-primary">Add a contact</button>
			</Link>
			<br />  
			<br />  
                <Link to="/">or get back to home</Link>
		</div>
	);
};