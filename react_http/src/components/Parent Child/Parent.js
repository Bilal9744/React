import React,{useState} from 'react';
import Child from './Child';

function parent() {
    const[count,setcount] = useState(0)

    console.log('Parent Render')
    return (
        <div>
            <button onClick={() => setcount(c => c+1)}>count - {count}</button>
            <button onClick={() =>setcount(0)}> Count to 0</button>
            <button onClick={() =>setcount(5)}> Count to 5</button>
            <Child />
        </div>
    );
}

export default parent;