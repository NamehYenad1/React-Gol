import React from 'react'
import { Heading } from '@chakra-ui/react'

const Header = ()=>{
    return(
        <React.Fragment> 
            <Heading as='h1' size='3xl' mb={4}> 
                Game Of Life
            </Heading>
        </React.Fragment>
    )
}

export default Header