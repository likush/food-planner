import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/navigation /stacks/RootStack';
import {IsLoggedProvider} from './src/modules/app/IsSignedInContext';

function App(): React.JSX.Element {
    return (
        <NavigationContainer>
            <IsLoggedProvider>
                <RootStack/>
            </IsLoggedProvider>
        </NavigationContainer>
    );
}

export default App;
