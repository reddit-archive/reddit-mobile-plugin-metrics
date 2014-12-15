// Export the plugin interface (right now, just a register function that passes
// the app instance into a route builder.)
var core = {};

core.register = function(app, server) {
  app.on('route:start', function(req) {
    console.log(req);
  });
}

export default core;
