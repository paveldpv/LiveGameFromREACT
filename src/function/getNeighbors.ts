
export const getNeighbors = (cell:number,gridWigth:number,gridHeight:number)=>{
   console.log(cell);
   
   let north;
   let south;
   let east;
   let west;
   let northWest=0;
   let northEast;
   let southEast;
   let southWest=0;

   let size:number = gridHeight*gridHeight
   let left_border = Math.floor((cell/gridWigth)*gridWigth)
   let right_border = Math.abs((left_border-gridWigth)+1)

   //если cell у верхней границы
   //nort
   if(cell<gridWigth){
      north = (size-gridWigth)+cell      
   }
   else{               
      north = cell-gridWigth            
   }
   //south
   
   if(cell+gridWigth>=size){
      south=cell-left_border
   }
   else{
      south = gridWigth+cell
   }   
   
   
   //east nortEast southEast
   if (cell%gridWigth === gridWigth-1)   
   {        
      
      east = left_border;
      if (cell === gridWigth-1) {                   
        northEast = size-gridWigth;
        southEast = left_border + gridWigth;
      } else if (cell === size-1) {         
        northEast = left_border - gridWigth;
        southEast = 0;
      } else {
        northEast = left_border - gridWigth;
        southEast = left_border + gridWigth;
      }
    } 
    else {
      east = cell + 1;
      northEast = north + 1;
      southEast = south + 1;
    }
    
    
    //west nortWest southWest
    if (cell%gridWigth === 0) {                   
      west = right_border;
      if (cell === size-gridWigth) {           
        northWest = cell - 1;
        southWest = gridWigth-1;
      } else if (cell === 0) {                    
        northWest = size-1;
        southWest = right_border + gridWigth;
      } else {
        northWest = cell - 1;
        southWest = right_border + gridWigth;
      }
    } else {
      
      west = cell - 1;
      northWest = north - 1;
      southWest = (south - 1)<0?size-north:south-1;
    }
   

   

   

   return {northWest,north,northEast,west,east,southWest,south,southEast}
   
}


