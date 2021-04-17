import './App.css';
import Pokemon from './Pokemon.js';
import React from 'react';
import {Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';

class App extends React.Component {

  render()
  {

    return (
      <main>
        <h1>Gen 1 Pokedex</h1>
        <br/>
        <div id = "typeBox">
          {
            this.props.typeList.map((typing) => {
              return(
                <Link 
                  to={`/${typing}`} 
                  className ={typing}
                >
                  {typing}
                </Link>
              );
            })
          }
        </div>

        <div id = "displayPokemon">
          {
              this.props.kantoDex.map((pokemon) => {
                return(
                  <>
                    <Route path= {`/${pokemon.type1}`}>
                        <Pokemon
                        pkmn = {pokemon}
                        />
                      </Route>
                      <Route path= {`/${pokemon.type2}`}>
                        <Pokemon
                          pkmn = {pokemon}
                          />
                      </Route>
                  </>
                );
              })
             
          }
          <Route exact path ={'/'}>
            {
              this.props.kantoDex.map((pokemon) => {
                return(
                  <Pokemon
                    pkmn = {pokemon}
                  />
                );
              })
            }
          </Route>  
        </div>
      </main>
      
    );
  }
  
}

const mapStateToProps = state =>
{
  return {
    ...state
  }
}

export default connect(mapStateToProps)(App);