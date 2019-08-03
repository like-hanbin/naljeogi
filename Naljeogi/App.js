import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigation from './Navigator'
const Context = React.createContext();
export default class App extends React.Component {
  state = {
    inputTitle: '',
    inputContent: '',
    Posts : [{
      id : 1,
      title :'첫 번째 글',
      content :'첫 번째 글 내용',
      date :'2019-08-02'
    },{
      id : 2,
      title :'두 번째 글',
      content :'두 번째 글 내용',
      date :'2019-08-01'
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

  _addPost = () => {
    const prevPosts = [...this.state.Posts];
    const newPost = {id:this.state.Posts.length+1,title:this.state.inputTitle,content:this.state.inputContent, date: '2019-08-03'}
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
          changeTitle: this._changeTitle,
          changeContent: this._changeContent,
          addPost:this._addPost
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
