import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NameScreen} from '../utils/NameScreen';
import {FullScreen} from './FullScreen';
import {MainScreen} from './MainScreen';

const { MAIN, FULLSCREEN } = NameScreen;
const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={MAIN.name}
          options={{ title: MAIN.title }}
          component={MainScreen}
        />
        <Stack.Screen
          name={FULLSCREEN.name}
          options={{ title: FULLSCREEN.title }}
          component={FullScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
