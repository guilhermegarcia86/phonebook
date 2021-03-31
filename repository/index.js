let _data = []

exports.insert = (contact) => {
    _data.push(contact)
}

exports.selectAll = () => {
    return _data
}

exports.selectById = (id) => {
    return _data.find(c => c.id === id)
}

exports.update = (id, contact) => {

    const elementId = _data.findIndex(element => element.id === id);
    contact.id = id

    const updateContact = Object.assign(_data[elementId], contact)

    _data[elementId] = updateContact

    return _data[elementId]
}

exports.remove = (id) => {

    const index = _data.findIndex(element => element.id === id)

    _data.splice(index, 1)

}