import { Text, View, Button } from "react-native";

export const Welcome = ({navigation}) => {
  return(
    <View>
      <Text>Welcome!</Text>
      <Button 
        title="Get started!"
        onPress={() => {navigation.navigate('Map')}}
      />
    </View>
  );
}