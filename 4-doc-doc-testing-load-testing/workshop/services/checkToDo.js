const checkTodo = (body) => {
    if (!body || !body.text || body.test === '') {
        return false
    }
    return true
}

module.exports = checkTodo