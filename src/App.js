import {
  GlobalStyle,
  Heading,
  Button,
  CustomButton,
  OutlineButton,
} from './StyledComponents'
import './App.css'

const App = () => (
  <>
    <GlobalStyle />
    <Heading>Hello World</Heading>
    <Button type="button">Click</Button>
    <Button type="button" outline>
      Click
    </Button>
    <CustomButton type="button">Click!</CustomButton>
    <OutlineButton type="button">Click!</OutlineButton>
  </>
)

export default App
