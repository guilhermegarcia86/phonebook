const MongoClient = require('mongodb').MongoClient

class MongoRepository{

    constructor(connectionString){
        this.connectionString = connectionString
        this.contactCollection = null

        this._connect(this.connectionString)
    }

    _connect(connectionString){

        MongoClient.connect(connectionString, {useUnifiedTopology: true})
        .then(client => {
            console.log('Connected to Database')
            const db = client.db('phonebook')
            this.contactCollection = db.collection('contact')
        })
        .catch(error => {
            console.error(error)
            throw new Error(error)
        })
    
        return this.contactCollection

    }

    insert(contact){
        this.contactCollection.insertOne(contact)
        .then(result => console.log("Dados inseridos com sucesso", result.result))
        .catch(err => {throw new Error(err)})
    }

    async selectAll(){
        return await this.contactCollection.find().toArray()
    }

    async selectById(name){
        return await this.contactCollection.findOne({name: name})
    }

    async update(name, contact){
        return await this.contactCollection.findOneAndUpdate(
            {name: name},
            {
                $set: {
                    name: contact.name,
                    telephone: contact.telephone,
                    address: contact.address
                }
            },
            {
                upsert: true
            }    
        )
    }
    
    remove(name){
        this.contactCollection.deleteOne({name: name})
        .then(result => console.log(result))
        .catch(err => {throw new Error(err)})
    }
}

module.exports = MongoRepository