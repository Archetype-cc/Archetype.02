import React, { Component } from 'react';
import styled from 'styled-components';
import Feed from './Feed';
import InputArea from './InputArea';
import { Line } from './Styles';

import Menu from './Menu';
const {links} = require('electron').remote.require('./lib/remote') // bar



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
      data: links.readData().then(data => { this.setState({ data: JSON.parse(data) })})
    }
  }

  refresh = () => {
    links.readData().then(data => {
      this.setState({
        data: JSON.parse(data)
      })
    })
  }

  render () {
    const { data } = this.state;


    return (
      <div>
        <Menu onRefresh={this.refresh} />
        <Line />

        <PageContainer>
          <Feed data={data} />

        </PageContainer>
        <InputArea />

      </div>
    )
  }
}

export default Home;
