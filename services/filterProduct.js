export const filterProductByAvailable = (product, status) => {
    return product.filter(item => item.isAvailable === status )
}

export const filterProductByName = (product, userName) => {
    return product.filter(item => item.createdBy === userName)
}

export const filterProductSold = (product, status) => {
    return product.filter(item => item.isSold === status )
}