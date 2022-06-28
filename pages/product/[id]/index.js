import { ProductCarousal, NavBar, ProductDesc, SellerCardProfile, CardBuy } from '../../../components'
import { ModalTawar } from '../../../components'
import { useRouter } from 'next/router'

const DetailProduct = ({productDetail}) => {

  const router = useRouter()
  const { id } = router.query
  const data = {
    foo : true,
    pid : id
  }
    
  return (
    <div>
        <NavBar />
        <div className='container'>
            <div className='row justify-content-md-center'>
                <div className='col-lg-6 col-md-7 mb-2'>
                    <ProductCarousal />
                </div>
                <div className='col-lg-4 col-md-5'>
                    <CardBuy seller={data}/>
                    <SellerCardProfile />
                </div>
            </div>
            <div className='row justify-content-md-center'>
                <div className='col-lg-6 col-md-7 mt-2'>
                    <ProductDesc />
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

export default DetailProduct