import styles from '../../styles/CardBuyer.module.css'

const CardBuy = ({handleOpen}) => {

  return (
    <div className='card'>
      <div className="card-body">
        <h5 className="card-title">Jam Tangan Casio</h5>
        <h6 className="card-subtitle mb-3 text-muted">Aksesoris</h6>
        <p className="card-text fs-5 fw-bold">Rp. 100.000</p>
        <div className="d-grid gap-2">
          <button className={styles.btn_primary} type="button" onClick={() => handleOpen(true)}>Saya tertarik dan ingin nego</button>
        </div>
      </div>
    </div>
  )
}

export default CardBuy