import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput, AsyncStorageStatic, } from 'react-native';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      password: ''
    };
  }
  
  _IraMenu = () => {
    this.props.navigation.navigate('Menu');
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Image style={styles.img} source={require('../src/img/flama.png')}/> */}
        <Text style={styles.titleText}>Desarrollo de apps 2022</Text> 
        <TextInput placeholder="Usuario"style={styles.text} />
        <TextInput placeholder="Contraseña" secureTextEntry={true} style={styles.text} />
        <TouchableOpacity style={[styles.boton]} onPress={()=> alert('Simple Button pressed')}>
          <Text style={[styles.botonText]}>Ingresar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'pink',
      
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleText:{
      fontSize: 300,
      fontWeight: 'bold',
      color:'white',
      marginBottom: 60
    },
    alumnos:{
      fontSize: 40,
      fontFamily: 'Arial',
      color:'green',
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
  
