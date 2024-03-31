import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'
import NavBar from './components/NavBar'

function App() {
return <Grid
templateAreas={`"header header"
                "nav main"
                "nav footer"`}
gridTemplateRows={'70px 1fr 30px'}
gridTemplateColumns={'150px 1fr'}
h='200px'
gap='1'
color='blackAlpha.700'
fontWeight='bold'
>
<GridItem pl='2' bg='orange.200' area={'header'}>
  <NavBar />
</GridItem>
<GridItem pl='2' bg='pink.300' area={'nav'}>
  
</GridItem>
<GridItem pl='2' bg='green.300' area={'main'}>
  Main
</GridItem>
<GridItem pl='2' bg='blue.300' area={'footer'}>
  Footer
</GridItem>
</Grid>

}

export default App
