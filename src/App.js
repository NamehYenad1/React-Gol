import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import './App.css';
import { Box } from '@chakra-ui/react'
import ColorModeButton from'./components/ColorModeButton'
import MainGrid from './components/MainGrid'
import Footer from './components/Footer'
import { Grid, GridItem,VStack } from '@chakra-ui/react' 
function App() {
  return (
    <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
    <Grid minH="100vh" p={3}> 
    <ColorModeButton justifySelf="flex-end" ></ColorModeButton>
    <VStack>
    <MainGrid></MainGrid>
    </VStack>
    </Grid>
    <Footer></Footer>
    </Box>
    </ChakraProvider>
  
  );
}

export default App;
