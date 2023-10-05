import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
// const myIcon = <Icon name="rocket" size={30} color="#900" />;

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const saveEailPass = async () => {
        try {
            await AsyncStorage.setItem('EMAIL', email);
            await AsyncStorage.setItem('PASSWORD', password);
            navigation.navigate('Main')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View style={styles.page}>
            <Text style={[styles.text, { marginTop: responsiveHeight(15), marginBottom: responsiveHeight(10), fontSize: responsiveFontSize(3.5) }]}>Welcome to Cart Craze</Text>
            <Text style={[styles.text, { color: '#18a935' }]}>Login to continue</Text>
            <View style={styles.container}>
                <Icon name="envelope-o" size={responsiveFontSize(3)} />
                <TextInput
                    style={styles.input}
                    onChangeText={text => setEmail(text)}
                    value={email}
                    keyboardType='default'
                    placeholder="Enter your name"
                />
            </View >
            <View style={styles.container}>
                <Icon name="lock" size={responsiveFontSize(3.5)} />
                <TextInput
                    style={styles.input}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    keyboardType="numeric"
                    placeholder="Enter your password"
                />
            </View >
            <TouchableOpacity onPress={() => {saveEailPass()}}>
                <View style={[styles.btn, { marginTop: responsiveHeight(4) }]}>
                    <Text style={styles.text}>Login</Text>
                </View>
            </TouchableOpacity>
            <View style={{
                alignItems: 'center', justifyContent: 'space-between', marginTop: responsiveHeight(10), width: responsiveWidth(65),
                height: responsiveHeight(6)
            }}>
                <Text style={[styles.text, { marginBottom: responsiveHeight(2) }]}>Don't have an account!</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
                    <View style={styles.btn}>
                        <Text style={styles.text}>Sign Up</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen
const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fcf9f9'

    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: responsiveWidth(90),
        height: responsiveHeight(6),
        borderRadius: responsiveWidth(8),
        borderWidth: responsiveWidth(0.5),
        marginTop: responsiveHeight(4),
        paddingLeft: responsiveWidth(3)
    },
    input: {
        padding: 5,
        color: '#555',
        // color:"#0000",
        marginLeft: responsiveWidth(2)
    },
    text: {
        fontSize: responsiveFontSize(2),
        color: '#000',
        fontWeight: '600',
    },
    btn: {
        borderRadius: responsiveWidth(8),
        borderWidth: responsiveWidth(0.5),
        backgroundColor: '#d570d5',
        width: responsiveWidth(20),
        height: responsiveHeight(4.5),
        alignItems: 'center',
        justifyContent: 'center',
    }
})