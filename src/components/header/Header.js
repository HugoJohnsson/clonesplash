import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class Header extends Component {

  state = {
    query: ''
  }

  handleSearch = e => {
    e.preventDefault();
    this.props.history.push(`/search/${this.state.query}`);
  }

  render() {
    return (
      <section className="header">
        <div className="header-container">
          <div className="header-content">
            <h1>Clonesplash</h1>
            <p>
              The internet’s source of freely useable images.<br/>
              Powered by creators everywhere.
            </p>
            <div className="header-search-form">
              <form onSubmit={this.handleSearch}>
                <input onChange={e => this.setState({ query: e.target.value })} value={this.state.query} type="text" placeholder="Search free high-resolution photos"/>
              </form>
            </div>
            <div className="trending-search-tags">
              <p>Trending searches: <Link to='/search/flower'>flower</Link>, <Link to='/search/wallpaper'>wallpaper</Link>,<Link to='/search/background'>background</Link>, <Link to='/search/sad'>sad</Link>, <Link to='/search/love'>love</Link></p>
            </div>
          </div>
        </div>
        <div className="header-overlay"></div>
      </section>
    )
  }
}

export default withRouter(Header);
