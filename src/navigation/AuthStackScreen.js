import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CheckCertificateScreen from '../screens/AuthStack/CheckCertificate';
import LoginScreen from '../screens/AuthStack/Login';
import SetSimplePwScreen from '../screens/AuthStack/SetSimplePw';
import TakeIdCardScreen from '../screens/AuthStack/TakeIdCard';
import TakeVaccinePassScreen from '../screens/AuthStack/TakeVaccinePass';
import TakeTextMessageScreen from '../screens/AuthStack/TakeTextMessage';


const Stack = createNativeStackNavigator();

const AuthStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen}
                options={{
                    title: '',
                    headerBackTitleVisible: false,
                }} />
            <Stack.Screen name="CheckCertificate" component={CheckCertificateScreen}
                options={{
                    title: '',
                    headerBackTitleVisible: false,
                }} />
            <Stack.Screen name="SetSimplePw" component={SetSimplePwScreen}
                options={{
                    title: '',
                    headerBackTitleVisible: false,
                }} />
            <Stack.Screen name="TakeIdCard" component={TakeIdCardScreen}
                options={{
                    title: '',
                    headerBackTitleVisible: false,
                }} />
            <Stack.Screen name="TakeVaccinePass" component={TakeVaccinePassScreen}
                options={{
                    title: '',
                    headerBackTitleVisible: false,
                }} />
            <Stack.Screen name="TakeTextMessage" component={TakeTextMessageScreen}
                options={{
                    title: '',
                    headerBackTitleVisible: false,
                }} />
        </Stack.Navigator>
    )
}

export default AuthStackScreen;