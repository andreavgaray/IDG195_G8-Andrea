import { StyleSheet } from 'react-native';
import {Pressable } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabTwoScreen({ navigation }: RootTabScreenProps<'TabTwo'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <Pressable
        onPress={() => navigation.navigate('TabOne')}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}>
          <Text>Log Out</Text>

      </Pressable>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
