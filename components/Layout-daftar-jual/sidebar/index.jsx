import { Box, ArrowRight, Heart, DollarSign } from 'react-feather';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SideBar = () => {

    const router = useRouter();

  return (
    <div className="card p-4">
        <div className="">
            <h5 className="card-title">Kategori</h5>
        </div>
        <div className="list-group list-group-flush border-0">
            <Link href={{pathname: '/daftar-jual/list' }}>
                <a className={router.pathname == '/daftar-jual/list' ? "list-group-item pb-3 px-0 d-flex flex-row active-link" : "list-group-item pb-3 px-0 d-flex flex-row"}>
                    <Box className="me-3"/>
                    <span className="fw-500">Semua Produk</span>
                    <ArrowRight className="ms-auto"/>
                </a>
            </Link>
            <Link href={{pathname: '/daftar-jual/diminati' }}>
                <a className={router.pathname == '/daftar-jual/diminati' ? "list-group-item pb-3 px-0 d-flex flex-row active-link" : "list-group-item pb-3 px-0 d-flex flex-row"}>
                    <Heart className="me-3"/>
                    <span className="fw-500">Diminati</span>
                    <ArrowRight className="ms-auto"/>
                </a>
            </Link>
            <Link href={{pathname: '/daftar-jual/terjual' }}>
                <a className={router.pathname == '/daftar-jual/terjual' ? "list-group-item pb-3 px-0 d-flex flex-row active-link" : "list-group-item pb-3 px-0 d-flex flex-row"}>
                    <DollarSign className="me-3"/>
                    <span className="fw-500">Terjual</span>
                    <ArrowRight className="ms-auto"/>
                </a>
            </Link>
        </div>
    </div>
  )
}

export default SideBar