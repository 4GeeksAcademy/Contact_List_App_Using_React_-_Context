import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
    const { store, actions } = useContext(Context);
	const [user, setUser] = useState({
		name: "",
		email: "",
		phone: "",
        address: ""
	});

    //function to change the value from on an specific id of an input an assing it to a new object
    function onChangeForm(e) {
        const { id, value } = e.target;
        console.log({id, value});
        setUser({...user, [id]: value });
        console.log({...user, [id]: value })
    }

	return (
		<div className="container">
            <h1>Add a new Contact:</h1>
			<form onChange={(e) =>  onChangeForm(e)} onSubmit={(e) => e.preventDefault()}>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Full Name" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input type="text"  className="form-control" id="phone" placeholder="Enter phone" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter address" />
                </div>
                <div className="row"> 
                    <button type="submit" onClick={() => actions.addContact(user)} className="btn btn-primary btn-lg btn-block mb-3" >Save</button>
                </div>
                <br /> 
                <Link to="/contact">or get back to contacts</Link>
            </form>
		</div>
	);
};

