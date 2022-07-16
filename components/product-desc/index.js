import styles from '../../styles/ProductDesc.module.css'

const ProductDesc = ({ productDesc}) => {
  return (
    <div className={styles.desc_boder}>
        <div className='head-desc'> 
            <h6>Deskripsi</h6>
        </div>
        <div className={styles.textdesc}>
            <p>{productDesc}</p>
        </div>
    </div>
  )
}

export default ProductDesc