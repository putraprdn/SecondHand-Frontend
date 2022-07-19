import { CardProduct, LayoutDaftarJual } from "../../../components"
import { useRouter } from "next/router"
import { Plus } from "react-feather"
import { useEffect, useState } from "react"
import { getRequest } from "../../api/apiConfig"
import { filterProductByAvailable, filterProductByName } from "../../../services/filterProduct"

import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/slices/userSilce";

const List = () => {

  const userData = useSelector(selectUser)
    
  const router = useRouter()
  const [product, setProduct] = useState()

  const getProductData = async () => {
    try {
      const res = await getRequest('product/list')
      const productFilter = filterProductByName(filterProductByAvailable(res.data.data), userData.email)
      setProduct(productFilter)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      getProductData()
    } 
    else {
      router.push('/auth/login')
    }
  })

  return (
    <LayoutDaftarJual>
      <div className="row g-3">
        <div className="col-xl-3 col-md-4 col-lg-4 col-sm-6 col-xs-6">
            <div className="btn position-relative border border-2 br-10 border-dashed" style={{ width: "100%", height: "230px" }} onClick={() => router.push('/product/add') }>
                <div className="position-absolute top-50 start-50 translate-middle">
                    <Plus size={20} color="grey" />
                    <p className="text-muted">Tambah Produk</p>
                </div>
            </div>
          </div>
        </div>
        {
          product && product.map((item, index) => {
            return (
              <div className="col-xl-3 col-md-4 col-lg-4 col-sm-6 col-xs-6" key={index}>
                <CardProduct product={item} />
              </div>
            )
          })
        }
      </div>
    </LayoutDaftarJual>
  )
}


export default List