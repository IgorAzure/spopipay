import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SongScreen from '../screens/SongList';
import HomerScreen from '../screens/homer';
import FriendScreen from '../screens/Friends';
import PlayerScreen from '../screens/Player';

const Tab = createBottomTabNavigator();

function AbasdoCaramba() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomerScreen} />
      <Tab.Screen name="Song" component={SongScreen} />
      <Tab.Screen name="Friends" component={FriendScreen} />
      <Tab.Screen name="Player" component={PlayerScreen} />
    </Tab.Navigator>
  );
}

export default AbasdoCaramba;