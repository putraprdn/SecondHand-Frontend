import { Button, Modal } from "react-bootstrap"
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

const ModalStatus = ({ statusOpen, setStatusOpen }) => {
    const [value, setValue] = useState(0)
    const router = useRouter()
    const { id } = router.query

    const onUpdateOffer = async (value, id) => {
        try {
            const res = await axios.put(`https://new-pa-be-k3.herokuapp.com/api/offer/update/${id}`, {
                status: value

            }, {
            headers: {
                "Content-Type": "application/json",
                'Authorization': localStorage.getItem('token').substring(7)
            }
        })
        router.push('/daftar-jual/list')

        if (value === 1) {
            Swal.fire({
                position: 'top',
                text: "Barang berhasil terjual",
                showConfirmButton: false,
                timer: 2500
            }) 
        } else {
                Swal.fire({
                    position: 'top',
                    text: "Penawaran ditolak",
                    showConfirmButton: false,
                    timer: 2500
                })
        }
        } catch(err) {

        }
    }

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
                        <input  
                            className="form-check-input" 
                            type="radio" name="flexRadioDefault" 
                            id="flexRadioDefault1" 
                            onClick={() => setValue(1)}
                        />
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
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="flexRadioDefault" 
                            id="flexRadioDefault2" 
                            onClick={() => setValue(0)}
                        />
                        <div className="fw-bold">
                            Batalkan transaksi
                        </div>
                        <p>
                            Kamu membatalkan transaksi produk ini dengan pembeli
                        </p>
                    </div>
                </div>

                <Button className="br-20 w-100" onClick={() => onUpdateOffer(value, id)}>
                    Kirim
                </Button>
            </Modal.Body>
        </Modal>
    )
}

export default ModalStatus