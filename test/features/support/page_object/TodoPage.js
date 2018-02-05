const Page =  require('./Page');

function assertDiff(results) {
    results.forEach((result) => assert.ok(result.isExactSameImage));
}


module.exports = class TodoPage extends Page {

    get input() {
        return browser.element('input[name="taskName"]');
    }

    get submit() {
        return browser.element('button[type="submit"]');
    }

    get recentEntry() {
        browser.waitForText('#one div.row:first-child h3', 3000);
        return  browser.element('#one div.row:first-child h3');
    }

    open() {
        super.open('/');
    }

    addTodo(text) {
        this.input.setValue(text);
        let submit = this.submit;
        const report = browser.checkElement(this.submit.selector);
        submit.click();
        assertDiff(report);
    }
}