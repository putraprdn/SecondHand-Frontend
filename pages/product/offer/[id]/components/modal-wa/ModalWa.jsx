import { useState } from "react";
import { Modal, Button, Card } from "react-bootstrap";
import { currencyFormat } from "../../../../../../services/currency";
import { getTimeFormat } from "../../../../../../services/TimeFormat";

const ModalWa = ({ isOpen, setIsOpen, isBuyyer, isProduct }) => {

    const onSendWa = () => {
        window.open(`https://web.whatsapp.com/send?phone=${isBuyyer.createdBy.phoneNumber}&text=Hai%20${isBuyyer.createdBy.name},%20saya%20ingin%20menjual%20${isProduct.name}%20dengan%20harga%20${currencyFormat(isBuyyer.price)}%20yang%20kamu%20tawar.%20Silahkan%20hubungi%20saya.%20Terima%20kasih.`, '_blank');
    }

    return (
        <Modal
            onHide={() => setIsOpen(false)}
            show={isOpen}
            size="ml"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <h5>
                    Yeay kamu berhasil mendapat harga yang sesuai
                </h5>
                <h5 className="fw-light color-gray" >
                    Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
                </h5>
                <div className="br-20 p-3 my-3" style={{ backgroundColor: "#EEEEEE" }}>
                    <div className="col">
                        <div className="text-center fw-bold">
                            Product Match
                        </div>
                        <div className="d-flex">
                            <div className="align-self-center">
                                <img src={isBuyyer.createdBy ? isBuyyer.createdBy.image : "https://dummyimage.com/300x200/000000/fff.png"} alt="" width={48} height={48} className="br-10" />
                            </div>
                            <div className="align-self-center col ms-3">
                                <div className="fw-bold">
                                    {isBuyyer.createdBy ? isBuyyer.createdBy.name : "Pembeli"}
                                </div>
                                <div className="fs-10 color-grey">
                                    {isBuyyer.createdBy ? isBuyyer.createdBy.city : "City"}
                                </div>
                            </div>
                        </div>
                        <div className="d-flex mt-3">
                            <div className="">
                                <img src={isProduct.images ? isProduct.images[0].image : "https://dummyimage.com/300x200/000000/fff.png"} alt="" width={48} height={48} className="br-10" />
                            </div>
                            <div className="col ms-3">
                                <div>
                                    {isProduct.name ? isProduct.name : "Product"}
                                </div>
                                <div >
                                    <s>
                                        {isProduct.price ? currencyFormat(isProduct.price) : "Rp. 0"}
                                    </s>
                                </div>
                                <div>
                                    Ditawar <strong>{isBuyyer.price ? currencyFormat(isBuyyer.price) : "Rp. 0"}</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Button className="br-20 w-100" onClick={() => onSendWa()}>
                    Hubungi via Whatsapp
                </Button>
            </Modal.Body>
        </Modal>
    )
}

export default ModalWa