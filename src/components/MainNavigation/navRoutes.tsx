//NAV ROUTES

//IMPORTING
import React from 'react';

//PAGES
const Home = React.lazy(() => import('../../pages/Home/Home'));
const Docs = React.lazy(() => import('../../pages/Docs/Docs'));
const Tutorial = React.lazy(() => import('../../pages/Tutorial/Tutorial'));
const MdxView = React.lazy(() => import('../MdxView/MdxView'));

//NAV ROUTE
export type NavRouteType = {
  path: string;
  title: string;
  component: typeof MdxView | typeof Home | typeof Docs | typeof Tutorial;
  routes?: NavRouteType[];
};

//MAIN NAV ROUTES
export const mainNavRoutes: NavRouteType[] = [
  {
    path: '/',
    title: 'Home',
    component: Home,
  },
  {
    path: '/docs',
    title: 'Docs',
    component: Docs,
  },
  {
    path: '/tutorial',
    title: 'Tutorial',
    component: Tutorial,
  },
];

//NAV ROUTE TYPES
export const docsRoutes: NavRouteType[] = [
  {
    path: `/introduction`,
    title: 'Introduction',
    component: MdxView,
    routes: [
      {
        title: 'What is Flipper Framework?',
        path: `/what-is-flipper-framework`,
        component: MdxView,
      },
      {
        title: 'Why use Flipper?',
        path: `/why-use-flipper`,
        component: MdxView,
      },
      {
        title: "Aditional information",
        path: `/aditional-information`,
        component: MdxView,
      },
    ],
  },
  {
    title: 'Installation',
    path: '/installation',
    component: MdxView,
    routes: [
      {
        title: 'Requirements',
        path: `/requirements`,
        component: MdxView,
      },
      {
        title: 'How to install?',
        path: `/how-to-install`,
        component: MdxView,
      },
    ],
  },
  {
    title: 'Documentation',
    path: '/documentation',
    component: MdxView,
    routes: [
      {
        title: 'Manual',
        path: `/manual`,
        component: MdxView,
      },
    ],
  },
  {
    title: 'Support',
    path: '/support',
    component: MdxView,
    routes: [
      {
        title: 'Main questions',
        path: `/main-questions`,
        component: MdxView,
      },
      {
        title: 'Online support',
        path: `/online-support`,
        component: MdxView,
      },
    ],
  },
];
