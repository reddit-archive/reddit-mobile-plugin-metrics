import * as querystring from 'querystring';

import events from './events';
import Mutators from './mutators';

// Export the plugin interface (right now, just a register function that passes
// the app instance into a route builder.)
var core = {};

core.register = function(app, server) {
  var mutators = Mutators(app);

  for (var el in mutators) {
    app.registerMutators(el, mutators[el]);
  }

  for (var e in events) {
    app.on(e, events[e]);
  }
}

export default core;
