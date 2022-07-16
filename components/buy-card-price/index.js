import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const CardBuy = ({isSeller}) => {

  // const router = useRouter()

  return (
    <div className='card'>
      <div className="card-body">
        <h5 className="card-title">Jam Tangan Casio</h5>
        <h6 className="card-subtitle mb-3 text-muted">Aksesoris</h6>
        <p className="card-text fs-5 fw-400">Rp. 100.000</p>
        <div className="d-grid gap-2">
          {isSeller ? 
            <button className="btn btn-outline-primary fw-500">Edit</button>
          : 
            <button className="btn btn-primary fw-500" type="button" data-bs-toggle="modal" data-bs-target="#modalTawar">Saya tertarik dan ingin nego</button>
          }
          
        </div>
      </div>
    </div>
  )
}

export default CardBuy