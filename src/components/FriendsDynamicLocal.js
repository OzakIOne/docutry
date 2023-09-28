import React from 'react';

export default function FriendsComponent({ friends }) {
  // return <div>Your dynamic local friends are qwe???</div>;
  return <div>Your dynamic local friends are {friends.join(', ')} available at /dynamiclocalfriends</div>;
}
