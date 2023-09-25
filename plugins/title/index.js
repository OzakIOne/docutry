const fs = require('fs');
const path = require('path');

module.exports = async function myPlugin(context, options) {
  return {
    name: 'docusaurus-friends-plugin',
    async contentLoaded({ content, actions }) {
      const { createData, addRoute } = actions;
      // Create friends.json
      const friends = ['Alice', 'Bob', 'Joe'];
      // const friends = fs.readFileSync(path.join(__dirname, 'data.json'), {
      //   encoding: 'utf-8',
      // });
      const friendsJsonPath = await createData(
        'friends.json',
        JSON.stringify(friends),
      );

      // Add the '/friends' routes, and ensure it receives the friends props
      addRoute({
        path: '/friends',
        component: '@site/src/components/Friends.js',
        modules: {
          // propName -> JSON file path
          friends: friendsJsonPath,
        },
        exact: true,
      });
    },
  };
}
