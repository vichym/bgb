import React from 'react';
import { Modal, ModalBody, Button } from 'reactstrap'

function InfoModal(props) {

    return (
        <div>
            <Modal centered size={'sm'} isOpen={props.isOpen} toggle={props.toggle} >
                <ModalBody className="text-center">
                    <h4>
                        <b>{props.title}</b>
                    </h4>
                    <p>{props.msg}</p>
                    <Button color="primary" onClick={props.toggle}>Okay</Button>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default InfoModal;