import React from "react";
import { Link} from "react-router-dom";
import ImageContainer from '../../imageContainer/imageContainer';
import {numberText} from "../../../utils"


const PokemonCard = ({name,number}) => {

return (
    <Link to={`/pokemon/${number}`}>
        <div
            style={{margin: '1rem', backgroundColor: 'white', display: 'flex', borderRadius: '2.5rem', padding: '1rem'}}
         >
             <div className='pkm-txt'>
        <div>{name}</div>
        <div>#{numberText(number)}</div>
        </div>
        <div style={{width: '40%', margin:'auto' }}>
        <ImageContainer
                src={`https://www.cpokemon.com/pokes/home/${number}.png`}
                thumb={`https://www.cpokemon.com/pokes/home/${number}.png`}
                height={300}
                width={300}
                alt={name}
              />
       </div>
    </div>
  </Link>
  );
}

export default PokemonCard;
