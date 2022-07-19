/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import styles from '../../styles/ModalTawar.module.css'
import { useRouter } from 'next/dist/client/router';
import { getRequest } from '../../pages/api/apiConfig';

const ModalTawar = () => {
  const router = useRouter()
  const { id } = router.query
  const [product, setProduct] = useState({})
  const [img, setImg] = useState('')
  const [price, setPrice] = useState(0)

  const getProductData = async (id) => {
    try {
      const res = await getRequest(`product/${id}`)
      setProduct(res.data.data)
      setImg(res.data.data.images[0].image)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProductData(id)
  })

  const handleOnValueChange = (e) => {
    setPrice(e)
  }

  return (
    <div className="modal fade" id="modalTawar" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered justify-content-around">
            <div className="modal-content px-3 rounded-16" style={{width:360}}>
              <div className="modal-header border-bottom-0">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body py-0">
                <p className='fw-bold'>Masukkan Harga Tawarmu</p>
                <p className='text-muted'>Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan segera dihubungi penjual.</p>
              </div>
              <div className={styles.product_detail}>
                <div className='p-3'>
                  <div className='bg-light rounded-16' style={{width: 48, height: 48}}>
                    <img className='rounded-16' style={{width: 48, height: 48}} src={img} alt="product"/>
                  </div>
                </div>
                <div>
                  <p className='fw-bold mb-1'>{product?.name}</p>
                  <p className='m-0'>Rp. {product?.price}</p>
                </div>
              </div>
              <div className='mx-3 mb-2'>
                <label htmlFor="inputHarga" className="form-label">Tawar Harga</label>
                <CurrencyInput
                  intlConfig={{ locale: 'id-ID', currency: 'IDR' }}
                  id="validation-example-2-field"
                  placeholder="Rp 0,00"
                  decimalSeparator=","
                  groupSeparator="."
                  allowDecimals={false}
                  className={"form-control px-3 py-2 shadow-sm rounded-16"}
                  prefix={'Rp'}
                  step={1}
                  value={price}
                  onValueChange={handleOnValueChange}
                />
              </div>
              <div className="modal-footer border-top-0 mb-3">
                <button 
                  type="button" 
                  className="rounded-16 flex-fill btn btn-primary p-2 "
                  onClick={() => console.log(price)}
                >
                  Kirim
                </button>
              </div>
            </div>
          </div>
    </div>
  )
}


export default ModalTawar