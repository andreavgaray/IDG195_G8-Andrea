import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Desarrollo de apps 2022</Text>
      <Text style={styles.alumnos}>Cristina </Text>
      <Text style={styles.alumnos}>Orlando</Text>
      <Text style={styles.alumnos}>Erick</Text>
      <Text style={styles.alumnos}>Andrea</Text>
      <Text style={styles.alumnos}>Brenda</Text>
      <Text style={styles.alumnos}>Alicia</Text>
      <Text style={styles.alumnos}>Ofelia</Text>
      <Text style={styles.alumnos}>Rodrigo</Text>
      <Text style={styles.alumnos}>Armando</Text>
      <Button style={styles.boton}>Presiona aquí</Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText:{
    fontSize: 100,
    fontWeight: 'bold',
    color:'white',
    marginBottom: 60
  },
  alumnos:{
    fontSize: 40,
    fontFamily: 'Arial',
    color:'green',
    fontStyle: 'italic'
  }
});
