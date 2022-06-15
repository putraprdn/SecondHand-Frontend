import { LogIn } from "react-feather";

const LoginButton = () => {
    return (
        <div className=" align-self-center ml-auto" style={{ marginRight: "0px" }}>
            <a className="btn btn-primary d-flex" href="#">
                <LogIn size={20} className="align-self-center" />
                <div className="align-self-center text-capitalize ms-2">masuk</div>
            </a>
        </div>
    )
}

export default LoginButton