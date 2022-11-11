import React from 'react';
import PropTypes from 'prop-types'; 

function Title() {

    return (  
          <div className='home-title-container'>
            <h1 className='home-title'>Bonjour "Name à changer"</h1>
            <span className='home-title-msg'>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
          </div>
    );
}

export default Title;


Title.propTypes = {
	name: PropTypes.string,
};