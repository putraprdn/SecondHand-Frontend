import { Box, ArrowRight, Heart, DollarSign } from 'react-feather';
import Link from 'next/link';

const SideBar = () => {
  return (
    <div className="card p-4">
        <div className="">
            <h5 className="card-title">Kategori</h5>
        </div>
        <div className="list-group list-group-flush border-0">
            <Link href={{pathname: '/daftar-jual/list', query: {name: 'jimmi'}}}>
                <a className="list-group-item pb-3 px-0 d-flex flex-row">
                    <Box className="me-3"/>
                    <span className="fw-500">Semua Produk</span>
                    <ArrowRight className="ms-auto"/>
                </a>
            </Link>
            <Link href={{pathname: '/daftar-jual/diminati', query: {name: 'jimmi'}}}>
                <a className="list-group-item pb-3 px-0 d-flex flex-row">
                    <Heart className="me-3"/>
                    <span className="fw-500">Diminati</span>
                    <ArrowRight className="ms-auto"/>
                </a>
            </Link>
            <Link href={{pathname: '/daftar-jual/terjual', query: {name: 'jimmi'}}}>
                <a className="list-group-item pb-3 px-0 d-flex flex-row">
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