import React from 'react';
import { usePluginData } from '@docusaurus/useGlobalData';

export default function FriendsComponent() {
  const { friendsNew } = usePluginData('docusaurus-friends-plugin-global-dynamic');
  return <div>Your global dynamic friends are {friendsNew.join(',')} available at /dynamicfriends</div>;
} 
