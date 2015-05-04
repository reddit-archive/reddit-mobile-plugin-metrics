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

      var loggedIn = !!window.bootstrap.user;

      var compactCookieValue = document.cookie.match(/\bcompact=(.+)\b/);
      var compact = !!(compactCookieValue &&
                      compactCookieValue.length > 1 &&
                      compactCookieValue[1] === 'true');

      ga('set', 'dimension2', loggedIn.toString());
      ga('set', 'dimension3', compact.toString());
    }
  },

  'compactToggle': function (compact) {
    ga('set', 'dimension3', compact.toString());
  },

  'vote': function (vote) {
    ga('send', 'event', 'vote', vote.get('direction'));
  },

  'comment': function (comment) {
    ga('send', 'event', 'comment', comment.get('text').length);
  },

  'search': function (query) {
    ga('send', 'event', 'search');
  },
};

export default events;
