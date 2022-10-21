import {Button, Text, View} from 'react-native';
import {NameScreen} from '../utils/NameScreen';

export const MainScreen = ({navigation}) => {
  return (
    <View>
      <Text>MainScreen</Text>
      <Button title="Вперед" onPress={()=> navigation.navigate(NameScreen.FULLSCREEN.name)}></Button>
    </View>
  )
}
