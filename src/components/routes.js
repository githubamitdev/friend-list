import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';


const RedirectComponent = ({to = '/404'}) => <Redirect to={to} />;

const RouteWithSubRoutes = route => {
  return (
    <Route
      path={route.path}
      render={props => {
        return <route.component {...props} routes={route.routes} />;
      }}
    />
  );
};

const AuthRoute = route => {
    console.log(route);
  return (
        <Route
          path={route.path}
          render={props =>
            // route?.isAuth === true ? (
              <route.component {...props} routes={route.routes} />
            // ) : (
            //     // User can be redirected to login page
            //   <RedirectComponent to="/login" />
            // )
          }
        />
  );
};

const PreventAuthRoute = route => {
    return (<></>)
 // If it is Not autenticated Route or prevented URL then Make user stay on the same
};

const renderRoutes = routes => {
  return (
    <Switch>
      {routes.map(({auth, ...rest}, i) => {
        switch (auth) {
          case true: {
            return <AuthRoute key={i} {...rest} />;
          }

          case false: {
            return <PreventAuthRoute key={i} {...rest} />;
          }

          default: {
            return <RouteWithSubRoutes key={i} {...rest} />;
          }
        }
      })}

      <Route component={RedirectComponent} />
    </Switch>
  );
};

export default renderRoutes;

