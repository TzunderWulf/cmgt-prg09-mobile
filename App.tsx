import { NavigationContainer } from '@react-navigation/native';

import { MainStackScreen } from './navigation/AppRoutes';

export default function App() {
  return (
    <NavigationContainer>
      <MainStackScreen />
    </NavigationContainer>
  );
}
