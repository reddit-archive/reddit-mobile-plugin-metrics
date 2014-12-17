import * as React from 'react';
import { mutate, query } from 'react-mutator';

import GoogleAnalyticsFactory from './views/components/GoogleAnalytics'

function Mutators (app) {
  var GoogleAnalytics = GoogleAnalyticsFactory(app);

  function defaultLayoutMutator() {
    var el = this;
    var propertyId = app.getConfig('googleAnalyticsId');

    if (propertyId) {
      query(el, 'body').forEach(function(element) {
        element.props.children.splice(element.props.children.length, 0, <GoogleAnalytics propertyId={propertyId} />);
      });
    }

    return el;
  }

  return {
    'core/layouts/default': [
      defaultLayoutMutator,
    ],
  };
}

export default Mutators;
