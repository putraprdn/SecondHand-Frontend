/* eslint-disable @next/next/no-img-element */
import styles from '../../../styles/ProductCard.module.css'
import { useRouter } from 'next/router'
import { currencyFormat } from '../../../services/currency'
import { getRequest } from '../../../pages/api/apiConfig'
import { useState, useEffect } from 'react'

const CardProduct = ({product}) => {

    const router = useRouter()
    const productData = product
    const [category, setCategory] = useState('')
    
    const getCategory = async (productData) => {
        try{
            const response = await getRequest(`category/${productData.categoryId}`)
            const category = response.data.data.name
            setCategory(category)
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getCategory(productData)
    })

  return (
    <div 
       className="p-2 border border-2 box-shadow" 
       style={{ width: "100%", height: "230px", cursor:"pointer" }} 
       onClick={() => {
           router.push({
               pathname: `/product/${productData.id}`,
           })
       }}>
        <div className="card-product d-flex flex-column">
           <div>
               <img className={styles['product-img']} src={productData?.images[0]?.image} alt="product-img"/>
           </div>
           <div className="product-name mt-2">
               <h5 className="mb-1 fw-semibold">{productData.name}</h5>
           </div>
           <div className="product-category">
               <p className="text-muted mb-2">{category}</p>
           </div>
           <div className="product-price">
               <h5 className="mb-1 fw-400">{currencyFormat(productData.price)}</h5>
           </div>
        </div>
    </div>
  )
}

export default CardProduct