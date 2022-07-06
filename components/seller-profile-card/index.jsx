/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/SellerCardProfile.module.css'
import { useState, useEffect } from 'react'

const SellerCardProfile = ({user}) => {

  const [userDetail, setuserDetail] = useState({
    image : '/profile_default.png',
    name : 'user',
    city : 'city'
  })
  const [scr, setScr] = useState('/profile_default.png')

  const getUserDetail = (v) => {
    setuserDetail(v)
    setScr(v.image)
  }

  useEffect(() => {
    getUserDetail(user)
  }, )

  return (
    <div className='card'>
        <div className="d-flex flex-row align-items-center">
          <div className="p-3">
            <div>
              <img src={scr} alt="profile" className={styles.img_rounded} />
            </div>  
          </div>
          <div className="flex-grow-1">
            <div className="card-body ps-1">
              <h5 className="card-title m-0">{userDetail?.name == null ? 'Name': userDetail.name}</h5>
              <p className="card-text text-muted">{userDetail?.city == null ? 'City': userDetail.city}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SellerCardProfile
