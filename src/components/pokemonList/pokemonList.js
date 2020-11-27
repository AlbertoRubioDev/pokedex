import React, {useEffect, useState, useCallback} from "react";
import PokemonCard from "./pokemonCard";
import { Row, Col } from 'antd';
import Loading from '../loding/loading'

const PokemonList = () => {

const [pokemonList, setPokemonList] = useState([]);
const [loading, setLoading] = useState(true);
const [nextPage, setNextPage] = useState('');
const [prevPage, setPrevPage] = useState('');


const getList = useCallback(async (newUrl) => {
    let url = `https://pokeapi.co/api/v2/pokemon/?limit=150`;
    if(newUrl){
      url = newUrl;
    }
    try {
      setLoading(true);
      window.scrollTo(0, 0);
      let response = await fetch(url);
      let responseList = await response.json();
      setPokemonList(responseList.results);
      setLoading(false);
      setNextPage(responseList.next)
      setPrevPage(responseList.previous)
    } catch (err) {
      console.log("err", err);
    }
  }, []);

    useEffect(() => {
        getList();
      }, [getList]);


    if(loading) return <Loading />
    return (
      <div style={{paddingTop: "10rem"}}>
      <p className='pokemonTitle' style={{color: '#000'}}>
      Pokedex
    </p>
      <Row>

    {
      
      pokemonList.map((pokemon) => 
        <Col span={12} >
                <PokemonCard key={pokemon.name} number={pokemon.url.split("/")[6]} url={pokemon.url} name={pokemon.name}/>
           </Col>
           )
    }
  
    </Row>
    {
      prevPage ? <button onClick={() => getList(prevPage)}>back</button> : 'ño'
    }
      {
    nextPage ? <button onClick={() => getList(nextPage)}>next</button> : 'ño'
    }
</div>
  );
}

export default PokemonList;
