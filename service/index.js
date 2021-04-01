const Contact = require('../model')

class Service{

    constructor(repository){
        this.repository = repository
    }

    create(body){
        this.repository.insert(body)
    }
    
    getById(id){
        return this.repository.selectById(parseInt(id, 2))
    }
    
    getAll(){
        return this.repository.selectAll()
    }
    
    put(id, body){
        return this.repository.update(parseInt(id, 2), body)
    }
    
    remove(id){
        this.repository.remove(parseInt(id, 2))
    }

}

module.exports = Service