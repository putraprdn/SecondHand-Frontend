import Logo from "./components/logo";
import SearchEngine from "./components/SearchEngine";
import LoginButton from "./components/LoginButton";
import IconButton from "./components/Icon";
import { useEffect, } from "react";

const NavBar = () => {

    const token = '';

    if (typeof window !== 'undefined') {
        // Perform localStorage action
        token = localStorage.getItem('token')
    }

    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-sm p-3 mb-lg-5 mb-3 bg-body rounded">
            <div className="container">
                <div className="navbar-brand align-self-center" href="#">
                    <Logo />
                </div>
                <SearchEngine />
                    <ul className="navbar-nav ms-md-auto flex-sm-row">
                        {!token ? 
                            <li className="nav-item">
                                <LoginButton />    
                            </li>
                          :
                            <IconButton />  
                        }
                        
                    </ul>
            </div>
        </nav >
    )
}

export default NavBar;