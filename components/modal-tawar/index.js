import React, { useState } from 'react';
import CurrencyInput from 'react-currency-input-field';;
import styles from '../../styles/ModalTawar.module.css'

const ModalTawar = ({ setIsOpen }) => {

  const [className, setClassName] = useState('');

  const validateValue = (value) => {

    if (!value) {
      setClassName('');
    } else if (Number.isNaN(Number(value))) {
      setClassName('is-invalid');
    } else {
      setClassName('is-valid');
    }
  };

  return (
    <div className={styles.background}>
      <div className="modal-dialog modal-dialog-centered" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content px-3 rounded-16" style={{width:360}}>
              <div className="modal-header border-bottom-0">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setIsOpen(false)}></button>
              </div>
              <div className="modal-body py-0">
                <p className='fw-bold'>Masukkan Harga Tawarmu</p>
                <p className='text-muted'>Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan segera dihubungi penjual.</p>
              </div>
              <div className={styles.product_detail}>
                <div className='p-3'>
                  <div className='bg-light rounded-16' style={{width: 48, height: 48}}>
                    img
                  </div>
                </div>
                <div>
                  <p className='fw-bold mb-1'>Jam Tangan Casio</p>
                  <p className='m-0'>Rp 250.000</p>
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
                  className={`form-control px-3 py-2 shadow-sm rounded-16 ${className}`}
                  onValueChange={validateValue}
                  prefix={'Rp'}
                  step={10}
                />
              </div>
              <div className="modal-footer border-top-0 mb-3">
                <button type="button" className="rounded-16 flex-fill btn btn-primary p-2">Kirim</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ModalTawar