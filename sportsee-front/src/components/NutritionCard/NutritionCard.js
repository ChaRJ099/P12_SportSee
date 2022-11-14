import './nutritionCard.scss'

function NutritionCard(props) {

    return (  
    <div className='card-nutrition'>
        <div className={`card-nutrition-icon-container card-nutrition-icon-container--${props.text}`}>
            <img className='card-nutrition-icon' src={props.icon} alt='calories icon'/>
        </div>
        <div className='card-nutrition-text-container'>
            <span className='card-nutrition-text-quantity'>{props.quantity}</span>
            <span className='card-nutrition-text-type'>{props.text}</span>
        </div>
    </div> );
}

export default NutritionCard;