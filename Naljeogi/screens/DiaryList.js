import React from 'react';
import { Text } from 'react-native';
import {SafeAreaView} from 'react-navigation';
import CalendarPicker from 'react-native-calendar-picker';

export default DiaryList = () => {
    return (
        <SafeAreaView>
            <CalendarPicker/>
        </SafeAreaView>
    );
}