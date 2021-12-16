import React, { useState } from 'react';
import deviceInfoModule from 'react-native-device-info';
import { View, Text, Button, TextInput } from 'react-native';

function Login(props) {
    //폰아이디랑 비밀번호
    let [simplePW, setSimplePW] = useState('');
    const uniqueID = deviceInfoModule.getUniqueId();

    console.log(props);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>LoginScreen </Text>
            <TextInput placeholder="PW"
                onChangeText={inputPw => setSimplePW(inputPw)}
            />
            <Button
                onPress={function () {
                    const dataToSubmit = {
                        uniqueID: uniqueID,
                        simplePW: simplePW
                    }
                    props.onPressLogin(dataToSubmit);
                    setSimplePW('');
                }}
                title="LOGIN"
            ></Button>
        </View >
    );
}


export default Login;
