module.exports = ({ env }) => ({
  "strapi-algolia": {
    enabled: true,
    config: {
      apiKey: env("ALGOLIA_ADMIN_KEY"),
      applicationId: env("ALGOLIA_APP_ID"),
      contentTypes: [
        {
          name: "api::page.page",
          indexName: "page",
        },
        {
          name: "api::blog-inner.blog-inner", // Only index blog entries
          indexName: "blogInner",
          fields: ["title", "slug", "image"], // Specify the fields to index
        },
      ],
    },
  },
});
