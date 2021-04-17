import React from 'react';
import './Pokemon.css';
import {Link} from 'react-router-dom';

class Pokemon extends React.Component{

  
  render(){
    return(
     <div id="pokemonBox">
       <div id = "imageBox">
          <img src = {this.props.pkmn.imgSrc} alt = {this.props.pkmn.name}/>
       </div>
       <div>
         <p>#{this.props.pkmn.dexNo}</p>
         <h3>{this.props.pkmn.name}</h3>
       </div>
       <div id="typeDisplayBox">
          <Link 
            to={`/${this.props.pkmn.type1}`} 
            className ={this.props.pkmn.type1}
          >
          {this.props.pkmn.type1}
          </Link>
          {
            this.props.pkmn.type2 !== 'NA' ?

            <Link 
            to={`/${this.props.pkmn.type2}`} 
            className ={this.props.pkmn.type2}
            >
            {this.props.pkmn.type2}
            </Link>
            :
              ''
          }
          
       </div>
     </div>
    );
  }

}

export default Pokemon;