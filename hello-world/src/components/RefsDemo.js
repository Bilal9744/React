import React, { Component, createRef } from 'react';

class RefsDemo extends Component {
    constructor(props) {
        super(props);
        this.inputRef = createRef()
        this.cbRef=null
        this.setcbRef=element =>{
            this.cbRef=element
        }
    }

    componentDidMount() {
        if(this.cbRef){
            this.cbRef.focus()
        }
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }

    ClickHandler = () => {
        alert(this.inputRef.current.value)
    }
    
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}></input>
                <input type='text' ref={this.setcbRef}></input>
                <button onClick={this.ClickHandler}>Click</button>
            </div>
        );
    }
}

export default RefsDemo;