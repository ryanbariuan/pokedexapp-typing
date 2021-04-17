import {kantoPokemon, pkmnType} from './KantoPokemonDex.js';

const initialState = 
{
  kantoDex: kantoPokemon,
  typeList: pkmnType,
}

const reducer = (state = initialState, action) =>
{
  return state;
}

export default reducer;