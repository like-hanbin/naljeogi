import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigation from './Navigator'
const Context = React.createContext();
export default class App extends React.Component {
  state = {
    inputTitle: '',
    inputContent: '',
    selectedDate: '',
    Posts : [{
      id : 1,
      title :'날씨가 좋은 날',
      content :'소풍 가자',
      date :'20190802'
    },{
      id : 2,
      title :'다이어트',
      content :'진심 내일부터 한다',
      date :'20190801'
    }]
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
      console.log(this.state.Posts.filter(data => { return data.date == this.state.selectedDate}));
    });
  }

  _addPost = () => {
    const prevPosts = [...this.state.Posts];
    let date = new Date();
    let year = date.getFullYear().toString();
    let month = (date.getMonth()+1).toString();
    let day = date.getDate().toString();

    if(month.length == 1) month = "0"+month;
    if(day.length == 1) day = "0"+day;
  
    const newPost = {
      id:this.state.Posts.length+1
      ,title:this.state.inputTitle
      ,content:this.state.inputContent
      , date: year+month+day
    }

    this.setState({
      inputTitle: '',
      inputContent: '',
      Posts: prevPosts.concat(newPost)
    })
  }


  render() {
    return (
      <MainNavigation screenProps={{
          Posts: this.state.Posts,
          title: this.state.inputTitle,
          content: this.state.inputContent,
          selectedDate: this.state.selectedDate,
          changeTitle: this._changeTitle,
          changeContent: this._changeContent,
          changeDate: this._changeDate,
          addPost:this._addPost,
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
