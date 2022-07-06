import React, {useState,useEffect} from 'react'

const useGameLogic = ()=>{
    const columns = 52
    const interval= 300
    const [grid, setGrid] = useState([])

    const initialize =(columns)=>{
        let cells = new Array(columns)
        cells.map((column)=> cells[column]=new Array(columns)) 
        console.log(cells)
    }

}

export default useGameLogic


