import {useState} from 'react';

function useCounter(initialCount =0,value) {

    const[count,setCount] = useState(initialCount)
    const increment =() =>{
       setCount(prevcount => prevcount + value)
   }
   const decrement =() =>{
       setCount(prevcount => prevcount - value)
   }

   const reset =() =>{
       setCount(initialCount)
   }
    return [count,increment,decrement,reset]
  
}

export default useCounter;