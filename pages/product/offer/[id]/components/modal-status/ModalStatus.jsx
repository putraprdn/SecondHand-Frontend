import { Button, Modal } from "react-bootstrap"

const ModalStatus = ({ statusOpen, setStatusOpen }) => {
    return (
        <Modal
            onHide={() => setStatusOpen(false)}
            show={statusOpen}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <h6 className="fw-bold mb-3">
                    Perbarui status penjualan produkmu
                </h6>
                <div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            <div className="fw-bold">
                                Berhasil terjual
                            </div>
                            <p>
                                Kamu telah sepakat menjual produk ini kepada pembeli
                            </p>
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <div className="fw-bold">
                            Batalkan transaksi
                        </div>
                        <p>
                            Kamu membatalkan transaksi produk ini dengan pembeli
                        </p>
                    </div>
                </div>

                <Button className="br-20 w-100">
                    Kirim
                </Button>
            </Modal.Body>
        </Modal>
    )
}

export default ModalStatus