
const HeaderBar = ({tittle}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm p-3 mb-lg-5 mb-3 bg-body rounded">
        <div className="container">
            <div className="navbar-brand align-self-center" href="#">
                <div className="bg-purple p-3" style={{ width: "80px", }} />
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