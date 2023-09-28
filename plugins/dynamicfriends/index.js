const fs = require('fs');
const path = require('path');

module.exports = function friendsPluginDyn(context, options) {
  return {
    name: 'docusaurus-friends-plugin-global-dynamic',
    async contentLoaded({ content, actions }) {
      const { setGlobalData, addRoute } = actions;

      const newFriends = fs.readFileSync(path.join(__dirname + '/data.json'), 'utf8')
      // console.log({ friendsNew: JSON.parse(newFriends).friends })
      // Create friends global data
      // setGlobalData({ friends: ['Clement', 'Jeremy'] });
      setGlobalData({ friendsNew: JSON.parse(newFriends).friends });

      // Add the '/friends' routes
      addRoute({
        path: '/dynamicfriends',
        component: '@site/src/components/FriendsDynamic.js',
        exact: true,
      });
    },
  };
}
