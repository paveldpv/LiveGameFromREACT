import React from 'react'
import { GridCell } from '../interface/interface'
//{grid,gridSize,toogle,clicable}

export const Cell:React.FC =()=>{

   return(
      <div className='grid'>
         cell
         {/* {grid.map(core=>{
            return(
               <div
               key={core.id}
               className={core.alive?`live`:`dead`}
               onClick={clicable?toogle:null}               
               >

               </div>
            )
         })} */}
      </div>
   )
}

