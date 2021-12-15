import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

function Login(props) {
    let [simplePw, setSimplePw] = useState('');
    console.log(props);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>LoginScreen </Text>
            <TextInput placeholder="PW"
                onChangeText={inputPw => setSimplePw(inputPw)}
            />
            <Button
                onPress={function () {
                    props.onPressLogin(simplePw);
                    setSimplePw('');
                }}
                title="LOGIN"
            ></Button>
        </View >
    );
}


export default Login;
