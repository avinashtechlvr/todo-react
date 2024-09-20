import React, {createContext, useContext, useState} from "react";
import Modal from "../components/Modal.jsx";


const ModalContext = createContext();
export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const showModal = (content) => {
        setIsOpen(true);
        setModalContent(content);
    };
    const hideModal = () => {
        setIsOpen(false);
        setModalContent(null);
    };
    return (<ModalContext.Provider value={{isOpen, showModal, hideModal}}>
        {children}
        {isOpen && <Modal>{modalContent}</Modal>}
    </ModalContext.Provider>)


}