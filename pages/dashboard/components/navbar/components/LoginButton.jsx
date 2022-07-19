import { LogIn } from "react-feather";
import Link from "next/link";

const LoginButton = () => {
    return (
        <div className=" align-self-center ml-auto" style={{ marginRight: "0px" }}>
            <Link href="/auth/login">
                <a className="btn btn-primary d-flex">
                    <LogIn size={20} className="align-self-center" />
                    <div className="align-self-center text-capitalize ms-2">masuk</div>
                </a>
            </Link>
        </div>
    )
}

export default LoginButton