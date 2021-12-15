import * as React from 'react';
import { View, Text, Button } from 'react-native';

function LoginScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>LoginScreen </Text>
            <Button
                onPress={() => navigation.navigate('Main')}
                title="Press Me"
            ></Button>
        </View>
    );
}

export default LoginScreen;
