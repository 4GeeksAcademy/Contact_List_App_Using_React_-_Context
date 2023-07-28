import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
    const { store, actions } = useContext(Context);
	const [user, setUser] = useState({
		full_name: "",
		email: "",
		phone: "",
        address: ""
	});
	
    function onChangeForm(e) {
        user[e.target.id] = e.target.value
        setUser(user)
        console.log(e.target.id)
    }

	return (
		<div className="container">
            <h1>Add a new Contact:</h1>
			<form onChange={onChangeForm} >
                <div className="mb-3">
                    <label for="name" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="full_name" placeholder="Full Name" />
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                </div>
                <div className="mb-3">
                    <label for="phone" className="form-label">Phone</label>
                    <input type="number"  className="form-control" id="phone" placeholder="Enter phone" />
                </div>
                <div className="mb-3">
                    <label for="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter address" />
                </div>
                <div className="row"> 
                    <button type="submit" onSubmit={() => actions.create({users: user})} className="btn btn-primary btn-lg btn-block mb-3" >Save</button>
                </div>
                    <br />  
                <Link to="/contact">or get back to contacts</Link>
            </form>
		</div>
	);
};
