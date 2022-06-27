import { List, Bell, User, LogOut } from 'react-feather'
import Link from 'next/link'
import { useRouter } from 'next/router'

const IconButton = () => {

  const router = useRouter()
  const path = ['list', 'diminati', 'terjual']

  return (
    <>
        <li className="nav-item me-3">
          <Link href="/daftar-jual/list"><a className={router.pathname == path.map((v) => `/daftar-jual/${v}`) ? "nav-link active-link" : "nav-link" }><List /></a></Link>
        </li> 
        <li className="nav-item dropdown me-3 position-relative">
          <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <Bell />
          </a>
          <ul className="dropdown-menu dropdown-menu-end position-absolute" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown me-3 position-relative">
          <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <User />
          </a>
          <ul className="dropdown-menu dropdown-menu-end position-absolute" aria-labelledby="navbarDropdown">
            <li><Link  href="/profile/edit"><a className="dropdown-item"><User className="me-2"/> Edit</a></Link></li>
            <li><Link  href="/auth/login"><a className="dropdown-item text-danger"><LogOut className="me-2"/> Log Out</a></Link></li>
          </ul>
        </li>    
    </>
  )
}

export default IconButton