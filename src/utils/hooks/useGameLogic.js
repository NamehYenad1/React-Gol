import React, { useState, useEffect } from 'react'
import useInterval from 'use-interval'
const useGameLogic = () => {
    const columns = 52
    const interval = 300
    const [grid, setGrid] = useState([])
    const [running, setRunning] = useState([false])
    const [steps, setSteps] = useState(0)

    useInterval(() => {
            updateGrid()
        }
        , running ? interval : null);


    //intiliaze function
    const initialize = (columns) => {
        let cells = new Array(columns)
        for (let i = 0; i < cells.length; i++) {
            cells[i] = new Array(columns).fill(false)
        }
        cells[24][14] = true
        cells[25][13] = true
        cells[25][14] = true
        cells[25][15] = true
        cells[26][14] = true
        setGrid(cells)
    }

    //Use Effect to initialize once on render 
    useEffect(() => {
        initialize(columns)
    }, [])


    //Randomize Function
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }
    const randomize = (oldGrid) => {
        console.log('clicked')
        let newGrid = JSON.parse(JSON.stringify(oldGrid))
        newGrid = newGrid.map((column) =>
            column.map((cell) =>
                getRandomInt(2) == 1 ? cell = false : cell = true
            )

        )
        console.log(newGrid)
        setGrid(newGrid)
    }

    //Reset function
    const reset = () => {
        let cells = new Array(columns)
        for (let i = 0; i < cells.length; i++) {
            cells[i] = new Array(columns).fill(false)
        }
        cells[24][14] = true
        cells[25][13] = true
        cells[25][14] = true
        cells[25][15] = true
        cells[26][14] = true
        setGrid(cells)
        setRunning(false)
        setSteps(0)
    }

    //Rules 
    const checkCells = (cell, neighbours) => {
        const initialValue = 0;
        //used built in javascript reduce function to quickly get total number of life neighbours to a cell
        const sumLiveCells = neighbours.reduce(
            (previousValue, currentCell) => currentCell ? previousValue + 1 : previousValue,
            initialValue
        );

        if (cell && (sumLiveCells === 2 || sumLiveCells === 3)) {
            return cell
        }
        else if (!cell && sumLiveCells === 3) {
            return true
        }
        else return false
    }

    const getNeighbours = (cell, i, x) => {
        let neighbours = []
        neighbours.push(cell[(i - 1 + cell.length) % cell.length][(x + cell.length) % cell[0].length])
        neighbours.push(cell[(i - 1 + cell.length) % cell.length][(x - 1 + cell.length) % cell[0].length])
        neighbours.push(cell[(i - 1 + cell.length) % cell.length][(x + 1 + cell.length) % cell[0].length])
        neighbours.push(cell[i + cell.length % cell.length][(x - 1 + cell.length) % cell[0].length])
        neighbours.push(cell[i + cell.length % cell.length][(x + 1 + cell.length) % cell[0].length])
        neighbours.push(cell[(i + 1 + cell.length) % cell.length][(x + cell.length) % cell[0].length])
        neighbours.push(cell[(i + 1 + cell.length) % cell.length][(x - 1 + cell.length) % cell[0].length])
        neighbours.push(cell[(i + 1 + cell.length) % cell.length][(x + 1 + cell.length) % cell[0].length])
        return neighbours
    }

    //update
    const updateGrid = () => {
        let newGrid = JSON.parse(JSON.stringify(grid))
        newGrid = newGrid.map((column, index) => column.map((cell, index2) => checkCells(cell, getNeighbours(newGrid, index, index2))))
        setGrid(newGrid)
        setSteps((steps) => steps += 1)
    }

    const start = () => {
        setRunning(true)
    }

    return { grid, columns, steps, reset, randomize, start }
}

export default useGameLogic


