import { Card } from "react-bootstrap"

const CardProduct = () => {
    return (
        <div>
            <Card className="p-1">
                <Card.Body>
                    <div className="d-flex">
                        <div className="">
                            <img src="https://dummyimage.com/300x200/000000/fff.png" alt="" width={48} height={48} className="br-10" />
                        </div>
                        <div className="col ms-3">
                            <div className="align-self-center col">
                                <div className="d-flex fs-10 color-gey w-100">
                                    <div>
                                        Penawaran Produk
                                    </div>
                                    <div className="ms-auto">
                                        20 Apr, 14:04
                                    </div>
                                </div>
                            </div>
                            <div>
                                Jam Tangan Casio
                            </div>
                            <div>
                                Rp. 250.00,00
                            </div>
                            <div>
                                Ditawar Rp. 200.00,00
                            </div>
                        </div>
                    </div>
                </Card.Body>
                <Card.Footer className="bg-white">
                    <div className="w-100 d-flex fles-wrap">
                        <div className="ms-auto">
                            <button type="button" className="btn btn-outline-primary br-20">Preview</button>
                        </div>
                        <div className="ms-3">
                            <button type="button" className="btn btn-primary br-20" onClick={
                                () => { }
                            }>Terbitkan</button>
                        </div>
                    </div>
                </Card.Footer>
            </Card>
        </div >
    )
}

export default CardProduct