import React,{useState} from 'react';

const initialstate={
    fname : 'Bruce',
    lname : 'wayne'
}

function ObjectUseState() {

    const [person,setperson] =useState(initialstate)

    const changeName =() =>{
        // person.fname ='Clark'
        // person.lname = 'Kent'
        // setperson(person)

        const newPerson = {...person}
        newPerson.fname = 'Clark'
        newPerson.lname = 'kent'
        setperson(newPerson)

    }

    console.log('ObjectUseState Render')
    return (
        <div>
            <button onClick={changeName}>{person.fname}{person.lname}</button>
        </div>
    );
}

export default ObjectUseState;