import styles from '../../styles/SellerCardProfile.module.css'

const SellerCardProfile = () => {
  return (
    <div className='card'>
        <div className="d-flex flex-row align-items-center">
          <div className="p-3">
            <div className={styles.img_rounded}>
                test
            </div>  
          </div>
          <div className="flex-grow-1">
            <div className="card-body ps-1">
              <h5 className="card-title m-0">Card title</h5>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SellerCardProfile
