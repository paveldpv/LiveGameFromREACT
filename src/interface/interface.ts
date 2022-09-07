
export interface cell{
   coordianteX:number,
   coordinateY:number,
   alive:boolean,
   click:boolean,
   id:number
}


export interface GridCell{
   grid:cell[],
   toogle:any,
   clicable:any,
   gridSize:number
}