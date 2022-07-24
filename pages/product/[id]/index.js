import { ProductCarousal, NavBar, ProductDesc, SellerCardProfile, CardBuy } from '../../../components'
import { ModalTawar } from '../../../components'
import { getRequest } from '../../api/apiConfig'
import { useState, useEffect } from 'react'
import { getCategoryName } from '../../../services/getCategoryName'

import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/slices/userSilce";
import Head from 'next/head'

const DetailProduct = ({ product, category, offerDetail }) => {

    const userData = useSelector(selectUser)
    const [seller, setSeller] = useState(false)
    const [isThisDisabled, setDisabled] = useState('')

    const getSeller = (userData, product) => {
        if (product?.createdBy === userData?.email) {
            setSeller(true)
        }
        else {
            setSeller(false)
        }
    }

    const getStatusUserOffer = (offerDetail, userData) => {
        const token = localStorage.getItem('token')
        token ? setDisabled('') : setDisabled('disabled')

        if (offerDetail?.length > 0) {
            for (let i = 0; i < offerDetail.length; i++) {
                if (offerDetail[i].createdBy.email === userData?.email && offerDetail[i].status === 'PENDING') {
                    setDisabled('disabled')
                }
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            dispatch(logout(null))
            Router.push("/auth/login");
        }


        getSeller(userData, product)
        getStatusUserOffer(offerDetail, userData)
    }, [])

    return (
        <div>
            <Head>
                <title>
                    {product.name}
                </title>
            </Head>
            <NavBar />
            <div className='container'>
                <div className='row justify-content-md-center'>
                    <div className='col-lg-6 col-md-7 mb-2'>
                        <ProductCarousal isProduct={product.images} />
                    </div>
                    <div className='col-lg-4 col-md-5'>
                        <CardBuy isDisabled={isThisDisabled} isSeller={seller} isProduct={product} isCategory={category} />
                        <SellerCardProfile user={product.seller} />
                    </div>
                </div>
                <div className='row justify-content-md-center'>
                    <div className='col-lg-6 col-md-7 mt-2'>
                        <ProductDesc productDesc={product.description} />
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

// export async function getStaticPaths() {
//     const res = await getRequest('product/list')
//     const product = res.data.data
//     const paths = product.map((item) => ({
//         params: { id: item.id.toString() }
//     })
//     )
//     return {
//         paths,
//         fallback: true
//     }
// }

export async function getServerSideProps(context) {
    const id = context.params.id

    try {
        const res = await getRequest(`product/${id}`)
        const category = await getCategoryName(res.data.data.categoryId)
        const offer = await getRequest(`offer/product/${id}`)

        const product = res.data.data
        const offerDetail = offer.data.data

        return {
            props: {
                product,
                category,
                offerDetail
            }
        }

    } catch (error) {
        console.log(error)
    }

}

export default DetailProduct