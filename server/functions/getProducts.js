function getProducts(arr, id) {
    if (!id) return arr
    return arr.filter(product => product.id.includes(id))
}

module.exports = getProducts