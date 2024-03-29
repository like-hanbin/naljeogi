import React from 'react';
import { Text,View,StyleSheet,Dimensions,Image } from 'react-native'
import {SafeAreaView} from 'react-navigation';
import ViewHeader from '../components/ViewHeader'
const {width,height} = Dimensions.get('window');

export default ViewScreen = (props) => {
    const id = props.navigation.getParam('id');
    const post = props.screenProps.Posts.find((item) => {return item.id == id})

    return (
        <SafeAreaView>
            <View style={styles.contentContainer}>
                <ViewHeader 
                    postId={id}
                    deletePost={ async(id) => {props.screenProps.deletePost(id)}}
                    style={styles.viewHeader}/>
                {post?
                    <View>
                    <View style={styles.emptyBox}/>
                    <Text style={styles.title}>{post.title}</Text>
                    <View style={styles.emptyBox}/>
                    <Text style={styles.content}>{post.content}</Text>
                    {post.image?<Image source={{uri: post.image}} style={{width:100,height:100}}/>:null}
                    </View>
                :null}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    contentContainer: {      
        width: width-50,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        marginTop: 20,
        marginLeft: 20,
    },
    title:{
        fontSize: 40,
        color: "#3b3b3b",
        fontWeight: "600",
    },
    content:{
        fontSize: 15,
        color: "#3b3b3b"
    },
    emptyBox: {
        height: 20,
    },
})