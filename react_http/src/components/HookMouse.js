import React,{useEffect,useState} from 'react';

function HookMouse(props) {

    const [x,setx] = useState(0)
    const [y,sety] =useState(0)

    const logMousePosition = e =>{
        console.log('Mouse event')
        setx(e.clientx)
        sety(e.clienty)
    }

    useEffect(() =>{
        console.log('useEffect called')
        window.addEventListener('mousemove',logMousePosition)

        return () => {
            console.log('Component unmounting code')
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])

    return (
        <div>
            Hooks x- {x}  y- {y}
        </div>
    );
}

export default HookMouse;