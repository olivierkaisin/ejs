/*
 * Believe it or not, you can declare and use functions in EJS templates too.
 */

var ejs = require('../')
  , read = require('fs').readFileSync
  , join = require('path').join
  , path = join(__dirname, '/functions.ejs')
  , data = {
      users: [
        { name: 'Tobi', age: 2, species: 'ferret' }
      , { name: 'Loki', age: 2, species: 'ferret' }
      , { name: 'Jane', age: 6, species: 'ferret' }
      ]
    };

if (1) {
  var ret = ejs.compile(read(path, 'utf8'), {filename: path})(data);

  console.log(ret);
}
else {
  // Alternatively, you can use the renderFile() function. They should produce
  // the same result.
  ejs.renderFile(path, data, function (err, html) {
    if (err) {
      throw err;
    }
    console.log(html);
  });
}
