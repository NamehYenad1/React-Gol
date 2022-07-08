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
        cells[24][14] = true
        cells[25][13] = true
        cells[25][14] = true
        cells[25][15] = true
        cells[26][14] = true
        setGrid(cells)
    }

    //initialize once on render 

    useEffect(()=>{
        initialize(columns)
    },[])
    
    const getRandomInt =(max)=> {
        return Math.floor(Math.random() * max);
      }

    const randomize = (oldGrid)=>{
        console.log('clicked')
        let newGrid = JSON.parse(JSON.stringify(oldGrid))
        newGrid = newGrid.map((column)=>
                column.map((cell) =>
                   
                    getRandomInt(2)==1 ? cell=false:cell=true
                )
            
        )
        console.log(newGrid)
        setGrid(newGrid)
    }

    return {grid, columns, randomize}
}

export default useGameLogic


