import React, { useState } from 'react'

const Usestate = () => {
    const [count, setCount] = useState(0);

const handleIncrement = () =>{
    setCount(count +1);
    console.log("increment");
}
const handleDecrement = () =>{
    setCount(count -1);
    console.log("deccrement");
}
  return (
    <div className='flex justify-center items-center m-24 '>
        <div className='bg-gray-200 p-4 '>
        <h1 className='text-center font-bold'> COUNT {count}</h1>
        <button className='border p-2 bg-blue-400 text-white rounded-lg '   type='button' onClick={handleDecrement}> Decrease</button>
        <button className='border p-2 bg-blue-400 text-white rounded-lg '  type='button' onClick={handleIncrement}> Increase </button>
        </div>
    </div>
  )
}

export default Usestate