import React,{useState} from 'react';

const initialstate =['Bruce' ,'Wayne']

function ArrayUseState() {
    const[persons,setperson] = useState(initialstate)

    const handleClick =() =>{
        // persons.push('Clark')
        // persons.push('kent')
        // setperson(persons)

        const newPersons = [...persons]
        newPersons.push('Clark')
        newPersons.push('Kent')
        setperson(newPersons)
    }
    console.log('ArrayUseState Render')
    return (
        <div>
            <button onClick={handleClick}>Click</button>
            {
                persons.map(person => (
                    <div key={person}>{person}</div>

                )
                )
            }
        </div>
    );
}

export default ArrayUseState;