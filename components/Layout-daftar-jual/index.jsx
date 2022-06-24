import { Fragment } from "react"
import { Navbar, SellerCardProfile } from "../index"
import SideBar from "./sidebar";
import Link from 'next/link';


const LayoutDaftarJual = ({children}) => {

  return (
    <Fragment>
        <Navbar />    
        <main>
            <div className="container d-flex flex-column"> 
                <h5 className="fw-bold my-4">Daftar Jual Saya</h5>
                <div className="profile-Tag position-relative">
                    <SellerCardProfile />
                    <Link href="/profile/edit"><a className="btn btn-outline-primary position-absolute" style={{right:20, top:25}}> Edit </a></Link>
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