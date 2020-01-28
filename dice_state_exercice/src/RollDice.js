import React, {Component} from 'react'
import Die from './Die'
import './RollDice.css';

class RollDice extends Component{
    static defaultProps = {
        sides:["one","two","three","four","five","six"]
    }
    constructor(props){
        super(props)
        this.state={die1:"one",die2:"three",rolling:false}
        this.rollDice=this.rollDice.bind(this)
    }
    rollDice(){
       
        let newDie1=this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        let newDie2=this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        this.setState({die1:newDie1,die2:newDie2,rolling:true})
        setTimeout(()=>{
            this.setState({rolling:false})
        },1000)
    }
    render(){
        
        return(
            <div>
            <div>
            <Die face={this.state.die1}/>
            <Die face={this.state.die2}/>
            </div >
            <div className="RollDice"> <button  onClick={this.rollDice}  className="btn btn-secondary RollDice" disabled={this.state.rolling}>
             {this.state.rolling?'Rolling...':'RollDice!'}  
                </button>
            </div>
            </div>
            
        )
    }
}

export default RollDice