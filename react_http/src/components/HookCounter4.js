import React,{useState} from 'react';

function HookCounter4(props) {

    const [items,setitems] = useState([])

    const additem=() =>{
        setitems([...items,{
            id: items.length,
            value: Math.floor(Math.random()*10)+1
        }])
    }
    return (
        <div>
            <div>
                <button onClick={additem}>Add a Number</button>
            </div>
            <ul>
                {items.map(item =>(
                    <li key={item.id}>{item.value}</li>
                ))
                    
                }
            </ul>
        </div>
    );
}

export default HookCounter4;