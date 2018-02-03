const Page =  require('./Page');

module.exports = class TodoPage extends Page {

    get input() {
        return browser.element('[aria-label="New Todo Text"]');
    }

    get addButton() {
        return browser.element('[aria-label="Add Todo"]');
    }

    get lastTodo() {
        return browser.element('[aria-label="Todos"] li:last-child');
    }

    open() {
        super.open('/');
    }

    addTodo(text) {
        this.input.setValue(text)
        this.addButton.click()
    }

}