import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 body {
  margin: 100px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: lightblue;
}
`

export const Heading = styled.h1`
  color: #0070c1;
`
export const Button = styled.button`
  padding: 10px;
  margin-right: 20px;
  font-size: 15px;
  color: ${props => (props.outline ? '#0070c1' : '#fff')};
  border-radius: 4px;
  border: 2px solid #0070c1;
  background-color: ${props => (props.outline ? '#fff' : '#0070c1')};
`
export const CustomButton = styled.button`
  padding: 10px;
  margin-right: 20px;
  font-size: 15px;
  color: #ffffff;
  border-radius: 4px;
  border: 2px solid #0070c1;
  background-color: #0070c1;
`

export const OutlineButton = styled(CustomButton)`
  color: #0070c1;
  background-color: #ffffff;
  font-family: 'Open sans';
`
