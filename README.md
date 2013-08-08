## findall

finds all regex matchings

```js
findall = require('findall')

text = 'lorem $ipsum sit $dolor amet'

findall(text, /($\w+)/)
['$ipsum', '$dolor']
```

See `test.js` for more info.

## Install

```bash
$ npm install findall
```

## Warning

Never pass a variable that points an expression:

```js
var re = /this wont work!!/

findall('never do this', re)
```

Always pass the regex itself.

```js
findall('this will work', /whatever regex is/)
```

![](http://distilleryimage8.ak.instagram.com/82a955eafd8411e281c522000a9e035f_6.jpg)
