import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Navigation from '../components/navigation/Navigation.js';
import Header from '../components/header/Header.js';
import Images from '../components/images/Images.js';

class Search extends Component {

  state = {
    imageArray: [],
    query: ''
  }

  componentDidMount(){

    if (!this.props.match.params.query){
      this.props.history.push('/');
    }

    const url = `https://api.unsplash.com/search/photos?query=${this.props.match.params.query}`;

    axios.get(url, {
      headers: {
        'Authorization': 'Client-ID 066c3b39b151eed1457cdd08424b59a57b0b587dbf1a77bee905c084cf655a18'
      }
    }
    )
    .then(res => {
      let result = [];

      res.data.results.forEach(item => {
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
    })
  }

  componentDidUpdate(){
    if (!this.props.match.params.query){
      this.props.history.push('/');
    }

    const url = `https://api.unsplash.com/search/photos?query=${this.props.match.params.query}`;

    axios.get(url, {
      headers: {
        'Authorization': 'Client-ID 066c3b39b151eed1457cdd08424b59a57b0b587dbf1a77bee905c084cf655a18'
      }
    }
    )
    .then(res => {
      let result = [];

      res.data.results.forEach(item => {
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
    })
  }

  handleSearch = e => {
    e.preventDefault();
    this.props.history.push(`/search/${this.state.query}`);
  }

  render(){
    return (
      <div>
        <Navigation/>
        <div class="search-form">
          <form>
            <form onSubmit={this.handleSearch}>
              <input onChange={e => this.setState({ query: e.target.value })} value={this.state.query} type="text" placeholder="Search free high-resolution photos"/>
            </form>
          </form>
        </div>
        <Images images={this.state.imageArray}/>
      </div>
    )
  }
}

export default withRouter(Search);
