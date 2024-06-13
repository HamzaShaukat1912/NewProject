import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";


const Login = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {

        if ( email == '' || password == '') {
            Alert.alert('Please Enter your Email or Password')
        } else {
            navigation.navigate('Home',{userEmail: email});
            setEmail('')
            setPassword('')
            console.log('Email: ', email, 'password:', password)
        }
    }

    return (

        <View style={styles.container} >

            <TextInput
                style={styles.textInputStyle}
                value={email}
                placeholder="Enter your email"
                onChangeText={(text) => setEmail(text)}
            />

            <TextInput
                style={styles.textInputStyle}
                value={password}
                placeholder="Enter your Password"
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
            />

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin} >
                <Text style={styles.loginButtonText} >
                    Login
                </Text>
            </TouchableOpacity>

            <View style = {styles.signupView} >
                <Text style = {{}}>
                    Don't have account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup') } >
                    <Text style={{fontWeight:900}} > Signup </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInputStyle: {
        height: 50,
        width: '95%',
        borderWidth: 2,
        borderRadius: 10,
        margin: 10,
        paddingHorizontal: 10,

    },
    loginButton: {
        height: 50,
        width: '95%',
        borderWidth: 2,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'

    },
    loginButtonText: {
        fontSize: 25,
        color: 'white'
    },
    signupView : {
        flexDirection:'row',
        marginTop:10
    },
    signupText: {


    }

})