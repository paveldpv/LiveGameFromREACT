import React from 'react'

export default function Control({
  speedInput,
  setSpeedInput,
  stepThrougAuto,
  clicable,
  setClicable

}: any) {

  const generationOne = (e: React.MouseEvent) => {
    e.preventDefault();
    stepThrougAuto()
  }



  return (
    <div className="controls">
      <h3>Управление</h3>
      <div className='controlButtons'>
        <div>
          <button
            onClick={generationOne}>
            сгенерировать первое поколение
          </button>
          <input type="number"
            placeholder='скорость в м\с'
            value={speedInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSpeedInput(e.target.value)} />
          <button
            onClick={() => setClicable((prev: boolean) => !prev)}>
            {clicable ? `старт` : `стоп`}
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
          <button>
            сетка 15*15 полный размер
          </button>
          <button>
            сетка 30*30 полный размер
          </button>
          <button>
            сетка 50*50 полный размер
           </button>
        </div>
      </div>

    </div >
  )
}
