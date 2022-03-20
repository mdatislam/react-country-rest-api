import React, { useState } from 'react';
import './Counter.css'

const Counter = () => {
    const [count, setCount]=useState(0);
    const increase = () => setCount(count+1)
    const decrease = () => {
        
        if(count> 0){ setCount(count-1)}}
    return (
        <div className='counters p-4'>
            <h3 className=' mb-5'>Total Count: <span>{count}</span></h3>
            <button  onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    );
};

export default Counter;