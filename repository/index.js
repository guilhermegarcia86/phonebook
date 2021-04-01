class InMemoryRepository{

    constructor(){
        this._data = []
    }

    insert(contact){
        this._data.push(contact)
    }
    
    selectAll(){
        return this._data
    }
    
    selectById(id){
        return this._data.find(c => c.id === id)
    }
    
    update(id, contact){
    
        const elementId = this._data.findIndex(element => element.id === id);
        contact.id = id
    
        const updateContact = Object.assign(this._data[elementId], contact)
    
        this._data[elementId] = updateContact
    
        return this._data[elementId]
    }
    
    remove(id){
    
        const index = this._data.findIndex(element => element.id === id)
    
        this._data.splice(index, 1)
    
    }
}

module.exports = InMemoryRepository