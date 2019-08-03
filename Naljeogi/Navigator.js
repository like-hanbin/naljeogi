import React from 'react';
import {createAppContainer,
        createBottomTabNavigator,
        createStackNavigator } from "react-navigation"
import DiaryList from "./screens/DiaryList"
import MyPage from "./screens/MyPage"
import AddPost from "./screens/AddPost"
import {Ionicons} from '@expo/vector-icons'

const MainNavigation = createBottomTabNavigator({
    DiaryList: {
        screen: DiaryList,
        navigationOptions: {
           tabBarIcon: () => {
               return <Ionicons name='ios-apps' size={25}/>
           }
        }
    },
    AddPost: {
        screen: () => null,
        navigationOptions: {
            tabBarIcon: () => {
                return <Ionicons name='ios-create' size={25} color="tomato"/>
            },
            tabBarOnPress: ({navigation}) => {
                navigation.navigate('Edit');
            }
        }
    },
    MyPage: {
        screen: MyPage,
        navigationOptions: {
            tabBarIcon: () => {
                return <Ionicons name='md-person'size={25}/>
            }
         }
    }
},
{
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false
    }
});


const AppNavigator = createStackNavigator ({
    Edit: AddPost,
    Tab: MainNavigation,
},{
    initialRouteName: 'Tab',
    mode : 'modal',
    headerMode: 'none'
});

export default createAppContainer(AppNavigator)