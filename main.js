require.ensure(['./a'], function(require) {
  var content = require('./a');
  document.open();
  document.write('<h1> abc ' + content + '</h1>');
  document.close();
});
