import styles from '../../styles/CardBuyer.module.css'

const CardPrice = () => {
  return (
    <div className='card'>
      <div className="card-body">
        <h5 className="card-title">Jam Tangan Casio</h5>
        <h6 className="card-subtitle mb-2 text-muted">Aksesoris</h6>
        <p className="card-text fw-bold">Rp. 100.000</p>
        <div className="d-grid gap-2">
          <button className={styles.btn_primary} type="button">Terbitkan</button>
          <button className={styles.btn_outline_primary} type="button">Edit</button>
        </div>
      </div>
    </div>
  )
}

export default CardPrice