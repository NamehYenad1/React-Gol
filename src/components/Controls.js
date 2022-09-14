import React, { useState,useEffect } from 'react'
import ControlButton from './ControlButton'
import { Stack, ButtonGroup } from '@chakra-ui/react'
import IterationCounter from './IterationCounter'
import useGameLogic from '../utils/hooks/useGameLogic'
import { Select } from '@chakra-ui/react'
const Controls = (props) => {

    const [value, setValue] = React.useState("Default")
    const handleChange = (event) => {
        setValue(event.target.value)
    }

    useEffect(() => {
        props.initializePattern(value)
    },[value])
  
    return (
        <React.Fragment>
            <Stack>
                <ControlButton onClick={props.start}>Start</ControlButton>
                <ButtonGroup spacking='3'>
                    <Select value={value}
                        onChange={handleChange}
                    >
                        <option value='Default'>Default</option>
                        <option value='Glider'>Glider</option>
                        <option value='Blinker'>Blinker</option>
                        <option value='Toad'>Toad</option>
                        <option value='Beacon'>Beacon</option>

                    </Select>

                    <ControlButton onClick={props.reset}>Reset</ControlButton>
                    <ControlButton onClick={props.randomize}>Randomize</ControlButton>
                </ButtonGroup>

                <IterationCounter steps={props.steps}></IterationCounter>
            </Stack>

        </React.Fragment>
    )
}

export default Controls