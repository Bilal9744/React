import React,{useEffect, useState} from 'react';

function IntervalHookCounter(props) {

const[count,setcount] = useState(0)

const tick = () =>{
    setcount(prevcount => prevcount + 1)
}

useEffect(() =>{
    function dosomething(){
        console.log('hello')
    }
    dosomething()
    const interval = setInterval(tick,1000)
    return () => {
        clearInterval(interval)
    }
},[])
    return (
        <div>
            {count}
        </div>
    );
}

export default IntervalHookCounter;