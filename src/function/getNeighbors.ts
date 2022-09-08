
export const getNeighbors = (cell:number,gridWigth:number,gridHeight:number)=>{

   let north;
   let south;
   let east;
   let west;
   let northWest;
   let northEast;
   let southEast;
   let southWest;

   let size:number = gridHeight*gridHeight
   

   north = cell+gridWigth+1

   south = cell-gridWigth-1

   northWest = north+1

   northEast = north-1

   southWest = south+1

   southEast = south-1

   west = cell-1

   east = cell+1

   return {northWest,north,northEast,west,east,southWest,south,southEast}
   //return [northWest,north,northEast,west,east,southWest,south,southEast]
}


