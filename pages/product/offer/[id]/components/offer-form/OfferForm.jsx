import 'react-toastify/dist/ReactToastify.css';
import CardBuyer from '../card-buyer/CardBuyer';
import CardProduct from '../card-product/CardProduct';

const OfferForm = ({ isOffer, isProduct }) => {

    return (
        <div className="col-6 mb-5">
            <CardBuyer isBuyyer={isOffer}/>
            <h5 className='py-2'>
                Daftar Produk yang Ditawar
            </h5>
            <CardProduct isOffer={isOffer} isProduct={isProduct}/>
        </div >
    )
}

export default OfferForm;