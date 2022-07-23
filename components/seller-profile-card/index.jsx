/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/SellerCardProfile.module.css'
import { useState, useEffect } from 'react'

const SellerCardProfile = ({ user }) => {

  const [userDetail, setuserDetail] = useState({
    image : '/profile_default.png',
    name : 'user',
    city : 'city'
  })

  const getUserDetail = (v) => {
    setuserDetail({
      image : v === null ? '/profile_default.png' : v?.image,
      name : v?.name,
      city : v?.city
    })
    
  }

  useEffect(() => {
    getUserDetail(user)
  }, [user])

  return (
    <div className='card'>
        <div className="d-flex flex-row align-items-center">
          <div className="p-3">
            <div>
              <img src={userDetail?.image == null ? '/profile_default.png' : userDetail.image } alt="profile" className={styles.img_rounded} referrerPolicy="no-referrer"/>
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
