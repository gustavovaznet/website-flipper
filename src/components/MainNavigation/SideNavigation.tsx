//SIDE NAVIGATION

//IMPORTING
import React from 'react';
import { makeStyles, Theme as AugmentedTheme, createStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import { NavRouteType } from './navRoutes';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

//STYLES
const useStyles = makeStyles((theme: AugmentedTheme) =>
  createStyles({
    drawer: {
      width: theme.sideBarWidth,
      maxWidth: theme.sideBarWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: theme.sideBarWidth,
      maxWidth: theme.sideBarWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    navLink: {
      textDecoration: 'none',
      color: '#8FBC8F',
      fontWeight: 500,
    },
    navLinkActive: {
      color: theme.colors.textColors.light,
    },
    treeItemLabel: {
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: 'transparent',
      },
      '&:focus': {
        backgroundColor: 'transparent',
      },
    },
  })
);

//SUB ROUTES
const mapSubRoutes = (
  routes: NavRouteType[],
  parentPath: string,
  classes: Record<string, string>
) => {
  return routes.map((route, index) => (
    <React.Fragment key={index}>
      {route.routes ? (
        <TreeItem
          nodeId={route.path}
          classes={{ label: classes.treeItemLabel }}
          label={
            <NavLink
              className={classes.navLink}
              activeClassName={classes.navLinkActive}
              to={`${parentPath}${route.path}`}
              exact
            >
              {route.title}
            </NavLink>
          }
        >
          {mapSubRoutes(route.routes, `${parentPath}${route.path}`, classes)}
        </TreeItem>
      ) : (
        <TreeItem
          nodeId={route.path}
          classes={{ label: classes.treeItemLabel }}
          label={
            <NavLink
              className={classes.navLink}
              activeClassName={classes.navLinkActive}
              to={`${parentPath}${route.path}`}
              exact
            >
              {route.title}
            </NavLink>
          }
        />
      )}
    </React.Fragment>
  ));
};

//SIDE NAVIGATION
type SideNavigationPropsType = {
  routes: NavRouteType[] | undefined;
  parentPath: string;
};

//SIDE NAVIGATION
const SideNavigation = (props: SideNavigationPropsType) => {
  const { routes, parentPath } = props;

  const classes = useStyles();

  return (
    <Drawer
      open={true}
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      {routes ? (
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          expanded={routes.map(route => route.path)}
        >
          {mapSubRoutes(routes, parentPath, classes)}
        </TreeView>
      ) : null}
    </Drawer>
  );
};

export default SideNavigation;
