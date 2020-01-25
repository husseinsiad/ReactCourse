import React,{Component} from 'react'
import  './Random.css'
class Random extends Component{
    constructor(props){
        super(props)
        this.state={num:1}
        console.log(this.props.maxNum)
        this.genNumber=this.genNumber.bind(this)
    }

    genNumber(){
        let rnumber=Math.floor(Math.random() * this.props.maxNum)
        this.setState({num:rnumber})
    }

    render(){
        let winNum=(this.state.num===7)
      
        return(
        <div>
    <h1>Number is: {this.state.num}</h1>
        <h1>{winNum?'Win!!!' :'notWin!!'}
            
        </h1>
        <button onClick={this.genNumber} >RandomNumber</button>
        </div>
        )
    }
}

export default Random