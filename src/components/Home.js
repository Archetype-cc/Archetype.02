import React, { Component } from 'react';
import styled from 'styled-components';
import Feed from './Feed';
import InputArea from './InputArea';
import AddLink from './AddLink';
import { Line } from './Styles';

import Menu from './Menu';
const {links} = require('electron').remote.require('./lib/remote') // bar
const {loop, write} = require('electron').remote.require('./lib/datStatus') // bar



const PageContainer = styled.div`
  display: flex;
  height: 85vh;
  position: fixed;
  width: 100vw;
  margin-top: 50px;
`;


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: links.readData().then(data => { this.setState({ data: JSON.parse(data) })}),
      createLink: false
    }
  }

  refresh = () => {
    loop().then(write);
    links.readData().then(data => {
      this.setState({
        data: JSON.parse(data)
      })
    })
  }

  create = () => {
    this.setState({
      createLink: true
    })
  }


  remove = () => {
    this.setState({
      createLink: false
    })

  }

  render () {
    const { data, createLink } = this.state;


    return (
      <div>
        <Menu onRefresh={this.refresh} />
        <Line />

        <PageContainer>
          <Feed data={data} />

        </PageContainer>
        <InputArea click={this.create} />
        {
          createLink
          ?
          <AddLink click={this.remove}/>
          :
          null
        }

      </div>
    )
  }
}

export default Home;
