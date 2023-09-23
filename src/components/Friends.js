import React from 'react';
import { usePluginData } from '@docusaurus/useGlobalData';

export default function FriendsComponent() {
  const { friends } = usePluginData('docusaurus-friends-plugin');
  return <div>Your friends are {friends.join(',')}</div>;
} 
