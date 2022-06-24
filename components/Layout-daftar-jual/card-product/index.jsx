/* eslint-disable @next/next/no-img-element */
import styles from '../../../styles/ProductCard.module.css'
import { useRouter } from 'next/router'

const CardProduct = ({product}) => {

    const router = useRouter()

  return (
    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6">
         <div 
            className="p-2 border border-2 box-shadow" 
            style={{ width: "100%", height: "230px" }} 
            onClick={() => {
                router.push({
                    pathname: '/product/[id]',
                    query: {id : 1}
                }, 'product')
            }}>
             <div className="card-product d-flex flex-column">
                <div>
                    <img className={styles['product-img']} src="https://dummyimage.com/300x200/000000/fff.png" alt="product-img"/>
                </div>
                <div className="product-name mt-2">
                    <h5 className="mb-1 fw-semibold">Jam Tangan Casio</h5>
                </div>
                <div className="product-category">
                    <p className="text-muted mb-2">Aksesoris</p>
                </div>
                <div className="product-price">
                    <h5 className="mb-1 fw-400">Rp. 20000</h5>
                </div>
             </div>
         </div>
    </div>
  )
}

export default CardProduct