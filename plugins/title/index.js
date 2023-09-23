const fs = require('fs/promises');
const path = require('path');

module.exports = async function myPlugin(context, options) {
  // ...
  return {
    name: 'title',
    // async loadContent() {
    //   const filepath = path.join(__dirname, 'data.json');
    //   return fs.readFile(filepath, 'utf8');
    // },
    async contentLoaded({ content, actions }) {
      const { createData, addRoute } = actions;
      // Create friends.json
      const friends = ['Yangshun', 'Sebastien'];
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

    /* other lifecycle API */
  };
};
