import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Signup = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSignup = () => {

        if (email == '' && password == '' && confirmPassword == '') {
            Alert.alert('Please Enter your Email or Password')
        }
        else if (password !== confirmPassword) {
            Alert.alert('password not match ')
        }
        else {
            navigation.navigate('Login')
            Alert.alert('Sucessfully Signup')
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
                keyboardType="email-address"
            />

            <TextInput
                style={styles.textInputStyle}
                value={password}
                placeholder="Enter your Password"
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
            />
            <TextInput
                style={styles.textInputStyle}
                value={confirmPassword}
                placeholder="Enter your Password"
                onChangeText={(text) => setConfirmPassword(text)}
                secureTextEntry={true}
            />

            <TouchableOpacity style={styles.loginButton} onPress={handleSignup} >
                <Text style={styles.loginButtonText} >
                    Signup
                </Text>
            </TouchableOpacity>

            <View style={styles.signupView} >
                <Text style={{}}>
                    Already have account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} >
                    <Text style={{ fontWeight: 900, }} > Login </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Signup;

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
    signupView: {
        flexDirection: 'row',
        marginTop: 10
    },
    signupText: {


    }

})