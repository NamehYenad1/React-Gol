import React from 'react'
import { Text,Center } from '@chakra-ui/react'
const IterationCounter = (props)=>{
    return(
        <React.Fragment> 
        <Center w='fit-content'>
        <Text>Steps:{props.steps}</Text>
        </Center>
        </React.Fragment>
        )
}

export default IterationCounter


