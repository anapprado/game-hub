import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'

function App() {
return <Grid
templateAreas={`"header header"
                "main main"
                "footer footer"`}
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
<GridItem pl='2' bg='green.300' area={'main'}>
  <GameGrid />
</GridItem>
<GridItem pl='2' bg='blue.300' area={'footer'}>
</GridItem>
</Grid>

}


export default App
