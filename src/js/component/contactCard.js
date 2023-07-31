import React, { useContext }  from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const ContactCard = (props) => {
        const { store, actions } = useContext(Context); 
    
	return (
        
		<div className="d-flex row border-top border-bottom">
            <figure className="col-sm-5 col-md-3 col-lg-3 col-xl-2 mt-3">
                <img src="https://github.com/ClaudiaVargasSilva/contact-list-app-using-react-and-context-clase-18/blob/master/src/img/m101.jpg?raw=true" className="card-rounded" alt="man face" />
            </figure>
            <div className="col-sm-7 col-md-6 col-lg-6 col-xl-8">
                    <h1>{props.contact.name}</h1>
                    <p><i className="fas fa-map-marker-alt"></i><span><strong>{props.contact.address.street}</strong></span></p>
                    <p><i className="fas fa-phone"></i><span>{props.contact.phone}</span></p>
                    <p><i className="fas fa-envelope"></i><span>{props.contact.email}</span></p>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-2 text-center row">
                    <button type="submit" className="btn me" onClick={() => props.delete()}><i className="fas fa-trash"></i></button>
                <Link to={"/editContact/" + props.index}>
                    <button type="submit" className="btn me"><i className="fas fa-edit"></i></button>
                </Link>
            </div>
        </div>
    
	);
};
