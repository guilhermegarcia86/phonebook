const Contact = require('../model')
const {insert, selectAll, selectById, update, remove} = require('../repository')

exports.create = (body) => {
    insert(body)
}

exports.getById = (id) => {
    return selectById(parseInt(id, 2))
}

exports.getAll = () => {
    return selectAll()
}

exports.put = (id, body) => {
    return update(parseInt(id, 2), body)
}

exports.remove = (id) => {
    remove(parseInt(id, 2))
}