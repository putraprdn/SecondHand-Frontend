import { ProductCarousal, NavBar, ProductDesc, CardPrice, SellerCardProfile } from '../../../../components'

const PreviewProduct = ({productDetail}) => {
    
  return (
    <div>
        <NavBar />
        <div className='container'>
            <div className='row justify-content-md-center'>
                <div className='col-lg-6 col-md-7 mb-2'>
                    <ProductCarousal />
                </div>
                <div className='col-lg-4 col-md-5'>
                    <CardPrice />
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
    </div>
  )
}

export default PreviewProduct