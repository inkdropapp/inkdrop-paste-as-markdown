import { pasteHTML } from './paste-html'

module.exports = {
  activate() {
    this.subscription = inkdrop.commands.add(document.body, {
      'paste-as-markdown:paste': () => pasteHTML()
    })
  },

  deactivate() {
    this.subscription.dispose()
  }
}
