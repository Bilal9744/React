import React,{useState,useEffect,useRef} from 'react';

function HookTimer(props) {
    const [timer,setTimer] = useState(0)
    const IntervalRef =useRef(0)

    useEffect(() =>{
        IntervalRef.current =setInterval(() =>{
            setTimer(prevTimer => prevTimer+1)
        },1000)
        return () =>{
            clearInterval(IntervalRef.current)
        }
    },[])
    return (
        <div>
            Hook Timer - {timer}
            <button onClick={()=> clearInterval(IntervalRef.current)}>Clear Hook Timer</button>
        </div>
    );
}

export default HookTimer;