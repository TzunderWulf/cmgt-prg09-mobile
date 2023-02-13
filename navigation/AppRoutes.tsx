import { createStackNavigator } from "@react-navigation/stack";

import { Welcome } from './screens/Welcome'
import { Map } from './screens/Map'

const MainStack = createStackNavigator();

export const MainStackScreen = () => {
  return(
    <MainStack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen 
        name="Welcome"
        component={Welcome}
      />
      <MainStack.Screen 
        name="Map"
        component={Map}
      />
    </MainStack.Navigator>
  );
}