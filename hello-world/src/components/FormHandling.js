import React,{Component} from "react";

class FormHandling extends Component{
    constructor(){
        super()
        this.state={
            userName:'',
            comments:'',
            topic:''
            
        }
    }
   
    handleUserNameChange=(event)=>{

        this.setState({
            userName: event.target.value
        })
    }
    handlCommentsChange=(event)=>{

        this.setState({
            comments: event.target.value
        })

    }
    handleTopicChange=(event)=>{
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit=(event)=>{
        alert(  `${this.state.userName} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>UserName: </label>
                    <input type="text" value={this.state.userName} onChange={this.handleUserNameChange}></input>
                </div>
                <div>
                    <label>Comment: </label>
                    <textarea value={this.state.comments} onChange={this.handlCommentsChange}></textarea>
                </div>
                <div>
                    <label>Topic: </label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                    <div>
                        <button type="submit">submit</button>
                    {/* <button type="submit" onClick={this.handleSubmit}>submit</button> */}
                    </div>
                    
                </div>
            </form>
        )
    }
}

export default FormHandling