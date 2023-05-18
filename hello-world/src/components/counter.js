import React,{Component}  from "react";

class Counter extends Component {

    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
     }


Incriment(){
    // this.setState(
    // {
    //   count : this.state.count + 1
    // },
    // () => {
    //     console.log('callback value',this.state.count)
    //  }
    // )
    this.setState(prevstate => ({
        count: prevstate.count+1
    }))
    console.log(this.state.count)
}
IncrimentFive() {
    this.Incriment()
    this.Incriment()
    this.Incriment()
    this.Incriment()
    this.Incriment()
}
 


    render(){
     return (
        <div>
          <div>  count -{this.state.count} </div>
            <button onClick={() => this.IncrimentFive()}>Increment</button>
        </div>
     )
    }
}
export default Counter