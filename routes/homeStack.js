import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home';
import Details from '../screens/details';
import Header from '../shared/header'


const homeStack = ({ navigation }) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4caf50',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <Header navigation={navigation} />,
        }}


      />
      <Stack.Screen name="Details" component={Details} options={{ title: 'Details' }} />
    </Stack.Navigator>
  );
};


export default homeStack;