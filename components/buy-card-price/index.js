import { currencyFormat } from '../../services/currency'
import { useRouter } from 'next/router'

const CardBuy = ({isSeller, isProduct, isCategory, isDisabled}) => {
  
  const router = useRouter()
  const id = isProduct.id
  
  return (
    <div className='card'>
      <div className="card-body">
        <h5 className="card-title mb-2">{isProduct?.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{isCategory? isCategory : 'Category'}</h6>
        <p className="card-text fs-5 fw-400">{currencyFormat(isProduct?.price)}</p>
        <div className="d-grid gap-2">
          {isSeller ? 
            <button 
              className={`${isDisabled} btn btn-outline-primary fw-500`}
              onClick={() => {
                router.push({
                  pathname: '/product/edit/[id]',
                  query: { id : id }
                })
              }}>Edit</button>
          : 
            <button className={`${isDisabled} btn btn-primary fw-500 `} type="button" data-bs-toggle="modal" data-bs-target="#modalTawar">Saya tertarik dan ingin nego</button>
          }
          
        </div>
      </div>
    </div>
  )
}

export default CardBuy