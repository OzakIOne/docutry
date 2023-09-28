module.exports = function friendsPlugin(context, options) {
  return {
    name: 'docusaurus-friends-plugin-global',
    async contentLoaded({ content, actions }) {
      const { setGlobalData, addRoute } = actions;
      // Create friends global data
      setGlobalData({ friendsTestReturn: ['Clement', 'Jeremy'] });

      // Add the '/friends' routes
      addRoute({
        path: '/staticfriends',
        component: '@site/src/components/Friends.js',
        exact: true,
      });
    },
  };
}
