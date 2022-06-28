import { CardProduct, LayoutDaftarJual } from "../../../components"
import { useRouter } from "next/router"
import { Plus } from "react-feather"

const List = () => {
    
    const router = useRouter()
    const { name } = router.query
    console.log(name);

  return (
    <LayoutDaftarJual>
      <div className="row g-3">
        <div className="col-xl-3 col-md-4 col-lg-4 col-sm-6 col-xs-6">
            <div className="btn position-relative border border-2 br-10 border-dashed" style={{ width: "100%", height: "230px" }} onClick={() => router.push('/product/add', 'product') }>
                <div className="position-absolute top-50 start-50 translate-middle">
                    <Plus size={20} color="grey" />
                    <p className="text-muted">Tambah Produk</p>
                </div>
            </div>
        </div>
        <CardProduct />
      </div>
    </LayoutDaftarJual>
  )
}

export default List