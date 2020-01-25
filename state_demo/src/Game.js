import React, {Component} from 'react';
class Game extends Component{
    
    constructor(props){
        super(props)
        this.state={
            score:0,
            gameIsOver: false
        }
    }
    render(){
        return(
            <div>
    <h1>Score Is : {this.state.score}</h1>
            </div>
        )
    }
}

export default Game;