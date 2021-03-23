import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const GenericModal = (props) => {
  const { onCloseFunction, messageHead, messageBody, bVariant } = props;

  const toggle = () => onCloseFunction();

  return (
    <div>
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>{messageHead}</ModalHeader>
        <ModalBody>{messageBody}</ModalBody>
        <ModalFooter>
          <Button color={bVariant} onClick={toggle}>
            Accept
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default GenericModal;
