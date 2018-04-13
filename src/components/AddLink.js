import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
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
  constructor(props){
    super(props);
    this.state = {
      dat: "",
      name: "",
      cat: ""
    }
  }

  handleChange = (e, type) => {
    this.setState({
      [type]: _.capitalize(e.target.value)
    });
  }

  handleUpdate = () => {
    const { addLink } = this.props;
    const { dat, name, cat } = this.state;

    addLink({ dat, name, cat });
  }


  render(){


    const { dat, name, cat } = this.state;

    return (

      <AddContainer>
        <InputBox type="text"  placeholder="dat://" onChange={(e) => this.handleChange(e, 'dat')}/>
        <InputBox type="text" value={name} placeholder="Name" onChange={(e) => this.handleChange(e, 'name')}/>
        <InputBox type="text" value={cat} placeholder="Category" onChange={(e) => this.handleChange(e, 'cat')}/>

        <SubmitBox type="submit" onClick={this.handleUpdate} />
        <Center>
          <Cross onClick={() => this.props.click()}> X </Cross>
        </Center>
      </AddContainer>

    )
  }

}

export default AddLink
