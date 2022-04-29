export const checkTodo = (body) => {
    if (!body || !body.text || body.test === '') {
        return false
    }
    return true
}
