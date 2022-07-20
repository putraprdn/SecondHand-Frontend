import { LayoutDaftarJual, CardProduct, NotFound } from "../../../components"
import { useEffect, useState } from "react"
import { getRequest } from "../../api/apiConfig"
import { filterProductByAvailable, filterProductByName } from "../../../services/filterProduct"
import { useRouter } from "next/router"

import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/slices/userSilce";

const Terjual = () => {

  const userData = useSelector(selectUser)
    
  const router = useRouter()
  const [product, setProduct] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('token')

    const getProductData = async () => {
      try {
        const res = await getRequest('product/list')
        const productFilter = filterProductByName(filterProductByAvailable(res.data.data, false), userData.email)
        setProduct(productFilter)
      } catch (error) {
        console.log(error);
      }
    }
    
    if (token) {
      getProductData()
    } 
    else {
      router.push('/auth/login')
    }
  }, [])

  return (
    <LayoutDaftarJual>      
      <div className="row g-3">
        {product.length > 0 ? 
            product.map((item, index) => {
              return (
                <div className="col-xl-3 col-md-4 col-lg-4 col-sm-6 col-xs-6" key={index}>
                  <CardProduct product={item} />
                </div>
              )
            }) : <NotFound content={'terjual'}/> 
          }
      </div>
    </LayoutDaftarJual>
  )
}

export default Terjual