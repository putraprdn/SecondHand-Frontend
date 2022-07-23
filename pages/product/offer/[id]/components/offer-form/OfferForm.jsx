import 'react-toastify/dist/ReactToastify.css';
import CardBuyer from '../card-buyer/CardBuyer';
import CardProduct from '../card-product/CardProduct';

const OfferForm = () => {

    return (
        <div className="col-6 mb-5">
            <CardBuyer />
            <h5 className='py-2'>
                Daftar Produk yang Ditawar
            </h5>
            <CardProduct />
        </div >
    )
}

export default OfferForm;