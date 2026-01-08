import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/hackathon-/docs',
    component: ComponentCreator('/hackathon-/docs', '73f'),
    routes: [
      {
        path: '/hackathon-/docs',
        component: ComponentCreator('/hackathon-/docs', 'ca0'),
        routes: [
          {
            path: '/hackathon-/docs',
            component: ComponentCreator('/hackathon-/docs', '5c9'),
            routes: [
              {
                path: '/hackathon-/docs/accessibility',
                component: ComponentCreator('/hackathon-/docs/accessibility', '484'),
                exact: true
              },
              {
                path: '/hackathon-/docs/capstone/',
                component: ComponentCreator('/hackathon-/docs/capstone/', '6a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hackathon-/docs/intro',
                component: ComponentCreator('/hackathon-/docs/intro', 'fe7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hackathon-/docs/module-1/',
                component: ComponentCreator('/hackathon-/docs/module-1/', '217'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hackathon-/docs/module-1/chapter-1',
                component: ComponentCreator('/hackathon-/docs/module-1/chapter-1', 'aba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hackathon-/docs/module-1/chapter-2',
                component: ComponentCreator('/hackathon-/docs/module-1/chapter-2', 'ca2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hackathon-/docs/module-1/chapter-3',
                component: ComponentCreator('/hackathon-/docs/module-1/chapter-3', '765'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hackathon-/docs/module-2/',
                component: ComponentCreator('/hackathon-/docs/module-2/', 'ef0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hackathon-/docs/module-2/chapter-1',
                component: ComponentCreator('/hackathon-/docs/module-2/chapter-1', 'b8e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hackathon-/docs/module-2/chapter-2',
                component: ComponentCreator('/hackathon-/docs/module-2/chapter-2', 'ffd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hackathon-/docs/module-2/chapter-3',
                component: ComponentCreator('/hackathon-/docs/module-2/chapter-3', 'ff0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hackathon-/docs/module-3/',
                component: ComponentCreator('/hackathon-/docs/module-3/', '4e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hackathon-/docs/module-3/chapter-1',
                component: ComponentCreator('/hackathon-/docs/module-3/chapter-1', '17b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hackathon-/docs/module-3/chapter-2',
                component: ComponentCreator('/hackathon-/docs/module-3/chapter-2', '522'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hackathon-/docs/module-3/chapter-3',
                component: ComponentCreator('/hackathon-/docs/module-3/chapter-3', 'df6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hackathon-/docs/module-4/',
                component: ComponentCreator('/hackathon-/docs/module-4/', '733'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hackathon-/docs/module-4/chapter-1',
                component: ComponentCreator('/hackathon-/docs/module-4/chapter-1', '8b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hackathon-/docs/module-4/chapter-2',
                component: ComponentCreator('/hackathon-/docs/module-4/chapter-2', '043'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/hackathon-/docs/module-4/chapter-3',
                component: ComponentCreator('/hackathon-/docs/module-4/chapter-3', 'aa1'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/hackathon-/',
    component: ComponentCreator('/hackathon-/', 'cde'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
