import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "SDN Launch Control Documentation",
  tagline: "Comprehensive SDN management platform documentation",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://taurine-technology.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment at root, it should be '/'
  baseUrl: "/",

  // GitHub pages deployment config
  organizationName: "Taurine-Technology",
  projectName: "taurine-technology.github.io",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Versioning will be enabled automatically when tags are created
          // For now, docs are served at /docs/ without version prefix
          lastVersion: "current",
          versions: {
            current: {
              label: "Latest",
            },
          },
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "SDN Launch Control",
      logo: {
        alt: "SDN Launch Control Logo",
        src: "img/logo.png",
      },
      items: [
        // {
        //   type: "docSidebar",
        //   sidebarId: "tutorialSidebar",
        //   position: "left",
        //   label: "Documentation",
        // },
        {
          type: "docsVersionDropdown",
          position: "right",
        },
        {
          href: "https://github.com/Taurine-Technology/sdn-launch-control",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Getting Started",
              to: "/docs/getting-started/installation",
            },
            {
              label: "Examples",
              to: "/docs/examples/basic-setup",
            },
            {
              label: "Documentation",
              to: "/docs/documentation/architecture",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "GitHub Repository",
              href: "https://github.com/Taurine-Technology/sdn-launch-control",
            },
            {
              label: "Support",
              href: "mailto:keeganwhite@taurinetech.com",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "License",
              href: "https://github.com/Taurine-Technology/sdn-launch-control/blob/main/LICENSE",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Taurine Technology.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        "bash",
        "python",
        "typescript",
        "javascript",
        "json",
        "yaml",
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
