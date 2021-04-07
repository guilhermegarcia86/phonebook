const router = require('express').Router()
const InMemoryRepository = require('../repository/in_memory_repository.js')
const MongoRepository = require('../repository/mongo_repository.js')
const Service = require('../service')
const service = new Service(new MongoRepository('mongodb://localhost:27017/phonebook'))
//const service = new Service(new InMemoryRepository())

router.param('name', (req, res, next, name) => {
    req.name_from_param = name
    next()
})

router.post('/', async (req, res) => {
    const contact = req.body

    service.create(contact)

    res.status(201).json(contact)
})

router.get('/health', (req, res) => {

    res.status(200).json({status: "Ok"})
})

router.get('/:name', async (req, res) => {

    const id = req.name_from_param

    const result = await service.getById(id)
    if(result !== undefined){
        res.status(200).json(result)
        return
    }
    
    res.sendStatus(204)
    
})

router.get('/', async (req, res) => {

    const result = await service.getAll()

    if(result.length > 0){
        res.status(200).json(result)
        return
    }

    res.sendStatus(204)
    
})

router.put("/:id", async (req, res) => {

    const id = req.params.id
    const body = req.body

    const result = await service.put(id, body)

    res.status(200).json(result)
})

router.delete("/:id", async (req, res) => {

    const id = req.params.id

    service.remove(id)

    res.sendStatus(204)
})

router.options('/', (req, res) => {
    res.set('Access-Control-Allow-Methods', 'GET, POST')
    res.set('Access-Control-Allow-Headers', 'Content-Type')
    res.status(204)
    res.end()
})

module.exports = router