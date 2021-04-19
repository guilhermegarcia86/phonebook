const MongoClient = require('mongodb').MongoClient

class MongoRepository{

    constructor(connectionString){
        this.connectionString = connectionString
        this.contactCollection = null
    }

    async init(){
        await this._connect(this.connectionString)
    }

    async _connect(connectionString){

        const client = await MongoClient.connect(connectionString, {useUnifiedTopology: true})
        const db = client.db('phonebook')
        this.contactCollection = db.collection('contact')

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

    async patch(name, contact){

        return await Object.entries(contact).map(([key, value]) => {
            let obj = {}
            obj[key] = value
            return this.contactCollection.findOneAndUpdate({name: name}, {$set: obj})
        })
    }
    
    remove(name){
        this.contactCollection.deleteOne({name: name})
        .then(result => console.log(result.result))
        .catch(err => {throw new Error(err)})
    }
}

module.exports = MongoRepository