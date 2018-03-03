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
      data: links.getData()
    }
  }

  refresh = () => {
    this.setState({
      data: links.readData()
    }, function () {
      console.log("updated feed state");
      console.log(this.state.data.Design[0].updated);
    });
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
