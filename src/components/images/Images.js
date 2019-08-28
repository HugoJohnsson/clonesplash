import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Gallery from 'react-grid-gallery';

class Images extends Component {

  render() {
    return (
      <section class="images">
        {
          this.props.location.pathname.includes('search') ?
          <div className='search-heading'>
            <h1>{this.props.match.params.query}</h1>
          </div>
          : ''
        }
        <Gallery images={this.props.images}/>
      </section>
    )
  }
}

export default withRouter(Images);
