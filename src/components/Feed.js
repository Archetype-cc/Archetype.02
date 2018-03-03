import React, { Component } from 'react';
import styled from 'styled-components';
import Link from './Links';
import Content from './Content';
const {ipcRenderer} = require('electron')

const {links} = require('electron').remote.require('./lib/remote') // bar

const Container = styled.div `
  flex : 1;
  overflow: scroll;
  margin-bottom: 20px;
`;


const Line = styled.div `
  width: 100%;
  height: 1px;
  background: white;
  margin: 20px 0 20px 0;
`


class Feed extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: links.getData()
    }
  }

  componentWillReceiveProps(nextProps) {
    // console.log("props updated in content", nextProps);
    this.setState({
      data: nextProps.data
    })
  }

  callData = () => {
    this.setState({
      data: links.readData()
    }, function () {
      console.log("updated feed state");
      console.log(this.state.data.Design[0].updated);
    });
  }

  render() {
    const { data } = this.state;

    return (
    <Container onClick={this.callData}>

      {
        Object.keys(data).map(cat => {
          return <Content key={cat} category={cat}  data={data[cat]}/>
        })
      }

    </Container>

    )
  }
}

export default Feed;
