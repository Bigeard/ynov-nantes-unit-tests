const checkToDo = require('../services/checkToDo.js')

describe('Test Unit Todo', function () {
    it('Check if todo creation have a text', function () {
        let param = { body: { text: '' } }
        expect(checkToDo(param)).toBe(false)

        param = { body: null }
        expect(checkToDo(param)).toBe(false)

        param = 'hello'
        expect(checkToDo(param)).toBe(false)

        param = { body: { text: 'Hello World' } }
        expect(checkToDo(param)).toBe(true)
    })
})
