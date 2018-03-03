import React, { Component} from 'react';
import styled from 'styled-components';


const LinkBox = styled.div `
  display: flex;
`;

const DatLink = styled.a `

  color: white;
  font-size: 16px;
  line-height: 30px;
  text-decoration: none;
  flex: 9;

  &:visited {
    color: white
  }

  &:hover {
    color: #E58E73;
  }
`

const IconBox = styled.div `
  flex: 1;
  padding-top: 4px;

`
const Icon = styled.img `
  width: auto;
  height: auto;
`

//TODO: Replace color fiil for variables

class Link extends Component {
  constructor(props){
    super(props);
    this.state = {
      href: this.props.href,
      keys: this.props.key,
      name: this.props.name,
      cat: this.props.cat,
      update: this.props.update
    }
  }
  componentWillReceiveProps(nextProps) {
    // console.log("props updated in content", nextProps);
    this.setState({
      update: nextProps.update
    })
  }
  render() {
    const { update } = this.state;

    let pink = "#E58E73";
    let grey = 'grey';

    // console.log(update);

    return (

      <LinkBox >
        <DatLink href={this.state.href} key={this.state.keys}>{this.state.name}< /DatLink>
        <IconBox>

        {
          update
          ?
          <a href={this.state.href} key={this.state.keys} >
            <svg width='35' height='9' viewBox='0 0 35 9' xmlns='http://www.w3.org/2000/svg'>
                <g id='Page-1' fill='none' fillRule='evenodd'>
                    <g id='noun_88231_cc' fill={pink} fillRule='nonzero'>
                        <path d='M28.1098676,9 C26.0133935,9 24.0880601,8.02463054 22.8045045,6.4729064 C21.5209489,8.02463054 19.6384007,9 17.4991413,9 C15.4026672,9 13.520119,8.02463054 12.2365634,6.51724138 C10.9530078,8.06896552 9.07045957,9 6.97398542,9 C3.12331862,9 0,5.7635468 0,1.77339901 L3.42281493,1.77339901 C3.42281493,3.81280788 5.00586684,5.45320197 6.97398542,5.45320197 C8.89931882,5.45320197 10.4823707,3.85714286 10.5251559,1.90640394 C10.5251559,1.86206897 10.5251559,1.81773399 10.5251559,1.77339901 L10.5251559,0 L13.9479708,0 L13.9479708,1.77339901 C13.9479708,1.81773399 13.9479708,1.86206897 13.9479708,1.90640394 C14.0335412,3.90147783 15.5738079,5.45320197 17.4991413,5.45320197 C19.4672599,5.45320197 21.0503118,3.81280788 21.0503118,1.77339901 L21.0503118,0 L24.4731268,0 L24.4731268,1.77339901 C24.4731268,3.81280788 26.0561787,5.45320197 28.0242972,5.45320197 C29.9924158,5.45320197 31.5754677,3.81280788 31.5754677,1.77339901 L34.9982827,1.77339901 C35.083853,5.7635468 31.9605344,9 28.1098676,9 Z'
                        id='Shape' />
                    </g>
                </g>
            </svg>
          </a>
          :
          <a href={this.state.href} key={this.state.keys} >
            <svg width='35' height='9' viewBox='0 0 35 9' xmlns='http://www.w3.org/2000/svg'>
                <g id='Page-1' fill={grey} fillRule='evenodd'>
                    <g id='noun_88231_cc-copy' fill='#A3A3A3' fillRule='nonzero'>
                        <path d='M28.1098676,9 C26.0133935,9 24.0880601,8.02463054 22.8045045,6.4729064 C21.5209489,8.02463054 19.6384007,9 17.4991413,9 C15.4026672,9 13.520119,8.02463054 12.2365634,6.51724138 C10.9530078,8.06896552 9.07045957,9 6.97398542,9 C3.12331862,9 0,5.7635468 0,1.77339901 L3.42281493,1.77339901 C3.42281493,3.81280788 5.00586684,5.45320197 6.97398542,5.45320197 C8.89931882,5.45320197 10.4823707,3.85714286 10.5251559,1.90640394 C10.5251559,1.86206897 10.5251559,1.81773399 10.5251559,1.77339901 L10.5251559,0 L13.9479708,0 L13.9479708,1.77339901 C13.9479708,1.81773399 13.9479708,1.86206897 13.9479708,1.90640394 C14.0335412,3.90147783 15.5738079,5.45320197 17.4991413,5.45320197 C19.4672599,5.45320197 21.0503118,3.81280788 21.0503118,1.77339901 L21.0503118,0 L24.4731268,0 L24.4731268,1.77339901 C24.4731268,3.81280788 26.0561787,5.45320197 28.0242972,5.45320197 C29.9924158,5.45320197 31.5754677,3.81280788 31.5754677,1.77339901 L34.9982827,1.77339901 C35.083853,5.7635468 31.9605344,9 28.1098676,9 Z'
                        id='Shape' />
                    </g>
                </g>
            </svg>
          </a>
        }


        </IconBox>

      </LinkBox>

    )
  }
}

  export default Link;
