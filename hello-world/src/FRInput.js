import React from 'react';

// function FRInput(props) {
//     return (
//         <div>
//             <input type='text' />
            
//         </div>
//     );
// }

const FRInput = React.forwardRef((props,ref) => {
    return(
        <div>
            <input type='text' ref={ref} />
        </div>
    )
})

export default FRInput;