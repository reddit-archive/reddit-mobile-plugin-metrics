import * as querystring from 'querystring';

var events = {
  'route:start': function(req) {
    var fullUrl = req.url;

    if (req.query) {
      fullUrl += '?' + querystring.stringify(req.query);
    }

    if (global && global.ga) {
      ga('set', 'page', fullUrl);
      ga('send', 'pageview');
    }
  }
};

export default events;
