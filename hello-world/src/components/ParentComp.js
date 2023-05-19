import React, { Component } from 'react';
import RegularComp from './RegularComp';
import PureComp from './PureComponent';

class ParentComp extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name:'vishwas'
        }
    }
    componentDidMount(){
        setInterval(()=>
        this.setState({
            name:'vishwas'
        }))
    }
    
    render() {
        console.log('*****Parent Comp Render*******')
        return (
            <div>
                Parent Component
                <RegularComp name={this.state.name}></RegularComp>
                <PureComp name={this.state.name}></PureComp>
            </div>
        );
    }
}

export default ParentComp;