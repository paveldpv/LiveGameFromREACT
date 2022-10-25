import { useGrid } from '../hook/useGrid'
import { useInterval } from '../hook/useInterval'

import Control from './Control'
import { Cell } from './Cell'
import Rules from './Rules'
import Title from './Title'



export default function LiveGame() {
  const {grid,    
    clicable,setClicable,
    gridSize,setGridSize,
    speed,setSpeed,
    nextStepAuto,
    setButtonGridDefaulth,
    createRandomGrid}=useGrid()
    
    useInterval(Number(speed),nextStepAuto,grid,clicable)
    
    
    
  return (
    <div className='wrappeer'>
      <Title />
      <div className='gridContaineer'>
        <Rules />

        <div className='game'>

          <Control
           nextStepAuto={nextStepAuto} 
           createRandomGrid={createRandomGrid} 
           clicable={clicable}
           setGridSize={setGridSize}
           setButtonGridDefaulth={setButtonGridDefaulth}
           setSpeed={setSpeed}
           setClicable={setClicable}/>  

          <Cell grid={grid} gridSize={Number(gridSize)} />
        </div>

      </div>
    </div>
  )
}
