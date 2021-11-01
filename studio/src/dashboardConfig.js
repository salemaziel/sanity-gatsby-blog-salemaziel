export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "617faed16961c5298772bd43",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-salemaziel-studio",
                  apiId: "4e04a6ef-51a2-4f2e-9f0d-5535f65b57c8",
                },
                {
                  buildHookId: "617faed118edaaee74f0db32",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-salemaziel",
                  apiId: "d775110e-2fdc-4798-9d34-f6f53f6f8619",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/salemaziel/sanity-gatsby-blog-salemaziel",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-salemaziel.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
