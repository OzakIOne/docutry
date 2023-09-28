const fs = require('fs');
const path = require('path');

module.exports = function friendsPluginDynLocal(context, options) {
  return {
    name: 'docusaurus-friends-plugin-global-dynamic-local',
    async contentLoaded({ content, actions }) {
      const { createData, addRoute } = actions;

      const newFriends = fs.readFileSync(path.join(__dirname + '/data.json'), 'utf8')

      const friendsJsonPath = await createData(
        'friends.json',
        JSON.stringify(JSON.parse(newFriends).friends),
      );
      console.log(friendsJsonPath)

      // Add the '/friends' routes
      addRoute({
        path: '/dynamiclocalfriends',
        component: '@site/src/components/FriendsDynamicLocal.js',
        modules: {
          // propName -> JSON file path
          friends: friendsJsonPath,
        },
        exact: true,
      });
    },
  };
}
