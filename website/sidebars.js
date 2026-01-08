// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Module 1: Foundations of Physical AI & Embodied Intelligence',
      items: [
        'module-1/index',
        'module-1/chapter-1',
        'module-1/chapter-2',
        'module-1/chapter-3',
      ],
    },
    {
      type: 'category',
      label: 'Module 2: The Robotic Nervous System & Digital Body',
      items: [
        'module-2/index',
        'module-2/chapter-1',
        'module-2/chapter-2',
        'module-2/chapter-3',
      ],
    },
    {
      type: 'category',
      label: 'Module 3: Simulation, Perception & the AI Robot Brain',
      items: [
        'module-3/index',
        'module-3/chapter-1',
        'module-3/chapter-2',
        'module-3/chapter-3',
      ],
    },
    {
      type: 'category',
      label: 'Module 4: Intelligence in Action — VLA & Autonomous Systems',
      items: [
        'module-4/index',
        'module-4/chapter-1',
        'module-4/chapter-2',
        'module-4/chapter-3',
      ],
    },
    {
      type: 'category',
      label: 'Capstone: Practical Physical AI Applications',
      items: [
        'capstone/index',
      ],
    },
  ],
};

module.exports = sidebars;