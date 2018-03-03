import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex1 } from './Styles';
const {links} = require('electron').remote.require('./lib/remote') // bar

const MenuContainer = styled.div `
  height: 50px;
  position: fixed;
  width: 100vw;
  background-color: #0B0D0B;
  margin-botton: 0;
  z-index: 1;
  -webkit-app-region: drag;
  display: flex;


`;

const TitleA = styled.h1 `
  font-size: 12px;
  color: #white;
  padding: 10px;
  text-align: right;
  padding-right: 0;

`

const Refresh = styled.h1 `
  font-size: 12px;
  color: #white;
  padding-top: 10px;
  text-align: left;
  cursor: pointer;
  &:hover {
    color: #E58E73;
  }

`

const Icon = styled.span `
  padding: 0 0 0 6px;
`

class Menu extends Component {

  render(){

    return (
      <div>
        <MenuContainer>
          <Flex1 style={{textAlign: 'left', paddingLeft: '20px'}}>
            <Refresh onClick={() => this.props.onRefresh()}> Sync
              <Icon>
              ~
              </Icon>
            </Refresh>
          </Flex1>

          <Flex1 style={{textAlign: 'right', paddingRight: '20px'}}>
            <TitleA> Archetype 02.</TitleA>
          </Flex1>
        </MenuContainer>
      </div>
    )
  }

}

export default Menu
