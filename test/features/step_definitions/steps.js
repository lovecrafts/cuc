const { Given, When, Then, setDefaultTimeout } = require('cucumber');

Given('there is already {int} todo', async function (int) {
    await this.TodoPage.open()
});

When('I add {string}', async function (string) {
    await this.TodoPage.addTodo(string);
});

Then('the text of the last todo should be {string}', async function (string) {
    assert.equal(this.TodoPage.recentEntry.getText(), string);
});

Given('I am an anon user', async function () {
    this.User = await new this.User();
    console.log(this.User);
});
