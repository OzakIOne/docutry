import React from 'react';

export default function FriendsComponent() {
  const { friendsTestReturn } = usePluginData('docusaurus-friends-plugin-global');
  return <div>Your global static friends are {friendsTestReturn.join(',')} /staticfriends</div>;
} 
