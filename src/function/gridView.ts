export const gridView = (gridSize:number)=>{
   switch (gridSize) {
      case 30:
         return {
            display: "grid",
            gridTemplateColumns: `repeat(${gridSize}, 20px)`,
            gridTemplateRows: `repeat(${gridSize}, 20px)`
            
          };
         break;
      case 50:
         return {
            display: "grid",
            gridTemplateColumns: `repeat(${gridSize}, 12px)`,
            gridTemplateRows: `repeat(${gridSize}, 12px)`
          };
         break;   
      default:
         return {
            display: "grid",
            gridTemplateColumns: `repeat(${gridSize}, 40px)`,
            gridTemplateRows: `repeat(${gridSize}, 40px)`
          };
         break;
   }
}