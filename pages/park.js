import React, { Component } from 'react';
import Page from '../layouts/Main';

const Content = (props) => (
  <div>
    <h1>{props.url.query.id}</h1>
    <p>this is the content</p>
    <div style={{ height: 400, width: 400, position: 'relative' }} >
      <img src={props.park.image} style={{height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'center'}} onLoad={props.handleImageLoaded} />
      {!props.imageLoaded &&
        <div style={{background: 'grey', position: 'absolute', height: '100%', width: '100%', top: 0}} />
      }
    </div>

  </div>
)

class Park extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageLoaded: false
    }
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }

  static async getInitialProps( {query} ) {
    const res = await fetch(`http://my-nps-api.herokuapp.com/park/${query.id}`)
    const data = await res.json()
    console.log(data);
    return {
      park: data
    }
  }

  handleImageLoaded() {
    this.setState({imageLoaded: true});
  }

  render() {
    return (
      <Page>
        <Content url={this.props.url} park={this.props.park} imageLoaded={this.state.imageLoaded} handleImageLoaded={this.handleImageLoaded}/>
      </Page>
    )
  }
}

export default Park;
