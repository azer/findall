module.exports = findall;

function  findall (text, re) {
  var match, matched, result = [];

  if (!re.global) {
    match = text.match(re);
    result.push(match[1]);
    matched = true;
  } else {
    while (match = re.exec(text)) {
      matched = true;
      result.push.apply(result, match.slice(1));
    };
  }

  return !matched ? undefined : result;
}
