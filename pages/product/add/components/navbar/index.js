import Logo from "./components/logo";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-sm p-3 mb-5 bg-body rounded">
            <div className="container">
                <div className="d-flex">
                    <div className="navbar-brand align-self-center" href="#">
                        <Logo />
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default NavBar;