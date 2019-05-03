const product = require('../products')

const getProduct = (req, res) => {
    const item = product.find(val => val.id === parseInt(req.query.id))
    if (!item) {
        return res.status(500).send('Item not in list')
    }
    res.status(200).send(item)
}

module.exports = getProduct