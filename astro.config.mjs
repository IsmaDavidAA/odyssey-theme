import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import lit from "@astrojs/lit";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const repositoryOwner = process.env.GITHUB_REPOSITORY_OWNER;
const pagesBase = isGithubActions && repository ? `/${repository}` : "/";
const pagesSite =
  isGithubActions && repositoryOwner
    ? `https://${repositoryOwner}.github.io`
    : "https://odyssey-theme.sapling.supply/";

// https://astro.build/config
export default defineConfig({
  site: pagesSite, // Used to generate sitemap/canonical URLs
  base: pagesBase,
  sitemap: true, // Generate sitemap (set to "false" to disable)
  integrations: [sitemap(), mdx(), lit(), icon()], // Add renderers to the config
});