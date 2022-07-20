import { LayoutDaftarJual, NotFound, CardProduct } from "../../../components"

import { useEffect, useState } from "react"
import { getRequest } from "../../api/apiConfig"
import { filterProductByAvailable, filterProductByName } from "../../../services/filterProduct"
import { useRouter } from "next/router"

import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/slices/userSilce";

const Diminati = () => {


  const userData = useSelector(selectUser)
    
  const router = useRouter()
  const [product, setProduct] = useState([])
  const [offer, setOffer] = useState([])



  const getWishlistProduct = async () => {

  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    const getProductData = async () => {
      try {
        const res = await getRequest('product/list')
        const productFilter = filterProductByName(filterProductByAvailable(res.data.data, true), userData.email)
        setProduct(productFilter)
      } catch (error) {
        console.log(error);
      }
    }
  
    const getOfferByProduct = async (product) => {
      try {
        product.map(async (item) => {
          const res = await getRequest(`offer/product/${item.id}`)
          setOffer(res.data.data)
        })
        
      } catch (error) {
        console.log(error);
      }
    }

    if (token) {
      getProductData()
      getOfferByProduct(product)
      console.log(offer)
    } 
    else {
      router.push('/auth/login')
    } 

  }, [])

  return (
    <LayoutDaftarJual>
      <div className="row g-3">
          {product.lenght > 0 ? 
            product.map((item, index) => {
              return (
                <div className="col-xl-3 col-md-4 col-lg-4 col-sm-6 col-xs-6" key={index}>
                  <CardProduct product={item} />
                </div>
              )
            }) : <NotFound content={'diminati'}/> 
          }
      </div>
    </LayoutDaftarJual>
  )
}

export default Diminati