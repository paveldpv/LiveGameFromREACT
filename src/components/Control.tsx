import {cell} from './../interface/interface'

interface controlProps{
  nextStepAuto:any,
  createRandomGrid:any,
  clicable:any,
  setGridSize:any
}



export default function Control({ 
  nextStepAuto,createRandomGrid,clicable,setGridSize
}: controlProps) {

  const generationOne = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(`first generation`);
    
    
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
           
            />
          <button>
            старт
          </button>
        </div>
        <div>
          <button
          value="Clear Grid">
            очистить поле
          </button>
          <button
          value="Default Grid 1">
            сетка 15*15 размер 1
           </button>
          <button
          value="Default Grid 2">
            сетка 15*15 размер 2 
          </button>
          <button
          value="Default Grid 3">
            сетка 15*15 размер 3
          </button>
          <button
          onClick={clicable? ()=>{
            setGridSize(15)
            createRandomGrid(15)}:null}
          >
            сетка 15*15 полный размер
          </button>
          <button
          onClick={clicable? ()=>{
            setGridSize(30)
            createRandomGrid(30)}:null}
          >
            сетка 30*30 полный размер
          </button>
          <button
          onClick={clicable? ()=>{
            setGridSize(50)
            createRandomGrid(50)}:null}
          >
            сетка 50*50 полный размер
           </button>
        </div>
      </div>

    </div >
  )
}
