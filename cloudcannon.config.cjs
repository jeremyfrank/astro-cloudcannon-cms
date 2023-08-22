module.exports = {
  source: 'src',
  collections_config: {
    blog: {
      path: 'content/blog',
      output: true,
      url: '/blog/[slug].html',
      icon: 'article',
    },
  },
}
