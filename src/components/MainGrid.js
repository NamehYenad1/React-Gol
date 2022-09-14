import React from 'react'
import Header from './Header'
import Controls from './Controls'
import useGameLogic from '../utils/hooks/useGameLogic.js'
import { SimpleGrid,Box } from '@chakra-ui/react'
import { getNextKeyDef } from '@testing-library/user-event/dist/keyboard/getNextKeyDef'

const MainGrid = ()=>{
    const {dropDownValue, grid,columns,randomize,steps,reset,start,clickCell,initializePattern } = useGameLogic()
    console.log(grid)
    return(
        <React.Fragment>
            <Header></Header>
            <Controls initializePattern={initializePattern} dropDownValue={dropDownValue} start={()=>start()} steps={steps} reset={()=>reset()} randomize={()=>randomize(grid)}></Controls>
            <SimpleGrid gridTemplateColumns={`repeat(${columns},20px)`} gridGap = "2px" mb="4rem">
                {grid ? grid.map((column,index)=>
                    <SimpleGrid key = {index} className="column" gridGap="2px"> 
                        {grid[index].map((cell, rowIndex) =>
                            <Box
                            key={'cell, '+rowIndex}
                            onClick ={()=>clickCell(index,rowIndex)}
                            width="20px"
                            height="20px"
                            backgroundColor={cell ? 'black':'lightgrey'}
                            > 
                            </Box>
                        )}
                    </SimpleGrid>
                ) : null}
            </SimpleGrid>
        </React.Fragment>
    )
}

export default MainGrid