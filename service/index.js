const Contact = require('../model')

class Service{

    constructor(repository){
        this.repository = repository
    }

    create(body){
        this.repository.insert(body)
    }
    
    getById(name){
        return this.repository.selectById(name)
    }
    
    getAll(){
        return this.repository.selectAll()
    }
    
    put(name, body){
        return this.repository.update(name, body)
    }

    patch(name, body){
        return this.repository.patch(name, body);
    }
    
    remove(name){
        this.repository.remove(name)
    }

}

module.exports = Service