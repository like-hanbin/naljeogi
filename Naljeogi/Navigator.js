import React from 'react';
import {createAppContainer,
        createBottomTabNavigator,
        createStackNavigator } from "react-navigation"
import ListScreen from "./screens/ListScreen"
import PrivateScreen from "./screens/PrivateScreen"
import EditScreen from "./screens/EditScreen"
import ViewScreen from "./screens/ViewScreen"
import {Ionicons} from '@expo/vector-icons'

const MainNavigation = createBottomTabNavigator({
    ListScreen: {
        screen: ListScreen,
        navigationOptions: {
           tabBarIcon: ({tintColor}) => {
               return <Ionicons name='ios-apps' size={25} color={tintColor}/>
           }
        }
    },
    EditScreen: {
        screen: () => null,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => {
                return <Ionicons name='ios-create' size={25} color={tintColor}/>
            },
            tabBarOnPress: ({navigation}) => {
                navigation.navigate('Edit');
            }
        }
    },
    PrivateScreen: {
        screen: PrivateScreen,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => {
                return <Ionicons name='md-person'size={25} color={tintColor}/>
            }
         }
    }
},
{
    tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: "#bdbdbd",
        showLabel: false
    }
});


const AppNavigator = createStackNavigator ({
    Edit: EditScreen,
    View: ViewScreen,
    Tab: MainNavigation,
},{
    initialRouteName: 'Tab',
    mode : 'modal',
    headerMode: 'none'
});

export default createAppContainer(AppNavigator)