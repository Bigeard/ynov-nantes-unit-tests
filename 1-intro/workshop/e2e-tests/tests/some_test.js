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
    I.wait(3);
    I.see('Bachelor Informatique', '.tile-title');
});

// Bonus / Send a message to a friend
// Scenario('Test Send A Message To A Friend', ({ I }) => {
//     // Load Ynov Nantes website
//     console.log('Load Ynov Nantes website');
//     I.amOnPage('https://www.ynov-nantes.com/');
//     I.waitForText('Ynov Nantes', 3);

//     // Go to connetion
//     console.log('Go to connetion');
//     I.click('Extranet Ynov');

//     // Start connetion
//     I.wait(3);
//     I.switchToNextTab();
//     I.closeOtherTabs();

//     I.fillField('#username', 'XXX@ynov.com');
//     I.fillField('#password', secret('XXX'));
//     I.click('Connexion');

//     I.waitForText('robin.bigeard@ynov.com', 30);
//     I.click('#cookiebar_close');

//     I.waitForText('YMatch (JobBoard, CVthèque)', 10);
//     I.click('YMatch (JobBoard, CVthèque)');
//     I.waitForText('Activités du jour', 10);
//     I.see('Aller faire les courses', '.open');
// });