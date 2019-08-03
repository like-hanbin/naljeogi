import React from 'react';
import { Text,View,FlatList,StyleSheet } from 'react-native';
import {SafeAreaView} from 'react-navigation';
import CalendarPicker from 'react-native-calendar-picker';


_makeList = ({item}) => {
    return (
        <View style={styles.itemContainer}>
            <Text>{item.title}</Text>
            <Text>{item.content}</Text>
        </View>
    );
}

export default DiaryList = (props) => {
    return (
        <SafeAreaView>
            <CalendarPicker/>
            <View style={styles.listContainer}>
                <FlatList
                    data={props.screenProps.Posts}
                    renderItem={this._makeList}
                    keyExtractor={(_, index) => { return `${index}`}}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    listContainer: {
    },
    itemContainer: {
        height: 50,
    }
})