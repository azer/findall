var findall = require('./');

it('returns an array if any matches found', function(){
  var text = 'lorem $ipsum sit $dolor amet';

  expect(findall(text, /(\$\w+)/g)).to.deep.equal(['$ipsum', '$dolor']);
});

it('returns undefined if no matches found', function(){
  var text = 'lorem $ipsum sit $dolor amet';

  expect(findall(text, /(\#\w+)/g)).to.not.exist;
  expect(findall(text, /(\#\w+)/)).to.not.exist;
});

it('returns true if no groups found but matched', function(){
  var text = 'lorem $ipsum sit $dolor amet';
  expect(findall(text, /\$\w+/g)).to.deep.equal(true);
});

it('returns one result if global flag isnt specified', function(){
  var text = 'lorem $ipsum sit $dolor amet';

  expect(findall(text, /(\$\w+)/)).to.deep.equal(['$ipsum']);
});
