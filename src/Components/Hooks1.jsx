import React, { useState } from 'react'
import "./Hooks1.css"

const Hooks1 = () => {
    const [count, setCount] = useState(0)

    const countHandler = () => {
        setCount(count + 1)
    }

  return (
    <div>
      <button className='countButton' onClick={countHandler}>Clicked {count} times</button>
    </div>
  )
}

export default Hooks1
