import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

type HomeScreenProps = {}

const HomeScreen: React.FC<HomeScreenProps> = (): React.ReactElement => {
    return (
        <View style={styles.container}>
            <Text>Home screen</Text>
        </View>
    )
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

