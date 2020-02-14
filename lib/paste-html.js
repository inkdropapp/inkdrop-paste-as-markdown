"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pasteHTML = pasteHTML;

var _electron = require("electron");

var _inkdrop = require("inkdrop");

function pasteHTML() {
  const html = _electron.clipboard.readHTML();

  const md = (0, _inkdrop.html2markdown)(html);
  const {
    cm
  } = inkdrop.getActiveEditor();
  cm.replaceSelection(md);
  return true;
}