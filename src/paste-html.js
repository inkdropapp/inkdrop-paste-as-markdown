import { clipboard } from 'electron'
import toMarkdown from 'to-markdown'

export function pasteHTML () {
  const html = clipboard.readHTML()
  let md = toMarkdown(html, {
    gfm: true,
    converters: [
      {
        filter: ['div', 'p', 'dt', 'dd', 'summary'],
        replacement (innerHTML) {
          return '\n' + innerHTML + '\n'
        }
      },
      {
        filter: ['font', 'span', 'article', 'section', 'nav', 'button', 'main', 'footer', 'header', 'aside', 'details', 'u', 'samp', 'var', 'kbd', 'legend', 'mark', 'output', 'small', 'sub', 'sup'],
        replacement (innerHTML) {
          return innerHTML
        }
      },
      {
        filter: ['input', 'form', 'iframe', 'canvas', 'embed', 'select', 'rt', 'wbr'],
        replacement (innerHTML) {
          return ''
        }
      }
    ]
  })
  md = stripHTMLTagsFromMarkdown(md)

  const cm = inkdrop.getActiveEditor().codeMirror
  cm.replaceSelection(md)
  return true
}

function stripHTMLTagsFromMarkdown (value) {
  const remark = require('unified')()
    .use(require('remark-parse'))
    .use(require('remark-stringify'), {
      bullet: '*',
      emphasis: '*',
      listItemIndent: '1',
      fences: true
    })
    .use(require('remark-strip-html'))
  return remark().processSync(value).toString().trimRight()
}
