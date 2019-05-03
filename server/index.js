const express = require('express')
const products = require('./products')
const getProducts = require('./functions/getProducts')
const getProduct = require('./functions/getProduct')
const app = express()



app.get('/api/products', (req, res) => {
    if (req.query.id) {
        res.status(200).send(getProducts(products, req.query.id))
    }
    const productData = getProducts(products)
    res.status(200).send(productData)
})

app.get(`/api/product/:id`, getProduct)

const port = 3002

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})