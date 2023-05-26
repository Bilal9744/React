import React,{useState,useMemo} from 'react';

function Counter() {
    const[counterone, setcounterone] = useState(0)
    const[countertwo, setcountetwo] = useState(0)

    const incrementOne =() =>{
        setcounterone(counterone + 1)
    }
    const incrementTwo =() =>{
        setcountetwo(countertwo + 1)
    }
    const isEven = useMemo(() =>{
        let i=0
        while( i< 2000000) i++
        return counterone % 2 === 0

    },[counterone])
      
    

    return (
        <div>
            <div>
            <button onClick={incrementOne}>Count One-{counterone}</button>
            <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
            <button onClick={incrementTwo}> Count Two - {countertwo}</button>
            </div>
        </div>
    );
}

export default Counter;