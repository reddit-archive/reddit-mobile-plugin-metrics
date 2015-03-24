import querystring from 'querystring';

var events = {
  'route:start': function(ctx) {
    var fullUrl = ctx.path;

    if (ctx.query) {
      fullUrl += '?' + querystring.stringify(ctx.query);
    }

    if (global && global.ga) {
      ga('set', 'page', fullUrl);
      ga('send', 'pageview');
    }
  }
};

export default events;
