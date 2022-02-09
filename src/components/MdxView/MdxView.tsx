//MDX

//IMPORTING
import React from 'react';
import { Route, RouteComponentProps, withRouter } from 'react-router-dom';
import { makeStyles, Theme as AugmentedTheme, createStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Divider from '@material-ui/core/Divider';
import { NavRouteType } from '../MainNavigation/navRoutes';

//STYLES
const useStyles = makeStyles((theme: AugmentedTheme) =>
  createStyles({
    root: {
      margin: `${theme.marginFromMainNav} auto 0 auto`,
      display: 'block',
      width: '50%',
      justifyContent: 'center',
      fontFamily: 'Ubuntu',
    },
    activeRouteIndicator: {
      backgroundColor: '#8FBC8F',
    },
    tabLink: {
      textDecoration: 'none',
      color: theme.colors.textColors.light,
    },
  })
);

//MAIN TITLE
const StyledMainTitle = withStyles((theme: AugmentedTheme) => ({
  root: {
    color: theme.colors.textColors.light,
  },
}))(Typography);

//NAVIGATION SUB ROUTES
interface SubRoutesNavigationProps extends RouteComponentProps {
  routes: NavRouteType[];
  parentPath: string;
}

// SUB ROUTES NAVIGATION
const SubRoutesNavigation = (props: SubRoutesNavigationProps) => {
  const { routes, parentPath, history } = props;
  const [selectedTab, setSelectedTab] = React.useState(
    history.location.pathname
  );

  const classes = useStyles();

  const tabSelectionHandler = (
    event: React.ChangeEvent<{}>,
    newValue: string
  ) => {
    history.push(newValue);
  };

  return (
    <Paper elevation={0}>
      <Tabs
        value={selectedTab}
        onChange={tabSelectionHandler}
        classes={{ indicator: classes.activeRouteIndicator }}
        centered
      >
        {routes.map((route, index) => (
          <Tab
            key={index}
            value={`${parentPath}${route.path}`}
            label={route.title}
          />
        ))}
      </Tabs>
    </Paper>
  );
};

//SUB ROUTES
const SubRoutesNavigationWitRouter = withRouter(SubRoutesNavigation);

interface TempViewComponentProps extends RouteComponentProps {
  routes: NavRouteType[];
}

const TempViewComponent = (props: TempViewComponentProps) => {
  const { match, routes } = props;
  const route = routes.find(
    // @ts-ignore
    route => route.path === `/${match.params.subRoute}`
  );
  return <h1>{route ? route.title : '404'}</h1>;
};

interface MdxViewProps extends RouteComponentProps {
  title: string;
  routes?: NavRouteType[];
  parentPath: string;
}

const MdxView = (props: MdxViewProps) => {
  const { title, routes, parentPath } = props;

  const classes = useStyles();
  //STRUCTURE
  return (
    <div className={classes.root}>
      <div>
        <StyledMainTitle variant="h3">{title}</StyledMainTitle>
      </div>
      <Divider />
      {routes ? (
        <React.Fragment>
          <SubRoutesNavigationWitRouter
            routes={routes}
            parentPath={parentPath}
          />
          <Route
            path={`${parentPath}/:subRoute`}
            exact
            component={(props: RouteComponentProps) => (
              <TempViewComponent {...props} routes={routes} />
            )}
          />
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default MdxView;
