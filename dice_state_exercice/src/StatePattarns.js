import React,{Component} from 'react'

class StatePattarns extends Component{
    constructor(props){
        super(props)
        this.state={score:0}
        this.increaseScore=this.increaseScore.bind(this)
    }
    increment(curScore){
        return {score:curScore.score+1}
    }
    increaseScore(){
       this.setState(this.increment)
       this.setState(this.increment)
       this.setState(this.increment)
    }
    render(){
        return(
            <div>
        <h1>Score is:{this.state.score}</h1>
        <button onClick={this.increaseScore}>increaseScore</button>
        </div>
        )
    }
}

export default StatePattarns