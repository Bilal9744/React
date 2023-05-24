import React, {useState} from 'react';

function HookCounter3() {

    const [name,setname] = useState({firstname:'',lastname:''})
    return (
        <div>
            <form>
                <input type='text' value={name.firstname}
                onChange={e => setname({...name,firstname: e.target.value})}></input>

                 <input type='text' value={name.lastname}
                onChange={e => setname({...name,lastname: e.target.value})}></input>

                <h2>your first name is- {name.firstname}</h2>
                <h2>your Last name is- {name.lastname}</h2>

            
            </form>
        </div>
    );
}

export default HookCounter3;