import { Card } from "react-bootstrap"

const CardBuyer = () => {
    return (
        <div>
            <Card className="p-1">
                <Card.Body>
                    <div className="d-flex">
                        <div className="align-self-center">
                            <img src="https://dummyimage.com/300x200/000000/fff.png" alt="" width={48} height={48} className="br-10" />
                        </div>
                        <div className="align-self-center col ms-3">
                            <div className="fw-bold">
                                Nama Pembeli
                            </div>
                            <div className="fs-10 color-grey">
                                Kota
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardBuyer