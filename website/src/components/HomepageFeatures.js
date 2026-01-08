import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Physical AI Foundations',
    description: (
      <>
        Learn the fundamentals of Physical AI and how it differs from traditional digital AI systems.
        Understand the transition from virtual intelligence to embodied systems.
      </>
    ),
  },
  {
    title: 'Humanoid Robotics',
    description: (
      <>
        Explore why humanoid form factors matter in robotics research and how they enable
        advanced interaction with the physical world.
      </>
    ),
  },
  {
    title: 'Real-World Applications',
    description: (
      <>
        Discover practical applications of Variable Level of Autonomy (VLA) systems
        and how robots perceive and interact with their environment.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <div className={styles.featureIcon}>
          <svg className={styles.featureSvg} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="#f0f8ff"/>
            <circle cx="100" cy="80" r="30" fill="#4682b4"/>
            <rect x="70" y="110" width="60" height="70" fill="#5a9bd5"/>
            <rect x="60" y="140" width="20" height="40" fill="#3a7ca5"/>
            <rect x="120" y="140" width="20" height="40" fill="#3a7ca5"/>
            <text x="100" y="190" font-family="Arial" font-size="12" text-anchor="middle" fill="#333">AI</text>
          </svg>
        </div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}