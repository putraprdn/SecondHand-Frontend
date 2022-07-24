import { Card } from "react-bootstrap"
import { useEffect, useState } from 'react'
import { getTimeFormat } from '../../../../../../services/TimeFormat'
import { currencyFormat } from '../../../../../../services/currency'
import axios from 'axios'
import { useRouter } from "next/router"
import Swal from 'sweetalert2'
import { PhoneCall } from 'react-feather';
import ModalWa from "../modal-wa/ModalWa"

const CardProduct = ({ isOffer, isProduct }) => {

    const router = useRouter()
    const [status, setStatus] = useState('')
    const [terima, setTerima] = useState(false)
    const [isOpen, setIsOpen] = useState(false);

    const RejectOffer = async () => {
        try {
            const res = await axios.put(`https://new-pa-be-k3.herokuapp.com/api/offer/update/${isOffer.id}`,
                {
                    status: 0

                }, {
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': localStorage.getItem('token').substring(7)
                }
            })

            Swal.fire({
                position: 'top',
                title: 'Offer Rejected',
                showConfirmButton: false,
                timer: 1500
            })

            router.push('/daftar-jual/list')
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        console.log(isOffer)
        console.log(isProduct)

        if (isOffer.status === 'REJECTED') {
            setStatus('disabled')
        }
    })

    return (
        <div>
            <Card className="p-1">
                <Card.Body>
                    <div className="d-flex">
                        <div className="">
                            <img src={isProduct.images ? isProduct.images[0].image : "https://dummyimage.com/300x200/000000/fff.png"} alt="" width={48} height={48} className="br-10" />
                        </div>
                        <div className="col ms-3">
                            <div className="align-self-center col">
                                <div className="d-flex fs-10 color-gey w-100">
                                    <div>
                                        Penawaran Produk
                                    </div>
                                    <div className="ms-auto">
                                        {getTimeFormat(isOffer.createdAt)}
                                    </div>
                                </div>
                            </div>
                            <div>
                                {isProduct.name ? isProduct.name : "Product"}
                            </div>
                            <div>
                                {isProduct.price ? currencyFormat(isProduct.price) : "Rp. 0"}
                            </div>
                            <div>
                                Ditawar <strong>{isOffer.price ? currencyFormat(isOffer.price) : "Rp. 0"}</strong>
                            </div>
                        </div>
                    </div>
                </Card.Body>
                <Card.Footer className="bg-white">
                    {terima ?
                        <div className="w-100 d-flex fles-wrap">
                            <div className="ms-auto">
                                <button type="button" className={`${status} btn btn-outline-primary br-20`}>Status</button>
                            </div>
                            <div className="ms-3">
                                <button type="button" className={`${status} btn btn-primary br-20`} onClick={
                                    () => { setTerima(true) }
                                }>Hubungi di <PhoneCall size={17} /></button>
                            </div>
                        </div>
                        :
                        <div className="w-100 d-flex fles-wrap">
                            <div className="ms-auto">
                                <button
                                    type="button"
                                    className={`${status} btn btn-outline-primary br-20`}
                                    onClick={() => RejectOffer()}
                                >
                                    Tolak
                                </button>
                            </div>
                            <div className="ms-3">
                                <button type="button" className={`${status} btn btn-primary br-20`} onClick={
                                    () => { setIsOpen(true) }
                                }>Terima</button>
                            </div>
                        </div>
                    }
                </Card.Footer>
            </Card>
            <ModalWa isOpen={isOpen} setIsOpen={setIsOpen} isProduct={isProduct} isBuyyer={isOffer} />
        </div >
    )
}

export default CardProduct