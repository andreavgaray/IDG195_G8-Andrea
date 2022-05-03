
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { Pressable } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../assets/images/flama.png')} />
      <Text style={styles.titleText}>Desarrollo de apps 2022</Text>
      <TextInput placeholder="Usuario" style={styles.text} />
      <TextInput placeholder="Contraseña" secureTextEntry={true} style={styles.text} />
      <Pressable style={[styles.boton]}
        onPress={() => navigation.navigate('TabTwo')}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}>
        <Text style={[styles.botonText]}>Ingresar</Text>
      </Pressable>
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',

    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 60
  },
  alumnos: {
    fontSize: 40,
    fontFamily: 'Arial',
    color: 'green',
    fontStyle: 'italic'
  },
  text: {
    fontSize: 20,
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 20
  },
  img: {
    flex: .4,
    aspectRatio: 1,
    resizeMode: 'contain',
    marginBottom: 20
  },
  boton: {
    height: 42,
    width: '19%',
    flexDirection: 'row',
    borderRadius: 20,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 4,
    backgroundColor: 'grey',
    justifyContent: 'center',
    marginTop: 30,
  },
  botonText: {
    marginTop: 5,
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
