import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, Cart, Error404 } from 'pages';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="*" component={Error404} />
    </Switch>
  );
}
