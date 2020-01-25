import React,{Component} from 'react';
//  import   './Pokecard.css'
 

const POKE_API='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
class Pokecard extends Component{
     
           render(){
             
               let imageUrl=`${POKE_API}${this.props.id}.png`;
                return(
                <div className="Pokecard">
                <h4 className="Pokecard-title">{this.props.id}</h4>
                <img src={imageUrl} alt={this.props.name} />
                <div className="Pokecard-data">Type: {this.props.type}</div>
                <div className="Pokecard-data">Exp: {this.props.exp}</div>
                 
                </div>
            )
       }  
       
    }
export default Pokecard