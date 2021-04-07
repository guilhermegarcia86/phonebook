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
    
    selectById(name){
        return this._data.find(c => c.name === name)
    }
    
    update(name, contact){
    
        const elementId = this._data.findIndex(element => element.name === name);
    
        const updateContact = Object.assign(this._data[elementId], contact)
    
        this._data[elementId] = updateContact
    
        return this._data[elementId]
    }
    
    remove(name){
    
        const index = this._data.findIndex(element => element.name === name)
    
        this._data.splice(index, 1)
    
    }
}

module.exports = InMemoryRepository