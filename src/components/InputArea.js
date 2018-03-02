import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex1 } from './Styles';


const InputLink = styled.input `
  position: fixed;
  bottom: 0;
  width: 100vw;
  background: #131713;
  height: 20px;
  border: none;
  color: white;
  padding: 15px;
  font-size: 10px;
  border-top: 1px solid white;
  letter-spacing: 1px;
`
const ButtonSubmit = styled.button `
  width: 20vw;
  background: red;
  position: fixed;
  bottom: 0;
`

class InputArea extends Component {

  render(){

    return (
      <div>
        <Flex1>
        <InputLink type="text" placeholder="dat://....." />
        </Flex1>

      </div>
    )
  }

}

export default InputArea
