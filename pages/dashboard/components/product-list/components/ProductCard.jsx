import currencyFormat from "../../../service/currency";

const ProductCard = ({ productImage, productName, productCategory, productPrice }) => {
    return (
        <div className="col-6">
            <div className="card h-100">
                <img src={productImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h6 className="card-title">{productName}</h6>
                    <p className="card-text">{productCategory}</p>
                    <h6 className="card-title">{currencyFormat(productPrice)}</h6>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;