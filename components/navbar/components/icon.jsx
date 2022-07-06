import { List, Bell, User, LogOut } from 'react-feather'
import Notif from './Notif'
import Link from 'next/link'
import { useRouter } from 'next/router'

const IconButton = () => {

  const router = useRouter()
  const path = ['list', 'diminati', 'terjual']

  const onlogout = () => {
    localStorage.removeItem('token')
    router.push('/')
  }

  const onEdit= () => {
    router.push({
      pathname: '/profile/edit'
    })
  }
  
  return (
    <>
        <li className="nav-item me-3">
          <Link href="/daftar-jual/list"><a className={router.pathname == path.map((v) => `/daftar-jual/${v}`) ? "nav-link active-link" : "nav-link" }><List /></a></Link>
        </li> 
        <li className="nav-item dropdown me-3 position-relative">
          <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <Bell />
          </a>
          <ul className="dropdown-menu dropdown-menu-end position-absolute rounded-16 shadow notif" aria-labelledby="navbarDropdown">
            <li>
              <Notif />
            </li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown me-3 position-relative">
          <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <User />
          </a>
          <ul className="dropdown-menu dropdown-menu-end position-absolute rounded-16" aria-labelledby="navbarDropdown">
            <li>
              <a className="dropdown-item" onClick={() => onEdit()} style={{cursor:"pointer"}}><User className="me-2"/> Edit</a>
            </li>
            <li>
                <a className="mb-1 dropdown-item text-danger" onClick={() => onlogout()} style={{cursor:"pointer"}}><LogOut className="me-2"/> Log Out</a>
            </li>
          </ul>
        </li>    
    </>
  )
}

export default IconButton