import React, {useState,useEffect} from 'react'

const useGameLogic = ()=>{
    const columns = 52
    const interval= 300
    const [grid, setGrid] = useState([])
   
    const initialize =(columns)=>{
        let cells = new Array(columns)
        for(let i=0; i<cells.length; i++){
            cells[i] = new Array(columns).fill(false)
        }
        return cells
    }

    //initialize once on render 
    useEffect(()=>{
        setGrid(initialize())
    },[])
        
    return grid
}

export default useGameLogic


