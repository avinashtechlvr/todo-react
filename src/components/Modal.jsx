import React from 'react';
import {useModal} from "../contexts/ModalProvider.jsx";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from "@fortawesome/free-solid-svg-icons";

import "../styles/Modal.css";


const Modal = ({children}) => {
    const {hideModal} = useModal();
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={hideModal}><FontAwesomeIcon icon={faTimes}/></button>
                <div className="modal-body">{children}</div>

            </div>
        </div>
    );
};
export default Modal;
