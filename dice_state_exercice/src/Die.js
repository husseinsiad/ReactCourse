import React,{Component} from 'react'
import './Die.css'
// import RollDice from './RollDice'

class Die extends Component{
    render(){
        return(
            
         <i className={`fas fa-dice-${this.props.face}`}/>
           
        )
    }
}

export default Die