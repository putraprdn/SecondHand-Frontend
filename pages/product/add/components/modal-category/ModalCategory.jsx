
import { Modal, Button } from "react-bootstrap";
const ModalCategory = ({ isOpen, setModal }) => {
    return (
        <Modal
            show={isOpen}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add New Category
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => setModal(false)}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalCategory