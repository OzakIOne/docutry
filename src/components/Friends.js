import React from 'react';
import { usePluginData } from '@docusaurus/useGlobalData';

export default function FriendsComponent() {
  const { friendsTestReturn } = usePluginData('docusaurus-friends-plugin-global-static');
  return <div>Your global static friends are {friendsTestReturn.join(',')} /staticfriends</div>;
} 
