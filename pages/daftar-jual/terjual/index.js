import { LayoutDaftarJual, CardProduct, NotFound } from "../../../components"
import { useState } from "react"

const Terjual = () => {

  const [products, setProducts] = useState(null)

  return (
    <LayoutDaftarJual>      
      <div className="row g-3">
        {!products ? <NotFound content={'terjual'}/> : products.map((item, index) => {<CardProduct key={index} product={item} />})}
      </div>
    </LayoutDaftarJual>
  )
}

export default Terjual