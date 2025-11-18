import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: "category",
      label: "Getting Started",
      items: ["getting-started/prerequisites", "getting-started/installation"],
    },
    {
      type: "category",
      label: "Examples",
      items: [
        "examples/basic-setup",
        "examples/advanced-network-configuration",
      ],
    },
    {
      type: "category",
      label: "Documentation",
      items: ["documentation/architecture", "documentation/wiki"],
    },
  ],
};

export default sidebars;
