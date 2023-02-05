import axios from "axios";
import React, {useState} from "react";


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

  const [pokemon, setPokemon] = useState([]);

  const getPokeman = async () => {
    try {
      const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* {pokemon.response.map((pokemon) => {
        return <p>{pokemon.name}</p>;
      })} */}
      <button onClick={getPokeman}>Pokemon</button>
    </>
  );
};

export default Pokemon;
