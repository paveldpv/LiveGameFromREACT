
import Control from './Control'
import { Cell } from './Cell'
import Rules from './Rules'
import Title from './Title'

export default function LiveGame() {

  return (
    <div className='wrappeer'>
      <Title />
      <div className='gridContaineer'>
        <Rules />

        <div className='game'>
          <Control />
          <Cell />
        </div>

      </div>
    </div>
  )
}
