import React, {useContext} from 'react';
import {Button, TextInput, View} from 'react-native';
import {IsLoggedContext} from '../../IsSignedInContext';

type Props = {

};

const LoginScreen: React.FC<Props> = () => {

    const context = useContext(IsLoggedContext);


    return (
        <View>
            <TextInput placeholder={'Name'}/>
            <TextInput placeholder={'Password'}/>

            <Button title={'Login'} onPress={context?.toggleIsLogged}/>
        </View>
    )
};

export default LoginScreen;
