const { setWorldConstructor } = require('cucumber');
const TodoPage = require('./page_object/TodoPage');
const User = require('./user_object/user');

chai = require('chai')
global.assert = chai.assert;
global.expect = chai.expect;

class World {
    constructor() {
        this.User = User;
        this.TodoPage = new TodoPage()
    }
}
setWorldConstructor(World);