var packages = require('../../../lib/resources/packages');

module['exports'] = function npmErrored (opts, cb) {
  var $ = this.$;
  function npmLink (m) {
    return '<a href="https://npmjs.org/package/' + m + '">' + m + '</a>'
  };
  packages.all({ status: 'errored' }, function(err, results){
    if (err) {
      return res.end(err.message);
    }
    results = results.sort();
    results.forEach(function(m){
      var parts = m.split('@');
      $('.errored').append('<tr><td>' + npmLink(parts[0]) + '</td><td>' + parts[1] + '</td></tr>')
    });
    if (results.length === 0) {
      $('.errored').remove();
      $('.status').html('No packages errored.');
    }
    cb(null, $.html());
  });
};