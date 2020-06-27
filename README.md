# mathdown
Simple markdown-it / AsciiMath editor.

## syntax
Wrap inline math with `$$`, and multiline math with `$$$`. Read about [MarkDown here](https://spec.commonmark.org/current/)
and about [AsciiMath here](http://asciimath.org/).

## shortcuts
Press `Ctrl+S` to download markdown, `Ctrl+H` to download HTML + MathML, and `Ctrl+P` to print or download as PDF.
Open markdown files with `Ctrl+O`, if the file has `.css` in it's name will be loaded as a theme. This can be
reset with `Ctrl+N`. Create a new file with `Ctrl+N`.

## themes
Themes are imported as simple css files. Modify the textarea on the left as `.textarea`, and the output on the right
as `.markdown-body`, or the entire document at once. For example, [dracula-css](https://github.com/gkroon/dracula-css)
works out of the box!

Note: By default, some GitHub themed css elements are used even if a theme is on. Toggle this with `Ctrl+G`.