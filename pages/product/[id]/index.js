import { ProductCarousal, NavBar, ProductDesc, SellerCardProfile, CardBuy } from '../../../components'
import { ModalTawar } from '../../../components'
import { getRequest } from '../../api/apiConfig'
import { useState, useEffect } from 'react'

import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/slices/userSilce";

const DetailProduct = ({ product }) => {
    
    const userData = useSelector(selectUser)
    const [seller, setSeller] = useState(false)
    
    const getSeller = (userData, product) => {
        if (product.createdBy === userData.email) {
            setSeller(true)
        }  
    }
    
    useEffect(() => {
        getSeller(userData, product)
    })

  return (
    <div>
        <NavBar />
        <div className='container'>
            <div className='row justify-content-md-center'>
                <div className='col-lg-6 col-md-7 mb-2'>
                    <ProductCarousal isProduct={product.images}/>
                </div>
                <div className='col-lg-4 col-md-5'>
                    <CardBuy isSeller={seller} isProduct={product} />
                    <SellerCardProfile user={product.seller}/>
                </div>
            </div>
            <div className='row justify-content-md-center'>
                <div className='col-lg-6 col-md-7 mt-2'>
                    <ProductDesc productDesc={product.description}/>
                </div>
                <div className='col-lg-4 col-md-5 mt-3'>
                </div>
            </div>
        </div>
        <div>
            <ModalTawar />
        </div>
    </div>
  )
}

export async function getStaticPaths() {
    const res = await getRequest('product/list')
    const product = res.data.data
    const paths = product.map((item) => ({
        params: { id: item.id.toString() }
    })
    )
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const res = await getRequest(`product/${params.id}`)
    const product = res.data.data
    return {
        props: {
            product
        }
    }
}

export default DetailProduct