import React, { Component } from 'react';
import axios from 'axios';
import Navigation from '../components/navigation/Navigation.js';
import Header from '../components/header/Header.js';
import Images from '../components/images/Images.js';

class Home extends Component {

  state = {
    imageArray: []
  }

  componentDidMount(){

    axios.get('https://api.unsplash.com/photos/random?count=30', {
      headers: {
        'Authorization': 'Client-ID 066c3b39b151eed1457cdd08424b59a57b0b587dbf1a77bee905c084cf655a18'
      }
    }
    )
    .then(res => {
      let result = [];
      res.data.forEach(item => {
        result.push({
          src: item.urls.regular,
          thumbnail: item.urls.thumb,
          thumbnailWidth: item.width / 10,
          thumbnailHeight: item.height / 10
        });
      })

      this.setState({
        imageArray: result
      });
      console.log(this.state.imageArray)
    })
  }

  render(){
    return (
      <>
        <Navigation/>
        <Header/>
        <Images images={this.state.imageArray}/>
      </>
    )
  }
}

export default Home;
