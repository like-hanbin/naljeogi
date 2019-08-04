import React from 'react';
import { Text,View,Image,StyleSheet } from 'react-native';
import {SafeAreaView} from 'react-navigation';

export default PrivateScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profileBox}>
                <Image
                    style={styles.image}
                    source={require('../assets/profile/profile.jpg')}
                />
                <Text style={styles.name}>{props.screenProps.name}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileBox: {
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: '#7a7171',
        flexDirection: 'row',
        padding:20
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 15,
    },
    name: {
        alignSelf: 'flex-end',
        fontSize: 20,
        fontWeight: "600"
    }
})