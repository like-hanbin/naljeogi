import React from 'react';
import { Text,View,FlatList,StyleSheet,Dimensions } from 'react-native';
import {SafeAreaView} from 'react-navigation';
import CalendarPicker from 'react-native-calendar-picker';

const {width,height} = Dimensions.get('window');

_makeList = ({item}) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.content}>{item.content}</Text>
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
        marginLeft:25,
    },
    title:{
        fontSize: 20,
        color: "#3b3b3b",
        fontWeight: "600",
    },
    content:{
        fontSize: 15,
        paddingTop: 5,
        color: "gray"
    },
    itemContainer: {
        flex: 1,
        width: width-60,
        height: 50,
        paddingTop:10,
        paddingLeft:10,
        marginBottom:20,
        borderColor: "#7a7171",
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 7,
    }
})