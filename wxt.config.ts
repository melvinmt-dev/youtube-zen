import { defineConfig } from "wxt";
import tailwindcss from "@tailwindcss/vite";

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/module-react"],

  // manifest config
  manifest: {
    name: "YoutubeZen",
    description: "YoutubeZen is an extension to remove distractions.",
    version: "0.0.1",
  },

  

  // vite config
  vite: () => ({
    plugins: [tailwindcss()],
  }),
});
