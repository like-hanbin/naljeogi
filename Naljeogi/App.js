import React from 'react';
import { StyleSheet, AsyncStorage } from 'react-native';
import MainNavigation from './Navigator'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import uuid from 'uuid/v4';

export default class App extends React.Component {

  state = {
    name: '김어흥',
    inputTitle: '',
    inputContent: '',
    selectedDate: '',
    imageUrl:'',
    Posts : [{
      id : 1,
      title :'날씨가 좋은 날',
      content :'소풍 가자',
      date :'20190805',
      image: '',
    },{
      id :2,
      title :'다이어트',
      content :'진심 내일부터 한다',
      date :'20190805',
      image: '',
    }]
  }

  componentDidMount(){
    const today = this._getToday();
    
    AsyncStorage.getItem('@diary:state')
    .then((state)=> {
      if( state != null){
          this.setState(JSON.parse(state));
      }
    }).then(() => {
      this.setState({
        selectedDate: today
      })
    });
  }

  _getToday = () => {
    let date = new Date();
    let year = date.getFullYear().toString();
    let month = (date.getMonth()+1).toString();
    let day = date.getDate().toString();

    if(month.length == 1) month = "0"+month;
    if(day.length == 1) day = "0"+day;

    return year+month+day;
  }

  _changeTitle = (value) => {
    this.setState({
      inputTitle: value
    });
  }

  _changeContent = (value) => {
    this.setState({
      inputContent: value
    });
  }

  _changeDate = (value) => {
    let year = value._i.year.toString();
    let month = (value._i.month+1).toString();
    let day = value._i.day.toString();

    if(month.length == 1) month = "0"+month;
    if(day.length == 1) day = "0"+day;

    this.setState({
      selectedDate: year+month+day
    },() => { 
      console.log('');
    });
  }

  _selectPicture = async () => {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const { cancelled, uri} = await ImagePicker.launchImageLibraryAsync({allowsEditing:false});
    this.setState({imageUrl: uri});
  }

  _addPost = () => {
    let id = uuid();
    const today = this._getToday();
    const prevPosts = [...this.state.Posts];
    const newPost = {
      id:id
      ,title:this.state.inputTitle
      ,content:this.state.inputContent
      ,date: today
      ,image: this.state.imageUrl
    }

    console.log("새로운 아이디"+newPost.id);
    
    this.setState({
      inputTitle: '',
      inputContent: '',
      selectedDate: today,
      imageUrl: '',
      Posts: prevPosts.concat(newPost)
    },this.saveData);
  }

  _deletePost = ({id}) => {
    const prevPosts = [...this.state.Posts];
    prevPosts.find((item) => {return item.id == id});
    deleteIndex = prevPosts.findIndex((item) => {return item.id == id});
    deletePost = prevPosts.splice(deleteIndex,1);
    this.setState({Posts:prevPosts},this.saveData);
  }

  saveData = () => {
    AsyncStorage.setItem('@diary:state',JSON.stringify(this.state)); AsyncStorage.clear();
  }


  render() {
    return (
      <MainNavigation screenProps={{
          Posts: this.state.Posts,
          name: this.state.name,
          title: this.state.inputTitle,
          content: this.state.inputContent,
          selectedDate: this.state.selectedDate,
          imageUrl: this.state.imageUrl,
          selectPicture: this._selectPicture,
          changeTitle: this._changeTitle,
          changeContent: this._changeContent,
          changeDate: this._changeDate,
          addPost:this._addPost,
          deletePost:this._deletePost
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8db',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
