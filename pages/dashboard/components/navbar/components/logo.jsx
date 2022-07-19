import 'bootstrap/dist/css/bootstrap.css';
import { useRouter } from 'next/router';

const Logo = () => {

    const router = useRouter();

    const handleClick = () => {
        router.push('/dashboard');
    }

    return (
        <div className="bg-purple p-3" style={{ width: "80px", }} onClick={() => handleClick()}/>
    )
}

export default Logo;