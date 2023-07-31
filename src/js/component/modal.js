import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Modal = props => {
	const { actions } = useContext(Context);

	return (
		<div className="modal" tab="-1" role="dialog" aria-label="Confirmation dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content bg-secondary">
					<div className="modal-header">
						<h5 className="modal-title">Are you sure you want to delete this?</h5>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-primary"
							onClick={() => {
								props.onClose();
							}}>
							no
						</button>
						<button
							type="button"
							className="btn btn-dark"
							data-dismiss="modal"
							onClick={() => {
								actions.delete(props.index);
								props.onClose();
							}}>
							Yes!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Modal.propTypes = {
	onClose: PropTypes.func,
	show: PropTypes.bool
};