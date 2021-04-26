const Contact = require('../model')

class Service{

    constructor(repository){
        this.repository = repository
    }

    create(body){
        const contact = new Contact(body.name, body.telephone, body.address)
        this.repository.insert(contact)
    }
    
    async getById(name){
        const contact = await this.repository.selectById(name)

        return new Contact(contact.name, contact.telephone, contact.address)
    }
    
    async getAll(){
        const contactList = await this.repository.selectAll()

        const result = contactList.map((contact) => {
            return new Contact(contact.name, contact.telephone, contact.address)
        })

        return result
    }
    
    async put(name, body){
        const contact = await this.repository.update(name, new Contact(body.name, body.telephone, body.address))

        const result = contact.value

        return new Contact(result.name, result.telephone, result.address)
    }

    async patch(name, body){
        return this.repository.patch(name, body);
    }
    
    remove(name){
        this.repository.remove(name)
    }

}

module.exports = Service