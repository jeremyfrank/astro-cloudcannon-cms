module.exports = {
  paths: {
    data: 'src/data',
    static: 'public',
    uploads: 'public/uploads',
  },
  collections_config: {
    blog: {
      path: 'src/content/blog',
      output: true,
      url: '/blog/[slug]/',
      icon: 'article',
      preview: {
        image: 'heroImage',
      },
    },
  },
}
