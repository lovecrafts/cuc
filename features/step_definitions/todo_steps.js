const { Given, When, Then, setDefaultTimeout } = require('cucumber');

Given('there is already {int} todo', async function (int) {
    return new Promise(resolve => { resolve('pending') })
});

When('I add {string}', async function (string) {
    return new Promise(resolve => { resolve('pending') })
});

Then('the text of the {int}nd todo should be {string}', async function (int, string) {
    return new Promise(resolve => { resolve('pending') })
});