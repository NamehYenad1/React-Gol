import React from 'react'
import ControlButton from './ControlButton'
import { Stack,ButtonGroup } from '@chakra-ui/react'
import IterationCounter from './IterationCounter'
const Controls = (props)=>{
    return(
        <React.Fragment> 
            <Stack>
            <ControlButton>Start</ControlButton>
        
            <ButtonGroup spacking='3'>
            <ControlButton>Glider</ControlButton>
            <ControlButton>Reset</ControlButton>
            <ControlButton onClick={()=>props.randomize}>Randomize</ControlButton>
            </ButtonGroup>
        
            <IterationCounter>2</IterationCounter>
            </Stack>

        </React.Fragment>
    )
}

export default Controls