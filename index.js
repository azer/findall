module.exports = findall;

function  findall (text, re) {
  var match, matched, result = [];

  while (match = re.exec(text)) {
    matched = true;
    result.push.apply(result, match.slice(1));
  };

  return !matched ? undefined : result;
}
