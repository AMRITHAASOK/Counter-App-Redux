import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../Redux/counterSlice'

function Counter() {

    const count = useSelector((state)=>state.counter.count)
    const dispatch=useDispatch()

  return (
    <div>
        <h3>Counter App</h3>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter