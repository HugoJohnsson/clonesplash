import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import CategoryNav from './categoryNav/CategoryNav.js';

class Navigation extends Component {

  state = {
    query: ''
  }

  handleSearch = e => {
    e.preventDefault();
    this.props.history.push(`/search/${this.state.query}`);
  }

  render(){
    return (
      <div>
        <nav className="navbar">
          <div className="left">
            <div className="logo">
              <Link to='/'>
                <h1>Clonesplash</h1>
                <p>Photos for everyone</p>
              </Link>
            </div>
            <div className="nav-search-form">
              <form onSubmit={this.handleSearch}>
                <input onChange={e => this.setState({ query: e.target.value })} value={this.state.query} type="text" placeholder="Search free high-resolution photos"/>
              </form>
            </div>
          </div>
          <ul className="nav">
            <li><a href="#">Login</a></li>
            <li><a href="#">Join free</a></li>
          </ul>
        </nav>
        <CategoryNav/>
      </div>
    )
  }
}

export default withRouter(Navigation);
