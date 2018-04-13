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
      data: {},
      createLink: false
    }
  }

  componentDidMount(){
    const data = links.readData().then(data => {

       this.setState({ data: JSON.parse(data) })


     })
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

  addLink = (newLink) => {
    const { data } = this.state;
    const { cat, dat, name } = newLink;

    const newData = data;
    const linkNew = { dat, name, updated: false, timestamp: null, version: null };
    if(data[cat]){
      data[cat].push(linkNew)
    } else {
      data[cat] = [linkNew]
    }

    this.setState({
      createLink: false,
      data: newData
    })

    links.writeData(this.state.data);
  }

  deleteLink = (cat, dat) => {
    const { data } = this.state;
    let newData = data;
    const index = data[cat].findIndex(element => element.dat === dat);

    if(index > -1){
      newData[cat].splice(index, 1);
      console.log('newdata', newData);


     Object.keys(newData).forEach(category => {
        if(newData[category].length === 0){
          delete newData[category]
        }
      })

      console.log(newData);

      this.setState({
        data: newData
      })
    }

    links.writeData(this.state.data);

  }


  remove = () => {
    this.setState({
      createLink: false
    })

  }

  render () {
    const { data, createLink } = this.state;

console.log(data);
    return (
      <div>
        <Menu onRefresh={this.refresh} />
        <Line />

        <PageContainer>
          <Feed data={data} deleteLink={this.deleteLink}/>

        </PageContainer>
        <InputArea click={this.create} />
        {
          createLink
          ?
          <AddLink data={data} click={this.remove} addLink={this.addLink}/>
          :
          null
        }

      </div>
    )
  }
}

export default Home;
