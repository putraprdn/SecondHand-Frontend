import { Fragment } from "react"
import { NavBar, SellerCardProfile } from "../index"
import SideBar from "./sidebar";
import Link from 'next/link';

import { useSelector } from "react-redux";
import { selectUser } from "../../redux/slices/userSilce";

const LayoutDaftarJual = ({children}) => {

    const userPID = useSelector(selectUser)

  return (
    <Fragment>
        <NavBar />    
        <main>
            <div className="container d-flex flex-column"> 
                <h5 className="fw-bold mb-4">Daftar Jual Saya</h5>
                <div className="profile-Tag position-relative">
                    <SellerCardProfile user={userPID}/>
                    <Link href="/profile/edit"><a className="btn btn-outline-primary position-absolute" style={{right:20, top:23, padding:"5px 20px"}}> Edit </a></Link>
                </div>
                <div className="row">
                    <div className="col-md-3 sidebar">
                        <SideBar />
                    </div>
                    <div className="col-md-9 content">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    </Fragment>
  )
}

export default LayoutDaftarJual