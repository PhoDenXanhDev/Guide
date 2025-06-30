import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import { useState } from "react";

import styles from "./index.module.css";

function ServerInfo() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
    }
  };

  return (
    <div className={styles.serverInfo}>
      <div className={styles.serverDetail}>
        <span className={styles.serverLabel}>Server IP:</span>
        <div className={styles.ipContainer}>
          <span className={styles.serverIp}>mc.pdxmc.io.vn</span>
          <button
            className={styles.copyButton}
            onClick={() => copyToClipboard('mc.pdxmc.io.vn')}
            title="Copy server IP"
          >
            {copied ? '✓' : '⧉'}
          </button>
        </div>
      </div>
      <div className={styles.serverDetail}>
        <span className={styles.serverLabel}>Phiên bản:</span>
        <span className={styles.serverVersion}>1.21.4 trở lên</span>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.buttons}>
          <Link
            className={styles.docButton}
            to="/docs/intro">
            Xem Hướng Dẫn
          </Link>
        </div>
        <ServerInfo />
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Hướng dẫn chơi tại PDXMC"
    >
      <HomepageHeader />
    </Layout>
  );
}
