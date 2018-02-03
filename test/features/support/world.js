const { setWorldConstructor } = require('cucumber');
const TodoPage = require('./pageobjects/TodoPage');

chai = require('chai')
global.assert = chai.assert;
global.expect = chai.expect;

class World {
    constructor() {
        this.TodoPage = new TodoPage()
    }

}

setWorldConstructor(World);