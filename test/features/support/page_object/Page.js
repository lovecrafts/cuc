/* eslint class-methods-use-this: 0 */
module.exports = class Page {
  open(path) {
    browser.url(path);
  }
};
