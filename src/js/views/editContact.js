import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = () => {
    const { store, actions } = useContext(Context);
    const params = useParams(); 
	const [user, setUser] = useState({
        name: "",
		email: "",
        phone: "",
		address: ""
    });
	
   function onChangeForm(e) {
        user[e.target.id] = e.target.value
        setUser(user)
            
        console.log(e.target.value) 
    }
    
    useEffect (() => {
        if (store.users && store.users.length > 0 && store.users[params.index]) {
            setUser(store.users[params.index]) 
        }
    }, [store.users])

	return (
		<div className="container">
            <h1>Edit Contact:</h1>
			<form onChange={(e) => onChangeForm(e)} onSubmit={(e) => e.preventDefault()}>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Full Name" defaultValue={user.name} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" defaultValue={user.email}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input type="number"  className="form-control" id="phone" placeholder="Enter phone" defaultValue={user.phone}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter address" defaultValue={user.address.street}/>
                </div>
                <div className="row"> 
                    <button type="submit" onClick={() => actions.update(params.index, user)} className="btn btn-primary btn-lg btn-block mb-3" >Modify</button>
                </div>
                  <br />  
                <Link to="/contact">or get back to contacts</Link>
            </form>
		</div>
	);
};
