const router = require('express').Router()
const {create, getById, getAll, remove, put} = require('../service')

router.post('/', (req, res) => {
    const contact = req.body

    create(contact)

    res.status(201).json(contact)
})

router.get('/:id', (req, res) => {

    const id = req.params.id

    const result = getById(id)
    if(result !== undefined){
        res.status(200).json(result)
        return
    }
    
    res.sendStatus(204)
    
})

router.get('/', (req, res) => {

    const result = getAll()

    if(result.length > 0){
        res.status(200).json(result)
        return
    }

    res.sendStatus(204)
    
})

router.put("/:id", (req, res) => {

    const id = req.params.id
    const body = req.body

    const result = put(id, body)

    res.status(200).json(result)
})

router.delete("/:id", (req, res) => {

    const id = req.params.id

    remove(id)

    res.sendStatus(204)
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