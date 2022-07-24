import { useEffect, useState } from "react";
import BackButton from "./components/back-button/BackButton";
import NavBar from "./components/navbar"
import axios from "axios";
import Head from "next/head";
import OfferForm from "./components/offer-form/OfferForm";

const ProductOffer = ({ offerDetail, product }) => {

    const [offer, setOffer] = useState({})
    const [productData, setProductData] = useState({})


    useEffect(() => {
        setOffer(offerDetail)
        setProductData(product)
    })

    return (
        <div>
            <Head>
                <title>Product Offer</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <div className="container">
                <div className="row justify-content-center">
                    <BackButton />
                    <OfferForm isOffer={offer} isProduct={productData} />
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const  id  = context.params.id
    const offer = await axios.get(`https://new-pa-be-k3.herokuapp.com/api/offer/${id}`)
    const productData = await axios.get(`https://new-pa-be-k3.herokuapp.com/api/product/${offer.data.data.productId}`)

    const offerDetail = await offer.data.data
    const product = await productData.data.data

    return {
        props: {
            offerDetail,
            product,
        }
    }

}

export default ProductOffer;