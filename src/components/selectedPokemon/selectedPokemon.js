import React, {useEffect, useState, useCallback} from "react";
import { useParams } from "react-router";
import { Tabs, Badge } from 'antd-mobile';
import { Image, Typography } from 'antd';
import PokemonBaseStats from "./pokemonBaseStats"
import {numberText} from "../../utils";
import Loading from "../loding/loading"
import PokemonEvolutionTree from "../pokemonEvolutionTree/pokemonEvolutionTree"


const { Paragraph } = Typography;


const SelectedPokemon = () => {


 let { number } = useParams();
const [pokemon, setPokemon] = useState([]);
const [loading, setLoading] = useState(true);

const tabs = [
  { title: 'About', sub: '1' },
  { title: 'Base Stats', sub: '2' },
  { title: 'Evolution', sub: '3' },
  { title: 'Moves', sub: '4' },
];

const getPokemon = useCallback(async () => {
    try {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
      let responsePokemon = await response.json();
      setPokemon(responsePokemon);
      setLoading(false);
    } catch (err) {
      console.log("err", err);
    }
  }, [number]);

    useEffect(() => {
        getPokemon();
      }, [getPokemon]);


    if(loading) return <Loading/>
    
    return (
      <div className={pokemon.types[0].type.name} style={{paddingTop:'9rem'}}>
        <p className='pokemonTitle'>
          {pokemon.name}
        </p>
        <p className='pokemonSubtitle'>
          #{numberText(number)}
        </p>
        <Paragraph style={{textAlign: 'left', paddingLeft: '1rem', marginBottom: '0'}}>
        {
          pokemon.types.map(element => <Badge text={element.type.name} style={{ marginLeft: 12, backgroundColor: 'rgba(255,255,255,0.35)', textTransform: 'capitalize',
          padding: '0 1rem'}}  />)
        }
        </Paragraph>
      <Image
      className="pkmn-background"
      width={300}
      src={`https://www.cpokemon.com/pokes/home/${number}.png`}
    />
        <Tabs tabs={tabs}
          initialPage={1}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            
          </div>
          <div style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', padding:'2rem' }}>
            <PokemonBaseStats stats={pokemon.stats}/>
          </div>
          <div style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#eee' }}>
            <PokemonEvolutionTree url={pokemon.species.url}/>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            Content of fouth tab
          </div>
        </Tabs>
      </div>
    );
          

}

export default SelectedPokemon;
