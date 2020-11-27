import React from "react";
import PokemonCard from "../../pokemonList/pokemonCard"

const PokemonChain = ({chain, depth = 0}) => {
    //debugger;

    if (!chain.evolves_to || !chain.evolves_to.length) {
      console.log(chain);
        if(chain.species)
        return <div  style={{ paddingLeft: depth * 20 }} >            
        <PokemonCard key={chain.species.name} number={chain.species.url.split("/")[6]} url={chain.species.url} name={chain.species.name}/>
        </div>
        return null;
      }
    
      return (
          <>
          {
        chain.evolves_to.map(item => (
            <React.Fragment key={chain.species.name}>
           <div  style={{ paddingLeft: depth * 20 }} >            
              <PokemonCard key={chain.species.name} number={chain.species.url.split("/")[6]} url={chain.species.url} name={chain.species.name}/>
            </div>
          <PokemonChain chain={item} depth={depth + 1}/>
        </React.Fragment>
      ))
        }
      </>
      )

}

export default PokemonChain;
