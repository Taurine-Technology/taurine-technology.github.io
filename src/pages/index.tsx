import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          SDN Launch Control
        </Heading>
        <p className="hero__subtitle">Comprehensive Software-Defined Networking Management Platform</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started/installation">
            Get Started
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/examples/basic-setup">
            View Examples
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): React.ReactElement {
  return (
    <Layout
      title="Home"
      description="SDN Launch Control - Comprehensive Software-Defined Networking management platform documentation">
      <HomepageHeader />
      <main>
        <div className="container margin-vert--lg">
          <div className="row">
            <div className="col col--4">
              <div className="card">
                <div className="card__header">
                  <Heading as="h3">Getting Started</Heading>
                </div>
                <div className="card__body">
                  <p>Learn how to install and configure SDN Launch Control for your network.</p>
                  <Link to="/docs/getting-started/installation">Get Started →</Link>
                </div>
              </div>
            </div>
            <div className="col col--4">
              <div className="card">
                <div className="card__header">
                  <Heading as="h3">Examples</Heading>
                </div>
                <div className="card__body">
                  <p>Step-by-step tutorials and examples for common use cases.</p>
                  <Link to="/docs/examples/basic-setup">View Examples →</Link>
                </div>
              </div>
            </div>
            <div className="col col--4">
              <div className="card">
                <div className="card__header">
                  <Heading as="h3">Guides</Heading>
                </div>
                <div className="card__body">
                  <p>Detailed technical documentation and architecture guides.</p>
                  <Link to="/docs/guides/architecture">Read Guides →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
