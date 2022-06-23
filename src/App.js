import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import './App.css';
import { Box } from '@chakra-ui/react'
import Header from './components/Header'
import MainGrid from './components/MainGrid'
import Footer from './components/Footer'
function App() {
  return (
    <ChakraProvider theme={theme}>
    <Header></Header>
    <MainGrid></MainGrid>
    <Footer></Footer>
    </ChakraProvider>
  
  );
}

export default App;
