const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  basePath: isGithubPages ? "/Client_site" : "",
  assetPrefix: isGithubPages ? "/Client_site/" : "",
  turbopack: {
    root: __dirname,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
