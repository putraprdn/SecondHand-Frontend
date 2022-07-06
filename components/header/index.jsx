import { useRouter } from "next/router"

const HeaderBar = ({tittle}) => {

    const router = useRouter()

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm p-3 mb-lg-5 mb-3 bg-body rounded">
        <div className="container">
            <div className="navbar-brand align-self-center">
                <div className="bg-purple p-3" style={{ width: "80px", }} onClick={() => router.push('/dashboard')}/>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <h6>{tittle}</h6>
                </li>
            </ul>
            <div style={{width:"100px"}}> </div>
        </div>
    </nav >
  )
}

export default HeaderBar