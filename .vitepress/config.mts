import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hostel Perceptions",
  description: "More than just a bed, it's a story to tell.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Locations",
        items: [
          { text: "Asia", link: "/asia" },
          { text: "Europe", link: "/europe" },
          { text: "North America", link: "/north-america" },
          { text: "South America", link: "/south-america" },
          { text: "Africa", link: "/africa" },
          { text: "Oceania", link: "/oceania" },
        ],
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025-present",
    },

    sidebar: {
      "/asia": [
        {
          text: "China",
          items: [
            { text: "Beijing", link: "/asia/cn/beijing" },
            { text: "Hong Kong", link: "/asia/cn/hong-kong" },
            { text: "Shanghai", link: "/asia/cn/shanghai" },
          ],
        },
        {
          text: "Japan",
          items: [
            { text: "Osaka", link: "/asia/jp/osaka" },
            { text: "Tokyo", link: "/asia/jp/tokyo" },
          ],
        },
        {
          text: "Singapore",
          items: [{ text: "Singapore", link: "/asia/sg/" }],
        },
        {
          text: "South Korea",
          items: [
            { text: "Busan", link: "/asia/kr/busan" },
            {
              text: "Jeju Island",
              link: "/asia/kr/jeju-island",
            },
            { text: "Seoul", link: "/asia/kr/seoul" },
          ],
        },
        {
          text: "Thailand",
          items: [
            { text: "Bangkok", link: "/asia/th/bangkok" },
            { text: "Chiang Mai", link: "/asia/th/chiang-mai" },
          ],
        },
        {
          text: "Vietnam",
          items: [
            { text: "Hanoi", link: "/asia/vn/hanoi" },
            { text: "Ho Chi Minh City", link: "/asia/vn/ho-chi-minh-city" },
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/dianliyang/hostel-perceptions",
      },
    ],
  },
});
