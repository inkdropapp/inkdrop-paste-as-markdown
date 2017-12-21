'use strict';

var _pasteHtml = require('./paste-html');

module.exports = {
  activate() {
    this.subscription = inkdrop.commands.add(document.body, {
      'paste-as-markdown': () => (0, _pasteHtml.pasteHTML)()
    });
  },

  deactivate() {
    this.subscription.dispose();
  }
};