import axios from "axios";
import React, {useState, useEffect} from "react";


const Pokemon = () => {
  //     try{
  //   let pokemon = axios
  //     .get("https://pokeapi.co/api/v2/pokemon")
  //     .then((response) => {
  //       console.log(response.data);
  //     });
  // } catch (err) {
  //     console.log(err)
  // }

  const [pokemon, setPokemon] = useState();
  
  const getPokemon = async () => {
    try {
      const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
      return data.results;
    } catch (err) {
      console.log(err);
    }
  };

useEffect(() => {
  (async () => {
    const pokemonData = await getPokemon();
    setPokemon((pokemon) => [...pokemonData])
  })();
  return () => {};
  }, [])

  console.log('Pokemon on state', pokemon);
  return (
    <>
      {/* {pokemon.response.map((pokemon) => {
        return <p>{pokemon.name}</p>;
      })} */}
      <button onClick={getPokemon}>Pokemon</button>
      <div>
        {pokemon.map((pokemon, index) => {
          return <p key={index}>pokemon's name: {pokemon.name}</p>
        })}
      </div>
    </>
  );
};

export default Pokemon;
