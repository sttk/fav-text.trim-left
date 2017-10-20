'use strict';

var escape = require('@fav/text.escape').RegExpCharClass;

function trimLeft(source, chars) {
  if (chars == null) {
    return source.replace(/^\s+/g, '');
  }

  chars = escape(chars);

  var leadingRe = new RegExp('^[' + chars + ']+');

  return source.replace(leadingRe, '');
}

module.exports = trimLeft;
