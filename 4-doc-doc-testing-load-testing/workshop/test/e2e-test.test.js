Feature('Test e2e Todo')
const rand_string = Math.random().toString(16).substr(2, 8)

Scenario('Test scenario: add Todo in the view', ({ I }) => {
    // Load page localhost:5000
    I.amOnPage('http://localhost:5000')
    I.waitForText('What do I need to do?', 3)

    // Add text
    I.fillField('#newTODO', rand_string)
    I.click('#create-todo')

    // Wait and see if element `Hello World` exist
    I.wait(3)
    I.see(rand_string, '#todo-body')
})

Scenario('test scenario: done todo', ({ I }) => {
    // Load page localhost:5000
    I.amOnPage('http://localhost:5000')
    I.waitForText('What do I need to do?', 3)
    I.waitForText(rand_string, 3)

    // Done todo
    const id = locate('#todo-body tr').last().find('button')
    I.click(id)

    // Wait and see if element `Hello World` exist
    I.wait(3)
    I.see(rand_string, '#done-body')
})
