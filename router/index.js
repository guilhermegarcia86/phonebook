const router = require('express').Router()
const {create, getBy, getAll, patch, deleteBy, put} = require('../service')

router.post('/', (req, res) => {
    const contact = req.body

    create(contact)

    res.status(201).json(pulgPag)
})

router.get('/:name', (req, res) => {

    const name = req.params.name

    const result = getBy(name)

    res.status(200).json(result)
})

router.get('/all', (req, res) => {

    const result = getAll()

    res.status(200).json(result)
})

router.patch("/:id", (req, res) => {

    const id = req.params.id
    const body = req.body

    patch(id, body)

    res.status(204)
})

router.put("/:id", (req, res) => {

    const id = req.params.id
    const body = req.body

    put(id, body)

    res.status(204)
})

router.delete("/:id", (req, res) => {

    const id = req.params.id

    deleteBy(id)

    res.status(204)
})

router.get('/health', (req, res) => {

    res.status(200).json({status: "Ok"})
})

router.options('/', (req, res) => {
    res.set('Access-Control-Allow-Methods', 'GET, POST')
    res.set('Access-Control-Allow-Headers', 'Content-Type')
    res.status(204)
    res.end()
})

module.exports = router