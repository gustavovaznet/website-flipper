//DOCS

//IMPORTING
import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { docsRoutes } from '../../components/MainNavigation/navRoutes';
import SideNavigation from '../../components/MainNavigation/SideNavigation';

//DOCS
const Docs = (props: RouteComponentProps) => {
  const { match } = props;
  return (
    <React.Fragment>
      <SideNavigation parentPath={match.path} routes={docsRoutes} />
      {docsRoutes.map((route, index) => {
        const Component = route.component;
        return (
          <Route
            path={`${match.path}${route.path}`}
            key={index}
            component={(props: RouteComponentProps) => (
              <Component
                {...props}
                parentPath={`${match.path}${route.path}`}
                title={route.title}
                routes={route.routes}
              />
            )}
          />
        );
      })}
    </React.Fragment>
  );
};

export default Docs;
