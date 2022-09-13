

interface controlProps{
  nextStepAuto:()=>void,
  createRandomGrid:(size:number)=>void,
  clicable:boolean,
  setGridSize:any,
  setButtonGridDefaulth:any,
  setSpeed:any,
  setClicable:any

}



export default function Control({ 
  nextStepAuto,createRandomGrid,clicable,setGridSize,setButtonGridDefaulth,setSpeed,setClicable
}: controlProps) {


  const generationOne = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(`first generation`);    
    nextStepAuto()
  }

  const createInitialGrid =(size:number)=>{
    setGridSize(size);
    createRandomGrid(size)
  }


  return (
    <div className="controls">
      <h3>Управление</h3>
      <div className='controlButtons'>
        <div>
          <button
            onClick={generationOne}>
            сгенерировать следущее поколение
          </button>
          <input type="number"
            placeholder='скорость в м\с'
            onChange={(e)=>setSpeed(e.target.value)}           
            />
          <button
          onClick={()=>setClicable((prev:boolean)=>!prev)}
          >
            {clicable?`старт`:`стоп`}
          </button>
        </div>
        <div>
          <button
          onClick={(e)=>setButtonGridDefaulth(e)}
          value="Clear Grid">
            очистить поле
          </button>
          
          <button
          onClick={()=>createInitialGrid(15)}
          >
            сетка 15*15 полный размер
          </button>
          <button
          onClick={()=>createInitialGrid(30)}
          >
            сетка 30*30 полный размер
          </button>
          <button
          onClick={()=>createInitialGrid(50)}
          >
            сетка 50*50 полный размер
           </button>
        </div>
      </div>

    </div >
  )
}
