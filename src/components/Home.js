import React, { Component } from 'react';
import styled from 'styled-components';
import Feed from './Feed';
import InputArea from './InputArea';

import Menu from './Menu';



const PageContainer = styled.div`
  display: flex;
  height: 85vh;
  position: fixed;
  width: 100vw;
  margin-top: 50px;
`;


class Home extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     data: {}
  //   }
  // }
  //
  // componentWillMount() {
  //   read json filesystem
  //   store it in memory
  //   update data in state to data in file
  // }

  render () {

    return (
      <div>
        <Menu />
        <PageContainer>
          <Feed />

        </PageContainer>
        <InputArea />

      </div>
    )
  }
}

export default Home;
