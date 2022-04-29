const DB_URI = 'mongodb+srv://nairod49:QAgPScJzrLz0sYN3@cluster0.fmw0t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const mongoose = require('mongoose')
const ToDo = require('../models/toDoModel').ToDo

describe('Test Intégration MongoDB', function () {
    let connection
    let db
    let collection
    let todos

    beforeAll(async () => {
        connection = await mongoose.connect(DB_URI)
    })
    afterAll(async () => {
        await mongoose.disconnect()
    })

    describe('run todo done', () => {
        const todoData = {
            text: 'Test0000000000000000000000000000',
            done: false,
        }

        afterAll(async () => {
            // be sure we clean our data
            await ToDo.deleteOne({
                name: 'Test0000000000000000000000000000',
            })
        })

        it('should create a todo', async () => {
            const toDo = new ToDo(todoData)
            await toDo.save(toDo)
            const dbTodo = await ToDo.findOne({ text: todoData.text })
            expect(dbTodo.done).toBe(todoData.done)
        })

        it('should delete a todo', async () => {
            const toDo = await ToDo.findOne({ text: todoData.text })
            await toDo.deleteOne({ _id: toDo._id })
            const dbTodo = await ToDo.findOne({ text: todoData.text })
            expect(dbTodo).toBe(null)
        })

    })
})
