import React,{useState} from 'react';

function ParentOne({children}) {
    const[count,setcount] = useState(0)

    console.log('ParentOne Render')
    return (
        <div>
            <button onClick={() => setcount(c => c+1)}>count - {count}</button>
            {children}
        </div>
    );
}

export default ParentOne;