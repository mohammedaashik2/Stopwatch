import React, {Component} from "react";

class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    // increment(){
    //     this.setState(
    //         {
    //             count: this.state.count+1
    //         },
    //         ()=>{
    //             console.log('callback value',this.state.count)
    //         }
    //     )
    //     console.log(this.state.count)
    // }

    increment(){
        this.setState((prevState)=>({
            count: prevState.count+1
        }))
        console.log(this.state.count)
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    render(){
        return(
            <div>
            <div>
            <h1>{this.state.count}</h1>
            </div>
            {/* <button onClick={()=>{this.increment()}} >Increment</button> */}
            <button onClick={()=>{this.incrementFive()}} >Increment</button>
            </div>
        )
    }
}

export default Counter;