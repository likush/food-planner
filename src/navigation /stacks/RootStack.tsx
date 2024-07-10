import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../modules/app/home/screens/HomeScreen';
import RegistrationScreen from '../../modules/app/auth/screens/registration /RegistrationScreen';
import LoginScreen from '../../modules/app/auth/screens/LoginScreen';
import {IsLoggedContext} from '../../modules/app/IsSignedInContext';

const Stack = createNativeStackNavigator();

const RootStack = () => {

    const context = useContext(IsLoggedContext);


    return (
        <Stack.Navigator>
            {context?.isLogged ? (
                <>
                    <Stack.Screen name="Home" component={HomeScreen}/>
                </>
            ) : (
                <>
                    <Stack.Screen name="Login" component={LoginScreen}/>
                    <Stack.Screen name="Registration" component={RegistrationScreen}/>
                </>
            )}
        </Stack.Navigator>
    );
};

export default RootStack;
