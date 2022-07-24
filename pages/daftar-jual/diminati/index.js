import { LayoutDaftarJual, NotFound, CardDiminati } from "../../../components"

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

  useEffect(() => {
    const token = localStorage.getItem('token')
    const getProductData = async () => {
      try {
        const res = await getRequest('product/list')
        const productFilter = filterProductByName(filterProductByAvailable(res.data.data, true), userData.email)

        productFilter.map(async (item) => {
          const res = await getRequest(`offer/product/${item.id}`)
          if (res.data.data.length > 0) {
            res.data.data.map((offerDetail) => {
              if (offerDetail.status === 'PENDING') {
                setOffer(offer => [...offer, item])
              }
            })
          }
        })

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

  const productOffer = offer.filter((v, i, a) => a.findIndex(v2 => (v2.id === v.id)) === i)

  return (
    <LayoutDaftarJual>

      <div className="row g-3">
        {productOffer.length > 0 ?
          productOffer.map((item, index) => {
            return (
              <div className="col-xl-3 col-md-4 col-lg-4 col-sm-6 col-xs-6" key={index}>
                <CardDiminati product={item} />
              </div>
            )
          }) : <NotFound content={'diminati'} />
        }
      </div>
    </LayoutDaftarJual>
  )
}

export default Diminati