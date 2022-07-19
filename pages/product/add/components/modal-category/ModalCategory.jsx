import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ModalCategory = ({ isOpen, setModal, storeCategory, toastShow }) => {

    const [form, setForm] = useState({
        name: "",
        description: ""
    })

    const verivyData = () => {
        if (form.name === "" && form.description === "") {
            toastShow("Data kategori belum diisi")
        } else if (form.name === "") {
            toastShow("Nama kategori belum diisi")
        } else if (form.description === "") {
            toastShow("Deskripsi kategori belum diisi")
        } else {
            storeCategory(form).then((_) => {
                setModal(false)
            }).catch((err) => {
                console.log(err);
            });
        }
    }

    return (
        <Modal
            show={isOpen}
            size="ml"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add New Category
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nama Kategori</label>
                            <input
                                type="text"
                                className="form-control br-10"
                                id="name" name="name"
                                placeholder="Nama Kategori"
                                onChange={(e) => setForm({
                                    ...form,
                                    name: e.target.value
                                })}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Deskripsi Kategori</label>
                            <textarea
                                className="form-control br-10"
                                id="description"
                                rows={3}
                                defaultValue={""}
                                placeholder="Contoh : Jalan Ikan Hiu 33" onChange={(e) => setForm({
                                    ...form,
                                    description: e.target.value
                                })}
                            />
                        </div>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => setModal(false)}>Close</Button>
                <Button onClick={() => verivyData()}>Add</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalCategory