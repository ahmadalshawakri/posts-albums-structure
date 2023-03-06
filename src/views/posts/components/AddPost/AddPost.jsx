import React, { useState } from "react";
import Modal from "react-modal";
import ModalContent from "../../../../components/Modal/ModalContent";

Modal.setAppElement("#root");
const customStyles = {
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "21rem",
    height: "50%",
    margin: "0 auto",
    marginTop: "5rem",
  },
};

const AddPost = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <hr style={{ width: "99%" }} />
      <button type="button" onClick={openModal}>
        +
      </button>
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <ModalContent onCloseModal={closeModal} onAddPost={props.onAddPost} />
      </Modal>
    </>
  );
};

export default AddPost;
