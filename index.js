var $ = require('jquery');

$.getJSON('hello.json', function(data) {
  $('#container').append(data.greeting);
});
