Feature('Ynov Nantes');

Scenario('Test Ynov Nantes Land Page', ({ I }) => {
    // Load Ynov Nantes website
    console.log('Load Ynov Nantes website');
    I.amOnPage('https://www.ynov-nantes.com/');
    I.waitForText('Ynov Nantes', 3);

    // Start search
    console.log('Start search');
    I.click('.search-cta>a');
    I.waitForText('Que recherchez-vous ?', 3);
    I.fillField('s', 'info');

    // Wait and see if element `Bachelor Informatique` exist
    console.log('Wait and see if element `Bachelor Informatique` exist');
    I.wait(5);
    I.see('Bachelor Informatique', '.tile-title');
});

// Bonus / Send a message to a friend
