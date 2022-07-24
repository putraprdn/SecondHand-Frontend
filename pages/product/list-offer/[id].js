import { NavBar, SellerCardProfile } from '../../../components'
import { getRequest } from '../../api/apiConfig'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const ProductOffer = ({offerDetail}) => {

    const [offer, setOffer] = useState([])
    const router = useRouter()

    const filterOffer = (offerDetail) => {
        offerDetail.map((item) => {
            if (item.status === "PENDING" ){
                setOffer(offer => [...offer, item])
            }
        })
    }

    useEffect(() => {
        filterOffer(offerDetail)
    }, [])

    const productOffer = offer.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i)

  return (
    <div>
        <NavBar />
        <div className="container px-5">
            <div className="d-flex flex-column align-items-center overflow-scroll vh-100">
                <div className="text-center">
                    <h3>List Penawar</h3>
                </div>
                {productOffer.length > 0 ?
                    productOffer.map((item, index) => {
                        return (
                            <div 
                                className="p-2 w-50" 
                                style={{ cursor:"pointer" }}  
                                key={index}
                                onClick={() => {
                                    router.push({
                                        pathname: `/product/offer/${item.id}`,
                                    })
                                }}
                            > 
                                <SellerCardProfile user={item.createdBy}/>
                            </div>
                        )
                    }) 
                    :
                    "Tidak ada peminat"
                }
            </div>
        </div>
    </div>
  )
}

export async function getServerSideProps(context) {
    const  id  = context.params.id
    const offer = await getRequest(`offer/product/${id}`)
    const offerDetail = await offer.data.data

    return {
        props: {
            offerDetail
        }
    }

}

export default ProductOffer