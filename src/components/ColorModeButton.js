import * as React from "react"
import {
  useColorMode,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"

const ColorModeButton = (props)=>{
    const {colorMode, toggleColorMode} = useColorMode()
    const colorValues = useColorModeValue("dark", "light")
    const Icon = useColorModeValue(FaMoon, FaSun)
    return(
        <IconButton onClick = {toggleColorMode} size="md" variant ="ghost" color="current" icon={<Icon></Icon>} aria-label={`Switch to ${colorValues} mode`} {...props} > 

        </IconButton>
    )

}

export default ColorModeButton