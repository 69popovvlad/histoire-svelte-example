/// <reference types="histoire" />

import { defineConfig } from "vite";
import { sveltekit } from '@sveltejs/kit/vite';
// import { svelte } from "@sveltejs/vite-plugin-svelte";
import { HstSvelte } from "@histoire/plugin-svelte";

export default defineConfig({
  plugins: [sveltekit()],
  histoire: {
    setupFile: "src/histoire-setup.ts",
    plugins: [HstSvelte()],
    storyMatch: ["src/stories/**/*.story.svelte"],
    tree: {
      file: "path",
    },
  },
});
