const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

const menuSchema = mongoose.Schema ({
    title: {
        type: String,
        require: true
    },
    ingredients: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    }
})

const Menu = mongoose.model('Menu', menuSchema)

app.get('/api/products', async (req, res) => {
    const response = await Menu.find()
    res.send(response)
})

app.get('/api/products/:id', async (req, res) => {
    const {id} = req.params
    const target = await Menu.findById(id)
    res.send(target)
})

app.post('/api/products', async (req, res) => {
    const {title, ingredients, price, image, category} = req.body
    const newProduct = new Menu ({title: title, ingredients:ingredients, price:price, image: image, category:category})
    await newProduct.save()
    res.send(newProduct)
})

// app.put('/api/products/:id', async (req, res) => {
//     const {id} = req.params
//     const {title, ingredients, price, image, category} = req.body
//     const item = await Menu.findByIdAndUpdate(id, {...req.body})
//     res.send(item)
// })

app.delete('/api/products/:id', async (req, res) =>{
    const {id} = req.params
    await Menu.findByIdAndDelete(id)
    const items = await Menu.find()
    res.send(items)
})

mongoose.connect(process.env.CONNECTION_STRING)
.then(res => console.log('connected'))

app.listen(process.env.PORT, (req, res) => {
    console.log('api running on 8080 port')
})