import { ProductCarousal, Navbar, ProductDesc, CardPrice, SellerCardProfile, CardBuy } from '../../../components'
import { ModalTawar } from '../../../components'
import { useState } from 'react'

const DetailProduct = ({productDetail}) => {
    
  const [isOpen, setIsOpen] = useState(false)
    
  const handleOpen = (isOpen) => {
    setIsOpen(isOpen)
  }
  return (
    <div>
        <Navbar />
        <div className='container'>
            <div className='row justify-content-md-center'>
                <div className='col-md-6 mb-2'>
                    <ProductCarousal />
                </div>
                <div className='col-md-4'>
                    {productDetail? (<div> <CardPrice /> </div>) : (<div> <CardBuy handleOpen={handleOpen}/></div>)}
                    <SellerCardProfile />
                </div>
            </div>
            <div className='row justify-content-md-center'>
                <div className='col-md-6 mt-2'>
                    <ProductDesc />
                </div>
                <div className='col-md-4 mt-3'>
                </div>
            </div>
        </div>
        <div>
            {isOpen && <ModalTawar setIsOpen={setIsOpen} />}
        </div>
    </div>
  )
}

export default DetailProduct