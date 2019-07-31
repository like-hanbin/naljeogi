import React from 'react';
import {createAppContainer, createBottomTabNavigator } from "react-navigation"
import {Platform} from "react-native"
import DiaryList from "./screens/DiaryList"
import MyPage from "./screens/MyPage"
import Ionicons from '@expo/vector-icons'

const MainNavigation = createBottomTabNavigator({
    DiaryList: {
        screen: DiaryList,
    },
    MyPage: {
        screen: MyPage,
    }
});

export default createAppContainer(MainNavigation)