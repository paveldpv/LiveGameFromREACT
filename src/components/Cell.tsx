import { gridView } from '../function/gridView';
import { cell } from '../interface/interface'

//{grid,gridSize,toogle,clicable}

interface cellProps{
   grid:any,
   gridSize:number
}

export const Cell =({grid,gridSize}:cellProps)=>{
   
   console.log(typeof gridSize);
   
   
   return(
      <div className='containerLiveGame'>
         <div className='grid' style={gridView(gridSize)}>
            {grid.map((core:cell)=>{
               return(
                  <div
                  key={core.id}
                  className={core.alive?`live`:`dead`}         
                  >
                  </div>
               )
            })}
         </div>
      </div>
   )
}

