'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pasteHTML = pasteHTML;

var _electron = require('electron');

var _toMarkdown = require('to-markdown');

var _toMarkdown2 = _interopRequireDefault(_toMarkdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function pasteHTML() {
  const html = _electron.clipboard.readHTML();
  let md = (0, _toMarkdown2.default)(html, {
    gfm: true,
    converters: [{
      filter: ['div', 'p', 'dt', 'dd', 'summary'],
      replacement(innerHTML) {
        return '\n' + innerHTML + '\n';
      }
    }, {
      filter: ['font', 'span', 'article', 'section', 'nav', 'button', 'main', 'footer', 'header', 'aside', 'details', 'u', 'samp', 'var', 'kbd', 'legend', 'mark', 'output', 'small', 'sub', 'sup'],
      replacement(innerHTML) {
        return innerHTML;
      }
    }, {
      filter: ['input', 'form', 'iframe', 'canvas', 'embed', 'select', 'rt', 'wbr'],
      replacement(innerHTML) {
        return '';
      }
    }]
  });
  md = stripHTMLTagsFromMarkdown(md);

  const cm = inkdrop.getActiveEditor().codeMirror;
  cm.replaceSelection(md);
  return true;
}

function stripHTMLTagsFromMarkdown(value) {
  const remark = require('unified')().use(require('remark-parse')).use(require('remark-stringify'), {
    bullet: '*',
    emphasis: '*',
    listItemIndent: '1',
    fences: true
  }).use(require('remark-strip-html'));
  return remark().processSync(value).toString().trimRight();
}