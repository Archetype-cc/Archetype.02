import React, { Component} from 'react';
import styled from 'styled-components';
import Link from './Links';

const DescriptionContainer = styled.div `
  flex : 1;
  overflow: scroll;
  padding: 20px;

`;

const Heading = styled.h1 `
  font-size: 12px;
  color: #white;
`

class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      cat: this.props.category,
      data: this.props.data
    }
  }
  componentWillReceiveProps(nextProps) {
    // console.log("props updated in content", nextProps);
    this.setState({
      cat: nextProps.category,
      data: nextProps.data
    })
  }
  render() {
    const { data, cat } = this.state;
    console.log( data);

    return (
      <DescriptionContainer>
      <Heading>{cat}</Heading>

      {
        Object.keys(data).map(link => <Link href={data[link].dat} key={data[link].dat} name={data[link].name} update={data[link].updated}></Link>)

      }
      </DescriptionContainer>

    )
  }
}

  export default Content;
