import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "PDXMC Guide",
  tagline: "Hướng dẫn chơi tại PDXMC",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "PhoDenXanhDev", // Usually your GitHub org/user name.
  projectName: "Guide", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/PhoDenXanhDev/Guide",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "PDXMC Guide",
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Hướng Dẫn",
        },
        {
          href: "https://github.com/PhoDenXanhDev/Guide",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Hướng Dẫn",
          items: [
            {
              label: "Bắt Đầu",
              to: "/docs/intro",
            },
            {
              label: "Kỹ Năng",
              to: "/docs/category/các-kỹ-năng",
            },
            {
              label: "Công Thức",
              to: "/docs/category/công-thức-chế-tạo",
            },
          ],
        },
        {
          title: "Server",
          items: [
            {
              label: "IP: mc.pdxmc.io.vn",
              href: "#",
            },
            {
              label: "Phiên bản: 1.21.4+",
              href: "#",
            },
          ],
        },
        {
          title: "Cộng Đồng",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/PhoDenXanhDev/Guide",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PDXMC. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
