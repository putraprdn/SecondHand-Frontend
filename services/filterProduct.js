export const filterProductByAvailable = (product) => {
    return product.filter(item => item.isAvailable === true)
}

export const filterProductByName = (product, userName) => {
    return product.filter(item => item.createdBy === userName)
}