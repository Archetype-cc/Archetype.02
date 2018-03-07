import React, { Component } from 'react';
import styled from 'styled-components';
import { Center } from './Styles';

const AddContainer = styled.div `
  position: fixed;
  background: #0B0D0B;
  opacity: 0.98;
  width: 100vw;
  height: 100vh;
  color: white;
  text-align: center;
  padding-top: 50%;
`

const InputBox = styled.input `
  width: 70%;
  background-color: rgba(16, 16, 16, 0.05);
  height: 50px;
  padding: 2px;
  font-size: 20px;
  color: #E58E73;
  border: none;
  border-bottom: 1px dashed grey;

`
const SelectBox = styled.select `
  width: 70%;
  background-color: rgba(16, 16, 16, 0.05);
  height: 50px;
  padding: 2px;
  font-size: 20px;
  color: #E58E73;
  border: none;
  border-bottom: 1px dashed grey;
`

const SubmitBox = styled.input `
  width: 70%;
  background-color: rgba(16, 16, 16, 0.05);
  height: 50px;
  padding: 5px;
  font-size: 20px;
  color: #E58E73;
  border: none;
  border: 1px dashed grey;
  margin-top: 50px;
  cursor: pointer;

  &:hover {
    background: #E58E73;
    color: black;
    cursor: pointer;

  }
`

const Cross = styled.button `
  position: absolute;
  bottom: 28%;
  font-size: 14px;
  color: white;
  cursor: pointer;
  border: none;
  background: rgba(16, 16, 16, 0.05);
`


class AddLink extends Component {

  render(){

    return (

      <AddContainer>
        <InputBox type="text" placeholder="dat://"/>
        <InputBox type="text" placeholder="Name"/>
        <SelectBox name="text" placeholder="Select">
          <option value="value1">Design</option>
          <option value="value2" selected>Art</option>
          <option value="value3">Music</option>
        </SelectBox>
        <SubmitBox type="submit" />
        <Center>
          <Cross onClick={() => this.props.click()}> X </Cross>
        </Center>
      </AddContainer>

    )
  }

}

export default AddLink
