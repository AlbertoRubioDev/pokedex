import React, {useEffect, useState, useCallback} from "react";
import Loading from "../loding/loading";
import PokemonChain from "./pokemonChain/pokemonChain";


const PokemonEvolutionTree = ({url}) => {

const [chain, setChain] = useState();
const [loading, setLoading] = useState(true);


const getTree = useCallback(async () => {
    try {
    //debugger;
      let response = await fetch(url);
      let responseTree = await response.json();
      let response2 = await fetch(responseTree.evolution_chain.url);
      let responseTree2 = await response2.json();
      setChain(responseTree2);
      setLoading(false);
    } catch (err) {
      console.log("err", err);
    }
  }, [url]);

    useEffect(() => {
        getTree();
      }, [getTree]);



    if(loading) return <Loading/>
    
    return (
        <PokemonChain chain={chain.chain}/>
            );
          

}

export default PokemonEvolutionTree;
