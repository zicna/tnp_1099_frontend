import React, { useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import reducer from '../store/reducer'

export default function Home() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  const count = useSelector((state) => {
    return state.count
  })
  const disp = useDispatch()
  const handleIncrement = () => {
    console.log('increment')
    dispatch({ type: 'increment' })
  }
  const handleDecrement = () => {
    console.log('decrement')
    disp({ type: 'decrement' })
  }
  return (
    <div>
      <h2>Home</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <p>State count is: </p>
      <p>{state.count}</p>
      <p>{count}</p>
    </div>
  )
}
