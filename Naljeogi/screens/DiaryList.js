import React from 'react';
import { Text,View,FlatList,StyleSheet,Dimensions,ScrollView } from 'react-native';
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
            <View sttyle={styles.diaryContainer}>
                <CalendarPicker
                    previousTitle="<"
                    nextTitle=">"
                    todayBackgroundColor="#ffe28c"
                    selectedDayColor="#7a7171"
                    onDateChange={props.screenProps.changeDate}/>
                <ScrollView style={styles.listContainer}>
                    <FlatList
                        data={props.screenProps.Posts.filter(data => { return data.date == props.screenProps.selectedDate})}
                        renderItem={this._makeList}
                        keyExtractor={(_, index) => { return `${index}`}}/>
                </ScrollView>
            </View>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    diaryContainer: {
        width: 1,
    },

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
    date:{
        fontSize: 10,
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