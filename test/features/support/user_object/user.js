const faker = require('faker');

module.exports = class User {
    constructor() {
        this.firstname = faker.name.firstName();
        this.lastname = faker.name.lastName();
        this.email = faker.internet.email();
        this.pass = faker.internet.password()
    }
}