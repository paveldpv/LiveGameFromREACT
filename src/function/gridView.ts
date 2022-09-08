export const gridView = (gridSize:number)=>{
   switch (gridSize) {
      case 30:
         return {
            display: "grid",
            gridTemplateColumns: `repeat(${gridSize}, 10px)`,
            gridTemplateRows: `repeat(${gridSize}, 10px)`
            
          };
         break;
      case 50:
         return {
            display: "grid",
            gridTemplateColumns: `repeat(${gridSize}, 6px)`,
            gridTemplateRows: `repeat(${gridSize}, 6px)`
          };
         break;   
      default:
         return {
            display: "grid",
            gridTemplateColumns: `repeat(${gridSize}, 20px)`,
            gridTemplateRows: `repeat(${gridSize}, 20px)`
          };
         break;
   }
}