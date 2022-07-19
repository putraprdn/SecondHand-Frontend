import ProductCard from "./components/ProductCard";

const ProductList = ({ product, categories, butIndex, search }) => {

    const productData = butIndex == -1 ? product : product.filter(item => item.categoryId == butIndex)

    return (
        <div className="row row-cols-1 row-cols-md-5 g-4 mt-1">
            {
                productData.filter(data => data.name.includes(search)).map((product, index) => {
                    return (
                        <ProductCard key={product.id} productId={product.id} productImage={product?.images[0]?.image} productName={product.name} productCategory={
                            categories.filter(category => category.id === product.categoryId).map((category, _) => {
                                return category.name
                            })
                        } productPrice={product.price} />
                    )
                })
            }
        </div>

    )
}

export default ProductList;