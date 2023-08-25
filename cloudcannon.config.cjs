module.exports = {
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
