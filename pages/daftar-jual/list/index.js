import { LayoutDaftarJual } from "../../../components"
import { useRouter } from "next/router"

const List = () => {
    
    const router = useRouter()
    const { name } = router.query
    console.log(name);

  return (
    <LayoutDaftarJual>      
            <h1>Daftar {name}</h1>
    </LayoutDaftarJual>
  )
}

export default List