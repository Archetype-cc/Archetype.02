import styled from 'styled-components';

const Flex1 = styled.div `
  flex : 1;
`;

const Center = styled.div `
  text-align : center;
`

const ThemeBox = styled.button `
  flex : 1;
  border: 1px solid white;
  width: 100%;
  float: left;
  margin: 5px;
  max-height: 300px;
  color: white;
  background-color: #0B0D0B;
  padding: 0;

  &:hover {
      border: 3px solid #E58E73;
      cursor: pointer;
`;


const Line = styled.div `
  width: 100%;
  height: 1px;
  background: white;
  margin: 50px 0 20px 0;
  position: absolute;
`

export { Flex1, ThemeBox, Line, Center };
