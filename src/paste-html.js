import { clipboard } from 'electron'
import { html2markdown } from 'inkdrop'

export function pasteHTML () {
  const html = clipboard.readHTML()
  const md = html2markdown(html)
  const cm = inkdrop.getActiveEditor().codeMirror
  cm.replaceSelection(md)
  return true
}
