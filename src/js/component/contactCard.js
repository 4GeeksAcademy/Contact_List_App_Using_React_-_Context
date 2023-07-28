import React, { useContext }  from "react";
import { Context } from "../store/appContext";

export const ContactCard = (props) => {
        const { store, actions } = useContext(Context); 
    
	return (
        
		<div className="d-flex row border-top border-bottom">
            <figure className="col-sm-5 col-md-3 col-lg-3 col-xl-2 mt-3">
                <img src="https://github.com/ClaudiaVargasSilva/contact-list-app-using-react-and-context-clase-18/blob/master/src/img/m101.jpg?raw=true" className="card-rounded" alt="man face" />
            </figure>
            <div className="col-sm-7 col-md-6 col-lg-6 col-xl-8">
                    <h1>{props.users.name}</h1>
                    <p><i className="fas fa-map-marker-alt"></i><span><strong>{props.users.address}</strong></span></p>
                    <p><i className="fas fa-phone"></i><span>{props.users.phone}</span></p>
                    <p><i className="fas fa-envelope"></i><span>{props.users.email}</span></p>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 col-xl-2 m-auto row">
                    <button type="submit" className="btn btn-danger mb-3" onClick={() => props.delete(props.index)}>Delete</button>
                    <button type="submit" className="btn btn-success" onClick={() => props.update(props.index)}>Update</button>
            </div>
        </div>
    
	);
};
