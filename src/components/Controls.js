import React from 'react'
import ControlButton from './ControlButton'
import { Flex, Spacer,ButtonGroup } from '@chakra-ui/react'
import IterationCounter from './IterationCounter'
const Controls = (props)=>{
    return(
        <React.Fragment> 
            <Flex>
            <ControlButton>Start</ControlButton>
            <Spacer></Spacer>
            <ButtonGroup spacking='3'>
            <ControlButton>Glider</ControlButton>
            <ControlButton>Reset</ControlButton>
            <ControlButton>Randomize</ControlButton>
            </ButtonGroup>
            <Spacer></Spacer>
            <IterationCounter>2</IterationCounter>
            </Flex>

        </React.Fragment>
    )
}

export default Controls