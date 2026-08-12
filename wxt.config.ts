import { defineConfig } from "wxt";
import tailwindcss from "@tailwindcss/vite";


// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/module-react", "@wxt-dev/auto-icons"],

  // manifest config
  manifest: {
    name: "YoutubeZen",
    description: "YoutubeZen is an extension to remove distractions.",
    version: "0.0.1",
    permissions: ["storage", "tabs"],
  },

  // vite config
  vite: () => ({
    plugins: [tailwindcss()],
  }),

  // hooks
  hooks: {
    "build:manifestGenerated": (wxt, manifest) => {
      manifest.content_scripts ??= [];
      manifest.content_scripts.push({
        css: ["assets/reset.css"],
        matches: ["*://*.youtube.com/*"],
      });
    },
  },
});
