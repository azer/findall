## findall

finds all regex matchings

```js
var findall = require('findall')

var text = 'lorem $ipsum sit $dolor amet'

findall(text, /($\w+)/g)
['$ipsum', '$dolor']
```

See `test.js` for more info.

## Install

```bash
$ npm install azer/findall
```

## Warning

Never pass a variable that points an expression:

```js
var re = /this wont work!!/

findall('never do this', re)
```

Always pass the regex itself.

```js
findall('this will work', /whatever regex is/g)
```
