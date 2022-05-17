import { StyleSheet, View, Text } from 'react-native';
import { Pressable } from 'react-native';

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Home</Text>
            <Pressable style={[styles.boton]}
                onPress={() => navigation.navigate('Login')}>
                <Text style={[styles.botonText]}>Log out</Text>
            </Pressable>
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
