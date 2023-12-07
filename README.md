> [!IMPORTANT]
> This plugin is now a built-in feature of Inkdrop. You don't need to install it anymore as of v5.6.0.

# paste-as-markdown plugin for Inkdrop

It enables you to paste HTML as Markdown from clipboard.
It'd be useful for copy-and-pasting formatted texts from browsers.

## Install

```sh
ipm install paste-as-markdown
```

## Usage

Press _cmd/ctrl + alt + shift + v_ or select _"Plugins" → "Paste as Markdown"_ from menu to run this plugin's command `paste-as-markdown`.
It converts HTML into Markdown and paste it into the editor.
For example, when you copy below HTML on your browser:

```html
<ul>
  <li>list 1</li>
  <li>list 2</li>
</ul>
```

It will be pasted as:

```markdown
- list 1
- list 2
```
