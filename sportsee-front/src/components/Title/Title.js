import React from 'react';
import './title.scss';

function Title(props) {

    return (  
          <div className='home-title-container'>
            <h1 className='home-title'>
              <span>Bonjour </span><span className='home-title--firstname'>{props.firstname}</span>
            </h1>
            <span className='home-title-msg'>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
          </div>
    );
}

export default Title;