import React from 'react';
import {View,TextInput,Text,TouchableOpacity,StyleSheet} from 'react-native'
import {withNavigation} from 'react-navigation'
import { Ionicons } from '@expo/vector-icons';

const EditHeader = ({navigation,addPost}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {navigation.goBack()}}
                hitSlop={{top:32, bottom:32, left:32, right: 32}}>
                <Ionicons name="ios-arrow-back" size={25} color={'#f59b42'}></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress= {() => {
                    addPost();
                    navigation.navigate('DiaryList');
                }}
                hitSlop={{top:32, bottom:32, left:32, right: 32}}>
                <Ionicons name="ios-save" size={25} color={'#f59b42'}></Ionicons>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})

export default withNavigation(EditHeader);